
// 🔒 Protección de ruta: redirige al login si no hay sesión activa
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
 
    // 🔹 Cargar componentes
    await Promise.all([
        loadComponent("header", "header.html"),
        loadComponent("sidebar", "sidebar.html"),
        loadComponent("footer", "footer.html"),
    ]);
 
    // 🔹 Cargar productos desde JSON
    try {
        const res = await fetch("./data/productos.json");
        if (!res.ok) throw new Error("No se pudo cargar productos.json");
        const productos = await res.json();
 
        const template = document.getElementById("productTemplate");
        const contenedor = document.getElementById("contenido");
 
        // Formato de moneda colombiana
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
            // Fallback si la imagen falla
            img.onerror = () => {
                img.src = "https://placehold.co/300x200/1a1a1a/ffd700?text=" + encodeURIComponent(p.nombre);
            };
 
            contenedor.appendChild(clone);
        });
 
    } catch (err) {
        console.error("Error cargando productos:", err);
        document.getElementById("contenido").innerHTML =
            '<p class="error-msg">⚠️ No se pudieron cargar los productos.</p>';
    }
});
 