module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            drupal: {
                src: ['main.js'],
                dest: 'build/drupal-client-browser.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['browserify']);

};