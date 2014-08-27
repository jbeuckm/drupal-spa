module.exports = function (grunt) {
    grunt.initConfig({

        command : {
            server: {
                cmd: ['screen -S server -d -m python -m SimpleHTTPServer 9000']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-commands');

//    grunt.registerTask('default', ['browserify']);

};
