// PROTEGER RUTA
if (!sessionStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", async () => {

    try {
        const res = await fetch("./data/productos.json");
        const productos = await res.json();

        const template = document.getElementById("productTemplate");
        const contenedor = document.getElementById("contenido");

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        const formatPrecio = (precio) =>
            new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                maximumFractionDigits: 0,
            }).format(precio);

        productos.forEach(p => {

            const clone = template.content.cloneNode(true);

            clone.querySelector(".nombre").textContent = p.nombre;
            clone.querySelector(".precio").textContent = formatPrecio(p.precio);
            clone.querySelector(".descripcion").textContent = p.descripcion;

            const img = clone.querySelector(".imagen");
            img.src = p.imagen;

            clone.querySelector(".btn-carrito").addEventListener("click", () => {

                carrito.push(p);
                localStorage.setItem("carrito", JSON.stringify(carrito));

                alert(p.nombre + " agregado 🛒");

                mostrarCarrito();
            });

            contenedor.appendChild(clone);
        });

        mostrarCarrito();

    } catch (err) {
        console.error(err);
    }
});


// CARRITO
function mostrarCarrito() {
    const contenedor = document.getElementById("carrito");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let total = 0;
    contenedor.innerHTML = "<h2>🛒 Carrito</h2>";

    carrito.forEach(p => {
        total += p.precio;
        contenedor.innerHTML += `<p>${p.nombre} - $${p.precio}</p>`;
    });

    contenedor.innerHTML += `<h3>Total: $${total}</h3>`;

    contenedor.innerHTML += `
        <button onclick="vaciarCarrito()">Vaciar 🗑️</button>
        <button onclick="mostrarRecibo()">🧾 Recibo</button>
    `;
}


function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito();
    document.getElementById("recibo").innerHTML = "";
}


// RECIBO
function mostrarRecibo() {

    const contenedor = document.getElementById("recibo");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>Carrito vacío</p>";
        return;
    }

    let subtotal = 0;

    let html = `
        <h2>🧾 RECIBO</h2>
        <p>${new Date().toLocaleString()}</p>
        <hr>
    `;

    carrito.forEach(p => {
        subtotal += p.precio;
        html += `<p>${p.nombre} - $${p.precio}</p>`;
    });

    const iva = subtotal * 0.19;
    const total = subtotal + iva;

    html += `
        <hr>
        <p>Subtotal: $${subtotal}</p>
        <p>IVA: $${iva.toFixed(0)}</p>
        <h3>Total: $${total.toFixed(0)}</h3>
    `;

    contenedor.innerHTML = html;
}