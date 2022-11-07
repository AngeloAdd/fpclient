import {upsert} from '$lib/database/players/players.server.js';
import dashboardClientWithPagination from '$lib/dashboardClient/clientWithPagination.server.js';

/** @type {import('./$types').RequestHandler} */
export async function POST() {
	let players = [];
	let max;
	let current = 1;
	do {
		const { response, total } = await dashboardClientWithPagination(
			'players?league=1&season=2022&page=' + current
		);
		if (response === null) {
			new Response('External System Unavailable', { status: 424 });
		}

		max = total;
		const mapPlayers = response.map((el) => {
			return el.player;
		});
		players = [...players, ...mapPlayers];
		++current;
	} while (current <= max);

	try {
		await upsert(players);
	} catch (e) {
		console.log('upsert', e);
		return new Response('Server Error', { status: 500 });
	}

	return new Response('Job done', { status: 201 });
}
