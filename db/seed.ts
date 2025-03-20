import { db, Battlelog, Factions, Forces, Phases } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.delete(Forces);
  await db.delete(Battlelog);

  await db.insert(Forces).values([
    { forceID: 0, name: "262nd Galomar TESTERS 'Galomar TESTIES'", metaFaction: 'Astra Militarum', leader: 'Tester van der Heap', battletally: 11, victories: 1, defeats: 10, kills: 60, deaths: 35 },
    { forceID: 1, name: 'Galomarian Streetfighters', metaFaction: 'Astra Militarum', leader: 'Mauger van der Heap', battletally: 15, victories: 8, defeats: 7, kills: 108, deaths: 152 },
    { forceID: 2, name: 'Red Faction', metaFaction: 'Astra ', leader: 'Tester van der Heap', battletally: 11, victories: 1, defeats: 10, kills: 60, deaths: 35 },
    { forceID: 3, name: 'Blue Faction', metaFaction: ' Militarum', leader: 'Tester van der Heap', battletally: 11, victories: 1, defeats: 10, kills: 60, deaths: 35 },
  ]);

  await db.insert(Battlelog).values([
    { battleID: 0, name: 'Test', loc: 'test', battleATKID: 2, battleDEFID: 1, type: '', date: 2222, result: 'Win', notes: 'not' },
    { battleID: 1, name: 'Battle of Jequira', loc: 'test', battleATKID: 1, battleDEFID: 2, type: 'Test', date: 2222, result: 'Win', notes: 'not' },
  ]);
}
