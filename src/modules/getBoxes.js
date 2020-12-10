async function getBoxes(dataStatus) {
  let response;
  let gif;
  try {
    response = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=QswEirySAX3cPIt29dYs7BzkO919Pivk&q=${dataStatus}`,
      {
        mode: 'cors',
      });
    gif = await response.json();
    return gif
    // return data;
  } catch (error) {
    console.log(error);
  }
  return gif.data;
}

export default getBoxes;