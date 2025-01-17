// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("myBtn"); // Cambia el ID al de tu botón

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abre el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del contenido del modal, cierra el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
