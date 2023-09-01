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
  const antesButton = document.getElementById("antes");
  const resultadoDiv = document.getElementById("resultado");
  const clientesPre = document.getElementById("clientes");
  const totalP = document.getElementById("total");
  const containerDiv = document.getElementById("container");
  const contenedordatos = document.querySelector("#container");
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
    localStorage.setItem("clientes", JSON.stringify(clientes));
  });

  antesButton.addEventListener("click", function () {
    containerDiv.style.display = "block";
    fetch("datos.json")
      .then((response) => response.json())
      .then((data) => {
        mostrarJson(data);
      });
  });

  if (localStorage.getItem("clientes")) {
    clientes = JSON.parse(localStorage.getItem("clientes"));
    mostrarClientes(clientes);
    totalP.textContent = "Total de clientes: " + clientes.length;
  }

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

  function mostrarJson(datos) {
    datos.forEach((datos) => {
      let card = document.createElement("div");
       card.innerHTML = `<p>${"Nombre = " + datos.nombre}</p>
        <p>${"Apellido = " + datos.apellido}</p>
        <p>${"Años = " + datos.años}</p>
        <p>${"Direccion = " + datos.direccion}</p>
        <p>${"--------------" + datos.espacio}</p>`;
      contenedordatos.appendChild(card);
    });
  }
});
