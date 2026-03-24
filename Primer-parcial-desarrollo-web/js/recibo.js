document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("login") !== "true") {
        window.location.href = "login.html";
        return;
    }

    generarRecibo();

});


const generarRecibo = () => {

    const productos = [
        { nombre: "Camisa", precio: 50000 },
        { nombre: "Pantalón", precio: 80000 },
        { nombre: "Zapatos", precio: 120000 }
    ];

    let subtotal = 0;

    productos.forEach(p => {
        subtotal += p.precio;
    });

    const iva = subtotal * 0.19;
    const total = subtotal + iva;

    const fecha = new Date().toLocaleString();

    let recibo = `
==========================
        RECIBO
==========================

Fecha: ${fecha}

Productos:
`;

    productos.forEach(p => {
        recibo += `- ${p.nombre}: $${p.precio}\n`;
    });

    recibo += `
--------------------------
Subtotal: $${subtotal}
IVA (19%): $${iva.toFixed(0)}
TOTAL: $${total.toFixed(0)}
==========================
`;

    document.getElementById("recibo").innerText = recibo;
};