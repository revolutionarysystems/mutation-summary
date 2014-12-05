module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  grunt.loadNpmTasks('grunt-haven');

  // Tasks  

  grunt.registerTask('deploy', ['haven:deploy']);
  grunt.registerTask('ci', ['haven:deployOnly']);

  // Default task(s).
  grunt.registerTask('default', ['deploy']);

};