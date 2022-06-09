import del from "del";
import zipPlugin from "gulp-zip";

export const zip = () =>{
  //сначала удаляем архив - если ону уже есть
  del(`./${app.path.rootFolder}.zip`);
  //обращаемся к пакпке с результатом и получаем все файлы
  return app.gulp.src(`${app.path.src.buildFolder}/**/*.*`, {}) 
  //обрабатываем ошибки
  .pipe(app.plugins.plumber( // внутри plumber обращаемся к notify
  app.plugins.notify.onError({
    title: "ZIP",
    message: "Error: <%= error.message %>"
  }))
   )
   //для создания архива zip Нужны модули
   .pipe(zipPlugin(`${app.path.rootFolder}.zip`)) // имя фалйа и папки = имя проекта
   
  .pipe(app.gulp.dest('./')); 
};