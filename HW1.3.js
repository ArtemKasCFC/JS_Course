/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;


function start() {
    numberOfFilms = prompt('How much movies have you already seen?', '18');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('How much movies have you already seen?', '18');
    }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function showMyDB(DB) {
    if (DB.privat == false) {
        console.log(DB);
    }
}
showMyDB(personalMovieDB);


function writeYourGenres() {
    for (let ind = 0; ind < 3; ind++) {
        personalMovieDB.genres[ind] = prompt(`${ind + 1} What is your favorite genre?`);
    }
}
writeYourGenres();

function remeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let questionOne = prompt('One of the last watched movies?', 'Nobody'),
            questionTwo = prompt('What is grade?', '8');
        if (questionOne != null && questionTwo != null && questionOne != '' && questionTwo != '' && questionOne.length < 50) {
            personalMovieDB.movies[questionOne] = questionTwo;
        } else {
            i--;
        }
    }
}
remeberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
        console.log('A little movies have been watched :(');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Ha ha classic');
    } else if (personalMovieDB.count > 30) {
        console.log('You really like movies');
    } else {
        console.log('Error');
    }
}
detectPersonalLevel();