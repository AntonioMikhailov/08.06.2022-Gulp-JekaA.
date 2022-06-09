import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff from 'gulp-ttf2woff';

//три этапа - сначала конвертируем из Otf  в TTF
export const otfToTtf = () =>{
  //Ищем файлы скриптов .otf
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {}) //исходники
  .pipe(app.plugins.plumber( // внутри plumber обращаемся к notify
  app.plugins.notify.onError({
    title: "FONTS",
    message: "Error: <%= error.message %>"
  }))
   )
   //конвертируем в .ttf
  .pipe(fonter({
    formats: ['ttf']
  }))
  //выгружаем  в ту же исходную папку
  .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`)); 
  };

  // конвертируем TTF в Woff
  export const ttfToTtf = () =>{
    //Ищем файлы скриптов .ttf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {}) //исходники
    .pipe(app.plugins.plumber( // внутри plumber обращаемся к notify
    app.plugins.notify.onError({
      title: "FONTS",
      message: "Error: <%= error.message %>"
    }))
     )
     //конвертируем в .woff
    .pipe(fonter({
      formats: ['woff']
    }))
    //выгружаем  в папку с результатом
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    //Ищем фалй шрифтов ttf
     .pipe( app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
     //конвертируем в woff
     .pipe(ttf2woff())
      //выгружаем  в папку с результатом
      .pipe(app.gulp.dest(`${app.path.build.fonts}`));
    };

    //третья задача записываем шрифт в файл стилей
    //Много кода -  не делал -вручную проще  01-21-00