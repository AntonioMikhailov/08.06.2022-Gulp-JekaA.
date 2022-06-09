
//добавляем ф. для browserSync
export const server = (done) => {
  //в глоб. переменной plugins находим browsersync и инициализируем его - запускаем
app.plugins.browsersync.init({
  server: {
baseDir: `${app.path.build.html}` // откуда запускаем
  },
  notify: false, // убираем сообщения в браузере чтобы не мешали
  port: 3000, // порт лок. сервера
});
};