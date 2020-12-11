import getRandomElements from './getRandomElements';

function setBackground(data) {
  let mainDiv = document.getElementById('background');
  while(mainDiv.firstChild){
    mainDiv.removeChild(mainDiv.firstChild);
  }
  let dataRandom = getRandomElements(data);
  dataRandom.forEach(element => {
    console.log(element)
    let img = document.createElement('img');
    img.className += 'object-fill w-full h-52';
    img.setAttribute('src', `${element.images.downsized.url}`);
    mainDiv.appendChild(img);
  });
}

export default setBackground;