function mostrarListaVehiculos(){
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
                    <p class="card-text">Vehicle class: ${element.vehicle_class}</p>
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
mostrarListaVehiculos();

function verDetalles(vehiculo) {
    const divContenido = document.getElementById('contenido');
    divContenido.innerHTML = `
    <div class="card">
        <div class="card-body">
        <table class="table table-striped">
        <tbody>
            <tr>
                <th scope="row">Name</th>
                <td>${vehiculo.name}</td>
            </tr>
            <tr>
                <th scope="row">Model</th>
                <td>${vehiculo.model}</td>
            </tr>
            <tr>
                <th scope=" row">Vehicle class</th>
                <td>${vehiculo.vehicle_class}</td>
            </tr>
            <tr>
                <th scope="row">Manufacturer</th>
                <td>${vehiculo.manufacturer}</td>
            </tr>
            <tr>
                <th scope="row">Cost in credits</th>
                <td>${vehiculo.cost_in_credits}</td>
            </tr>
            <tr>
                <th scope="row">Length</th>
                <td>${vehiculo.length}</td>
            </tr>
            <tr>
                <th scope="row">Crew</th>
                <td>${vehiculo.crew}</td>
            </tr>
            <tr>
                <th scope="row">Passengers</th>
                <td>${vehiculo.passengers}</td>
            </tr>
            <tr>
                <th scope="row">Max atmosphering speed</th>
                <td>${vehiculo.max_atmosphering_speed}</td>
            </tr>
            <tr>
                <th scope="row">Cargo capacity</th>
                <td>${vehiculo.cargo_capacity}</td>
            </tr>
            <tr>
                <th scope="row">Consumables</th>
                <td>${vehiculo.consumables}</td>
            </tr>
        </tbody>
        </table>
        </div>
        <div class="card-footer" id="${vehiculo.name}">
        </div>
    </div>
    `;
    const divFooter = document.getElementById(vehiculo.name);
    var button = document.createElement("button");
    button.innerHTML = "Volver";
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("onclick", `mostrarListaVehiculos()`);
    divFooter.appendChild(button);
}
