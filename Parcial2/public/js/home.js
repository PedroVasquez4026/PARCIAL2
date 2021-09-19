fetch(genres_list_http + new URLSearchParams({
        api_key: api_key
    }))
    .then(res => res.json())
    .then(data => {
        data.genres.forEach(item => {
            fetchMoviesListByGenres(item.id, item.name);

            //console.table(item);
        })
    })

const fetchMoviesListByGenres = (id, genres) => {
    fetch(movie_genres_http + new URLSearchParams({
            api_key: api_key,
            with_genres: id,
            page: Math.floor(Math.random() * 3) + 1
        }))
        .then(res => res.json())
        .then(data => {
            makeCategoryElement(`${genres}_movies`, data.results);
        })
        .catch(err => console.log(err));
}

const main = document.querySelector('.main');
const makeCategoryElement = (category, data) => {
    main.innerHTML += ` <div class="movie-list">
    <button class="pre-btn"><img src="img/pre.png" alt=""></button>
    <h1 class="movie-category">${category.split("_").join(" ")}</h1>
    <div class="movie-container" id="${category}">

    </div>
    <button class="nxt-btn"><img src="img/nxt.png" alt=""></button>
</div>`;
    makeCard(category, data);
}

const makeCard = (id, data) => {
    const movieContainer = document.getElementById(id);
    data.forEach((item, i) => {
        //console.log(item);
        if (item.backdrop_path == null) {
            item.backdrop_path = item.poster_path;
            if (item.backdrop_path == null) {
                return;
            }
        }

        movieContainer.innerHTML += `
        <div class="movie" onclick="location.href= '/${item.id}'">
        <img src="${img_url}${item.backdrop_path}" alt="">
        <p class="movie-title">${item.title}</p>
        </div>
        `;
        if (i == data.length - 1) {
            setTimeout(() => {
                setupScrolling();
            }, 100);
        }

    })

}

fetch(tv_popular_url + new URLSearchParams({
        api_key: api_key
    }))
    .then(res => res.json())
    .then(data => {
        console.log(data.results);
        imprimirHTMLtvs(data.results);
    })


function imprimirHTMLtvs(series) {
    let html = "";
    series.forEach((series) => {


        html += `<li>
        Nombre: ${series.name} <br>
        Fecha :${series.first_air_date}<br> 
        <img src="https://image.tmdb.org/t/p/w200${series.poster_path}"/></li>`;
    });
    const contenedorAp3 = document.querySelector('.tvs');
    contenedorAp3.innerHTML = html;
}