let clientes = " Bienvenidos nuevos Clientes: \n"
let cantidad_clientes = 0
let rta = ""
let elejir = prompt("bienvenido, elija una opcion\na: Wifi\nb: Fibra")
if ((elejir == "a") || (elejir == "b")){

}else{
  alert ("Opcion no valida")
  
}

function saludar(nombre) {
    alert("¡Hola, " + nombre + "!");
  }
do{
    
    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apellido")    
    let edad = Number(prompt("Ingrese su edad"))
    let direccion = prompt("Ingrese su Direccion")
    clientes = clientes + "\nNombre: "+ nombre + "\nApellido: "+ apellido + "\nEdad: "+ edad +"\nDireccion: " + direccion
    rta = prompt("¿Desea salir?(Escriba 'ESC' para salir)").toUpperCase()
    cantidad_clientes= cantidad_clientes + 1
}while(rta != "ESC")

saludar ("clientes")

alert(clientes)
let total = alert("total de clientes\n" + cantidad_clientes)