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
      it('1たす1たす2は4になること',function(){
        _calculatorModel.plus(1);
        _calculatorModel.plus(1);
        _calculatorModel.equalTotal(2).should.equal(4);
      });
    });
    describe('減算のテスト',function(){
      var _calculatorModel = new CalculatorModel();
      it('34ひく11ひく12は11になること',function(){
        _calculatorModel.minus(34);
        _calculatorModel.minus(11);
        _calculatorModel.equalTotal(12).should.equal(11);
      });
    });
    describe('乗算のテスト',function(){
      var _calculatorModel = new CalculatorModel();
      it('2かける3かける6は36になること',function(){
        _calculatorModel.multiply(2);
        _calculatorModel.multiply(3);
        _calculatorModel.equalTotal(6).should.equal(36);
      });
    });
    describe('除算のテスト',function(){
      var _calculatorModel = new CalculatorModel();
      it('128わる4わる4は8になること',function(){
        _calculatorModel.divide(128);
        _calculatorModel.divide(4);
        _calculatorModel.equalTotal(4).should.equal(8);
      });
    });
    describe('いろんな四則演算のテスト',function(){
      var _calculatorModel = new CalculatorModel();
      it('1658たす9684わる2かける2わる2は2268.4になること',function(){
        _calculatorModel.plus(1658);
        _calculatorModel.divide(9684);
        _calculatorModel.multiply(2);
        _calculatorModel.divide(2);
        _calculatorModel.equalTotal(5).should.equal(2268.4);
      });
    });
    describe('少し意地悪な四則演算のテスト',function(){
      var _calculatorModel = new CalculatorModel();
      it('1658たすわるかける2は3316になること',function(){
        _calculatorModel.plus(1658);
        _calculatorModel.divide();
        _calculatorModel.multiply();
        _calculatorModel.divide(2).should.equal(3316);
      });
    });
    describe('除算の例外テスト',function(){
      var _calculatorModel = new CalculatorModel();
      it('1658わる0はエラーになること',function(){
        _calculatorModel.divide(1658);
        _calculatorModel.divide(0).should.equal('エラー');
      });
    });
  });
});
