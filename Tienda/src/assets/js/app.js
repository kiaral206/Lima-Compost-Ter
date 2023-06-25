
//Slider
const botonRegistrarse = document.getElementById("signUp");
const botonIniciarSesion = document.getElementById("signIn");
const main = document.getElementById("main");


botonRegistrarse.addEventListener('click',()=>{
     main.classList.add("right-panel-active");
});

botonIniciarSesion.addEventListener('click',()=>{
    main.classList.remove("right-panel-active");
});