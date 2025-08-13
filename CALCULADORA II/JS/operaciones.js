// Función para obtener los valores de los inputs
function obtenerValores() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    return [n1, n2];
}

// Suma
function sumar() {
    let [n1, n2] = obtenerValores();
    document.getElementById("resultado").innerText = "Resultado: " + (n1 + n2);
}

// Resta
function restar() {
    let [n1, n2] = obtenerValores();
    document.getElementById("resultado").innerText = "Resultado: " + (n1 - n2);
}

// Multiplicación
function multiplicar() {
    let [n1, n2] = obtenerValores();
    document.getElementById("resultado").innerText = "Resultado: " + (n1 * n2);
}

// División
function dividir() {
    let [n1, n2] = obtenerValores();
    if (n2 === 0) {
        document.getElementById("resultado").innerText = "No se puede dividir entre 0";
    } else {
        document.getElementById("resultado").innerText = "Resultado: " + (n1 / n2);
    }
}
