/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, */

/**
 * 四則演算するモデル
 */
define(['underscore', 'backbone'], function(_, Backbone) {
  'use strict';
  return Backbone.Model.extend({
    defaults: {
      hint: 'aa'
    },

    /**
     *  加算
     *  @param  {Number}  _x  ベースの値
     *  @param  {Number}  _y  追加値
     *  @return {Number}  返値
     */ 
    plus: function(_x,_y){
      return _x + _y;
    },

    /**
     *  減算
     *  @param  {Number}  _x  ベースの値
     *  @param  {Number}  _y  追加値
     *  @return {Number}  返値
     */ 
    minus: function(_x,_y){
      return _x - _y;
    },

    /**
     *  乗算
     *  @param  {Number}  _x  ベースの値
     *  @param  {Number}  _y  追加値
     *  @return {Number}  返値
     */ 
    multiply: function(_x,_y){
      return _x * _y;
    },

    /**
     *  除算
     *  @param  {Number}  _x  ベースの値
     *  @param  {Number}  _y  追加値
     *  @return {Number}  返値
     */ 
    divide: function(_x,_y){
      return _x / _y;
    }
  });
});

