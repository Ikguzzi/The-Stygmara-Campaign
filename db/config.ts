import {column, defineDb, defineTable, NOW} from 'astro:db';

// const example = defineTable({
//   columns: {},
// });

// ====== Static tables ======
// A roster is one army list (e.g. "[2000] Mech Guard V3")
const Rosters = defineTable({
    columns: {
        id:               column.text({ primaryKey: true }),
        name:             column.text(),
        faction:          column.text(),        // e.g. "Imperium - Astra Militarum"
        detachment:       column.text(),        // e.g. "Combined Arms"
        battleSize:       column.text(),        // e.g. "Strike Force (2000 Point limit)"
        pointsTotal:      column.number(),      // actual points used
        pointsLimit:      column.number(),      // points cap
        gameSystem:       column.text(),        // e.g. "Warhammer 40,000 10th Edition"
        createdAt:        column.date(),
    },
});

const Players = defineTable({
    columns: {
        id:                 column.text({ primaryKey: true }),
        name:               column.text(),
        primaryFaction:     column.text({ default: "Non-aligned" }), // Imperium, Chaos, Tyranids etc
        colour:             column.text({ default: '#ffffff' }),
        totalWins:          column.number({ default: 0 }),
        createdAt:          column.date({ default: NOW }),
    },
});
const Alignments = defineTable({
    columns: {
        id:               column.text({ primaryKey: true }),
        name:               column.text(),
    }
})
const Factions = defineTable({
    columns: {
        id:                 column.text({ primaryKey: true}),
        factionAlignment:   column.text({references: () => Alignments.columns.id }),
        name:               column.text(),
        totalBattles:       column.number({default: 0}),
        totalWins:          column.number({default: 0}),
    }
})
const Sectors = defineTable({
    columns: {
        id:                 column.text({ primaryKey: true }),
        name:                column.text(),
        warState:            column.text({default: "Passive"}),
        ownedBy:            column.text({references: () => Alignments.columns.id }),
    }
})
const Planets = defineTable({
    columns: {
        id:               column.text({ primaryKey: true }),
        sectorID:            column.text({ references: () => Sectors.columns.id }),
        name:                column.text(),
        environment:        column.text({optional: true}),
        ownedBy:            column.text({references: () => Alignments.columns.id}),
        warState:            column.text({default: "Passive"}),
    }
})
const Locations = defineTable({
    columns: {
        id:               column.text({ primaryKey: true }),
        planetID:            column.text({ references: () => Planets.columns.id }),
        locationType:       column.text(),
    }
})
// Each unit inside a roster (Infantry, Vehicle, Character, etc.)
const Units = defineTable({
    columns: {
        id:                 column.text({ primaryKey: true }),
        rosterId:           column.text({ references: () => Rosters.columns.id }),
        name:               column.text(),        // e.g. "Cadian Castellan"
        nickname:           column.text({ optional: true }),
        type:               column.text(),        // e.g. "unit", "upgrade"
        unitType:           column.text({ optional: true }), // e.g. "Infantry", "Vehicle", "Character"
        points:             column.number({ optional: true }),
        number:             column.number(),      // how many models
        // === Core stats ===
        move:               column.text({ optional: true }),
        toughness:          column.number({ optional: true }),
        save:               column.text({ optional: true }),
        wounds:             column.number({ optional: true }),
        leadership:         column.text({ optional: true }),
        objectiveControl:   column.number({ optional: true }),
    },
});
// Weapons belonging to a unit
const Weapons = defineTable({
    columns: {
        id:                 column.text({ primaryKey: true }),
        unitId:             column.text({ references: () => Units.columns.id }),
        name:               column.text(),        // e.g. "Laspistol"
        weaponType:         column.text(),        // e.g. "Ranged", "Melee"
        range:              column.text({ optional: true }),
        attacks:            column.text({ optional: true }),
        skill:              column.text({ optional: true }),
        strength:           column.number({ optional: true }),
        armorPen:           column.number({ optional: true }),
        damage:             column.text({ optional: true }),
        abilities:          column.text({ optional: true }), // comma-separated keywords
    },
});
// Game results — track wins/losses per roster
const GameResults = defineTable({
    columns: {
        id:             column.text({ primaryKey: true }),
        attackerId:       column.text({ references: () => Rosters.columns.id }),
        defenderId:     column.text({ references: () => Rosters.columns.id, optional: true }), // optional if opponent isn't in the campaign
        missionName:    column.text({ default: "Undisclosed"}),
        mission:        column.text({ optional: true }),
        location:       column.text({ optional: true }),
        result:         column.text(),                   // "win", "loss", "draw"
        attackerScore:          column.number({ default: 0 }),
        defenderScore:  column.number({ default: 0 }),
        notes:          column.text({ optional: true }), // battle report / narrative
        playedAt:       column.date({ default: NOW }),
    },
});
const GameUnitLog = defineTable({
    columns: {
        id:         column.text({ primaryKey: true }),
        gameId:     column.text({ references: () => GameResults.columns.id }),
        unitId:     column.text({ references: () => Units.columns.id }),
        kills:      column.number({ default: 0 }),
        deaths:     column.number({ default: 0 }),
        xpGained:   column.number({ default: 0 }),
        mtg:         column.boolean({ default: false }),
        notes:      column.text({ optional: true }), // e.g. "got a battle scar this game"
    },
})
// ====== Flexible tables ======
const UnitStats = defineTable({
    columns: {
        id:                 column.text({ primaryKey: true, autoIncrement: true }),
        unitId:             column.text({ references: () => Units.columns.id }),
        name:               column.text(),
        xp:                 column.number({ default: 0 }),
        crusadePoints:      column.number({ optional: true }),
        kills:              column.number({ default: 0 }),
        battlesPlayed:      column.number({ optional: true }),
        battlesSurvived:    column.number({ optional: true }),
        deathsPlayed:       column.number({ optional: true }),
        battleHonors:       column.text({ optional: true }),
        battleScars:        column.text({ optional: true }),
    }
})
const ForceStats = defineTable({
    columns: {
        id:                 column.text({ primaryKey: true, autoIncrement: true }),
        rosterID:           column.text({ references: () => Rosters.columns.id }),
        supplyLimit:        column.number(),
        supplyUsed:         column.number(),
        crusadePoints:      column.number({ optional: true }),
        battlesPlayed:      column.number({ optional: true }),
        battleVictories:    column.number({ optional: true }),
        requisitionPoints:  column.number({ optional: true }),
        totalKills:         column.number({ optional: true }),
        totalDeaths:        column.number({ optional: true }),
        createdAt:          column.date(),
        lastUpdatedAt:      column.date(),
    }
})
const Phases = defineTable({
    columns: {
        phaseID: column.number(),
    },
});

// https://astro.build/db/config
export default defineDb({
    tables: {
        Rosters,
        Players, 
        Units, 
        Weapons, 
        GameResults,
        GameUnitLog,
        UnitStats, 
        Phases, 
        Factions,
        Alignments
    },
});
