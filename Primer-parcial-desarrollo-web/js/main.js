if (!sessionStorage.getItem("loggedIn") && !localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
}

const loadComponent = async (id, file) => {
    try {
        const res = await fetch(`./components/${file}`);
        if (!res.ok) throw new Error(`No se pudo cargar ${file}`);
        const html = await res.text();
        document.getElementById(id).innerHTML = html;
    } catch (err) {
        console.error(err);
    }
};

document.addEventListener("DOMContentLoaded", async () => {

    await Promise.all([
        loadComponent("header", "header.html"),
        loadComponent("sidebar", "sidebar.html"),
        loadComponent("footer", "footer.html"),
    ]);

    try {
        const res = await fetch("./data/productos.json");
        if (!res.ok) throw new Error("No se pudo cargar productos.json");
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
            img.alt = p.nombre;

            img.onerror = () => {
                img.src = "https://placehold.co/300x200/1a1a1a/ffd700?text=" + encodeURIComponent(p.nombre);
            };

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
        console.error("Error cargando productos:", err);
        document.getElementById("contenido").innerHTML =
            '<p class="error-msg">⚠️ No se pudieron cargar los productos.</p>';
    }
});

function mostrarCarrito() {
    const contenedor = document.getElementById("carrito");

    if (!contenedor) return;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let total = 0;

    contenedor.innerHTML = "<h2>🛒 Carrito</h2>";

    carrito.forEach(p => {
        total += p.precio;

        contenedor.innerHTML += `
            <p>${p.nombre} - $${p.precio}</p>
        `;
    });

    contenedor.innerHTML += `<h3>Total: $${total}</h3>`;

    contenedor.innerHTML += `
        <button onclick="vaciarCarrito()" style="margin-top:10px;">
            Vaciar carrito 🗑️
        </button>
    `;
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito();
}
window.logout = function () {
    sessionStorage.removeItem("loggedIn");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("carrito"); 

    window.location.href = "login.html";
};