# techStore

Proyecto de desarrollo web.

# Descripción

techStore es una tienda virtual básica donde el usuario puede iniciar sesión y visualizar productos con sus respectivos precios.  

El sistema permite agregar productos a un carrito de compras y calcular el total, todo sin necesidad de una base de datos, utilizando almacenamiento local del navegador.

##  Funcionalidades

- Inicio de sesión sin base de datos  
- Visualización de productos dinámicos  
- Carga de productos desde archivo JSON  
- Sistema de carrito de compras  
- Cálculo automático del total  
- Opción de vaciar carrito  
- Cerrar sesión  
- Interfaz tipo tienda virtual  

## Credenciales de acceso

Usuario: user  
Contraseña: admin  

## Tecnologías utilizadas

- HTML5  
- CSS3  
- JavaScript  
- LocalStorage  
- SessionStorage  

## Estructura del proyecto
/css
styles.css

/js
main.js
login.js

/components
header.html
footer.html
sidebar.html

/data
productos.json

/img
(imágenes de productos)

index.html
login.html



## Cómo ejecutar el proyecto

1. Descargar o abrir el proyecto  
2. Ejecutar con Live Server  
3. Iniciar sesión con las credenciales  
4. Navegar por la tienda  
5. Agregar productos al carrito  


## Funcionamiento del carrito

- Los productos se cargan dinámicamente desde `productos.json`
- Al presionar "Agregar", el producto se guarda en `localStorage`
- El carrito muestra:
- Productos agregados
- Precio individual
- Total acumulado
- Se puede vaciar completamente el carrito


## Manejo de sesión

- Se utiliza `sessionStorage` para controlar el acceso  
- Si el usuario no ha iniciado sesión:
- Es redirigido automáticamente al login  
- El botón "Cerrar sesión":
- Elimina la sesión
- Redirige al login  

## Características importantes

- Diseño responsive básico  
- Uso de templates HTML (`<template>`)  
- Separación por componentes (header, sidebar, footer)  
- Manejo de errores al cargar productos  
- Interfaz limpia y moderna  

## Estado del proyecto

- Funcional  
- Cumple con la estructura solicitada  
- Sin base de datos (simulación con storage)  
- Proyecto académico terminado  

Proyecto realizado por:

**Javier Andres Martinez (192528) y Frank Jose Miranda Beleño (192526) **


## Notas

Este proyecto fue desarrollado con fines educativos como parte de un parcial de desarrollo web.  
No representa una tienda real ni realiza transacciones reales.