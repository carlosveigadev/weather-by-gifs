import './assets/styles.css';
import getCity from './modules/getCity';
import getBoxes from './modules/getBoxes';
import cityInput from './modules/cityInput';

(function () {
  const weatherApp = {
    button: document.getElementsByClassName('city-button')[0],
    init() {
      this.bindEvents();
      this.renderData();
      const data = 'london';
      getCity(data);
      const defaultData = 'hmm'
      getBoxes(defaultData);
    },
    bindEvents() {
      this.button.addEventListener("click", function () {
        let cityInput = document.getElementsByClassName('city-input')[0].value;
        getCity(cityInput).then(n => console.log(n));
      })
    },
    renderData() {
      
    },

    renderNewPage() {

    },


  };

  weatherApp.init();
}());
