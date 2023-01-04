// selecionando o grid que iremos trabalhar
const grid = document.querySelector(".grid");

const spanPlayer = document.querySelector(".player");

const timer = document.querySelector(".timer");

let firstCard = "";
let secondCard = "";

// função responsável por verificar quando o jogo termina
const checkEndGame = () => {
  const disabledCards = document.querySelectorAll(".disabled-card");

  if (disabledCards.length === 24) {
    clearInterval(this.loop);
    alert(
      `Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`
    );
  }
};

// adicionando todas as imagens do jogo em uma lista
const characters = [
  "beth",
  "jerry",
  "jessica",
  "morty",
  "pessoa-passaro",
  "pickle-rick",
  "rick",
  "summer",
  "meeseeks",
  "scroopy",
  "squanchy",
  "wong",
];

// função responsável por criar os elementos e classes;
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

// função responsável por verificar se os cards são iguais
const checkCards = () => {
  const firstCharacter = firstCard.getAttribute("data-character");
  const secondCharacter = secondCard.getAttribute("data-character");

  if (firstCharacter === secondCharacter) {
    firstCard.firstChild.classList.add("disabled-card");
    secondCard.firstChild.classList.add("disabled-card");

    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");

      firstCard = "";
      secondCard = "";
    }, 500);
  }
};

// função responsável por virar o card quando ocorrer um clique;
const revealCard = ({ target }) => {
  // caso a carta já tenha sido revelada, não faz nada
  if (target.parentNode.className.includes("reveal-card")) {
    return;
  }
  // caso a carta não tenha sido revelada adicionada o classe "reveal-card" e armazena o valor na variavel "firstCard"
  if (firstCard === "") {
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;
  } else if (secondCard === "") {
    target.parentNode.classList.add("reveal-card");
    secondCard = target.parentNode;

    checkCards();
  }
};

// função responsável por criar os cards e criar a estrutura HTML;
const createCard = (character) => {
  const card = createElement("div", "card");
  const cardFront = createElement("div", "face front");
  const cardBack = createElement("div", "face back");

  cardFront.style.backgroundImage = `url(../images/${character}.png)`;

  card.appendChild(cardFront);
  card.appendChild(cardBack);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-character", character);

  return card;
};

// função responsável por carregar o jogo, duplicar e embaralhar os elementos;
const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
};

// função responsavel por iniciar o contador
const startTimer = () => {
  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);
};

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem("player name");
  startTimer();
  loadGame();
};
