$("#boton").click(function(){
     cargarCiudad();
     $("#nombreCiudad").val(""); 
})

$("input").keypress(function(event){
    if(event.key=="Enter"){
        cargarCiudad();
        $("#nombreCiudad").val("");
    }  
})

function cargarCiudad (){
    var ciudad = ($("#nombreCiudad").val());
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=95176c8edea30e33338e0eaddd53a916", function(data) {
    document.querySelector(".container").style.visibility = "visible"
    document.querySelector("#ciudad").textContent = data.name
    var temperatura = data.main.temp
    temperatura = (temperatura - 273.15).toFixed(1)
    $("#temperatura").html(temperatura + "<sup>°C</sup>")
    var icono = data.weather[0].icon
    $("#wicon").attr("src","http://openweathermap.org/img/wn/"+icono+".png")
    document.querySelector("#descripcion").textContent = data.weather[0].description
    })    
}