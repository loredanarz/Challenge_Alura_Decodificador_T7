/*-----------Criptografar---------------*/

function criptografar() {
    let texto = document.getElementById("textArea").value.toLowerCase();
    element = document.getElementById("imagen");
    element.src = src = "img/cat.jpg";

     texArea = texto.replace(/e/img, "enter");
     texArea = texArea.replace(/o/img, "ober");
     texArea = texArea.replace(/i/img, "imes");
     texArea = texArea.replace(/a/img, "ai");
     texArea = texArea.replace(/u/img, "ufat");


    document.getElementById("textoDesencriptado").innerHTML = texArea;
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";
    document.getElementById("h3-encontrado").style.display = "none";
  


}
/*-----------Descriptografar---------------*/
function descriptografar() {
    let texto = document.getElementById("textArea").value.toLowerCase();
    element = document.getElementById("imagen");
    element.src = src = "img/cat-2.jpg";

     texArea = texto.replace(/enter/img, "e");
     texArea = texArea.replace(/ober/img, "o");
     texArea = texArea.replace(/imes/img, "i");
     texArea = texArea.replace(/ai/img, "a");
     texArea = texArea.replace(/ufat/img, "u");


    document.getElementById("textoDesencriptado").innerHTML = texArea;
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";

}

/*-----------Copiar---------------*/
function copy() {
    let contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado");
}

/*-----------Borrar ---------------*/

function borrarTexto() {
    let borrar = document.getElementById("textArea", "textoDesencriptado").value = "";
    borrar = document.getElementById("textoDesencriptado").value = "";
    borrar = document.getElementById("h3-encontrado").value = "show";
    document.location.reload();


}