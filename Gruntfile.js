module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            drupal: {
                src: ['main.js'],
                dest: 'build/drupal-client-browser.js'
            }
        },

        command : {
            server: {
                cmd: ['screen -S server -d -m python -m SimpleHTTPServer 9000']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-commands');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['browserify']);

};
