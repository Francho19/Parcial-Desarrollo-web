# techStore

Aplicación web de tienda tecnológica desarrollada con HTML, CSS y JavaScript.
Permite iniciar sesión, visualizar productos, agregarlos a un carrito y generar un recibo con IVA.

---

## Trabajo colaborativo

Este proyecto fue desarrollado en equipo utilizando GitHub.

### Integrantes

* Frank
* (Nombre del compañero)

---

## Funcionalidades

* Inicio de sesión con validación en JavaScript
* Renderización dinámica de productos
* Carrito de compras con almacenamiento en localStorage
* Generación de recibo con IVA (19%) y fecha
* Uso de Web Components (header, sidebar, footer)
* Carga de productos desde un archivo JSON mediante fetch

---

## Conceptos implementados

### Fragmentos

Se utilizan fragmentos del DOM al trabajar con plantillas, permitiendo manipular contenido antes de insertarlo en la página.

```js id="a1"
const clone = template.content.cloneNode(true);
```

---

### Plantillas (`<template>`)

Se utilizó la etiqueta `<template>` para definir la estructura de los productos, permitiendo su reutilización y renderización dinámica.

```html id="a2"
<template id="productTemplate">
```

---

### Web Components

Se implementaron componentes personalizados mediante la creación de clases que extienden de `HTMLElement`, utilizando Shadow DOM para encapsular estilos y estructura.

Ejemplo:

```js id="a3"
class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
}

customElements.define("app-header", AppHeader);
```

---

## Implementación del login

El formulario de inicio de sesión se desarrolló con validación en JavaScript, sin uso de base de datos.

Credenciales:

* Usuario: user
* Contraseña: admin

Validación:

```js id="a4"
if (usuario === "user" && password === "admin")
```

Se utilizó `sessionStorage` para mantener la sesión activa y se restringe el acceso a la página principal si el usuario no ha iniciado sesión.

---

## Buenas prácticas aplicadas

* Organización del proyecto en carpetas (`css`, `js`, `data`, `components`)
* Separación de responsabilidades entre HTML, CSS y JavaScript
* Uso de nombres descriptivos en variables y funciones
* Manejo de errores mediante estructuras try/catch
* Uso de fetch para cargar datos externos
* Uso de localStorage y sessionStorage
* Código modular y reutilizable
* Implementación de Web Components

---

## Evidencias de colaboración en GitHub

### Commits

![Commits](docs/img/commits.png)

---

### Ramas (Branches)

![Branches](docs/img/branches.png)

---

### Pull Requests

![Pull Requests](docs/img/pr.png)

---

### Colaboradores

![Contributors](docs/img/contributors.png)

---

## Estructura del proyecto

```id="a5"
PRIMER-PARCIAL-DESARROLLO-WEB/
│
├── components/
│   ├── footer.html
│   ├── header.html
│   └── sidebar.html
│
├── css/
│   └── styles.css
│
├── data/
│   └── productos.json
│
├── img/
│
├── js/
│   ├── components.js
│   ├── login.js
│   ├── main.js
│   └── recibo.js
│
├── index.html
├── login.html
└── README.md
```

---

## Ubicación de evidencias

Se debe crear la siguiente ruta dentro del proyecto para almacenar las capturas:

```id="a6"
docs/img/
```

Archivos requeridos:

* commits.png
* branches.png
* pr.png
* contributors.png

---

## Repositorio

Agregar aquí el enlace del repositorio en GitHub.

---

## Conclusión

El proyecto integra conceptos fundamentales del desarrollo web como renderización dinámica, manejo de datos externos, uso de componentes reutilizables y trabajo colaborativo mediante control de versiones. Se logra una aplicación funcional, organizada y estructurada.
Prueba de Pull Request