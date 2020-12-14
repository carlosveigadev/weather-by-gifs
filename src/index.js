import './assets/styles.css';
import getCity from './modules/getCity';
import openModal from './modules/openModal';
import setBackground from './modules/setBackground';
import getGifs from './modules/getGifs';
import loader from './modules/loader';

(function start() {
  const weatherApp = {
    button: document.getElementsByClassName('city-button')[0],
    init() {
      this.bindEvents();
      const defaultGif = 'hmm';
      getGifs(defaultGif).then(object => setBackground(object.data));
    },
    bindEvents() {
      this.button.addEventListener('click', () => {
        const cityInput = document.getElementsByClassName('city-input')[0].value;
        loader();
        getCity(cityInput).then(object => {
          getGifs(object.condition.text).then(object => setBackground(object.data));
          openModal(object);
        });
      });
    },
  };

  weatherApp.init();
}());
