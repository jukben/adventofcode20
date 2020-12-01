type Input = string;

function parseInput(input: Input) {
  return input.split("\n").map(Number);
}

const findTwo = (numbers: Array<number>, target: number) => {
  for (const number of numbers) {
    if (numbers.includes(target - number)) {
      return number * (target - number);
    }
  }
};

export const find2020sum = (input: Input) => {
  const numbers = parseInput(input);

  return findTwo(numbers, 2020);
};

export const find2020sum2 = (input: Input) => {
  const numbers = parseInput(input);

  for (const number of numbers) {
    const res = findTwo(numbers, 2020 - number);

    if (res) {
      return number * res;
    }
  }
};
