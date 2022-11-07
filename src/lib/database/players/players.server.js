import {Datastore} from '@google-cloud/datastore'

const COLLECTION_NAME = 'players';

export async function upsert(players) {
	const db = new Datastore();
	const mapToDatastore = players.map((el) => {
		return {
			key: db.key([COLLECTION_NAME, el.id + '_' + el.name.replace(' ', '_')]),
			data: el
		};
	});
	const transaction = db.transaction();
	await transaction.run();
	try {
		transaction.upsert(mapToDatastore);
		return await transaction.commit();
	} catch (e) {
		await transaction.rollback();
		throw e;
	}
}
