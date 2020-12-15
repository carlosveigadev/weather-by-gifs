import getRandomElements from './getRandomElements';

const setBackground = (data) => {
  const mainDiv = document.getElementById('background');
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }
  const dataRandom = getRandomElements(data);
  dataRandom.forEach(element => {
    const img = document.createElement('img');
    img.className += 'object-fill w-full h-52';
    img.setAttribute('src', `${element.images.downsized.url}`);
    mainDiv.appendChild(img);
  });
};

export default setBackground;