import { db, Rosters, Units, Weapons, Factions, Alignments } from 'astro:db';
import { readFileSync } from 'fs';
import { randomUUID } from 'crypto';
import rosterData from '../json/[2000] Mech Guard V3_.json';

await db.delete(Weapons);
await db.delete(Units);
await db.delete(Rosters);
await db.delete(Factions);
await db.delete(Alignments);

// ---- helpers ----------------------------------------------------------------

function getStat(characteristics: any[], name: string): string | undefined {
    return characteristics?.find((c: any) => c.name === name)?.$text;
}

function getPoints(selection: any): number {
    return selection?.costs?.find((c: any) => c.name === 'pts')?.value ?? 0;
}

// Collect weapon profiles from a selection and all nested selections
function collectWeapons(selection: any): any[] {
    const weapons: any[] = [];

    const directProfiles = selection.profiles ?? [];
    for (const p of directProfiles) {
        if (p.typeName === 'Ranged Weapons' || p.typeName === 'Melee Weapons') {
            weapons.push(p);
        }
    }

    for (const sub of selection.selections ?? []) {
        weapons.push(...collectWeapons(sub));
    }

    return weapons;
}

// ---- main -------------------------------------------------------------------

export default async function seed() {
    // Update this path to point to your actual JSON file
    //const filePath = "json/[2000] Mech Guard V3_.json";
    //const raw = readFileSync(filePath, 'utf-8');
    //const data = JSON.parse(raw);
    const data = rosterData;
    const roster = data.roster;
    const force = roster.forces?.[0];

    if (!force) {
        console.error('No forces found in roster.');
        return;
    }

    // --- Roster -----------------------------------------------------------------
    const rosterId = randomUUID();

    const detachmentSelection = force.selections?.find(
        (s: any) => s.name === 'Detachment'
    );
    const detachmentName =
        detachmentSelection?.selections?.[0]?.name ?? 'Unknown';

    const battleSizeSelection = force.selections?.find(
        (s: any) => s.name === 'Battle Size'
    );
    const battleSizeName =
        battleSizeSelection?.selections?.[0]?.name ?? 'Unknown';

    await db.insert(Rosters).values({
        id:           rosterId,
        name:         roster.name ?? 'Unnamed Roster',
        faction:      force.catalogueName ?? 'Unknown',
        detachment:   detachmentName,
        battleSize:   battleSizeName,
        pointsTotal:  roster.costs?.find((c: any) => c.name === 'pts')?.value ?? 0,
        pointsLimit:  roster.costLimits?.find((c: any) => c.name === 'pts')?.value ?? 0,
        gameSystem:   roster.gameSystemName ?? 'Unknown',
        createdAt:    new Date(),
    });

    console.log(`✔ Inserted roster: ${roster.name}`);

    // --- Units & Weapons --------------------------------------------------------
    
    const unitSelections = force.selections ?? [];

    for (const sel of unitSelections) {
        const unitId = randomUUID();

        // Find the Unit profile for stats
        const unitProfile = sel.profiles?.find((p: any) => p.typeName === 'Unit');
        const chars = unitProfile?.characteristics ?? [];

        // Determine primary category (Infantry, Vehicle, etc.)
        const primaryCategory = sel.categories?.find((c: any) => c.primary)?.name ?? null;

        await db.insert(Units).values({
            id:               unitId,
            rosterId:         rosterId,
            name:             sel.name,
            nickname:         sel.name,
            type:             sel.type ?? 'unit',
            unitType:         primaryCategory,
            points:           getPoints(sel),
            number:           sel.number ?? 1,
            move:             getStat(chars, 'M'),
            toughness:        getStat(chars, 'T') ? parseInt(getStat(chars, 'T')!) : undefined,
            save:             getStat(chars, 'SV'),
            wounds:           getStat(chars, 'W') ? parseInt(getStat(chars, 'W')!) : undefined,
            leadership:       getStat(chars, 'LD'),
            objectiveControl: getStat(chars, 'OC') ? parseInt(getStat(chars, 'OC')!) : undefined,
        });

        // Collect and insert weapons
        const weapons = collectWeapons(sel);
        for (const wp of weapons) {
            const wChars = wp.characteristics ?? [];
            await db.insert(Weapons).values({
                id:         randomUUID(),
                unitId:     unitId,
                name:       wp.name,
                weaponType: wp.typeName === 'Ranged Weapons' ? 'Ranged' : 'Melee',
                range:      getStat(wChars, 'Range'),
                attacks:    getStat(wChars, 'A'),
                skill:      getStat(wChars, 'BS') ?? getStat(wChars, 'WS'),
                strength:   getStat(wChars, 'S') ? parseInt(getStat(wChars, 'S')!) : undefined,
                armorPen:   getStat(wChars, 'AP') ? parseInt(getStat(wChars, 'AP')!) : undefined,
                damage:     getStat(wChars, 'D'),
                abilities:  getStat(wChars, 'Keywords'),
            });
        }

        console.log(`✔ Inserted unit: ${sel.name} (${weapons.length} weapons)`);
    }

    // === Factions and Alignments ===

    const alignmentId = randomUUID();
    await db.insert(Alignments).values({
        id:   alignmentId,
        name: 'Imperium',
    });

    await db.insert(Factions).values({
        id:               randomUUID(),
        factionAlignment: alignmentId, // reuse the same id
        name:             'Galomar testies',
    });
    
    console.log('\n✅ Seeding complete!');
}