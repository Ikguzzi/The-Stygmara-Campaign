import { defineDb, defineTable, column, NOW } from 'astro:db';

// const example = defineTable({
//   columns: {},
// });

const Battlelog = defineTable({
  columns: {
    battleID: column.number({ primaryKey: true }),
    name: column.text(),
    loc: column.text(), // Kanske koppla med en ny tabell med locations?
    battleATKID: column.number({ references: () => Forces.columns.forceID }),
    battleDEFID: column.number({ references: () => Forces.columns.forceID }),
    type: column.text(),
    date: column.number(),
    //date: column.date({ default: NOW }),
    result: column.text(),
    notes: column.text({ optional: true }),
  },
});

const Factions = defineTable({
  columns: {
    factionID: column.number({ primaryKey: true }),
    name: column.text(),
    victories: column.number(),
    defeats: column.number({ optional: true }), // maybe remove idk we see
    casualties: column.number({ optional: true }), // join of Forces.deaths?
  },
});

const Forces = defineTable({
  columns: {
    forceID: column.number({ primaryKey: true }),
    name: column.text({ unique: true }),
    metaFaction: column.text(),
    //crusadeFaction: column.number
    leader: column.text({ optional: true }),
    battletally: column.number(),
    victories: column.number(),
    defeats: column.number(), // Should probably be calculated from battletally - victories
    kills: column.number(),
    deaths: column.number(),
  },
});

const Phases = defineTable({
  columns: {
    phaseID: column.number(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Battlelog, Factions, Forces, Phases },
});
