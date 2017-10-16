import gulp from 'gulp';
import browserSync from 'browser-sync';

export default gulp.task('watch', () => {
  gulp.watch('src/**/*.html', gulp.series('html'));
  gulp.watch(['src/**/*.js', 'src/**/*.jsx', 'src/**/*.scss'], gulp.series('react'));
});