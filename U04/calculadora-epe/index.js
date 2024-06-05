function calcular() {
    var tipo_usuario = document.querySelector('input[name="iva"]:checked')
    var zona_domicilio = document.getElementById("zona").value
    var cantidad = document.getElementById("cantidad").value
    const costo_servicio = 102
    var tipo_usuario_validado

    if (tipo_usuario) {
        tipo_usuario_validado = tipo_usuario.value

        if (zona_domicilio == "0" || cantidad == "") {
            alert("Completa los campos vago")
        } else {
            Total = costo_servicio + (cantidad * zona_domicilio) * (1 + tipo_usuario_validado)

            alert("$" + Total)
        }
    }else {
        alert("Falta tipo de usuario")
    }

}

// const costo_servicio = 102;
// const tipo_usuario = document.querySelector('input[name="iva"]:checked');
// const zona_domicilio = document.getElementById("zona");
// const cantidad = document.getElementById("cantidad");
// let tipo_usuario_validado, zona_domicilio_validado, cantidad_validado, total;

// function calcular() {
//     if (
//         validar_input(zona_domicilio, "Completa la zona") ||
//         validar_input(tipo_usuario, "Completa el usuario") ||
//         validar_input(cantidad, "Completa la cantidad")
//     ) {
//         tipo_usuario_validado = tipo_usuario.value;
//         zona_domicilio_validado = zona_domicilio.value;
//         cantidad_validado = cantidad.value;
//         total =
//         costo_servicio +
//         cantidad_validado * zona_domicilio_validado * (1 + tipo_usuario_validado);
        
//         alert("$" + total);
//     }
// }

// function validar_input(input, mensaje) {
//     console.log(input);
//     if (input.value !== "" && input.value !== null) {
//     return true;
//   } else {
//     alert(mensaje);
//     return false;
//   }
// }
