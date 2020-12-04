import {
  ParameterValidator,
  byr,
  ecl,
  eyr,
  hcl,
  hgt,
  iyr,
  pid,
} from "./parameter-validators";

export type Validator = (passport: Passport) => boolean;

export type Passport = Map<Parameter, string>;

export type Parameter =
  | "byr"
  | "iyr"
  | "eyr"
  | "hgt"
  | "hcl"
  | "ecl"
  | "pid"
  | "cid";

export function naiveValidate(passport: Passport) {
  if (!passport.has("byr")) {
    return false;
  }

  if (!passport.has("iyr")) {
    return false;
  }

  if (!passport.has("eyr")) {
    return false;
  }

  if (!passport.has("hgt")) {
    return false;
  }

  if (!passport.has("hcl")) {
    return false;
  }

  if (!passport.has("ecl")) {
    return false;
  }

  if (!passport.has("pid")) {
    return false;
  }

  if (!passport.has("cid")) {
    // Santa is hacker :)
    // return false;
  }

  return true;
}

export function createPassport(passport: Array<[string, string]>) {
  return new Map(passport) as Passport;
}

const createParameterValidator = (passport: Passport) => (
  parameter: Parameter,
  parameterValidator: ParameterValidator
) => {
  if (passport.has(parameter)) {
    const data = passport.get(parameter);

    if (!data) {
      return false;
    }

    if (parameterValidator(data)) {
      return true;
    }
  }

  return false;
};

export function strongerValidate(passport: Passport) {
  const validateParameter = createParameterValidator(passport);

  if (!validateParameter("byr", byr)) {
    return false;
  }

  if (!validateParameter("iyr", iyr)) {
    return false;
  }

  if (!validateParameter("eyr", eyr)) {
    return false;
  }

  if (!validateParameter("hgt", hgt)) {
    return false;
  }

  if (!validateParameter("hcl", hcl)) {
    return false;
  }

  if (!validateParameter("ecl", ecl)) {
    return false;
  }

  if (!validateParameter("pid", pid)) {
    return false;
  }

  return true;
}
