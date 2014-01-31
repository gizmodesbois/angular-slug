"use strict";
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 3000,
                    open: true
                }
            }
        },
        uglify: {
            options: {
                mangle: true,
                compress: true,
                sourceMap: "dist/application.map",
                banner: "/* <%= pkg.author %> | <%= pkg.license.type %>" + " | <%= grunt.template.date(new Date(),'yyyy-mm-dd') %> */"
            },
            angularSlug: {
                src: "src/libs/ng-angular-slug.js",
                dest: "dist/libs/ng-angular-slug.min.js"
            },
            app: {
                src: "src/scripts/ng-app.js",
                dest: "dist/scripts/ng-app.min.js"
            }
        },
        jshint: {
            gruntfile: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: 'Gruntfile.js'
            },
            src: {
                options: {
                    jshintrc: 'src/.jshintrc'
                },
                src: ['src/scripts/ng-angular-slug.js', 'src/scripts/*.js']
            }
        },
        watch: {
            options: {
                livereload: true
            },
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint:gruntfile'],
            },
            src: {
                files: '<%= jshint.src.src %>',
                tasks: ['jshint:src']
            }
        },
        clean: {
            target: ['dist']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');


    grunt.registerTask('startLog', 'Default task for grunt', function() {
        grunt.log.oklns('Grunt is up and running');
    });

    grunt.registerTask('default', ['startLog', 'clean', 'jshint', 'uglify', 'connect', 'watch']);
};