var enigma = [
  "A casa verde é a terceira casa.",
  "O dono da casa laranja bebe vodka.",
  "O dono da casa com o gato come nhoque.",
  "O romano vive na casa verde.",
  "O dono da casa rosa come hot-dog",
  "A casa rosa é a primeira.",
  "Alonso é o dono da casa rosa.",
  "O espanhol bebe chá.",
  "O dono da tartaruga vive na casa vermelha.",
  "Afonso vive na casa ao lado da casa verde.",
  "A casa verde está à direita da casa vermelha.",
  "Afonso bebe água.",
  "O grego come paella.",
  "Anderson tem um cachorro.",
  "Alfredo vive na casa ao lado do dono que tem um cachorro.",
];
var correctAnswer = [
  {
    home: "home1",
    color: "Rosa",
    owner: "Alonso",
    nationality: "Espanhol",
    drink: "Chá",
    food: "Hot-dog",
    pet: "Peixe",
  },
  {
    home: "home2",
    color: "Vermelho",
    owner: "Afonso",
    nationality: "Grego",
    drink: "Agua",
    food: "Paella",
    pet: "Tartaruga",
  },
  {
    home: "home3",
    color: "Verde",
    owner: "Anderson",
    nationality: "Romano",
    drink: "Cerveja",
    food: "Macarrão",
    pet: "Cachorro",
  },
  {
    home: "home4",
    color: "Laranja",
    owner: "Alfredo",
    nationality: "Italiano",
    drink: "Vodka",
    food: "Nhoque",
    pet: "Gato",
  },
];
var homes = [];
const htmlTag = document.documentElement;
var coresDisp = ["Rosa", "Verde", "Vermelho", "Laranja"];
var indiceCorAtual = 0;
var donos = ["Afonso", "Alonso", "Alfredo", "Anderson"];
var indiceDonoAtual = 0;
var nacionalidades = ["Grego", "Romano", "Espanhol", "Italiano"];
var indiceNacioAtual = 0;
var bebidas = ["Chá", "Agua", "Cerveja", "Vodka"];
var indiceBebidaAtual = 0;
var comidas = ["Macarrão", "Hot-dog", "Paella", "Nhoque"];
var indiceComidaAtual = 0;
var animais = ["Cachorro", "Gato", "Peixe", "Tartaruga"];
var indiceAnimalAtual = 0;
var modal = document.getElementById("modal");

function autoLoad() {
  let DOM = document.getElementById("enigma");
  for (let i = 0; i < enigma.length; i++) {
    DOM.innerHTML += `<li class="enigmas">${enigma[i]}</li>`;
  }
  return getTheme();
}

function getTheme() {
  let DOM = document.getElementById("theme-button");
  let theme = sessionStorage.getItem("theme");
  if (theme === "dark") {
    DOM.innerHTML = `<img width="20px" src="./images/buttons/sol.png" alt="sol">`;
  } else {
    DOM.innerHTML = `<img width="20px" src="./images/buttons/lua.png" alt="lua">`;
  }
  return htmlTag.setAttribute("data-bs-theme", theme);
}

function changeTheme(theme1, theme2) {
  let DOM = document.getElementById("theme-button");
  let theme = localStorage.getItem("theme");
  var defaultTheme = htmlTag.getAttribute("data-bs-theme");
  var themeSetted = defaultTheme === theme1 ? theme2 : theme1;
  htmlTag.setAttribute("data-bs-theme", themeSetted);
  switch (themeSetted) {
    case "dark":
      DOM.innerHTML = `<img width="20px" src="./images/buttons/sol.png" alt="sol">`;
      sessionStorage.setItem("theme", themeSetted);
      break;
    case "light":
      DOM.innerHTML = `<img width="20px" src="./images/buttons/lua.png" alt="lua">`;
      sessionStorage.setItem("theme", themeSetted);
      break;
    default:
      DOM.innerHTML = `<img width="20px" src="./images/buttons/sol.png" alt="sol">`;
      sessionStorage.setItem("theme", "light");
      htmlTag.setAttribute("data-bs-theme", "light");
      break;
  }
}

function changeColors(elemento, atribuicaoMath) {
  let DOM = document.getElementById(elemento);
  indiceCorAtual = (indiceCorAtual + atribuicaoMath) % coresDisp.length;
  console.log(indiceCorAtual);
  if (indiceCorAtual < 0) {
    indiceCorAtual = (indiceCorAtual + 1) % coresDisp.length;
  }
  DOM.innerText = coresDisp[indiceCorAtual];
}

function elementValueChanger(elemento, atribuicaoMath, proops) {
  let DOM = document.getElementById(elemento);
  switch (proops) {
    case "casas": {
      indiceCorAtual = (indiceCorAtual + atribuicaoMath) % coresDisp.length;
      console.log(indiceCorAtual);
      if (indiceCorAtual < 0) {
        indiceCorAtual = (indiceCorAtual + 1) % coresDisp.length;
      }
      DOM.innerText = coresDisp[indiceCorAtual];
      break;
    }
    case "donos": {
      indiceDonoAtual = (indiceDonoAtual + atribuicaoMath) % donos.length;
      if (indiceDonoAtual < 0) {
        indiceDonoAtual = (indiceDonoAtual + 1) % donos.length;
      }
      DOM.innerText = donos[indiceDonoAtual];
      break;
    }
    case "nacionalidades": {
      indiceNacioAtual = (indiceNacioAtual + atribuicaoMath) % donos.length;
      if (indiceNacioAtual < 0) {
        indiceNacioAtual = (indiceNacioAtual + 1) % donos.length;
      }
      DOM.innerText = nacionalidades[indiceNacioAtual];
      break;
    }
    case "bebidas": {
      indiceBebidaAtual = (indiceBebidaAtual + atribuicaoMath) % donos.length;
      if (indiceBebidaAtual < 0) {
        indiceBebidaAtual = (indiceBebidaAtual + 1) % donos.length;
      }
      DOM.innerText = bebidas[indiceBebidaAtual];
      break;
    }
    case "comidas": {
      indiceComidaAtual = (indiceComidaAtual + atribuicaoMath) % donos.length;
      if (indiceComidaAtual < 0) {
        indiceComidaAtual = (indiceComidaAtual + 1) % donos.length;
      }
      DOM.innerText = comidas[indiceComidaAtual];
      break;
    }
    case "animais": {
      indiceAnimalAtual = (indiceAnimalAtual + atribuicaoMath) % donos.length;
      if (indiceAnimalAtual < 0) {
        indiceAnimalAtual = (indiceAnimalAtual + 1) % donos.length;
      }
      DOM.innerText = animais[indiceAnimalAtual];
      break;
    }
  }
}

function getCorrectAnswer() {
  var home = document.getElementById("first-column");
  let DOM = document.getElementById("imgModal");

  console.log(home);
  row_home_1 = home.getElementsByClassName("display");
  clearArray();
  for (let i = 0; i <= row_home_1.length; i++) {
    let color = document.getElementById(`c${i}`);
    let owner = document.getElementById(`d${i}`);
    let nationality = document.getElementById(`n${i}`);
    let drink = document.getElementById(`b${i}`);
    let food = document.getElementById(`co${i}`);
    let pet = document.getElementById(`a${i}`);
    if (food) {
      homes.push({
        home: `home${i}`,
        color: color.textContent,
        owner: owner.textContent,
        nationality: nationality.textContent,
        drink: drink.textContent,
        food: food.textContent,
        pet: pet.textContent,
      });
    }
  }
  let result = compareObjectArrays(correctAnswer, homes);
  console.log(result);
  if (result.areEqual) {
    modal.classList.toggle("show");
    DOM.innerHTML = `<img id="image-modal" width="100%" height="350px" src="./images/winImage.jpg" alt="congrats-image">`;
  } else {
    modal.classList.toggle("show");
    DOM.innerHTML = `<img id="image-modal" width="100%" height="350px" src="./images/loseImage.jpg" alt="congrats-image">`;
  }
}

function clearArray() {
  while (homes.length > 0) {
    homes.pop();
  }
}

function closeModal() {
  modal.classList.toggle("show");
}

// Funções para comparar as respostas;
function compareObjects(obj1, obj2) {
  let differences = [];
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      differences.push({ key: key, value1: obj1[key], value2: obj2[key] });
    }
  }
  for (let key in obj2) {
    if (!(key in obj1)) {
      differences.push({ key: key, value1: undefined, value2: obj2[key] });
    }
  }
  return differences;
}

function compareObjectArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return { areEqual: false, differences: ["Array lengths are different"] };
  }

  let allDifferences = [];

  for (let i = 0; i < array1.length; i++) {
    let differences = compareObjects(array1[i], array2[i]);
    if (differences.length > 0) {
      allDifferences.push({ index: i, differences: differences });
    }
  }

  return {
    areEqual: allDifferences.length === 0,
    differences: allDifferences,
  };
}
