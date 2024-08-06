let textoEncritar;
let textoDesencriptar;
let valorEncriptado;
let valorDesencriptado;
function asignarTexto(elemento, texto){
    let elemntoHTML = document.getElementById(elemento);
    elemntoHTML.innerHTML=texto;
    return;
  }
function condicionesIniciales(){
    asignarTexto('encabezado-titulo', 'Encriptador de Texto');
    asignarTexto('container-infor', 'solo minusculas sin acentos');
    asignarTexto('cd-h2', 'Ningun mensaje fue encontrado');
    asignarTexto('cd-ingrese', 'Ingrese el texto que desee encriptar o desencriptar.');
    document.getElementById('copiar').style.display='none';
  }
  function encriptar(){
    var lock = (e, max, arr = e.value.match(/[a-z]/g) || []) => arr.length === max;    
    if (lock(document.getElementById("texto"),document.getElementById("texto").value.length )) {
      textoEncritar= document.getElementById('texto').value;    
      valorEncriptado=btoa(textoEncritar);
      asignarTexto('cd-h2', 'Su mensaje fue Encritado');
      asignarTexto('cd-ingrese', valorEncriptado);
      document.getElementById('copiar').style.display='inline';
      limpiar();     
      
    } else {
      asignarTexto('container-infor', 'Solo debe incluir minusculas sin acentos ni caracteres especiales.');
      document.getElementById('container-infor').style.color='red';
      document.getElementById('container-infor').style.fontSize='24px';
      document.getElementById('container-infor').style.fontWeight='600';
      limpiar();
    }
    
  }
  function desencriptar(){
    textoDesencriptar=document.getElementById('texto').value;
    valorDesencriptado=atob(textoDesencriptar);
    asignarTexto('cd-h2', 'Su mensaje fue Desencritado');
    asignarTexto('cd-ingrese', valorDesencriptado);
    limpiar();
  }
function limpiar() {
    document.getElementById('texto').value='';
}
function copyText() {
  var textToCopy = document.getElementById('cd-ingrese').innerText;

  // Usa la Clipboard API para copiar el texto
  navigator.clipboard.writeText(textToCopy).then(function() {
      alert('Texto copiado exitosamente!');
  }).catch(function(err) {
      console.error('Error al copiar el texto: ', err);
  });
}

  condicionesIniciales();