function parseInstruction(def: string) {
  const parser = /(?<instruction>[a-z]+) ?(?<offset>[+-][0-9]+)?/;

  const { instruction, offset } = parser.exec(def)?.groups!;

  return { instruction, offset: Number(offset) } as {
    instruction: "acc" | "jmp" | "nop";
    offset: number;
  };
}

function getInstructions(input: string) {
  return input.split("\n").map((i) => parseInstruction(i.trim()));
}

function runProgram(
  instructions: Array<ReturnType<typeof parseInstruction>>
): { acc: number; reason: "INF" | "OUT" } {
  let acc = 0;
  let address = 0;
  let visited = [] as Array<number>;

  function runInstruction(givenAddress: number) {
    const { instruction, offset } = instructions[givenAddress];

    if (instruction === "acc") {
      acc = acc + offset;
      return 1;
    }

    if (instruction === "jmp") {
      return offset;
    }

    // nop and others...
    return 1;
  }

  try {
    while (true) {
      address += runInstruction(address);

      if (visited.includes(address)) {
        return { acc, reason: "INF" };
      }

      visited.push(address);
    }
  } catch (e) {
    // end of the program
  }

  return { acc, reason: "OUT" };
}

export function analyzeProgram(input: string) {
  const instructions = getInstructions(input);

  return runProgram(instructions);
}

export function hackDevice(input: string) {
  const method = {
    jmp: "nop",
    nop: "jmp",
  } as const;

  function bruteForce(change: keyof typeof method) {
    const instructions = getInstructions(input);

    const occurrences = instructions.reduce((acc, v, i) => {
      if (v.instruction === change) {
        acc = [...acc, i];
      }

      return acc;
    }, [] as Array<number>);

    for (let i = 0; i < occurrences.length; i++) {
      // deep copy like a pro
      const newProgram = JSON.parse(JSON.stringify(instructions));
      newProgram[occurrences[i]].instruction = method[change];

      const { reason, acc } = runProgram(newProgram);
      if (reason === "OUT") {
        return acc;
      }
    }
  }

  return bruteForce("nop") || bruteForce("jmp");
}
