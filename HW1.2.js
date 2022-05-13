/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;


do {
    numberOfFilms = +prompt('How much movies have you already seen?', '18');
}
while (numberOfFilms == false);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


if (personalMovieDB.count < 10 && personalMovieDB >= 0) {
    console.log('A little movies have been watched :(');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Ha ha classic');
} else if (personalMovieDB.count > 30) {
    console.log('You really like movies');
} else {
    console.log('Error');
}

// With for
for (let i = 0; i < 2; i++) {
    let questionOne = prompt('One of the last watched movies?', 'Nobody'),
        questionTwo = prompt('What is grade?', '8');
    if (questionOne != null && questionTwo != null && questionOne != '' && questionTwo != '' && questionOne.length < 50) {
        personalMovieDB.movies[questionOne] = questionTwo;
    } else {
        i--;
    }
}

// With While
// let i = 0;
// while (i < 2) {
//     let questionOne = prompt('One of the last watched movies?', 'Nobody'),
//         questionTwo = prompt('What is grade?', '8');
//         if (questionOne != null && questionTwo != null && questionOne != '' && questionTwo != '' && questionOne.length < 50) {
//             personalMovieDB.movies[questionOne] = questionTwo;
//             i++;
//         } else {
//             continue;
//         }
// }

// With Do While
// let i = 0;
// do {
//     let questionOne = prompt('One of the last watched movies?', 'Nobody'),
//         questionTwo = prompt('What is grade?', '8');
//         if (questionOne != null && questionTwo != null && questionOne != '' && questionTwo != '' && questionOne.length < 50) {
//             personalMovieDB.movies[questionOne] = questionTwo;
//             i++;
//         } else {
//             continue;
//         }
// }
// while (i < 2);