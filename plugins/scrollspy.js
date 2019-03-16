import Vue from 'vue';
import Scrollspy, { Easing } from 'vue2-scrollspy';

 
export default () => {
    Vue.use(Scrollspy, {
      easing: Easing.Cubic.In
    })
  }