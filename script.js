function revelarPedido() {
    // 1. Pega os elementos do HTML pelo ID
    const botao = document.getElementById('btn-revelar');
    const mensagem = document.getElementById('mensagem-pedido');

    // 2. Faz o botão sumir devagar (opacidade)
    botao.style.transition = "0.5s";
    botao.style.opacity = "0";

    // 3. Espera meio segundo para o botão sumir e mostra a mensagem
    setTimeout(() => {
        botao.style.display = "none"; // Remove o botão da tela
        mensagem.classList.remove('hidden'); // Mostra a mensagem do pedido
        
        // 4. Se quiser que o celular dê uma leve vibrada (Android)
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }
        
        console.log("O grande momento chegou!");
    }, 500); // <-- A vírgula que faltava aqui!
}