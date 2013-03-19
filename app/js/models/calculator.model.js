/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, */

/**
 * 四則演算するモデル
 */
define(['underscore', 'backbone'], function(_, Backbone) {
  'use strict';
  return Backbone.Model.extend({
    defaults: {
      currentNumber : 0,
      currentMode   : ''
    },

    currentNumber : 0,
    currentMode   : '',

    initialize: function(){
      this.currentNumber = 0;
      this.currentMode = '';
    },


    /**
     *  現在値に加算
     *  @param  {Number}  _x  追加値
     *  @return {Number}  返値
     */ 
    plus: function(_x){
      if(_x){
        this.calculate(this.currentMode,_x);
      }
      this.currentMode = 'plus';
      return this.currentNumber;
    },

    /**
     *  現在値に減算
     *  @param  {Number}  _x  追加値
     *  @return {Number}  返値
     */ 
    minus: function(_x){
      if(_x) {
        this.calculate(this.currentMode,_x);
      }
      this.currentMode = 'minus';
      return this.currentNumber;
    },

    /**
     *  現在値に乗算
     *  @param  {Number}  _x 追加値
     *  @return {Number}  返値
     */ 
    multiply: function(_x){
      if(_x) {
        this.calculate(this.currentMode,_x);
      }
      this.currentMode = 'multiply';
      return this.currentNumber;
    },

    /**
     *  現在値に除算
     *  @param  {Number}  _x 追加値
     *  @return {Number}  返値
     */ 
    divide: function(_x){
      if(_x === 0) {
        return "エラー";
      }
      if(_x) {
        this.calculate(this.currentMode,_x);
      }
      this.currentMode = 'divide';
      return this.currentNumber;
    },

    /**
     *  イコール
     *  @param  {Number}  _x 追加値
     *  @return {Number}  返値
     */ 
    equalTotal: function(_x){
      var _currentNum = 0;
      switch(this.currentMode) {
        case 'plus':
        _currentNum = this.plus(_x);
        break;
        case 'minus':
        _currentNum = this.minus(_x);
        break;
        case 'multiply':
        _currentNum = this.multiply(_x);
        break;
        case 'divide':
        _currentNum = this.divide(_x);
        break;
      }
      this.currentMode = '';
      this.currentNumber = _currentNum;
      return _currentNum;
    },

    /**
     *  計算
     *  @param  {String}  _type 計算方法
     *  @param  {Number}  _x 追加値
     *  @return {Number}  返値
     */ 
    calculate: function(_type,_x){
      switch(_type) {
        case 'plus':
        this.currentNumber = this.currentNumber + _x;
        break;
        case 'minus':
        this.currentNumber = this.currentNumber - _x;
        break;
        case 'multiply':
        this.currentNumber = this.currentNumber * _x;
        break;
        case 'divide':
        this.currentNumber = this.currentNumber / _x;
        break;
        default:
        this.currentNumber = this.currentNumber + _x;
        break;
      }
      return this.currentNumber;
    }

  });
});

