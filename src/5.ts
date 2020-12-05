/**
 * Split the interval based on configuration
 *
 * @param def six characters defining the row
 * @param start defining interval we look within
 * @param config first item is instruction to take lower half, second upper half
 */
const splitInterval = <Low extends string, High extends string>(
  def: ReadonlyArray<Low | High>,
  start: [number, number],
  config: readonly [Low, High]
) => {
  const result = def.reduce((interval, instruction) => {
    const [low, high] = interval;
    const [lowerInterval, higherInterval] = config;

    if (instruction === lowerInterval) {
      return [low, (low + high + 1) / 2 - 1] as typeof start;
    }

    if (instruction === higherInterval) {
      return [(low + high + 1) / 2, high] as typeof start;
    }

    throw new Error("missing correct instruction");
  }, start);

  return result[0];
};

function getConfirmedIds(passes: string) {
  return passes
    .split("\n")
    .map((boardingPass) => {
      return decodeSeating(boardingPass.trim());
    })
    .map((seating) => {
      return seating.id;
    })
    .sort();
}

export function decodeSeating(seating: string) {
  if (seating.length > 10) {
    throw Error("seating is in wrong format");
  }

  const rowDef = [...seating.slice(0, 7)] as Array<"F" | "B">;
  const columnDef = [...seating.slice(-3)] as Array<"R" | "L">;

  const row = splitInterval([...rowDef], [0, 127], ["F", "B"]);
  const column = splitInterval([...columnDef], [0, 7], ["L", "R"]);
  const id = row * 8 + column;

  return { column, row, id };
}

export function highestSeatId(passes: string) {
  return Math.max(...getConfirmedIds(passes));
}

export function findMySeat(passes: string) {
  const confirmedIds = getConfirmedIds(passes);

  let lastId = confirmedIds[0];
  for (let i = 1; i < confirmedIds.length; i++) {
    const currentId = confirmedIds[i];

    if (currentId != lastId + 1) {
      return currentId - 1;
    }
    lastId = currentId;
  }
}
