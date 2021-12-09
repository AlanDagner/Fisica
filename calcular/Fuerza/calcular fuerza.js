function multiplicar(){
    let Masa=parseInt(document.getElementById("Masa").value);
    let Aceleracion=parseInt(document.getElementById("Aceleracion").value);
    
    let Fuerza=Masa*Aceleracion;

    document.getElementById("Fuerza").value=Fuerza;
}