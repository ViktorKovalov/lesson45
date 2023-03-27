const btn = document.querySelectorAll('button');

// btn.forEach(item =>{        
//     item.addEventListener('mouseenter', () =>{      
//         console.log('this is youTube');
//     });
// });    // циклом мы вешаем событие на все кнопки. addEventListener назначает обработчик  события

// btn[0].addEventListener('click', () => {
//     alert('Hello')
// })


const deleteElement = (del) => {
    // del.target.remove();
    console.log(del.target); 
}

btn.forEach(item => {      
    item.addEventListener('click', deleteElement, {once : true});
})       // Циклом на каждую кнопку вешаем событие, при котором на нажатие на эту кнопку она удаляется. Можем передать функцию непосредственно в цикле, а можем ее вынести в отдельную переменную, что бы легче в дальнейшем ее манипулировать, а в добавление события мы передадим ее как второй аргумент, без скобок     

// Третим значением мы добавили {once : true} - это интересная штука, которая позволяет обрабатывать кнопку один раз, что облегчает нам жизнь и нет надобности прописывать чуть более сложные структуры кода, так же третим аргументом можем передать и другие значения, подробнее -----> в документации!


// Изменение стандартного поведения браузера!_____________________

const link = document.querySelector('a')
let i = 0;

link.addEventListener('click', function(event) {
    event.preventDefault();   // Отмена стандартного поведения функции
    ++i;
    console.log(i); // При клике выводим счетчик кликов по ссылке, можно задать любое событие на клик
});

