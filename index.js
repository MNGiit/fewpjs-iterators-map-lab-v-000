const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// https://stackoverflow.com/questions/8334606/check-if-first-letter-of-word-is-a-capital-letter

const titleCased = () => {
  // return tutorials
  // return word[0] !== word[0].toLowerCase();
  return tutorials.map(function (tutorial) {
    tutorial[0] !== tutorial[1].toLowerCase();
  })
}
