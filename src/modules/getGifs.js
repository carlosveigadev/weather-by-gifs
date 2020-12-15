/* eslint import/no-cycle: [2, { ignoreExternal: true }] */
import openModalError from './openModalError';

async function getGifs(dataStatus) {
  let response;
  let gif;
  try {
    response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=QswEirySAX3cPIt29dYs7BzkO919Pivk&q=${dataStatus}`,
      {
        mode: 'cors',
      });
    gif = await response.json();
    return gif;
  } catch (error) {
    openModalError();
  }
  return gif.data;
}

export default getGifs;