//AJAX
document.querySelector('#Dolar').addEventListener('click', function(){
    obtenerDatos();
})

function obtenerDatos (){
    let url = 'https://mindicador.cl/api/dolar';

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    
    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText);
        console.log(datos.serie);
        let result = document.querySelector('#result')
        result.innerHTML = '';

        let i = 0;

        for(let item of datos.serie){
            i++;
            result.innerHTML += `<li class="cotizacion">${item.fecha.substr(0,10)} | $ ${item.valor}</li>`;
            if(i>6){
                break;
            }
            }
        }
    }
}