/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, describe:false,
 it:false, before:false, after:false, beforeEach:false, afterEach:false, 
 sinon:false, context:false, */

define([
  '../../models/calculator.model'
], function(CalculatorModel) {
  'use strict';

  // テストするときはdescribeから始める
  describe('CalculatorModelのテスト',function(){
    describe('加算のテスト',function(){
      var _calculatorModel = new CalculatorModel();
      it('1たす1は2になること',function(){
        _calculatorModel.plus(1,1).should.equal(2);
      });
    });
    describe('減算のテスト',function(){
      
    });
    describe('乗算のテスト',function(){
      
    });
    describe('除算のテスト',function(){
      
    });
  });
});
