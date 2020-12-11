const EMPTY_SEAT = "L";
const OCCUPIED_SEAT = "#";
const GROUND = ".";

const WorldObjects = {
  L: EMPTY_SEAT,
  "#": OCCUPIED_SEAT,
  ".": GROUND,
};

export function generateWorld(input: string, smart: boolean) {
  const normalized = input.split("\n").map((row) => row.trim());
  let world = normalized.join("");

  const worldDimensions = {
    height: normalized.length,
    width: normalized[0].length,
  };

  const get = (x: number, y: number) => {
    if (
      x >= worldDimensions.width ||
      x < 0 ||
      y >= worldDimensions.height ||
      y < 0
    ) {
      return undefined;
    }

    const object = world[
      x + y * worldDimensions.width
    ] as keyof typeof WorldObjects;

    return WorldObjects[object];
  };

  const getAround = (x: number, y: number) => {
    return [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y + 1],
      [x - 1, y - 1],
      [x + 1, y - 1],
      [x - 1, y + 1],
    ].map(([x, y]) => get(x, y));
  };

  const getInDirection = (x: number, y: number) => {
    return [
      (z: number) => [x - z, y],
      (z: number) => [x + z, y],
      (z: number) => [x, y - z],
      (z: number) => [x, y + z],
      (z: number) => [x + z, y + z],
      (z: number) => [x - z, y - z],
      (z: number) => [x + z, y - z],
      (z: number) => [x - z, y + z],
    ].map((getPosition) => {
      // possible bug?
      for (let i = 1; i < worldDimensions.height; i++) {
        const [pX, pY] = getPosition(i);
        const object = get(pX, pY);
        if (object === undefined) {
          break;
        }

        if (object === GROUND) {
          continue;
        }

        return object;
      }
    });
  };

  const evolve = (
    x: number,
    y: number,
    {
      behavior,
      tolerance,
    }: { behavior: typeof getInDirection; tolerance: number }
  ) => {
    if (
      get(x, y) === EMPTY_SEAT &&
      !behavior(x, y).some((t) => t === OCCUPIED_SEAT)
    ) {
      return OCCUPIED_SEAT;
    }

    if (
      get(x, y) === OCCUPIED_SEAT &&
      behavior(x, y).filter((t) => t === OCCUPIED_SEAT).length >= tolerance
    ) {
      return EMPTY_SEAT;
    }

    return get(x, y);
  };

  const tick = () => {
    let newWorld = "";
    for (let y = 0; y < worldDimensions.height; y++) {
      for (let x = 0; x < worldDimensions.width; x++) {
        newWorld += evolve(x, y, {
          behavior: smart ? getInDirection : getAround,
          tolerance: smart ? 5 : 4,
        });
      }
    }
    world = newWorld;

    return newWorld;
  };

  const stringify = () => {
    return world.match(/.{10}/g)!.join("\n");
  };

  return {
    tick,
    stringify,
  };
}

export function predictSeats(input: string, smart = false) {
  const world = generateWorld(input, smart);
  let iteration: string;
  let prevIteration: string = "";
  while ((iteration = world.tick())) {
    if (iteration === prevIteration) {
      return iteration.split("").filter((object) => object === OCCUPIED_SEAT)
        .length;
    }
    prevIteration = iteration;
  }
}
