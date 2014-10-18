module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            'build/app.js': ['dev/app.js']
        },
        watch:{
            files:['dev/**/*.js'],
            tasks:['browserify']
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
}