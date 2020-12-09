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
      //search for elements in the DOM for DOM manipulation;
    },
    bindEvents: function() {
      // for events on click or something passing the functions. 
    },
    render: function() {
      //render page
    },



  }

  weatherApp.init();
})();
