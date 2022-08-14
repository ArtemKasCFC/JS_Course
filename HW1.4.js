/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How many movies have you already watched?', '18');

        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you already watched?', '18');
        }
    },
    remeberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const questionOne = prompt('One of the last watched movies?', 'Nobody'),
                questionTwo = prompt('What is your grade?', '8');

            if (!questionOne || !questionTwo || questionOne.length > 50) {
                i--;
            } else {
                personalMovieDB.movies[questionOne] = questionTwo;
            }
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Your favorite genre at number ${i+1}`, 'Comedy');

            if (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
                i--;
            }
        }
        personalMovieDB.genres.forEach((key, i) => console.log(`Favorite genre #${i+1} is ${key}`));
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
            console.log('Too little movies have been watched');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('You are a classic viewer');
        } else if (personalMovieDB.count > 30) {
            console.log('You are a cinephile');
        } else {
            console.log('Error');
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};