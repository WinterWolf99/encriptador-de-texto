const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".texto-mostrado");

console.log(textArea)

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    document.querySelector(".muneco").style.display = "none"
    document.querySelector(".btn-copiar").style.display="block";
    document.querySelector(".titulo-mensaje").style.display="none";
    document.querySelector(".seccionMensaje").style.position="relative";
    document.querySelector(".texto-mostrado").style.position="absolute";
    document.querySelector(".texto-mostrado").style.top=0;
    document.querySelector(".texto-mostrado").style.height="65%";
    document.querySelector(".texto-mostrado").style.fontSize="23px";
    document.querySelector(".texto-mostrado").style.textAlign="left";
}

function encriptar (stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar (stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}


function copiarTexto(){
    let textoMostrado=document.querySelector(".texto-mostrado").value;
    navigator.clipboard.writeText(textoMostrado)
        
}