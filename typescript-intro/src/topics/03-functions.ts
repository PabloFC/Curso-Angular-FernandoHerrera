function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumberArrow = (a: number, b: number): number => a + b;

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2,
): number {
  return firstNumber * base;
}

// const result = addNumbers(5, 10);
// const result2 = addNumberArrow(7, 3);
// const multiplyResult = multiply(5);
// console.log({ result, result2, multiplyResult });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`HP: ${this.hp}`);
  },
};

strider.showHp();
healCharacter(strider, 20);
strider.showHp();
export {};
