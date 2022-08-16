import Vue from "vue";
import Vuex from 'vuex';
import stocks from './moduldes/stocks.js';
import portfolio from "./moduldes/portfolio.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocks,
    portfolio
  }
});