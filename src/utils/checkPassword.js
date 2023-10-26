function checkPassword(password) {
  const passwordStrength = {
    score: 0,
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    is8Char: false,
    isOver8Char: false,
    isOver12Char: false,
  };

  if (password.length == 8) {
    passwordStrength.is8Char = true;
    passwordStrength.score++;
  }

  if (password.length > 8) {
    passwordStrength.isOver8Char = true;
    passwordStrength.score++;
  }

  if (password.length > 12) {
    passwordStrength.isOver12Char = true;
    passwordStrength.score++;
  }

  if (/[a-z]/.test(password)) {
    passwordStrength.hasLowerCase = true;
    passwordStrength.score++;
  }

  if (/[A-Z]/.test(password)) {
    passwordStrength.hasUpperCase = true;
    passwordStrength.score++;
  }

  if (/[0-9]/.test(password)) {
    passwordStrength.hasNumber = true;
    passwordStrength.score++;
  }

  if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    passwordStrength.hasNonAlphaNumeric = true;
    passwordStrength.score++;
  }

  return passwordStrength;
}

export default checkPassword;
