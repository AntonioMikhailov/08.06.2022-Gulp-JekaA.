//экспортировать можно сразу блок из вложенных ф. Но обернуть их  и экспортировать обертку
// export function test() { 
//  console.log('Это ф. test');

//  function twoTest() { 
//   console.log('testTwo');
//  }
//  twoTest(); 
// }
// export let number = 555;
// export let string = 'Мама';
// console.log('Привет!');



//JS-функция определения поддержки WebP
export function isWebP() { 
  function testWebP(callback) {
    var webP = new Image(); 
    webP.onload = webP.onerror = function () { callback(webP.height == 2); }; webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    
    }
    
    testWebP(function (support) {
    if (support == true) { document.querySelector('body').classList.add('webp'); 
  } else{ 
    document.querySelector('body').classList.add('no-webp'); }
    
    });
}
  
