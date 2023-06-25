import { auth } from '../database/Form.js';
import { createUserWithEmailAndPassword, updateProfile } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { createTask } from '../database/Form.js';

const formularioRegistro = document.getElementById("formCrearCuenta");


formularioRegistro.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nombre = formularioRegistro["nombreUsuario"].value;
    const correo = formularioRegistro["correoUsuario"].value;
    const contra = formularioRegistro["contraUsuario"].value;

    const DNI = formularioRegistro["DNI"].value;
    const Distrito = formularioRegistro["Distrito"].value;
    // const Grado = formularioRegistro["Grado"].value;
    // const Contraseña = formularioCrearCuenta["contraUsuario"].value;
    if (nombre == "" && correo == "") {
        alert("Ambos campos son obligatorios");
        return;
    }

    const CuentaUsuario = {
        Usuario: nombre,
        Correo: correo,
        DNI: DNI,
        Distrito: Distrito,
        // Contraseña: contra,
    }

    try {
        const credenciales = await createUserWithEmailAndPassword(auth, correo, contra);
        if(credenciales){
            await createTask(CuentaUsuario);
            await updateProfile(auth.currentUser, { displayName: nombre });
        }
        
        formularioRegistro.reset();
        console.log(credenciales);
    } catch (error) {
        if(error.code == "auth/email-already-in-use"){
            alert("Correo ya existe")
          }else if(error.code == "auth/weak-password")
          alert("Contraseña muy corta")
    }

});
