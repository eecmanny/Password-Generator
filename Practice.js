function generatePassword(length, includeUpperCase, includeLowerCase, includeSpecialSymbols, includeNumbers) {
  let charset = '';
  let password = '';

  if (includeUpperCase) {
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (includeLowerCase) {
    charset += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (includeSpecialSymbols) {
    charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  }
  if (includeNumbers) {
    charset += '0123456789';
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Prompt the user for the desired password length
const length = parseInt(prompt('Enter the desired password length:'));

// Example usage
const includeUpperCase = true;
const includeLowerCase = true;
const includeSpecialSymbols = true;
const includeNumbers = true;

const password = generatePassword(length, includeUpperCase, includeLowerCase, includeSpecialSymbols, includeNumbers);
console.log(password);