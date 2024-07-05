let listaOrdenada = document.getElementById('lista-ordenada');

let arrayFrutas = ["Uva.", "Naranja.", "Sandía.", "Manzana."];

let lista = document.createElement('ol');

for (let fruta of arrayFrutas) {
    let item = document.createElement('li');
    item.innerText = fruta;
    lista.appendChild(item);
}

listaOrdenada.appendChild(lista);
