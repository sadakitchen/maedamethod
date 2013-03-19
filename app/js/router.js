/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, todo: true */
/*global _:false, $:false, define:false, require:false */

define([
  'backbone'
],function(
  Backbone
){
  'use strict';
  // 計算機
  return Backbone.Router.extend({
    /**
     *  プロパティ
     */
    routes: {
      '': 'index',              // http://xxx/
      'credit': 'credit'        // http://xxx/#credit
    },

    /**
     *  関数 
     */
    // 計算機画面
    index: function() {
      // 計算機
      
    },
    // スタッフロール画面
    credit: function(unit) {
      // @todo make credit 
      console.log('credit');
    }
  });
});
