const resultado = document.getElementById("result")
const productos = document.getElementById("productos")
const colorProducto = document.getElementById("color-producto")
const cantidad = document.getElementById("cantidad")
const productoImagen = document.querySelector(".product-image")

const rutaImages = {
    gold: "./img/gold.jpg",
    grafito: "./img/grafito.jpg",
    sierra: "./img/sierra.jpg",
    silver: "./img/silver.jpg"
}

colorProducto.addEventListener("change", changeProductImage)

function changeProductImage(e){
    // productoImagen.innerHTML = `<img class="img-producto" src="./img/${e.target.value}.jpg" alt="">`
    productoImagen.innerHTML = `<img class="img-producto" src="${rutaImages[e.target.value]}" alt="">`
    resultado.textContent = "Cotización: $0"
}

function calculatePrice(){
    let resultadoCotiz = Number(productos.value) * Number(cantidad.value)
    cantidad.value == "0" || productos.value == "0" ? resultado.textContent = "Cotización: $0" : resultado.textContent = "Cotización: $" + resultadoCotiz
}
