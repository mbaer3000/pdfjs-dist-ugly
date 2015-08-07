module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shrinkwrapsy: {
      options: {
        prune: true,
        devDependencies: true
      }
    },
    uglify: {
      options: {
        compress: {
          drop_console: true,
          dead_code: true
        }
      },
      main: {
        options: {
          banner: '/*! <%= pkg.name %>, build via uglifyjs from pdfjs-dist version <%= grunt.file.readJSON("bower_components/pdfjs-dist/package.json").version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          'dist/pdf.combined.min.js': ['bower_components/pdfjs-dist/build/pdf.combined.js'],
          'dist/pdf.min.js': ['bower_components/pdfjs-dist/build/pdf.js'],
          'dist/pdf.worker.min.js': ['bower_components/pdfjs-dist/build/pdf.worker.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-shrinkwrapsy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('shrinkwrap', ['shrinkwrapsy']);
};
