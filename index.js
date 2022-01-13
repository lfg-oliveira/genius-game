let order = [];
let playerSelection = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const query = (tag) => {
  if (typeof tag === "string") {
    return document.querySelector(tag);
  }
  throw new Error(
    `Invalid type of argument. Expected 'string' got ${typeof tag}.`
  );
};

const [vd, vm, am, az] = [
  query(".verde"),
  query(".verm"),
  query(".am"),
  query(".az"),
];

const newRound = () => {
  const nextColor = Math.floor(Math.random() * 4);
  order.push(nextColor);
  playerSelection = [];

  order.map((color, i) => {
    let elementColor = createColorElement(color);
    lightColor(elementColor, i + 1);
  });
};

const lightColor = (element, num) => {
  num = num * 500;
  setTimeout(() => {
    element.classList.toggle("selected");
  }, num - 250);
  setTimeout(() => {
    element.classList.toggle("selected");
  }, num + 250);
};

const checkOrder = () => {
  playerSelection.map((col, i) => {
    if (col != order[i]) {
      lose();
      return;
    }
    if (i + 1 == order.length) {
      score = score + 10 * (order.length + 1);
      alert(`Potuação: ${score}\nIniciando novo round!`);
      newRound();
    }
  });
};

const createColorElement = (color) => {
  switch (color) {
    case 0:
      return vd;
    case 1:
      return vm;
    case 2:
      return am;
    case 3:
      return az;
    default:
      console.log("Invalid input");
      break;
  }
};

const clicked = (color) => {
  playerSelection.push(color);
  lightColor(createColorElement(color), 0);
};

const lose = () => {};
