/*jslint white: true, nomen: true, maxlen: 120, */
/*global require:false */

require.config({
  baseUrl: 'js',  // index.htmlから見てのmail.jsまでのパス
  paths: {
    jquery: 'lib/jquery-1.9.1',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    mustache: 'lib/mustache'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
});

require(['jquery', 'underscore', 'backbone', 'mustache', 'router'], function($, _, Backbone, Mustache, Router) {
  'use strict';

  new Router();
  // 慣例 ヒストリースタート
  Backbone.history.start();
});

