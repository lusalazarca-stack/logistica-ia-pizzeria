function simularProcesamientoIA() {
    const statusDiv = document.querySelector('.pulse-button');
    const timerDiv = document.querySelector('.timer .number');
    
    statusDiv.innerText = "PROCESANDO...";
    statusDiv.style.background = "#ffcc00";
    statusDiv.style.color = "#000";

    // Simulamos que la IA tarda 1.5 segundos en entender el pedido
    setTimeout(() => {
        statusDiv.innerText = "CONFIRMADO";
        statusDiv.style.background = "#deff9a";
        statusDiv.style.color = "#000";
        timerDiv.innerText = "1.2 seg"; // Tiempo que tardó la IA
        console.log("Pedido validado en el Cono Norte");
    }, 1500);
}

// Ejecutar al cargar la página
window.onload = simularProcesamientoIA;