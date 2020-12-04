import { Validator } from "./passport-validator";

type Parameter = "byr" | "iyr" | "eyr" | "hgt" | "hcl" | "ecl" | "pid" | "cid";

export function validatePassports(input: string, isPassportValid: Validator) {
  const db = new Set();

  const passportParameters = input.split(/\n *\n/);

  passportParameters.forEach((passportParameter) => {
    const parser = passportParameter.matchAll(
      /(?<parameter>byr|iyr|eyr|hgt|hcl|ecl|pid|cid):(?<data>\W?\w+)/g
    );

    const passport = new Map();

    for (const match of parser) {
      if (match.groups) {
        const parameter = match.groups.parameter as Parameter;
        const data = match.groups.data;

        passport.set(parameter, data);
      }
    }

    if (isPassportValid(passport)) {
      db.add(passport);
    }
  });

  return db.size;
}

export {
  strongerValidate,
  naiveValidate,
  createPassport,
} from "./passport-validator";
