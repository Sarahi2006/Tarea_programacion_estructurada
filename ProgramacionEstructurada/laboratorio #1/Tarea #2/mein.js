 // Espera a que el contenido de la página esté completamente cargado
 document.addEventListener('DOMContentLoaded', function () {
    // Obtiene las referencias a los elementos del formulario y el área de resultados
    const formularioRango = document.getElementById('formularioRango');
    const resultadoDiv = document.getElementById('resultado');

        // Agrega un evento de escucha cuando se envía el formulario
        formularioRango.addEventListener('submit', function (evento) {
        // Evita que el formulario se envíe y cause una recarga de la página
        evento.preventDefault();

        // Limpia el área de resultados
        resultadoDiv.innerHTML = '';

        // Obtiene los valores de inicio y fin ingresados por el usuario
        const inicio = parseInt(formularioRango.inicio.value);
        const fin = parseInt(formularioRango.fin.value);

        // Valida si los valores ingresados son números
        if (isNaN(inicio) || isNaN(fin)) {
            resultadoDiv.textContent = 'Por favor ingresa valores numéricos válidos.';
        } else if (inicio === fin) {
            resultadoDiv.textContent = 'Los valores deben ser diferentes.';
        } else if (inicio > fin) {
            resultadoDiv.textContent = 'El valor de inicio debe ser menor que el valor final.';
        } else {
            // Genera un arreglo con los números en el rango especificado si se cumple la condicion
            const arregloRango = generarArregloRango(inicio, fin);
            resultadoDiv.textContent = 'Arreglo resultante: ' + arregloRango.join(', ');
        }
    });

    // Funcion que genera un arreglo de números en el rango especificado
    function generarArregloRango(inicio, fin) {
        const rango = [];
        //inicializamos el arreglo
        // Este bucle for itera desde el valor mínimo entre 'inicio' y 'fin'
        // hasta el valor máximo entre 'inicio' y 'fin', incluyendo ambos extremos.
        // En cada iteración, el valor actual 'i' se agrega al arreglo 'rango'.
        for (let i = Math.min(inicio, fin); i <= Math.max(inicio, fin); i++) {
            rango.push(i);
        }
        return rango;
        //retornar arreglo
    }
});
