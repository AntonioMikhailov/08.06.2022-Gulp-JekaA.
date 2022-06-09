import webp  from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () =>{
  return app.gulp.src(app.path.src.images) // откуда
  .pipe(app.plugins.plumber( // внутри plumber обращаемся к notify
  app.plugins.notify.onError({
    title: "IMAGES",
    message: "Error: <%= error.message %>"
  }))
   )
   //проверяем фото в папке с результатами, чтобы не обрабатывать лишние
   .pipe(app.plugins.newer(app.path.build.images))
 //оборачиваем webp для проверки режима  - только для Production
 .pipe(
  app.plugins.if( // обернули  webp()
  app.isBuild,
  webp()//создаем фото webp
  )
 )
 .pipe(
  app.plugins.if( // обернули  webp()
  app.isBuild,
  app.gulp.dest(app.path.build.images)//дублируем перенос фото
  )
 )
    
   
   .pipe(app.gulp.dest(app.path.build.images))
   //опять получаем доступ к фото
   .pipe(app.gulp.src(app.path.src.images))
   .pipe(app.plugins.newer(app.path.build.images)) 
   //сжимаем фото
   .pipe(imagemin({
     progressive: true,
     svgoPlugins: [{removeViewBox: false}],
     interlaced: true,
     optimizationLevel: 3 // % сжатия-от 0 до 7
   }))

  .pipe(app.gulp.dest(app.path.build.images)) 
  //выгружаем в папку с результатом
  .pipe(app.gulp.src(app.path.src.images))
  .pipe(app.gulp.src(app.path.src.svg))
  .pipe(app.gulp.dest(app.path.build.images)) 
  .pipe(app.plugins.browsersync.stream()); // обновление browsersync
  };