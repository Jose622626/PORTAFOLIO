//funcion para reemplazar las vocales por palabras y realizar el encriptado
function encriptar (){
    //la variable texto guardara el texto que ingreso el usuario y lo convertira a minusculas
    var texto = document.querySelector("#input_texto").value.toLowerCase();
    //dentro de la variable textoCifrado guardaremos el texto de la variable "texto" con el reemplazo de las vocales
    var textoCifrado = texto.replace(
        /e/gi, "enter").replace(
            /i/gi, "imes").replace(
                /a/gi, "ai").replace(
                    /o/gi, "ober").replace(
                        /u/gi, "ufat");
    //Tomando el texto ya cifrado guardado en la variable textoCifrado, lo guardaremos y mostraremos en la caja de salida llamada por la etiqueta #msg_salida
    document.querySelector("#msg_salida").value = textoCifrado;
    }
//funcion para reemplazar las palabras por vocales y realizar el desencriptado
function desencriptar (){
    //la variable texto guardara el texto que ingreso el usuario y lo convertira a minusculas
    var texto = document.querySelector("#input_texto").value.toLowerCase(); 
    //dentro de la variable textoCifrado guardaremos el texto de la variable "texto" con el reemplazo de las palabras descritas
    var textoCifrado = texto.replace(
        /enter/gi, "e").replace(
            /imes/gi, "i").replace(
                /ai/gi, "a").replace(
                    /ober/gi, "o").replace(
                        /ufat/gi, "u"); 
    //Tomando el texto ya cifrado guardado en la variable textoCifrado, lo guardaremos y mostraremos en la caja de salida llamada por la etiqueta #msg_salida
    document.querySelector("#msg_salida").value = textoCifrado; 
    }
//funcion creada para copiar el texto en la caja de salida
function copiar(){
    //dentro de la funcion btnCopiar guardaremos el texto de la etiqueta #msg_salida y este sera seleccionado
    var btnCopiar = document.querySelector("#msg_salida");
    btnCopiar.select();
    //con este comando sera coipiado el texto que se selecciono en la variable btnCopiar
    document.execCommand("copy");
}