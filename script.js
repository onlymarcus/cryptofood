// Inicializando o Telegram Web App
window.Telegram.WebApp.ready();

const addButtons = document.querySelectorAll('.add-button');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const addButton = button;
        const removeButton = productElement.querySelector('.remove-button');
        const plusButton = productElement.querySelector('.plus-button');
        const quantityDisplay = productElement.querySelector('.quantity');

        // Esconde o botão ADD e mostra os botões - e +
        addButton.style.display = 'none';
        removeButton.style.display = 'inline-block';
        plusButton.style.display = 'inline-block';
        quantityDisplay.style.display = 'inline-block';

        // Atualiza o contador de quantidade (começa com 1)
        let quantity = 1;
        quantityDisplay.innerText = quantity;

        // Adiciona evento ao botão +
        plusButton.addEventListener('click', () => {
            quantity++;
            quantityDisplay.innerText = quantity;
        });

        // Adiciona evento ao botão -
        removeButton.addEventListener('click', () => {
            quantity--;
            if (quantity <= 0) {
                // Se a quantidade for 0, oculta os botões - e + e mostra o botão ADD
                quantity = 0;
                addButton.style.display = 'inline-block';
                removeButton.style.display = 'none';
                plusButton.style.display = 'none';
                quantityDisplay.style.display = 'none';
            } else {
                quantityDisplay.innerText = quantity;
            }
        });
    });
});

