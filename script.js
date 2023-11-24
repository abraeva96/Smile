const body = document.querySelector('body'),
    eye = document.querySelectorAll('.eye');
body.addEventListener('mousemove', (e) => { //добавляем прослушиватель событий к элементу body, прослушивающий движение мыши.
    eye.forEach(el => { //Внутри функции прослушивателя событий мы перебираем каждый элемент глаза, используя  eye.forEach(el => {})
        const speed = el.getAttribute('speed')
            //Переменная "speed" содержит значение атрибута "speed" каждого элемента "eye". 
        const x = (window.innerWidth - e.pageX * speed) / 35
        const y = (window.innerHeight - e.pageY * speed) / 20
        el.style.transform = `translate(${-x}px,${-y}px)`
            //Затем мы изменяем стиль каждого элемента "eye", применяя к нему трансформацию.

    })
})

//смайл который будеть следить глазами за курсорам мыши