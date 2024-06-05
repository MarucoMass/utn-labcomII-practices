const pesos = document.getElementById("pesos");
const monedaExt = document.getElementById("moneda-ext")
const result = document.getElementById("result");
const nuevaMoneda = document.getElementById("moneda-nueva")
const costoConversion = document.getElementById("costo-conv")
const result2 = document.getElementById("result2");

const monedasExt = {
    dolar: 1200,
    euro: 1500
}

function cotizar() {
  let cotizacion;
  if (
    validar(pesos, "Completa el campo de pesos") &&
    validar(monedaExt, "Completa el campo de moneda extranjera")
  ) {
    cotizacion = pesos.value / monedasExt[monedaExt.value]
    result.textContent = "La cotizaciónes es: $" + cotizacion
    result.classList.remove("none")
    result2.classList.add("none")
    result2.textContent = ""
  }
}

function ingresarMoneda(){
    if (
        validar(nuevaMoneda, "Completa el campo de nueva moneda") &&
        validar(costoConversion, "Completa el campo de costo")
      ) {
        for(const moneda in monedasExt) {
            if (nuevaMoneda.value == moneda) {
                alert("Ingrese otra distinta mogolic")
                return false
            }
        }
        monedaExt.innerHTML += `<option value="${nuevaMoneda.value.toLowerCase()}">${nuevaMoneda.value}</option>`
        monedasExt[nuevaMoneda.value] = costoConversion.value
        result2.textContent = "La nueva moneda es: " + nuevaMoneda.value
        result2.classList.remove("none")
        document.getElementById("form-nuevaMoneda").reset()
      }
}

function validar(param, mensaje) {
  if (param.value == "") {
    alert(mensaje)
    return false
  } else {
    return true
  }
}
