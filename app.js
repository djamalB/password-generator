function generatePassword(length, difficulty, count = 1) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const symbols = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
  let validChars = "";

  if (difficulty === "easy") {
    validChars = alphabet;
  } else if (difficulty === "medium") {
    validChars = alphabet + digits;
  } else if (difficulty === "hard") {
    validChars = alphabet + digits + symbols;
  } else {
    console.log("Ошибка");
  }
  const generateSinglePassword = () => {
    let newPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      const randomSymbol = validChars[randomIndex];
      newPassword += randomSymbol;
    }

    return newPassword;
  };
  if (count === 1) {
    return generateSinglePassword();
  } else if (count > 1) {
    const passwords = [];
    for (let i = 0; i < count; i++) {
      passwords.push(generateSinglePassword());
    }
    return passwords;
  } else {
    console.log("Ошибка");
  }
}

console.log(generatePassword(6, "easy"));
