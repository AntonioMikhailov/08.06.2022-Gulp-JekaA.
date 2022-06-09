import fileInclude from "gulp-file-include";
//копируем HTML в dist
// Устанавливаем конвертер в Webp фото
import webpHtmlNosvg from "gulp-webp-html-nosvg";
// Устанавливаем очистку кеша браузера от стилей css
import versionNumber from "gulp-version-number";

export const html = () =>{
return app.gulp.src(app.path.src.html) // откуда
.pipe(app.plugins.plumber( // внутри plumber обращаемся к notify
app.plugins.notify.onError({
  title: "HTML",
  message: "Error: <%= error.message %>"
}))
 )
.pipe(fileInclude())  // вызываем 
//плагин replace - искать вхождения @img и менять с помощью регулярных выражений
.pipe(app.plugins.replace(/@img\//g, 'img/'))
 
.pipe(
  app.plugins.if( // обернули  webpHtmlNosvg - если режим Production - выполняем
    app.isBuild,
    webpHtmlNosvg() // конвертор в Webp
  )
)
.pipe(
  app.plugins.if( // обернули  versionNumber
    app.isBuild,
    versionNumber({
      'value' : '%DT%', // дата и время будет добавляться к стилям
      'append' : {
        'key' : '_v',
        'cover': 0,
        'to': [
          'css',
          'js',
        ]
      },
      'output': {
        'file': 'gulp/version.json' // будет создаваться файл с ключом
      }
    })
  )
)

.pipe(app.gulp.dest(app.path.build.html)) // куда переносим
.pipe(app.plugins.browsersync.stream()); // обновление browsersync
};