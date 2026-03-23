const loadComponent = async (id, file) => {
    const res = await fetch(`./components/${file}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
};

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");
});