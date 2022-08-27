
async function llamadaFecth(){

    const llamada = await fetch('productos.json');

    const respuesta = await llamada.json();

    rellenarHTML(respuesta);


}


function rellenarHTML(array = []){

    const tbody = document.querySelector('tbody');

    array.forEach( (producto) => {

        const tr = document.createElement('tr');

        tr.innerHTML = `<td><img src="${producto.imagen}"></td>
                        <td>${producto.nombre}</td>
                        <td>${producto.precio}</td>`
        
        tbody.appendChild(tr);

    });

}

llamadaFecth();