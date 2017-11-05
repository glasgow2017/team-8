module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'content/script.min.js': [
            'dev-js/extract_important_sentence.js',
            'dev-js/api_calls.js',
            'dev-js/parser.js',
            'dev-js/index.js',
            'dev-js/livechat.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
};
