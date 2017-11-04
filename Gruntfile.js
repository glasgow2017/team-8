module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'content/script.min.js': [
            'dev-js/add_top_banner.js',
            'dev-js/extract_important_sentence.js',
            'dev-js/api_calls.js',
            'dev-js/parser.js',
            'dev-js/index.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
};