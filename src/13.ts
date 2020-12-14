export function findNearestBus(erliestBusDeparture: number, listIds: string) {
  const busIds = listIds.split(",");

  const possibilities: Array<[string, number]> = [];
  for (let busId of busIds) {
    if (busId === "x") continue;
    const nextDeparture =
      (Math.floor(erliestBusDeparture / Number(busId)) + 1) * Number(busId);

    if (nextDeparture > erliestBusDeparture) {
      possibilities.push([busId, nextDeparture]);
    }
  }

  possibilities.sort(([, a], [, b]) => a - b);

  const [id, time] = possibilities[0];

  return Number(id) * (time - erliestBusDeparture);
}
