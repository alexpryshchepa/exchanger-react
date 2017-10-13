import gulp from 'gulp';

export default gulp.task('dev', gulp.series('clean', 'html', 'react', 'images', gulp.parallel('browser-sync', 'watch')));
