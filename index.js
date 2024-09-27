// definino as vasriaveis 
let nome = "Ciell"; 
let exp = 8650; 
let nivel = "";

// Estruturas de decisão com (if, else if e else)
if (exp < 1000) {
    nivel = "FERRO";
} else if (exp >= 1001 && experiencia <= 2000) {
    nivel = "BRONZE";
} else if (exp >= 2001 && experiencia <= 5000) {
    nivel = "PRATA";
} else if (exp >= 5001 && experiencia <= 7000) {
    nivel = "OURO";
} else if (exp >= 7001 && experiencia <= 8000) {
    nivel = "PLATINA";
} else if (exp >= 8001 && experiencia <= 9000) {
    nivel = "ASCENDENTE";
} else if (exp >= 9001 && experiencia <= 10000) {
    nivel = "IMORTAL";
} else {
    nivel = "ASCENDENTE";
}

// comando de saida 
console.log("O HEROI de nome " + nome + " esta no vivel " + nivel)
