export const prerender = true;

export function load() {
	const user = {
		name: 'Filippo'
	};

	const nextGame = {
		first: {
			name: 'Quatar'
		},
		second: {
			name: 'Turchia'
		},
		startDate: '2022-10-31 15:00'
	};

	return {
		user,
		nextGame
	};
}
