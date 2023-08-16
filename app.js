document.addEventListener("DOMContentLoaded", function () {
  const opciones = [
    { codigo: "a", tipo: "Wifi" },
    { codigo: "b", tipo: "Fibra" },
  ];

  const opcionSelect = document.getElementById("opcion");
  const comenzarButton = document.getElementById("comenzar");
  const formularioDiv = document.getElementById("formulario");
  const nombreInput = document.getElementById("nombre");
  const apellidoInput = document.getElementById("apellido");
  const edadInput = document.getElementById("edad");
  const direccionInput = document.getElementById("direccion");
  const agregarButton = document.getElementById("agregar");
  const finalizarButton = document.getElementById("finalizar");
  const resultadoDiv = document.getElementById("resultado");
  const clientesPre = document.getElementById("clientes");
  const totalP = document.getElementById("total");

  let elejir = "";

  comenzarButton.addEventListener("click", function () {
    elejir = opcionSelect.value;
    formularioDiv.style.display = "block";
    comenzarButton.disabled = true;
  });

  let clientes = [];
  agregarButton.addEventListener("click", function () {
    let cliente = {
      nombre: nombreInput.value,
      apellido: apellidoInput.value,
      edad: parseInt(edadInput.value),
      direccion: direccionInput.value,
      tipo: obtenerTipo(elejir),
    };
    clientes.push(cliente);
    limpiarFormulario();
  });

  finalizarButton.addEventListener("click", function () {
    resultadoDiv.style.display = "block";
    mostrarClientes(clientes);
    totalP.textContent = "Total de clientes: " + clientes.length;
  });

  function obtenerTipo(codigo) {
    return opciones.find((opcion) => opcion.codigo === codigo).tipo;
  }

  function limpiarFormulario() {
    nombreInput.value = "";
    apellidoInput.value = "";
    edadInput.value = "";
    direccionInput.value = "";
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
        cliente.tipo +
        "\n";
    });
    clientesPre.textContent = mensaje;
  }
});