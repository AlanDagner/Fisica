function dividir(){
    let Fuerza=parseInt(document.getElementById("Fuerza").value);
    let Aceleracion=parseInt(document.getElementById("Aceleracion").value);
    
    let Masa=Fuerza/Aceleracion;

    document.getElementById("Masa").value=Masa;
}