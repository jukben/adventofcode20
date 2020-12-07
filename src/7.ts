type Contains = Array<{ count: number; name: string }>;
type Manual = { type: string; contains: Contains };

const MY_BAG = "shiny gold";

function getManual(input: string): Record<string, Contains> {
  const bagsManual: Array<Manual> = input.split("\n").map((def) => {
    const configuration = def.trim();

    const typeParser = /((?<name>[a-z ]+) bags?) contain/;

    const type = typeParser.exec(configuration)?.groups?.name!;
    const contains = [] as Contains;

    const contentParser = / (?<count>[0-9]*) ((?<name>[a-z ]+) bags?)/g;

    let contentMatcher;
    while ((contentMatcher = contentParser.exec(configuration))) {
      const count = Number(contentMatcher?.groups?.count!);
      const name = contentMatcher?.groups?.name!;
      contains.push({
        count,
        name,
      });
    }

    return { type, contains };
  });

  const normalized = bagsManual.reduce((acc, v) => {
    acc[v.type] = v.contains;

    return acc;
  }, {} as Record<string, Contains>);

  return normalized;
}

export function howManyCanContainAtLeastOneShinyGoldBag(input: string) {
  const manual = getManual(input);

  function canHoldGoldBag(searchName: string): boolean {
    if (searchName === "shiny gold") {
      return true;
    }

    for (const { name } of manual[searchName]) {
      if (canHoldGoldBag(name)) {
        return true;
      }
    }

    return false;
  }

  const canCarryGoldBag = Object.keys(manual).filter((id) => {
    if (id === MY_BAG) return false;

    return canHoldGoldBag(id);
  });

  return canCarryGoldBag.length;
}

export function howManyBagsAreRequired(input: string) {
  const manual = getManual(input);

  function countBags(searchName: string) {
    if (!manual[searchName].length) {
      return 0;
    }

    const sum = manual[searchName].reduce((acc, v) => {
      acc += v.count + v.count * countBags(v.name);

      return acc;
    }, 0);

    return sum;
  }

  return countBags(MY_BAG);
}
