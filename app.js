let clientes = [];
let cantidad_clientes = 0;
let mostrar = "";

function saludar(nombre) {
  alert("¡Hola, " + nombre + "!");
}

const opciones = [
  { codigo: "a", tipo: "Wifi" },
  { codigo: "b", tipo: "Fibra" },
];

function obtenerTipo(codigo) {
  return opciones.find((opcion) => opcion.codigo === codigo).tipo;
}

function ingresarCliente() {
  let cliente = {};
  cliente.nombre = prompt("Ingrese su nombre");
  cliente.apellido = prompt("Ingrese su apellido");
  cliente.edad = Number(prompt("Ingrese su edad"));
  cliente.direccion = prompt("Ingrese su dirección");
  cliente.tipo = obtenerTipo(elejir);
  return cliente;
}

function mostrarClientes(clientes) {
  let mensaje = "Bienvenidos nuevos Clientes:\n";
  clientes.forEach((cliente) => {
    mensaje +=
      "\nNombre: " +
      cliente.nombre +
      "\nApellido: " +
      cliente.apellido +
      "\nEdad: " +
      cliente.edad +
      "\nDireccion: " +
      cliente.direccion +
      "\nTipo: " +
      cliente.tipo;
  });
  return mensaje;
}

let elejir = prompt(
  "Bienvenido Nuevos Clientes, elija una opción:\na: Wifi\nb: Fibra"
).toLowerCase();

const opcionesValidas = opciones.map((opcion) => opcion.codigo);
if (opcionesValidas.includes(elejir)) {
  do {
    clientes.push(ingresarCliente());
    cantidad_clientes += 1;
    mostrar = clientes[clientes.length - 1].nombre;
    rta = prompt("¿Desea salir? (Escriba 'ESC' para salir)").toUpperCase();
  } while (rta !== "ESC");

  saludar(mostrar);
  alert(mostrarClientes(clientes));
  alert("Total de clientes: " + cantidad_clientes);
} else {
  alert("Opción no válida");
}