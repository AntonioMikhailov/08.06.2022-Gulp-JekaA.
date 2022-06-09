//поиск и замена файлов
import replace from "gulp-replace"; // поиск и замена
import plumber from "gulp-plumber"; // обработка ошибок
import notify from "gulp-notify"; // обработка ошибок
import browsersync from "browser-sync"; // локальный сервер
import newer from "gulp-newer"; // проверка обновлений фото
//сборка для Production
import ifPlugin from "gulp-if"; // проверка обновлений фото

//Экспортируем объект
export const plugins = {
replace: replace,
plumber: plumber,
notify: notify,
browsersync: browsersync,
newer: newer,
if: ifPlugin,
};
