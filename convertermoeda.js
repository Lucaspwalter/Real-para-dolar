function realParaDolar() {
    const inputReal = document.getElementById('valorReal');
    let valorReal = inputReal.value;
    
    valorReal = valorReal.replace(',', '.');
    
    valorReal = parseFloat(valorReal);
    
    if (isNaN(valorReal)) {
        alert("Por favor, digite um valor válido em Reais (ex: 100,50)");
        return;
    }
    
    const cotacaoDolar = 5.98; 
    
    const valorDolar = valorReal / cotacaoDolar;
    
    document.getElementById('valorDolar').value = valorDolar.toFixed(2);
}