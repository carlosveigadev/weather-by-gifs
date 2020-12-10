import './assets/styles.css';
import getCity from './modules/getCity';
import getBoxes from './modules/getBoxes';

(function () {
  const weatherApp = {
    init() {
      this.cacheDom();
      this.bindEvents();
      this.renderData();
      const data = 'london';
      getCity(data);
      const defaultData = 'hmm'
      getBoxes(defaultData);
    },
    cacheDom() {

    },
    bindEvents() {
      // for events on click or something passing the functions.
    },
    renderData() {
      
    },

    renderNewPage() {

    },


  };

  weatherApp.init();
}());
