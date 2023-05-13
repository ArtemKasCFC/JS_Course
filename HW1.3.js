/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you already watched?', '18');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you already watched?', '18');
    }
}

start();


function detectPersonalLevel() {
    if (numberOfFilms >= 0 && numberOfFilms < 10) {
        console.log('Too little movies have been watched');
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
        console.log('You are a classic viewer');
    } else if (numberOfFilms > 30) {
        console.log('You are a cinephile');
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Your favorite genre at number ${i+1}`, 'Comedy');

        if (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
            i--;
        }
    }
}

writeYourGenres();


let questionOne,
    questionTwo;

function remeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        questionOne = prompt("What's the last movie you watched?", 'Nobody'),
            questionTwo = prompt('How would you rate it?', '8');

        if (!questionOne || !questionTwo || questionOne.length > 50) {
            i--;
        } else {
            personalMovieDB.movies[questionOne] = questionTwo;
        }
    }
}

remeberMyFilms();