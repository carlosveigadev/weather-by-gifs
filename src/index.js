import './assets/styles.css';
import getCity from './modules/getCity';


(function () {
  const weatherApp = {
    init() {
      this.cacheDom();
      this.bindEvents();
      this.renderData();
      const data = 'london';
      getCity(data);
    },
    cacheDom() {

    },
    bindEvents() {
      // for events on click or something passing the functions.
    },
    renderData() {
      // render page
    },
    renderNewPage() {

    },


  };

  weatherApp.init();
}());
