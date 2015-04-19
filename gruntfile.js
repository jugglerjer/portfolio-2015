module.exports = function(grunt) {
	
	grunt.initConfig({
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'stylesheets',
					src: ['*.scss'],
					dest: 'css',
					ext: '.css',
				}]
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			sass: {
				files: '**/*.scss',
				tasks: ['sass'],
			},
			html: {
				files: '**/*.html',
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	// grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-browserify');
	// grunt.loadNpmTasks('grunt-text-replace');
	// grunt.loadNpmTasks('grunt-contrib-jasmine');
	// grunt.loadNpmTasks('grunt-minifyify');
	// grunt.loadNpmTasks('grunt-webfont');

	grunt.registerTask('build', ['sass']);
	grunt.registerTask('default', ['build', 'watch'] );
}