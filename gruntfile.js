module.exports = function(grunt){
   
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  
    grunt.initConfig({
       
        pkg: grunt.file.readJSON('package.json'),

         sass: {
            dist: {
              files: [{
                expand: true,
                cwd: 'sass',
                src: ['*.scss'],
                dest: 'css',
                ext: '.css'
              }]
            }
        },

        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            }                
        }        
    });

    grunt.registerTask('default', ['sass', 'watch']);

};