import db from './config';

async function inspectDB() {
  try {
    // Fetch all Battles with their Attacker and Defender details
    const battles = await db.select({
      from: 'Battlelog',
      include: {
        attacker: { from: 'Forces', where: { forceID: 'Battlelog.attackerID' } },
        defender: { from: 'Forces', where: { forceID: 'Battlelog.defenderID' } },
      },
    });

    console.log('Battles with Related Forces:', battles);

    // Fetch all Forces with their related Faction
    const forces = await db.select({
      from: 'Forces',
      include: {
        faction: { from: 'Factions', where: { factionID: 'Forces.crusadeFactionID' } },
      },
    });

    console.log('Forces with Related Factions:', forces);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

inspectDB();
