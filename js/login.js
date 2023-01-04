const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");
const form = document.querySelector(".login-form");

//verificando o tamanho do nome informado pelo usuário
const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute("disabled");
    return;
  }
  button.setAttribute("disabled", "");
};

//salvando o nome informado pelo usuário na memório do browser ao clicar no botão
const saveName = (event) => {
  event.preventDefault();
  localStorage.setItem("player name", input.value);
  window.location = "pages/game.html";
};

//verificando os eventos de input e submit
input.addEventListener("input", validateInput);
form.addEventListener("submit", saveName);
