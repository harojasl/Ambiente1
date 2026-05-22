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

// 🔥 AHORA USA TU BACKEND REAL
async function verificarAPI() {

  const estado = document.getElementById("estado");

  estado.innerHTML = "Consultando servidor local...";

  agregarLog("Consultando backend Node.js en Ubuntu");

  try {

    const respuesta = await fetch(
      "http://192.168.1.13:3000/status"
    );

    const datos = await respuesta.json();

    estado.innerHTML =
      "Servidor operativo ✅";

    agregarLog(
      "Backend OK - status: " + datos.status
    );

    agregarLog(
      "Servidor: " + datos.server
    );

  } catch (error) {

    estado.innerHTML =
      "Error de conexión ❌";

    agregarLog("Error conectando backend");

    console.error(error);
  }
}
