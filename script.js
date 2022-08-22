//esto se usa para manipular el DOM
//document.getelementbyid("error").innerHTML = "Error: No se ha podido enviar el mensaje";
//parent.getElementsByClassName("error").innerHTML = "Error: No se ha podido enviar el mensaje";
//parent.getElementsByTagName("p").innerHTML = "Error: No se ha podido enviar el mensaje";
//estos son mejore selectores:
//parentElement.querySelector(".error").innerHTML = "Error: No se ha podido enviar el mensaje"; (selecciona el primer elemento que coincida con la clase)
//parentElement.queryselectorAll(".error")[0].innerHTML = "Error: No se ha podido enviar el mensaje"; (selecciona todos los elementos que coincidan con la clase y selecciona el primero)
//elementList = parentNode.querySelectorAll(selectors);|elementList = parentNode.querySelectorAll(selectors); (selecciona todos los elementos que coincidan con la clase y selecciona el primero)
const containerError = document.querySelector(".container-error");
const textArea = document.querySelector(".imput-text");
const containerResult = document.querySelector(".container-result");
const mensaje = document.querySelector("#presult");
const btnEncriptar = document.querySelector("#encriptar");

btnEncriptar.addEventListener("click", function botnEncriptar(){
    mensajeError ();
    mensajeEncriptado ();
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
  });

function mensajeError(){
    containerError.style.display = 'none' 
} 
function mensajeEncriptado(){
    containerResult.style.display = 'flex';
}

function encriptar(stringEncritada){
    let matrizCodigos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncritada = stringEncritada.toLowerCase();

    for(let i = 0; i < matrizCodigos.length; i++){
       if  (stringEncritada.includes(matrizCodigos[i][0])){
            stringEncritada = stringEncritada.replaceAll(matrizCodigos[i][0],matrizCodigos[i][1]);
        }
    }
    return stringEncritada;
}

//function btnDesencriptar(){
  //  const textoDesencriptado = desencriptar(textArea.value);
    //mensaje.value = textoDesencriptado;
//}
