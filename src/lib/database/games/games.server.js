import { Datastore } from '@google-cloud/datastore';

const COLLECTION_NAME = 'games';

export async function upsert(games) {
	const db = new Datastore();
	const mapToDatastore = games.map((el) => {
		return {
			key: db.key([
				COLLECTION_NAME,
				el.teams.home.name + '_' + el.teams.away.name.replace(' ', '_')
			]),
			data: el
		};
	});
	await db.upsert(mapToDatastore);
}
