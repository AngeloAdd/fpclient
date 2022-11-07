import { upsert } from '$lib/database/games/games.server.js';
import dashboardClient from '$lib/dashboardClient/dashboardClient.server.js';

/** @type {import('./$types').RequestHandler} */
export async function POST() {
	const games = await dashboardClient('fixtures?league=1&season=2022');
	if (games === null) {
		new Response('External System Unavailable', { status: 424 });
	}

	try {
		await upsert(games);
	} catch (e) {
		console.log('upsert', e);
		new Response('Server Error', { status: 500 });
	}

	return new Response('Job done', { status: 201 });
}
