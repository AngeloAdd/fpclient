export const actions = {
	default: async ({ request }) => {
		const body = await request.formData();
		console.log(body.get('winner'));
	}
};
