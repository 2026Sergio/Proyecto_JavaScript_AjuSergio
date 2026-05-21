

const estadisticaprincipal = document.getElementById("eatadisticaprincipal")
const tablaestadisticas = document.getElementById("tabla-estadisticas")

let estadiscticaporv =JSON.parse(localStorage.getItem(`tiposVehiculos`)) 
const estadisticaporv = [
    { nombre: "Juan Pérez", tipo: "Automóvil", placa: "P-123ABC", espacio: "A-12" },
    { nombre: "María López", tipo: "Motocicleta", placa: "M-456DEF", espacio: "B-05" },
    { nombre: "Carlos Gómez", tipo: "Camioneta", placa: "C-789GHI", espacio: "A-15" }
];

const tablaBody = document.getElementById("tabla-estadisticas");
estadisticaprincipal.addEventListener("submit", function(e){
    e.preventDefault();
    
    let fechaest1 = document.getElementById("fechaest1");
    let fechaest2 = document.getElementById("fechaest2");

    if(!fechaest1){
        alert("escriba la primera fecha");
        return;
    }
    if(!fechaest2){
        alert("ingrese la segunda fecha")
        return;
    } 
});

function cargarTablaestadisticas() {
    
    tablaBody.innerHTML = "";

    vehiculos.forEach((vehiculo, indice) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${vehiculo.nombre}</td>
            <td>${vehiculo.tipo}</td>
            <td><strong>${vehiculo.placa}</strong></td>
            <td>${vehiculo.espacio}</td>
            <td>
                <button onclick="eliminarVehiculo(${indice})" class="btn-eliminar">
                    Retirar
                </button>
            </td>
        `;
        tablaBody.appendChild(fila);
    });
}
function eliminarVehiculo(indice) {

    vehiculos.splice(indice, 1);
    cargarTabla();
}

document.addEventListener("DOMContentLoaded", cargarTabla);
