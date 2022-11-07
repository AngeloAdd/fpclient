export default async (uri) => {
  const toJson = await client(uri);

  return {
    response: toJson?.response,
    total: toJson?.paging?.total
  };
};
