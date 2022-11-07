import { upsert } from '$lib/database/teams/teams.server.js';
import dashboardClient from '$lib/dashboardClient/dashboardClient.server.js';

/** @type {import('./$types').RequestHandler} */
export async function POST() {
	const response = await dashboardClient('teams?league=1&season=2022');
	if (response === null) {
		new Response('External System Unavailable', { status: 424 });
	}
	const teams = response.map((teamObj) => teamObj.team);

	try {
		await upsert(teams);
	} catch (e) {
		console.log('upsert', e);
		new Response('Server Error', { status: 500 });
	}

	return new Response('Job done', { status: 201 });
}
