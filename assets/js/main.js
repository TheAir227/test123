let number = Number(prompt('Введите количество блоков'));
let box = document.querySelector('.box');
let insert = '<div class="block"></div>';

for(let a = 0; a < number; a++){
    box.insertAdjacentHTML('beforeend',  insert);
}
