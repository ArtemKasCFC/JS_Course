/* Задания на урок 1:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок 2:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const addForm = document.querySelector('form.add'),
          inputField = document.querySelector('.adding__input'),
          checkbox = document.querySelector('[type="checkbox"]'),
          movieList = document.querySelector('.promo__interactive-list');

    
    addForm.addEventListener('submit', event => {
        event.preventDefault();

        let inputValue = inputField.value
        if (inputValue.length > 21) {
            inputValue = `${inputValue.slice(0, 21)}...`
        }

        if (checkbox.checked) {
            console.log('Добавляем любимый фильм')
        }

        if (inputValue) {
            movieDB.movies.push(inputValue)
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });

    const deleteAdv = () => document.querySelectorAll(".promo__adv img").forEach(item => item.remove());

    const makeChanges = () => {
        document.querySelector(".promo__genre").textContent = "ДРАМА"
    
        document.querySelector(".promo__bg").style.backgroundImage = "url('img/bg.jpg')"
    };

    const sortArr = () => movieDB.movies.sort();

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }
    
    deleteAdv();
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});



