export function anyoneSaidYes(answers: Array<string>) {
  return Array.from(new Set(answers.flatMap((answer) => answer.split(""))))
    .length;
}

export function everyoneSaidYes(answers: Array<string>) {
  const { sum } = answers
    .flatMap((answer) => answer.split(""))
    .reduce(
      (acc, v, i, arr) => {
        if (acc.unique.includes(v)) {
          return acc;
        }

        const isAnsweredByEveryone =
          arr.filter((b) => b === v).length === answers.length;

        return {
          sum: isAnsweredByEveryone ? acc.sum + 1 : acc.sum,
          unique: [...acc.unique, v],
        };
      },
      { sum: 0, unique: [] as Array<string> }
    );

  return sum;
}

export function getSumOfCounts(
  input: string,
  getter: typeof anyoneSaidYes | typeof everyoneSaidYes
) {
  const groups = input.split(/\n *\n/);
  const answers = groups.map((answer) => {
    const normalizedAnswers = answer.split("\n").map((answer) => answer.trim());
    return getter(normalizedAnswers);
  });

  const sumOfCounts = answers.reduce((sum, v) => sum + v, 0);

  return sumOfCounts;
}
