const Tree = "tree";
const Nothing = "nothing";

const WorldObjects = {
  "#": Tree,
  ".": Nothing,
} as const;

function generateWorld(input: string) {
  const normalized = input.split("\n").map((row) => row.trim());
  const world = normalized.join("");

  const worldDimensions = {
    height: normalized.length,
    width: normalized[0].length,
  };

  const get = (x: number, y: number) => {
    const wX = x % worldDimensions.width;

    if (y > worldDimensions.height - 1) {
      return null;
    }

    const object = world[
      wX + y * worldDimensions.width
    ] as keyof typeof WorldObjects;

    return WorldObjects[object];
  };

  return {
    get,
    worldDimensions,
  };
}

export function countTrees(
  input: string,
  configurations: Array<[number, number]> = [[3, 1]]
) {
  const { worldDimensions, get } = generateWorld(input);

  let treesMultiplied = 1;

  for (const config of configurations) {
    let trees = 0;

    const [x, y] = config;

    for (let i = 1; i < worldDimensions.height; i += 1) {
      const object = get(x * i, y * i);

      // out of the woods...
      if (object === null) {
        break;
      }

      if (object === Tree) {
        trees++;
      }
    }

    treesMultiplied *= trees;
  }

  return treesMultiplied;
}
