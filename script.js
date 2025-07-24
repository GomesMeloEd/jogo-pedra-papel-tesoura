// 0 = pedra
// 1 = papel
// 2 = tesoura
const player = 2;
const computer = Math.floor(Math.random() * 3);

// Demonstração das opções escolhidas
const opcoes = ["Pedra", "Papel", "Tesoura"];
console.log("Jogador escolheu: " + opcoes[player]);
console.log("Computador escolheu: " + opcoes[computer]);

// Parte das condições
if (player === 0 && computer === 1) {
  console.log("Computador venceu a disputa!");
} else if (player === 1 && computer === 0) {
  console.log("Jogador venceu a disputa!");
} else if (player === 0 && computer === 2) {
  console.log("Jogador venceu a disputa!");
} else if (player === 2 && computer === 0) {
  console.log("Computador venceu a disputa!");
} else if (player === 2 && computer === 1) {
  console.log("Jogador venceu a disputa!");
} else if (player === 1 && computer === 2) {
  console.log("Computador venceu a disputa!");
} else if (player === computer) {
  console.log("Empate, tente novamente!");
} else {
  console.log("Erro.");
}
