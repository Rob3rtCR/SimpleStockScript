//$
//(selector)
//.accion
$(function(){
    $('.container').mouseenter(function(){
        $("#stock").slideDown();
    })
    $('.container').mouseleave(function(){
        $("#stock").slideUp();
    })
});
//------------------
$(function() {
    //Operaciones matemáticas
    $('#calcular').click(function(e) {
        e.preventDefault();
      //Almaceno los valores de los inputs
        var precio = $('#precio').val();
      //Condiciona para que acepte solo números usando las expresiones regulares
        if(precio.match(/^[0-9]+$/)){
            //porcentaje
              var resultado = parseFloat(precio) * 21 / 100;
            }
      //Muestro el resultado
    $('#resultado').text(resultado);
    });
})