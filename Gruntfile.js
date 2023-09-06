module.exports = function(grunt) {
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: false // Se quiser comprimir o CSS, defina como true
          },
          files: {
            "css/styles.css": "src/less/main.less"
          }
        }
      },
      uglify: {
        my_target: {
          files: {
            'js/scripts.min.js': ['src/js/app.js']
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['less', 'uglify']);
  };
