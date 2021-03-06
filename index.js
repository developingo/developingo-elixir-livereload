var gulp = require('gulp'),
    elixir = require('developingo-elixir'),
    livereload = require('gulp-livereload');

elixir.extend('livereload', function (src) {

    var config = this,
        defaultSrc = [
            'app/**/*',
            'public/**/*',
            'resources/views/**/*'
        ];


    src = src || defaultSrc;

    if (config.production === false) {
        var watcher = gulp.watch(src);

        watcher.on('change', function (event) {
            livereload.changed(event.path);
        })
    }
    gulp.task('livereload', function () {
        livereload.listen();
    });

    this.registerWatcher('livereload');
    return this.queueTask('livereload');

});
