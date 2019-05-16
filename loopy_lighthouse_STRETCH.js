function loopyLighthouse(range, multiples, words) {
  let startValue = range[0];
  let endValue = range[1];
  let phrase = words[0] + words[1];  
  for (let i = startValue; i <= endValue; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(phrase);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
