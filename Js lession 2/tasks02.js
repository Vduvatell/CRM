let phrase = prompt("Ведите фразу")

const phraseConvert = lower => {

  let str = lower;
  let firstChar = str.charAt(0);
  let upperFirstChar = firstChar.toUpperCase();
  let restOfString = str.slice(1);
  let restOfStringSlice = restOfString.toLowerCase();
  let results = upperFirstChar + restOfStringSlice;

  return results
}

console.log(phraseConvert(phrase));