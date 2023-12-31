const input = "I am a \u{1F40B}. My name is Swimy. Nice to meet you! \u{263A}";

const vowels = ["a", "e", "i", "o", "u"];

let vowelPhrase = "";

for (let i = 0; i < input.length; i++) {
  //console.log(`Input index has ${i} characters`)
  for (let j = 0; j < vowels.length; j++) {
    //console.log(`vowel index has ${j} characters`);
    if (input[i].toLowerCase() === vowels[j]) {
      if (input[i].toLowerCase() === "u") {
        // Double the 'U'
        vowelPhrase += input[i].toUpperCase().repeat(2);
      } else {
        //console.log(input[i]);
        vowelPhrase += input[i].toUpperCase();
      }
    }
  }
}

console.log(`${input} ${vowelPhrase}!!`);
