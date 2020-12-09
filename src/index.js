import "./assets/styles.css";
import getCity from './modules/getCity.js';


(function() {
  var weatherApp = {
    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render();
      let data = 'london'
      getCity(data);
    },
    cacheDom: function() {
      
    },
    bindEvents: function() {
      // for events on click or something passing the functions. 
    },
    renderData: function() {
      //render page
    },
    renderNewPage: function() {

    }



  }

  weatherApp.init();
})();
