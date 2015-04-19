module.exports = function(grunt){

	// Project configuration
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {
					paths: ['css'],  // Directory for @import
                    compress: false
				},
				files: {
					'css/formui.css' : 'css/less/formui.less'
				}
			}
		},
		watch: {
			less: {
				files: 'css/**/*.less',
				tasks: ['less:development'],
				options: {
					livereload: true
				}
			}
		},
	});
	
	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	
	// Default task(s)
	grunt.registerTask('default', ['watch']);
}