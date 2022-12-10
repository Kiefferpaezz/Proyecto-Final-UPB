function mostarListaPersonas() {
    const divContenido = document.getElementById('contenido');
    divContenido.innerHTML = '';
    fetch('https://swapi.dev/api/people/').then(res => res.json()).then(data => {
        console.log(data);
        data.results.forEach(element => {
            divContenido.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title
                    ">${element.name}</h5>
                    <p class="card-text">Birth year: ${element.birth_year}</p>
                    <p class="card-text">Gender: ${element.gender}</p>
                    <p class="card-text">Mass: ${element.mass}</p>
                    <p class="card-text">Skin color:${element.skin_color}</p>
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

mostarListaPersonas();

function verDetalles(persona) {
    const divContenido = document.getElementById('contenido');
    divContenido.innerHTML = `
    <div class="card">
        <div class="card-body">
        <table class="table table-striped">
        <tbody> 
            <tr>
                <th scope="row">Name</th>
                <td>${persona.name}</td>
            </tr>
            <tr>
                <th scope="row">Birth year</th>
                <td>${persona.birth_year}</td>
            </tr>
            <tr>
                <th scope=" row">Gender</th>
                <td>${persona.gender}</td>
            </tr>
            <tr>
                <th scope="row">Mass</th>
                <td>${persona.mass}</td>
            </tr>
            <tr>
                <th scope="row">Skin color</th>
                <td>${persona.skin_color}</td>
            </tr>
            <tr>
                <th scope="row">Eye color</th>
                <td>${persona.eye_color}</td>
            </tr>
            <tr>
                <th scope="row">Hair color</th>
                <td>${persona.hair_color}</td>
            </tr>
            <tr>
                <th scope="row">Height</th>
                <td>${persona.height}</td>
            </tr>
        </tbody>
    </table>
    </div>
    <div class="card-footer" id="${persona.name}">
    </div>
    </div>
    
    `;
    const divFooter = document.getElementById(persona.name);
    var button = document.createElement("button");
    button.innerHTML = "Volver";
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("onclick", `mostarListaPersonas()`);
    divFooter.appendChild(button);
} 