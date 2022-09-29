const activo = true;

//Operador ternario(ejecuta un codigo en verdadero o falso)
let mensaje = (activo)?"Activo":"Inactivo";
//Operador ternario corto, solo ejecuta un if si es false no hace nada)
// sirve para el .map cuando se espere una respuesta
mensaje = activo && "activo";

console.log(mensaje);