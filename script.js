
const userEmail = document.getElementById("userEmail");
const userEdad = document.getElementById("userEdad");
const userPassword = document.getElementById("userPassword");
const userPassword2 = document.getElementById("userPassword2");

const capturarDatos = (event) => {
    event.preventDefault();

    const correo = userEmail.value;
    const edad = userEdad.value;
    const password = userPassword.value;
    const password2 = userPassword2.value;

    if (edad < 18) {
        alert("debes ser mayor de 18 años");
        return; 
    }

   
    if (password !== password2) {
        alert("Las contraseñas no coinciden");
        return; 
    }


    localStorage.setItem("userEmail", correo);

   
    window.location.href = "bienvenido.html";
};


const validarLogin = () => {

    const emailLocal = localStorage.getItem("userEmail");

    
    if (emailLocal) { 
        window.location.href = "bienvenido.html";
    }
};

if (!window.location.pathname.includes("bienvenido.html")) { 
    validarLogin();
}


const logout = () => {
    localStorage.clear();
    window.location.href = "index.html";
};

