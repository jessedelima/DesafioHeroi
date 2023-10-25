const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nome = '';
let xp = 0;

// Use um loop do...while para garantir que o nome seja inserido
do {
  rl.question("Digite o nome do herói: ", (answer) => {
    nome = answer;
    if (nome) {
      // Se um nome foi fornecido, pergunte sobre a XP
      rl.question("Digite a quantidade de experiência (XP) do herói: ", (answer) => {
        xp = parseInt(answer);
        rl.close();
        determinarNivel(nome, xp);
      });
    } else {
      // Se nenhum nome foi fornecido, repita o loop
      console.log("Por favor, forneça um nome.");
    }
  });
} while (!nome);

function determinarNivel(nome, xp) {
  let nivel = "";

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 6001 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
