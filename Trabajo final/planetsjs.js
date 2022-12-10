function verDetalles(planet) {
    console.log("hola");
    const divContenido = document.getElementById('contenido');
    console.log(planet);
    divContenido.innerHTML = `
    <div class="card">
        <div class="card-body">
        <table class="table table-striped">
        <tbody> 
            <tr>
                <th scope="row">Name</th>
                <td>${planet.name}</td>
                </tr>
                <tr>
                <th scope="row">Rotation period</th>
                <td>${planet.rotation_period}</td>
                </tr>
                <tr>
                <th scope="row">Orbital period</th>
                <td>${planet.orbital_period}</td>
                </tr>
                <tr>
                <th scope="row">Diameter</th>
                <td>${planet.diameter}</td>
                </tr>
                <tr>
                <th scope="row">Climate</th>
                <td>${planet.climate}</td>
                </tr>
                <tr>
                <th scope="row">Gravity</th>
                <td>${planet.gravity}</td>
                </tr>
                <tr>
                <th scope="row">Terrain</th>
                <td>${planet.terrain}</td>
                </tr>
                <tr>
                <th scope="row">Surface water</th>
                <td>${planet.surface_water}</td>
                </tr>
                <tr>
                <th scope="row">Population</th>
                <td>${planet.population}</td>
                </tr>
        </tbody>
    </table>
    </div>
    <div class="card-footer" id="${planet.name}">
    </div>
    </div>
    `;
    const divFooter = document.getElementById(planet.name);
    var button = document.createElement("button");
    button.innerHTML = "Volver";
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("onclick", `mostarListaPlanetas()`);
    divFooter.appendChild(button);
}

function mostarListaPlanetas() {
    const divContenido = document.getElementById('contenido');
    divContenido.innerHTML = '';
    fetch('https://swapi.dev/api/planets/').then(res => res.json()).then(data => {
        console.log(data);
        data.results.forEach(element => {
            divContenido.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title
                    ">${element.name}</h5>
                    <p class="card-text">Rotation period: ${element.rotation_period}</p>
                    <p class="card-text">Orbital period: ${element.orbital_period}</p>
                    <p class="card-text">Diameter: ${element.diameter}</p>
                    <p class="card-text">Climate: ${element.climate}</p>
                    <p class="card-text">Gravity: ${element.gravity}</p>
                </div>
                <div class="card-footer" id="${element.name}" >
                </div>
            </div>
        </div>
    `;
            const divFooter = document.getElementById(element.name);
            var button = document.createElement("button");
            button.innerHTML = "Ver más";
            button.setAttribute("class", "btn btn-primary");
            button.setAttribute("onclick", `verDetalles(${JSON.stringify(element)})`);
            divFooter.appendChild(button);
        });
    });
}

mostarListaPlanetas();
