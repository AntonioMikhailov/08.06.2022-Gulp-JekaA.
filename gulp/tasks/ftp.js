import { configFTP } from "../config/ftp.js";
import { vinylFTP } from "vinyl-ftp";
import { util } from "gulp-util";

export const ftp = () =>{
  configFTP.log = util.log; // присвоили плагин log - покажет состояние
  const ftpConnect = vinylFTP.create(configFTP);
  return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {}) //получаем все файлы из папки результата
  .pipe(app.plugins.plumber( // внутри plumber обращаемся к notify
  app.plugins.notify.onError({
    title: "FTP",
    message: "Error: <%= error.message %>"
  }))
   )
   //указываем путь из файла в Path +название корневой   папки
  .pipe(ftpConnect.dest(`/${app.path.ftp})/${app.path.rootFolder}`));
};