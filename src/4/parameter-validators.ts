export type ParameterValidator = (data: string) => boolean;

export const byr: ParameterValidator = (data) => {
  const match = /^[0-9]{4}$/.exec(data);
  if (match && match[0]) {
    const byr = Number(match[0]);

    if (byr >= 1920 && byr <= 2002) {
      return true;
    }
  }

  return false;
};

export const iyr: ParameterValidator = (data) => {
  const match = /^[0-9]{4}$/.exec(data);
  if (match && match[0]) {
    const iyr = Number(match[0]);

    if (iyr >= 2010 && iyr <= 2020) {
      return true;
    }
  }

  return false;
};

export const eyr: ParameterValidator = (data) => {
  const match = /^[0-9]{4}$/.exec(data);
  if (match && match[0]) {
    const eyr = Number(match[0]);

    if (eyr >= 2020 && eyr <= 2030) {
      return true;
    }
  }

  return false;
};

export const hgt: ParameterValidator = (data) => {
  const match = /^(?<number>[0-9]+)(?<metric>cm|in)$/.exec(data);

  if (match && match.groups) {
    const metric = match.groups.metric as "cm" | "in";
    const number = Number(match.groups.number);

    if (metric === "cm" && number >= 150 && number <= 193) {
      return true;
    }

    if (metric === "in" && number >= 59 && number <= 76) {
      return true;
    }
  }

  return false;
};

export const hcl: ParameterValidator = (data) => {
  const match = /^#[0-9a-f]{6}$/.exec(data);

  if (match) {
    return true;
  }

  return false;
};

export const ecl: ParameterValidator = (data) => {
  const colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

  if (colors.includes(data)) {
    return true;
  }

  return false;
};

export const pid: ParameterValidator = (data) => {
  const match = /^[0-9]{9}$/.exec(data);

  if (match) {
    return true;
  }

  return false;
};
