import './assets/styles.css';
import getCity from './modules/getCity';
import openModal from './modules/openModal';
import setBackground from './modules/setBackground';
import getGifs from './modules/getGifs';

(function () {
  const weatherApp = {
    button: document.getElementsByClassName('city-button')[0],
    init() {
      this.bindEvents();
      let defaultGif = 'hmm';
      getGifs(defaultGif).then(object => setBackground(object.data));
    },
    bindEvents() {
      this.button.addEventListener("click", function () {
        let cityInput = document.getElementsByClassName('city-input')[0].value;
        getCity(cityInput).then(object => {
          console.log(object.condition.text);
          getGifs(object.condition.text).then(object => setBackground(object.data))
          openModal(object);
        });
      });
    }
  };

  weatherApp.init();
}());
