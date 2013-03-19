/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global module:false, */

module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // exec
    // exec: {
    //   testjs: {
    //     command: 'mocha-phantomjs test/spec_runner.html'
    //   }
    // },

    // compass
    compass: {
      development: {
        src: 'app/_sass/',
        dest: 'app/css/',
        images: 'app/img',
        linecomments: true,
        debugsass: false,
        relativeassets: true
      },
      production: {
        src: 'app/_sass/',
        dest: 'app/css/',
        images: 'app/img',
        linecomments: false,
        outputstyle: 'compressed',
        debugsass: false,
        relativeassets: false
      }
    },

    // watch
    watch: {
      // js: {
      //   files: [
      //     './app/js/**/*.js',
      //     './test/spec/**/*.js'
      //   ],
      //   tasks: ['exec:testjs']
      // },
      sass: {
        files: ['app/_sass/**/*.scss'],
        tasks: ['compass:development']
      }
    }
  });

  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-exec');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);
};
