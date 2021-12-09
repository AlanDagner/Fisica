function dividir(){
    let Fuerza=parseInt(document.getElementById("Fuerza").value);
    let Masa=parseInt(document.getElementById("Masa").value);
    
    let Aceleracion=Fuerza/Masa;

    document.getElementById("Aceleracion").value=Aceleracion;
}