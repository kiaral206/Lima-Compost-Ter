import { createTask, readTasks } from './Form.js';


const formularioCrearCuenta = document.getElementById("formCrearCuenta");
const btnAccion = document.getElementById("Registrar");


// obtenerFormulario();
// obtenerFormularioTr();

let estadoEditando = false;
let id = "";


formularioCrearCuenta.addEventListener("submit", async (event) => {
    event.preventDefault();

    const FormUsuario = formularioCrearCuenta["nombreUsuario"].value;
    const FormCorreo = formularioCrearCuenta["correoUsuario"].value;
    const DNI = formularioCrearCuenta["DNI"].value;
    const Distrito = formularioCrearCuenta["Distrito"].value;
    // const Grado = formularioCrearCuenta["Grado"].value;
    // const Contraseña = formularioCrearCuenta["contraUsuario"].value;

    if (estadoEditando) {
        updateTask(id, DatosUsuario);
        btnAccion.textContent = "Agregar";
        estadoEditando = false;
    } else {
        try {
            // alert("¡BIENVENIDO A KAYFUTURE SE CREO TU CUENTA CON EXITO! Ahora ya puedes iniciar sesión.");     , docReferencia
            // const docReferencia = await createTask(CuentaUsuario);
            // console.log("Usuario agregado", docReferencia);
        } catch (error) {
            console.log("Algo salio mal", error);
        }
    }



});

//IDK



//I2
async function obtenerForm(identificador) {
    const task = await getTask(identificador);
    const { titulo, descripcion } = task.data();
    formularioCrearCuenta["nombreUsuario"].value = FormUsuario;
    formularioCrearCuenta["correoUsuario"].value = FormCorreo;
    formularioCrearCuenta["DNI"].value = DNI;
    formularioCrearCuenta["Colegio"].value = Colegio;
    // formularioCrearCuenta["Grado"].value = Grado;
    // formularioCrearCuenta["contraUsuario"].value = Contraseña;

}


function limpiarHtml(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}