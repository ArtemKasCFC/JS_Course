/* Задания на урок:

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


    const promoAdv = document.querySelectorAll('.promo__adv img'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        promoList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('.add'),
        addInput = document.querySelector('.adding__input'),
        checkbox = document.querySelector('[type="checkbox"]')

    addForm.addEventListener('submit', (e) => {
        e.preventDefault()

        let newMovie = addInput.value
        const favorite = checkbox.checked

        if (newMovie) {

            if (newMovie.length > 21) {
                newMovie = `${newMovie.substring(0, 22)}...`
            }

            movieDB.movies.push(newMovie)
            movieDB.movies.sort()

            createMovieList(movieDB.movies, promoList)
        }

        if (favorite) {
            console.log('Добавляем любимый фильм')
        }

        e.target.reset()
    })


    const deleteAdv = (arr) => {
        arr.forEach(value => value.remove())
    }

    deleteAdv(promoAdv)


    promoGenre.textContent = 'драма'

    promoBg.style.backgroundImage = "url('img/bg.jpg')"


    function createMovieList(movies, parent) {

        parent.innerHTML = ''
        movies.sort()

        movies.forEach((movie, ind) => parent.innerHTML += `<li class="promo__interactive-item">${ind +1} - ${movie}
        <div class="delete"></div>
        </li>`)

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(movies, parent)
            })
        })
    }



    createMovieList(movieDB.movies, promoList)
})