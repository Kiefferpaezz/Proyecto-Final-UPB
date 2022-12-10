function mostrarListaNaves() {
    const divContenido = document.getElementById('contenido');
    divContenido.innerHTML = '';
    fetch('https://swapi.dev/api/starships/').then(res => res.json()).then(data => {
        console.log(data);
        data.results.forEach(element => {
            divContenido.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title
                    ">${element.name}</h5>
                    <p class="card-text">Model: ${element.model}</p>
                    <p class="card-text">Starship class: ${element.starship_class}</p>
                    <p class="card-text">Manufacturer: ${element.manufacturer}</p>
                    <p class="card-text">Cost in credits:${element.cost_in_credits}</p>
                    <p class="card-text">Length: ${element.length}</p>
                </div>
                <div class="card-footer" id="${element.name}">
                </div>
            </div>
        </div>
    `;
            const divFooter = document.getElementById(element.name);
            var button = document.createElement("button");
            button.innerHTML = "Ver mas";
            button.setAttribute("class", "btn btn-primary");
            button.setAttribute("onclick", `verDetalles(${JSON.stringify(element)})`);
            divFooter.appendChild(button);
        });
    });
}

function verDetalles(nave) {
    const divContenido = document.getElementById('contenido');
    divContenido.innerHTML = `
    <div class="card">
        <div class="card-body">
        <table class="table table-striped">
        <tbody>
            <tr>
                <th scope="row">Name</th>
                <td>${nave.name}</td>
            </tr>
            <tr>
                <th scope="row">Model</th>
                <td>${nave.model}</td>
            </tr>
            <tr>
                <th scope=" row">Starship class</th>
                <td>${nave.starship_class}</td>
            </tr>
            <tr>
                <th scope="row">Manufacturer</th>
                <td>${nave.manufacturer}</td>
            </tr>
            <tr>
                <th scope="row">Cost in credits</th>
                <td>${nave.cost_in_credits}</td>
            </tr>
            <tr>
                <th scope="row">Length</th>
                <td>${nave.length}</td>
            </tr>
            <tr>
                <th scope="row">Crew</th>
                <td>${nave.crew}</td>
            </tr>
            <tr>
                <th scope="row">Passengers</th>
                <td>${nave.passengers}</td>
            </tr>
            <tr>
                <th scope="row">Max atmosphering speed</th>
                <td>${nave.max_atmosphering_speed}</td>
            </tr>
            <tr>
                <th scope="row">Hyperdrive rating</th>
                <td>${nave.hyperdrive_rating}</td>
            </tr>
            <tr>
                <th scope="row">MGLT</th>
                <td>${nave.MGLT}</td>
            </tr>
            <tr>
                <th scope="row">Cargo capacity</th>
                <td>${nave.cargo_capacity}</td>
            </tr>
            <tr>
                <th scope="row">Consumables</th>
                <td>${nave.consumables}</td>
            </tr>
        </tbody>
        </table>
        </div>
        <div class="card-footer" id="${nave.name}">
        </div>
    </div>
    `;
    const divFooter = document.getElementById(nave.name);
    var button = document.createElement("button");
    button.innerHTML = "Volver";
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("onclick", `mostrarListaNaves()`);
    divFooter.appendChild(button);
}

mostrarListaNaves();