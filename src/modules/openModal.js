import checkUvIndex from './checkUvIndex';
import getGifs from './getGifs';
import setBackground from './setBackground';

function openModal(data) {
  let myModal = document.createElement('div');
  myModal.setAttribute('id', 'myModal');
  myModal.className += 'modal';
  document.body.appendChild(myModal);
  let modalContent = document.createElement('div');
  modalContent.className += 'modal-content';
  myModal.appendChild(modalContent);
  let closeButton = document.createElement('span');
  closeButton.className += 'close';
  closeButton.innerHTML = '&times;';
  modalContent.appendChild(closeButton);
  let items = document.createElement('div');
  modalContent.appendChild(items);
  let uList = document.createElement('ul')
  uList.className += 'uList'
  items.appendChild(uList);
  let avgTemperature = document.createElement('li');
  avgTemperature.setAttribute('id', 'avgTemperature');
  let avgTemperatureIcon = document.createElement('i');
  avgTemperature.appendChild(avgTemperatureIcon);
  avgTemperatureIcon.className += 'fas fa-thermometer-half';
  avgTemperature.appendChild(document.createTextNode(`${data.avgtemp_c}°C`));
  uList.appendChild(avgTemperature);
  let maxTemperature = document.createElement('li'); 
  maxTemperature.setAttribute('id', 'maxTemperature');
  let maxTemperatureIcon = document.createElement('i');
  maxTemperature.appendChild(maxTemperatureIcon);
  maxTemperatureIcon.className += 'fas fa-thermometer-full';
  maxTemperature.appendChild(document.createTextNode(`${data.maxtemp_c}°C`));
  uList.appendChild(maxTemperature);
  let minTemperature = document.createElement('li');
  minTemperature.setAttribute('id', 'minTemperature');
  let minTemperatureIcon = document.createElement('i');
  minTemperature.appendChild(minTemperatureIcon);
  minTemperatureIcon.className += 'fas fa-thermometer-empty';
  minTemperature.appendChild(document.createTextNode(`${data.mintemp_c}°C`));
  uList.appendChild(minTemperature);
  let precipitation = document.createElement('li');
  let precipitationIcon = document.createElement('i');
  precipitation.appendChild(precipitationIcon);
  precipitationIcon.className += 'fas fa-cloud-rain';
  precipitation.appendChild(document.createTextNode(`${data.totalprecip_mm}mm`));
  uList.appendChild(precipitation);
  let uvIndex = document.createElement('li');
  let uvIndexIcon = document.createElement('i');
  uvIndex.appendChild(uvIndexIcon);
  uvIndexIcon.className += 'fas fa-umbrella-beach';
  uvIndex.className += checkUvIndex(data.uv);
  uvIndex.appendChild(document.createTextNode(`${data.uv}`));
  uList.appendChild(uvIndex);
  document.querySelector('.close').addEventListener('click', function() {
    myModal.remove();
    let defaultGif = 'hmm';
    getGifs(defaultGif).then(object => setBackground(object.data));
  });

}

export default openModal;