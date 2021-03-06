const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
gulpMocha = require('gulp-mocha');
env = require('gulp-env');
superTest = require('supertest');

gulp.task('default', function (){
  nodemon({
    script: 'server.js',
    ext: 'js',
    env: {
      PORT: process.env.PORT || 3000
    },
    ignore: ['./node_modules?**']
    
  })
  .on('restart', function(){
    console.log('Restarting');
  });
});

gulp.task('test', function(){
  env({vars: {ENV: 'Test'}});
  gulp.src('tests/*.js', {read:false})
    .pipe(gulpMocha({reporter:'nyan'}))
});



/* auto generated below - gulpfile for zombieAgain web app.

const
gulp        = require('gulp'),
nodemon     = require('gulp-nodemon'),
plumber     = require('gulp-plumber'),
liveload    = require('gulp-livereload'),
sass        = require('gulp-sass'),
elemsJS     = require('gulp-elementsjs-interpreter'),
babel       = require('gulp-babel'),
gulpWebpack = require('gulp-webpack'),
webpack     = require('webpack'),
run         = require('run-sequence');


gulp.task('sass', ()=> {
  gulp.src('./public/css/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(liveload());
});

gulp.task('js', ()=> {
  gulp.src('./public/js/src/zombieAgain.js')
    .pipe(elemsJS())
    .pipe(babel({
      presets: ["es2015"]
    }))
    .pipe(gulp.dest('./public/js/dist'))
    .pipe(liveload());
});

gulp.task('watch', ()=> {
  gulp.watch('./public/css/*.scss',  ['sass']);
});

gulp.task('watch', ()=> {
  gulp.watch('./public/js/src/*.js',  ['js']);
});

gulp.task('develop', function() {
  liveload.listen();
  nodemon({
    script: 'bin/www',
       ext: 'js handlebars hbs',
    stdout: false
  }).on('readable', function() {
    this.stdout.on('data', function(chunk) {
      if (/^Express started on/.test(chunk)) {
        liveload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', ['sass', 'js', 'develop', 'watch']);
*/
