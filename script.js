const logs = document.getElementById("logs");

function agregarLog(mensaje) {

  const item = document.createElement("li");

  item.innerHTML =
    `[${new Date().toLocaleTimeString()}] ${mensaje}`;

  logs.prepend(item);
}

function actualizarHora() {

  document.getElementById("hora").innerHTML =
    new Date().toLocaleTimeString();
}

setInterval(actualizarHora, 1000);

actualizarHora();

agregarLog("Sistema iniciado");

async function verificarAPI() {

  const estado =
    document.getElementById("estado");

  estado.innerHTML =
    "Consultando servidor...";

  agregarLog("Validando API externa");

  try {

    const respuesta =
      await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

    const datos =
      await respuesta.json();

    estado.innerHTML =
      "Servidor operativo ✅";

    agregarLog(
      "Respuesta API correcta ID: " + datos.id
    );

  } catch (error) {

    estado.innerHTML =
      "Error de conexión ❌";

    agregarLog("Error conectando API");
  }
}