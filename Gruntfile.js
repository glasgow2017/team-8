module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'content/script.min.js': [
            'dev-js/add_top_banner.js',
            'dev-js/api_calls.js',
            'dev-js/parser.js',
            'dev-js/page_flow.js',
            'dev-js/livechat.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
};
