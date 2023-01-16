function generatePassword(state, length) {
  let password = "";
  let characters = "";
  if (state.isUppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (state.isLowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (state.isNumber) {
    characters += "0123456789";
  }
  if (state.isSymbol) {
    characters += "!@#$%^&*()_+=?.,";
  }
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

export default generatePassword;
