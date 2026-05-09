// Modulo de autenticacion
function login(usuario, password) {
    if (usuario === "admin" && password === "1234") {
        return "Acceso permitido";
    }
    return "Acceso denegado";
}
