type Configuration = {
  rule: {
    bottom: number;
    top: number;
    char: string;
  };
  password: string;
};

const ConfigurationInputRegex = /(?<bottom>[0-9]+)-(?<top>[0-9]+) (?<char>[a-z]): (?<password>[a-z]+)/;

const parseConfiguration = (input: string) => {
  const matches = ConfigurationInputRegex.exec(input);
  if (matches?.groups) {
    const configuration: Configuration = {
      rule: {
        top: Number(matches.groups.top),
        bottom: Number(matches.groups.bottom),
        char: matches.groups.char,
      },
      password: matches.groups.password,
    };
    return configuration;
  }

  throw Error("invalid configuration");
};

function getConfiguration(input: string) {
  return input.split("\n").map((configurationInput) => {
    return parseConfiguration(configurationInput);
  });
}

type PasswordChecker = (configuration: Configuration) => boolean;

export const passwordChecker1 = (configuration: Configuration) => {
  const {
    password,
    rule: { bottom, char, top },
  } = configuration;

  const policy = password.split("").filter((a) => a === char).length;

  if (policy <= top && policy >= bottom) {
    return true;
  }

  return false;
};

export const passwordChecker2 = (configuration: Configuration) => {
  const {
    password,
    rule: { bottom, char, top },
  } = configuration;

  if (
    (password[top - 1] === char || password[bottom - 1] === char) &&
    password[top - 1] !== password[bottom - 1]
  ) {
    return true;
  }

  return false;
};

export const checkPasswords = (
  input: string,
  passwordChecker: PasswordChecker
) => {
  const configurations = getConfiguration(input);
  const validPasswords = configurations.filter(passwordChecker);

  return validPasswords.length;
};
