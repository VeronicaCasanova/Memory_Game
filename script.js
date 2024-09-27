// Conjunto maior de emojis: gatos, frutas, legumes, plantinhas
const allEmojis = [
    "😻", "😹", "😺", "😸", "😽", "🙀", "😼", "😿", // Gatos
    "🍎", "🍌", "🍓", "🍇", "🍒", "🍉", // Frutas
    "🥕", "🌽", "🥦", "🍅", "🥒", // Vegetais
    "🌵", "🌸", "🌻", "🍀", "🌱"  // Plantas
];

// Função para embaralhar os emojis
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Selecionar 8 pares (16 emojis no total)
function selectRandomEmojis() {
    const shuffled = shuffleArray(allEmojis);
    const selected = shuffled.slice(0, 8); // Pegar 8 emojis únicos
    return [...selected, ...selected]; // Duplicar para formar os pares
}

// Função para criar o jogo da memória
function createMemoryGame() {
    const gameContainer = document.querySelector('.game');
    const emojis = shuffleArray(selectRandomEmojis()); // Embaralha os 16 emojis

    emojis.forEach((emoji) => {
        let box = document.createElement('div');
        box.className = 'item';
        box.innerHTML = emoji;

        box.onclick = function () {
            this.classList.add('boxOpen');
            setTimeout(function () {
                let openBoxes = document.querySelectorAll('.boxOpen');
                if (openBoxes.length === 2) {
                    if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
                        openBoxes[0].classList.add('boxMatch');
                        openBoxes[1].classList.add('boxMatch');
                        openBoxes[0].classList.remove('boxOpen');
                        openBoxes[1].classList.remove('boxOpen');

                        // Verificar se o jogo foi concluído
                        if (document.querySelectorAll('.boxMatch').length === 16) {
                            alert('🎉 Parabéns! Você venceu!!! 🎉');
                        }
                    } else {
                        openBoxes[0].classList.remove('boxOpen');
                        openBoxes[1].classList.remove('boxOpen');
                    }
                }
            }, 500);
        };

        // Adicionar o box no container
        gameContainer.appendChild(box);
    });
}

// Inicializar o jogo
createMemoryGame();