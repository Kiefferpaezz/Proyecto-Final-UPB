function mostrarListaEspecies() {
    const divContenido = document.getElementById('contenido');
    divContenido.innerHTML = '';
    fetch('https://swapi.dev/api/species/').then(res => res.json()).then(data => {
        console.log(data);
        data.results.forEach(element => {
            divContenido.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title
                    ">${element.name}</h5>
                    <p class="card-text">Classification: ${element.classification}</p>
                    <p class="card-text">Designation: ${element.designation}</p>
                    <p class="card-text">Average height: ${element.average_height}</p>
                    <p class="card-text">Average lifespan:${element.average_lifespan}</p>
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

mostrarListaEspecies();

function verDetalles(especie) {
    const divContenido = document.getElementById('contenido');
    divContenido.innerHTML = `
    <div class="card">
        <div class="card-body">
        <table class="table table-striped">
        <tbody>
            <tr>
                <th scope="row">Name</th>
                <td>${especie.name}</td>
            </tr>
            <tr>
                <th scope="row">Classification</th>
                <td>${especie.classification}</td>
            </tr>
            <tr>
                <th scope=" row">Designation</th>
                <td>${especie.designation}</td>
            </tr>
            <tr>
                <th scope="row">Average height</th>
                <td>${especie.average_height}</td>
            </tr>
            <tr>
                <th scope="row">Average lifespan</th>
                <td>${especie.average_lifespan}</td>
            </tr>
            <tr>
                <th scope="row">Eye colors</th>
                <td>${especie.eye_colors}</td>
            </tr>
            <tr>
                <th scope="row">Hair colors</th>
                <td>${especie.hair_colors}</td>
            </tr>
            <tr>
                <th scope="row">Skin colors</th>
                <td>${especie.skin_colors}</td>
            </tr>
            <tr>
                <th scope="row">Language</th>
                <td>${especie.language}</td>
            </tr>
        </tbody>
        </table>
        </div>
        <div class="card-footer" id="${especie.name}">
    </div>
    `;
    const divFooter = document.getElementById(especie.name);
    var button = document.createElement("button");
    button.innerHTML = "Volver";
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("onclick", `mostrarListaEspecies()`);
    divFooter.appendChild(button);
}