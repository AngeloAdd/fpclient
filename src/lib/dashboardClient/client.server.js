import {SECRET_FOOTBALL_API_KEY} from '$env/static/private'

export default async (uri) => {
  function isResponseNotValid(toJson) {
    if (typeof toJson?.message === 'string') {
      console.log(toJson.message);
      return true;
    }

    if (typeof toJson?.response === 'undefined' || toJson.response.length === 0) {
      return true;
    }

    if (typeof toJson?.errors === 'undefined' || toJson.errors.length !== 0) {
      console.log(JSON.stringify(toJson.errors));
      return true;
    }

    return false;
  }

  try {
    const response = await fetch(`https://v3.football.api-sports.io/${uri}`, {
      method: 'GET',
      headers: { 'x-apisports-key': SECRET_FOOTBALL_API_KEY },
      redirect: 'follow'
    });
    const toJson = await response.json();

    if (isResponseNotValid(toJson)) {
      return null;
    }

    return toJson;
  } catch (e) {
    console.log(e);

    return null;
  }
};
