const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let words = "";
  let letter = "";
  console.log(expr.length);
  for (let i = 0; i <= expr.length; i += 2) {
    if (i % 10 === 0 && i) {
      if (letter === "sssss") words += " ";
      else words += MORSE_TABLE[letter];
      letter = "";
    }
    const symbol = expr[i] + expr[i + 1];
    if (symbol === "00") continue;
    if (symbol === "**") letter += "s" /* space */;
    else letter += symbol === "10" ? "." : "-";
  }
  return words;
}

module.exports = {
  decode,
};
