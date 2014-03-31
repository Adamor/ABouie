module.exports = function(grunt) {

       grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
            src: ['js/libs/*.js','js/global.js'],
            dest: 'production/build/js/production.js',
      }
    },

        uglify: {
        build: {
        src: 'production/build/js/production.js',
        dest: 'production/build/js/production.min.js'
    }
},

        imagemin: {
        dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/production/build/'
        }]
    }
  },

        watch: {
          options: {
           livereload: true,
          },
          scripts: {
              files: ['js/*.js'],
              tasks: ['concat', 'uglify'],
              options: {
                  spawn: false,
              },
          },
          css: {
            files: ['css/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false,
          }
        }
      },

      sass: {
        dist: {
            options: {
                style: 'compressed'
            },
            files: {
                'production/build/css/global.css': 'css/main.scss'
            }
        } 
      }

    });

       grunt.loadNpmTasks('grunt-contrib-concat');
       grunt.loadNpmTasks('grunt-contrib-jshint');
       grunt.loadNpmTasks('grunt-contrib-uglify');
       grunt.loadNpmTasks('grunt-contrib-coffee');
       grunt.loadNpmTasks('grunt-contrib-imagemin');
       grunt.loadNpmTasks('grunt-contrib-watch');

       grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};