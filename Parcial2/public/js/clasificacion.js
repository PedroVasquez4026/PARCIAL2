// Clasificaciones parcial 


//por año
const ListarPorAño = (año) => {

    const tvs_url = `https://api.themoviedb.org/3/discover/movie?api_key=d566d989cc0fb28da24dd85e0e49c85b&language=es&year=${año}`;
    fetch(
        tvs_url
    ).then((response) => {
        if (response.status !== 200) {
            console.log(`
        Error: $ { response.statusText }
        Codigo: $ { response.status }
        `);
            return;
        }
        response.json().then((data) => {

            console.log(data.results);
            imprimirHTMLaño(data.results);
        });
    });
};

function imprimirHTMLaño(ano) {
    let html = "";
    ano.forEach((ano) => {

        html += `<div class="moviees" onclick="location.href= '/${ano.id}'">
    Nombre: ${ano.title} <br>
    Fecha :${ano.release_date}<br> 
    <img src="https://image.tmdb.org/t/p/w200${ano.poster_path}"/></div>`;
    });
    const contenedorAp4 = document.querySelector('.año');
    contenedorAp4.innerHTML = html;
}

//por contenido para adultos
fetch(adultosR)
    .then(res => res.json())
    .then(data => {
        console.log("ADULTOS")
        imprimirHTMLAdultosR(data.results);

    })

function imprimirHTMLAdultosR(R) {
    let html = "";
    R.forEach((adulto) => {


        html += `
        <div class="moviees" onclick="location.href= '/${adulto.id}'">
        Nombre: ${adulto.title} <br>
        Fecha :${adulto.release_date}<br> 
        <img src="https://image.tmdb.org/t/p/w200${adulto.poster_path}"/>
        </div>`;
    });
    const contenedorAp4 = document.querySelector('.AdultoR');
    contenedorAp4.innerHTML = html;
}


//peliculas actuales en cartelera
fetch(peliculas_actuales_url)
    .then(res => res.json())
    .then(data => {
        console.log(data.results);
        imprimirHTMLactuales(data.results);
    })


function imprimirHTMLactuales(actual) {
    let html = "";
    actual.forEach((actu) => {


        html += `<div class="moviees" onclick="location.href= '/${actu.id}'">
        Nombre: ${actu.title} <br>
        Fecha :${actu.release_date}<br> 
        <img src="https://image.tmdb.org/t/p/w200${actu.poster_path}"/></div>`;
    });
    const contenedorAp4 = document.querySelector('.PActual');
    contenedorAp4.innerHTML = html;
}


// series de tv 
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


        html += `<div class="moviees" onclick="location.href= '/${series.id}'">
Nombre: ${series.name} <br>
Fecha :${series.first_air_date}<br> 
<img src="https://image.tmdb.org/t/p/w200${series.poster_path}"/></div>`;
    });
    const contenedorAp3 = document.querySelector('.TVPopular');
    contenedorAp3.innerHTML = html;
}