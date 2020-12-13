export function getManhattanDistance(input: string) {
  const instructions = input.split("\n").map((inst) => {
    const normalized = inst.trim();
    return {
      action: normalized[0] as "N" | "S" | "E" | "W" | "L" | "R" | "F",
      value: Number(normalized.slice(1)),
    };
  });

  const ship = {
    direction: "E",
    east: 0,
    north: 0,
  };

  for (let { action, value } of instructions) {
    if (action === "F") {
      if (ship.direction === "E") {
        ship.east += value;
        continue;
      }

      if (ship.direction === "W") {
        ship.east -= value;
        continue;
      }

      if (ship.direction === "N") {
        ship.north += value;
        continue;
      }

      if (ship.direction === "S") {
        ship.north -= value;
        continue;
      }

      continue;
    }

    if (action === "N") {
      ship.north += value;
      continue;
    }

    if (action === "S") {
      ship.north -= value;
      continue;
    }

    if (action === "E") {
      ship.east += value;
      continue;
    }

    if (action === "W") {
      ship.east -= value;
      continue;
    }

    if (action === "R" || action === "L") {
      const mod = (n: number, m: number) => {
        return ((n % m) + m) % m;
      };

      const directions = ["E", "S", "W", "N"];
      const steps = value / 90;
      const curr = directions.findIndex((d) => d === ship.direction);

      ship.direction =
        directions[mod(curr + (action === "R" ? steps : -steps), 4)];

      continue;
    }
  }

  return Math.abs(ship.east) + Math.abs(ship.north);
}

export function getManhattanDistanceWithWaypoint(input: string) {
  const instructions = input.split("\n").map((inst) => {
    const normalized = inst.trim();
    return {
      action: normalized[0] as "N" | "S" | "E" | "W" | "L" | "R" | "F",
      value: Number(normalized.slice(1)),
    };
  });

  const ship = {
    direction: "E",
    east: 0,
    north: 0,
  };

  const waypoint = {
    east: 10,
    north: 1,
  };

  for (let { action, value } of instructions) {
    if (action === "F") {
      ship.east += waypoint.east * value;
      ship.north += waypoint.north * value;

      continue;
    }

    if (action === "N") {
      waypoint.north += value;
      continue;
    }

    if (action === "S") {
      waypoint.north -= value;
      continue;
    }

    if (action === "E") {
      waypoint.east += value;
      continue;
    }

    if (action === "W") {
      waypoint.east -= value;
      continue;
    }

    if (action === "R" || action === "L") {
      type RotatorFn = (x: number, y: number) => [number, number];

      const rotator: {
        L: [RotatorFn, RotatorFn];
        R: [RotatorFn, RotatorFn];
      } = {
        L: [(x, y) => [-y, x], (x, y) => [-x, y]],
        R: [(x, y) => [y, -x], (x, y) => [-x, y]],
      };

      const steps = value / 90;

      for (let i = 0; i < steps; i++) {
        const [x, y] = rotator[action][i % 1](waypoint.east, waypoint.north);
        waypoint.east = x;
        waypoint.north = y;
      }

      continue;
    }
  }

  return Math.abs(ship.east) + Math.abs(ship.north);
}
