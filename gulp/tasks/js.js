// подключаем модуль webpack чтобы помогал собирать js  файлы в один
import webpack from "webpack-stream";

export const js = () =>{
  return app.gulp.src(app.path.src.js, {sourcemaps: true}) // откуда
  .pipe(app.plugins.plumber( // внутри plumber обращаемся к notify
  app.plugins.notify.onError({
    title: "JS",
    message: "Error: <%= error.message %>"
  }))
   )
  //подключаем возможность импорта кусков из js файлов  в один файл js ( иодули ES6) - нужен Webpack
    .pipe(webpack({
      mode: app.isBuild ? 'production': 'development', // режим разработчика
      output: {
        filename: 'app.min.js', // выходной файл
      },
    }))
  .pipe(app.gulp.dest(app.path.build.js)) // куда переносим
  .pipe(app.plugins.browsersync.stream()); // обновление browsersync
  };