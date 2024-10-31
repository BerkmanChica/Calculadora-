let a = document.getElementById("a");
let valorAnterior = "";
let operador = "";

["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "cero"].forEach((id, index) => {
    document.getElementById(id).addEventListener("click", () => {
        a.value += index === 9 ? "0" : index + 1;
    });
});

document.getElementById("punto").addEventListener("click", () => {
    if (!a.value.includes(".")) {
        a.value += ".";
    }
});

document.getElementById("mas_menos").addEventListener("click", () => {
    a.value = a.value ? String(Number(a.value) * -1) : "";
});

document.getElementById("ac").addEventListener("click", () => {
    a.value = "";
    valorAnterior = "";
    operador = "";
});

const operaciones = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: (a, b) => b !== 0 ? a / b : "Error"
};

["suma", "resta", "multiplicacion", "division"].forEach(op => {
    document.getElementById(op).addEventListener("click", () => {
        valorAnterior = Number(a.value);
        operador = op;
        a.value = "";
    });
});

document.getElementById("ig").addEventListener("click", () => {
    if (operador && valorAnterior !== "" && a.value !== "") {
        const resultado = operaciones[operador](valorAnterior, Number(a.value));
        a.value = resultado !== undefined ? resultado : "Error";
        operador = "";
    }
});
