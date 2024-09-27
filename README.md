# 🧠 Memory Game

Este é um mini game do tipo "Jogo da Memória" desenvolvido com HTML5, CSS e JavaScript. O objetivo do jogo é encontrar todos os pares de cartas idênticas em uma grade. A cada nova partida, os emojis são randomizados, tornando o jogo mais divertido e desafiador.

## 🎮 Demonstração

[Memory Game - Jogue Agora](https://veronicacasanova.github.io/Memory_Game/)

## 📋 Funcionalidades
- Escolha aleatória de 16 emojis entre categorias de gatos, frutas, vegetais e plantas.
- Embaralhamento dos pares de emojis a cada reinício do jogo.
- Efeitos de animação ao virar as cartas e encontrar um par.
- Feedback visual ao vencer o jogo.

## 🚀 Como Jogar
1. Clique em duas cartas para revelá-las.
2. Se as cartas forem iguais, elas permanecem viradas.
3. Se forem diferentes, elas voltam a ficar ocultas após um breve momento.
4. O objetivo é encontrar todos os pares correspondentes.
5. Ao encontrar todos os pares, uma mensagem de vitória será exibida.
   
## 🛠️ Tecnologias Utilizadas
- HTML5: Estrutura da página.
- CSS3: Estilização visual do jogo, incluindo animações.
- JavaScript: Lógica do jogo e interação com o usuário.

## 🎨 Customizações
Você pode facilmente adicionar ou alterar os emojis do jogo. Basta editar o array `allEmojis` no arquivo `script.js` e adicionar os emojis que preferir. Lembre-se de manter o número de pares igual a 8 para que o jogo funcione corretamente.

## 🚀 Como Executar Localmente
1. Faça o clone deste repositório:
   ```bash
   git clone https://github.com/VeronicaCasanova/Memory_Game.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd Memory_Game
   ```
3. Abra o arquivo `index.html` no seu navegador preferido ou utilize uma extensão de servidor local para visualizar o jogo.

## 📝 Melhorias Futuras
Algumas melhorias que podem ser implementadas no futuro:

- Adicionar um cronômetro para contar o tempo da partida.
- Implementar níveis de dificuldade com diferentes quantidades de pares.
- Criar uma tabela de pontuação para os melhores tempos.
