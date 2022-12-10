function mostrarListaPeliculas(){
    const divContenido = document.getElementById('contenido');
    divContenido.innerHTML = '';
fetch('https://swapi.dev/api/films/').then(res => res.json()).then(data => {
    console.log(data);
    data.results.forEach(element => {
        divContenido.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title
                    ">${element.title}</h5>
                    <p class="card-text">Episode id: ${element.episode_id}</p>
                    <p class="card-text">Opening crawl: ${element.opening_crawl}</p>
                    <p class="card-text">Director: ${element.director}</p>
                </div>
                <div class="card-footer" id="${element.title}">
                </div>
            </div>
        </div>
    `;
        const divFooter = document.getElementById(element.title);
        var button = document.createElement("button");
        button.innerHTML = "Ver mas";
        button.setAttribute("class", "btn btn-primary");
        button.setAttribute("onclick", `verDetalles(${JSON.stringify(element)})`);
        divFooter.appendChild(button);
    });
});
}
mostrarListaPeliculas();

function verDetalles(pelicula) {
    const divContenido = document.getElementById('contenido');
    divContenido.innerHTML = `
    <div class="card">
        <div class="card-body">
        <table class="table table-striped">
        <tbody>
            <tr>
                <th scope="row">Title</th>
                <td>${pelicula.title}</td>
            </tr>
            <tr>
                <th scope="row">Episode id</th>
                <td>${pelicula.episode_id}</td>
            </tr>
            <tr>
                <th scope=" row">Opening crawl</th>
                <td>${pelicula.opening_crawl}</td>
            </tr>
            <tr>
                <th scope="row">Director</th>
                <td>${pelicula.director}</td>
            </tr>
            <tr>
                <th scope="row">Producer</th>
                <td>${pelicula.producer}</td>
            </tr>
            <tr>
                <th scope="row">Release date</th>
                <td>${pelicula.release_date}</td>
            </tr>
        </tbody>
        </table>
        </div>
        <div class="card-footer" id="${pelicula.title}">
        </div>
    </div>
    `;
    const divFooter = document.getElementById(pelicula.title);
    var button = document.createElement("button");
    button.innerHTML = "Volver";
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("onclick", `mostrarListaPeliculas()`);
    divFooter.appendChild(button);
}