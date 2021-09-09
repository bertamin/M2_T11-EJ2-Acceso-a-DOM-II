var resultado="";
do{
  var cadena=prompt("Introduce tu cadena de texto");

  if(resultado == ""){
    resultado=resultado + cadena;
  }else{
    resultado=resultado + " - " + cadena;
  }
}while(confirm("¿Desea seguir?"));

document.write(resultado);
