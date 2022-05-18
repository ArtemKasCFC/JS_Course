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

// Код возьмите из предыдущего домашнего задания


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt('How much movies have you already seen?', '18');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('How much movies have you already seen?', '18');
        }
    },
    showMyDB: function (DB) {
        if (DB.privat == false) {
            console.log(DB);
        }
    },
    writeYourGenres: function () {
        for (let ind = 0; ind < 3; ind++) {
            let genre = prompt(`${ind + 1} What is your favorite genre?`);
            if (genre == null || genre == '') {
                ind--;
            } else {
                personalMovieDB.genres[ind] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Favorite genre #${index + 1} - it's ${item}`);
        });
    },
    remeberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let questionOne = prompt('One of the last watched movies?', 'Nobody'),
                questionTwo = prompt('What is grade?', '8');
            if (questionOne != null && questionTwo != null && questionOne != '' && questionTwo != '' && questionOne.length < 50) {
                personalMovieDB.movies[questionOne] = questionTwo;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
            console.log('A little movies have been watched :(');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Ha ha classic');
        } else if (personalMovieDB.count > 30) {
            console.log('You really like movies');
        } else {
            console.log('Error');
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

// With .split()
// writeYourGenres: function () {
//     for (let ind = 0; ind < 1; ind++) {
//         let genres = prompt(`What is your favorite genres?`);
//         if (genres == null || genres == ''){
//             ind--;
//         } else {
//             personalMovieDB.genres = genres.split(', ');
//         }
//     }
//     personalMovieDB.genres.forEach((item, index) => {
//             console.log(`Favorite genre #${index + 1} - it's ${item}`);
//         });
// },