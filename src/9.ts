export function checksum(input: string, preambleLength: number) {
  function isValid(preamble: Array<number>, data: number) {
    for (let a = 0; a < preamble.length; a++) {
      for (let b = 0; b < preamble.length; b++) {
        if (a === b) continue;

        if (preamble[a] + preamble[b] === data) return true;
      }
    }

    return false;
  }

  const numbers = input.split("\n").map((n) => Number(n));

  for (let i = preambleLength; i < numbers.length; i++) {
    const preamble = numbers.slice(i - preambleLength, i);
    if (!isValid(preamble, numbers[i])) {
      return numbers[i];
    }
  }
}

export function exploit(input: string, search: number) {
  const numbers = input.split("\n").map((n) => Number(n));

  for (let i = 0; i < numbers.length; i++) {
    let sum = [numbers[i]];
    for (let ii = i + 1; ii < numbers.length; ii++) {
      sum.push(numbers[ii]);
      if (sum.reduce((acc, v) => acc + v, 0) === search) {
        return Math.min(...sum) + Math.max(...sum);
      }
    }
  }
}
