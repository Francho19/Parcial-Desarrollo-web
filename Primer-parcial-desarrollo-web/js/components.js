// HEADER
class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                header {
                    background-color: #111;
                    color: white;
                    padding: 1.5rem 3rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid rgba(255, 215, 0, 0.2);
                }
                h1 { color: gold; }
                button {
                    background: gold;
                    border: none;
                    padding: 0.8rem 1.5rem;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: bold;
                }
            </style>

            <header>
                <h1>techStore 💻⚡</h1>
                <button id="logoutBtn">Cerrar sesión</button>
            </header>
        `;

        this.shadowRoot.querySelector("#logoutBtn")
            .addEventListener("click", () => {
                sessionStorage.removeItem("loggedIn");
                localStorage.removeItem("loggedIn");
                localStorage.removeItem("carrito");
                window.location.href = "login.html";
            });
    }
}
customElements.define("app-header", AppHeader);


// SIDEBAR
class AppSidebar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                aside {
                    width: 220px;
                    background: #111;
                    color: white;
                    padding: 2rem;
                }
                ul { list-style: none; padding: 0; }
                li {
                    padding: 1rem;
                    cursor: pointer;
                    color: #aaa;
                }
                li:hover { color: gold; }
            </style>

            <aside>
                <ul>
                    <li>💻 Laptops</li>
                    <li>📱 Celulares</li>
                    <li>🎧 Accesorios</li>
                    <li>🖥 Monitores</li>
                </ul>
            </aside>
        `;
    }
}
customElements.define("app-sidebar", AppSidebar);


// FOOTER
class AppFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: #111;
                    color: #aaa;
                    text-align: center;
                    padding: 1.5rem;
                    border-top: 1px solid rgba(255, 215, 0, 0.2);
                }
            </style>

            <footer>
                © 2026 techStore — Todos los derechos reservados
            </footer>
        `;
    }
}
customElements.define("app-footer", AppFooter);