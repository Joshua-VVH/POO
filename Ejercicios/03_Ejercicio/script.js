function login(){
    let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
    let contraseña = prompt("Ingrese su contaseña: ");

    let resultado = "";
    const  usuario = "usuario123";
    const contra = "secreto";

    if (nombreUsuario == usuario && contraseña == contra){
        resultado = "<h2>Lograste acceder</h2>";
    }
    else {
        resultado = "<h2>No lograste acceder</h2>";
    }
    document.getElementById("lista").innerHTML = resultado;
}