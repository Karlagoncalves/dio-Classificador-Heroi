# Classificador de Nível de Herói

## Descrição

Este projeto classifica heróis com base em sua experiência (XP) e exibe o nível correspondente. Utiliza conceitos de JavaScript como variáveis, operadores e estruturas de decisão.

## Estrutura do Projeto

- **`index.html`**: Interface do usuário.
- **`classificador.js`**: Lógica para classificar o herói.
- **`style.css`**: Estilos para a apresentação da página.
- **`calcularRanker.js`**: Lógica para calcular o saldo de partidas ranqueadas e determinar o nível do jogador.

## Níveis de XP

- **Ferro**: XP < 1.000
- **Bronze**: 1.001 ≤ XP ≤ 2.000
- **Prata**: 2.001 ≤ XP ≤ 5.000
- **Ouro**: 5.001 ≤ XP ≤ 7.000
- **Platina**: 7.001 ≤ XP ≤ 8.000
- **Ascendente**: 8.001 ≤ XP ≤ 9.000
- **Imortal**: 9.001 ≤ XP ≤ 10.000
- **Radiante**: XP > 10.001


### Saída

- Ao final, deve-se exibir a seguinte mensagem:
- "O Herói de nome **{nome}** está no nível de **{xpNivel}**."


## Desafio: Calculadora de Partidas Rankeadas

### Objetivo

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador. Em seguida, retorne o resultado para uma variável, onde o saldo de partidas ranqueadas deve ser calculado através da expressão (vitórias - derrotas).

### Níveis de Vitórias

- Se vitórias for menor do que 10: **Ferro**
- Se vitórias estiver entre 11 e 20: **Bronze**
- Se vitórias estiver entre 21 e 50: **Prata**
- Se vitórias estiver entre 51 e 80: **Ouro**
- Se vitórias estiver entre 81 e 90: **Diamante**
- Se vitórias estiver entre 91 e 100: **Lendário**
- Se vitórias for maior ou igual a 101: **Imortal**

### Saída

- Ao final, deve-se exibir a seguinte mensagem:
- "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

## Como Usar

1. Clone o repositório.
2. Abra `index.html` em um navegador.
3. Clique em "Classificar Herói" e insira as informações solicitadas.
4. Utilize a funcionalidade da "Calculadora de partidas", disponível na mesma interface.

## Contribuições

Sinta-se à vontade para fazer um fork e aprimorar o projeto!