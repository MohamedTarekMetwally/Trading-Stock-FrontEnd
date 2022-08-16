import Vue from "vue";
import Vuex from 'vuex';
import stocks from './moduldes/stocks.js';
import portfolio from "./moduldes/portfolio.js";

import * as actions from './actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: actions,
  modules: {
    stocks,
    portfolio
  }
});