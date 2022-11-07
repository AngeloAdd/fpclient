export default async (uri) => {
	const toJson = await client(uri);

	return toJson?.response;
};
