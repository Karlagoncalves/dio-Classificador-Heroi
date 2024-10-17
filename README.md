# 1️⃣ Classificador de Nível de Herói

## Descrição

Este projeto classifica heróis com base em sua experiência (XP) e exibe o nível correspondente. Utiliza conceitos de JavaScript como variáveis, operadores e estruturas de decisão.

## Estrutura do Projeto

- **`index.html`**: Interface do usuário.
- **`classificador.js`**: Lógica para classificar o herói.
- **`style.css`**: Estilos para a apresentação da página.
- **`calcularRanker.js`**: Lógica para calcular o saldo de partidas ranqueadas e determinar o nível do jogador.
- **`dadosHeroi.js`**: Lógica para a definição da classe Heroi.
- **`ataqueHeroi.js`**: Lógica para o ataque do herói e interação com a interface.


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


## 2️⃣ Desafio: Calculadora de Partidas Rankeadas

### Objetivo

Criar uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador. Em seguida, retornar o resultado para uma variável, onde o saldo de partidas ranqueadas deve ser calculado através da expressão (vitórias - derrotas).

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

# 3️⃣ Escrevendo as classes de um Jogo

## Descrição

Implementar uma classe genérica que representa um herói de aventura. A classe possue propriedades como nome, tipo (guerreiro, mago, monge, ninja) e um método que simule um ataque do herói, exibindo uma mensagem apropriada.


- **Onde**: 
  - `{tipo}` é o tipo de herói (guerreiro, mago, monge, ninja).
  - `{ataque}` varia conforme o tipo:
    - Mago: "usou magia"
    - Guerreiro: "usou espada"
    - Monge: "usou artes marciais"
    - Ninja: "usou shuriken"


### Saída

- Ao final, deve-se exibir a seguinte mensagem:
- "O Herói **{nome}** com o tipo **{tipo}** atacou usando **{ataque}** e tem **{quantidade XP}** XP."

## Como Usar

1. Clone o repositório.
2. Abra `index.html` em um navegador.
3. Clique em "Classificar Herói" e insira as informações solicitadas.
4. Clique em "Calculadora de partidas" e insira as informações solicitadas.
5. Clique em "Ataque" e insira as informações solicitadas.

## Contribuições

Sinta-se à vontade para fazer um fork e aprimorar o projeto!