import { Datastore } from '@google-cloud/datastore';

const COLLECTION_NAME = 'teams';

export async function upsert(teams) {
	const db = new Datastore();
	const mapToDatastore = teams.map((el) => {
		return {
			key: db.key([COLLECTION_NAME, el.name]),
			data: el
		};
	});
	await db.upsert(mapToDatastore);
}
