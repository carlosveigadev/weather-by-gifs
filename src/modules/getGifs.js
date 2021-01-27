import openModalError from './openModalError';

async function getGifs(dataStatus) {
  let response;
  let gif;
  dataStatus = dataStatus.split(' ').slice(0, 2).join(' ');
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