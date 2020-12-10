export function testAdapters(input: string) {
  const numbers = input
    .split("\n")
    .map((n) => Number(n))
    .sort((a, b) => a - b);

  numbers.push(Math.max(...numbers) + 3);

  let currentJolts = 0;
  let oneJoltsDifference = 0;
  let threeJoltsDifference = 0;

  for (let next of numbers) {
    if (next - currentJolts === 1) {
      oneJoltsDifference++;
    } else if (next - currentJolts === 3) {
      threeJoltsDifference++;
    } else {
      throw Error("Wrong jolts!");
    }

    currentJolts = next;
  }

  return oneJoltsDifference * threeJoltsDifference;
}

export function countArrangements(input: string) {
  let numbers = input.split("\n").map((n) => Number(n));

  numbers.push(0, Math.max(...numbers) + 3);
  numbers = numbers.sort((a, b) => a - b);

  const cache = new Map();

  function constructArrangement(n: number = 0) {
    if (cache.get(n)) return cache.get(n);

    if (n === numbers.length - 1) {
      return 1;
    }

    let configurations = 0;
    for (let i = n + 1; i < numbers.length; i++) {
      if (numbers[i] - numbers[n] <= 3) {
        configurations += constructArrangement(i);
      }
    }

    cache.set(n, configurations);
    return configurations;
  }

  return constructArrangement();
}
