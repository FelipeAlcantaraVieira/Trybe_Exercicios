let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for (let counter in numbers) {
    soma += numbers[counter];
    media = soma  / numbers.length;
}
console.log(`a média dos valores no vetor é: ${media}`);