/*jslint white: true, nomen: true, maxlen: 120, browser:true, */
/*global require:false */
require.config({
  baseUrl: '../../js/',
  paths: {
    jquery: 'lib/jquery-1.9.1',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    mocha: 'test/node_modules/mocha/mocha',
    sinon: 'test/node_modules/sinon/pkg/sinon',
    chai: 'test/node_modules/chai/chai',
    schai: 'test/node_modules/sinon-chai/lib/sinon-chai'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    mocha: {
      exports: 'mocha'
    },
    sinon: {
      exports: 'sinon'
    }
  }
});

require([
  'jquery', 'underscore', 'backbone', 'mocha', 'sinon', 'chai', 'schai'
], function($, _, Backbone, mocha, sinon, chai, schai, model) {
  'use strict';

  mocha.ui('bdd');        // ビヘイビア駆動開発  意訳 ポエティックな奴
  mocha.reporter('html'); // htmlで書き出す場合 他にもjenkinsもあるよ！
  chai.should();
  window.expect = chai.expect;

  // ここにテスト用ファイルを追加！
  require([

  ], function(

  ) {

    // コンソールで出力するためには
    // windowやdocumentなどブラウザに依存するものがあるとmochaは多分エラーになる
    // それを解決するためにヘッドレスブラウザのphantom.jsを介して
    // テスト結果をコンソールへ出力する
    // ▼▼▼▼▼
    if (window.mochaPhantomJS) {
      window.mochaPhantomJS.run();
    }
    else {
      mocha.run();
    }
  });
});
