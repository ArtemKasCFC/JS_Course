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


const numberOfFilms = +prompt('How many movies have you already watched?', '18');

if (numberOfFilms >= 0 && numberOfFilms < 10) {
    console.log('Too little movies have been watched');
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    console.log('You are a classic viewer');
} else if (numberOfFilms > 30) {
    console.log('You are a cinephile');
} else {
    console.log('Error');
}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let questionOne,
    questionTwo;


// by For
for (let i = 0; i < 2; i++) {
    questionOne = prompt('One of the last watched movies?', 'Nobody'),
    questionTwo = prompt('What is your grade?', '8');
    
    if (!questionOne || !questionTwo || questionOne.length > 50) {
        i--;
    } else {
        personalMovieDB.movies[questionOne] = questionTwo;
    }
}

// by While
// let j = 0;
// while (j < 2) {
//     questionOne = prompt('One of the last watched movies?', 'Nobody'),
//     questionTwo = prompt('What is your grade?', '8');
//     j++;
//     if (!questionOne || !questionTwo || questionOne.length > 50) {
//         j--;
//     } else {
//         personalMovieDB.movies[questionOne] = questionTwo;
//     }
// }


// by Do While
// let j = 0;
// do {
//     questionOne = prompt('One of the last watched movies?', 'Nobody'),
//     questionTwo = prompt('What is your grade?', '8');
//     j++;
//     if (!questionOne || !questionTwo || questionOne.length > 50) {
//         j--;
//     } else {
//         personalMovieDB.movies[questionOne] = questionTwo;
//     }
// }
// while (j < 2);