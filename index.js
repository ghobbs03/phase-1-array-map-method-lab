const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(element => findWordsInString(element))
}


function findWordsInString(title) {
  const words = title.split(' '); // split str up by words
  const capitalWords = words.map(word => {
    const firstLetter = word[0];
    return word.replace(firstLetter, firstLetter.toUpperCase());
  }); // makes first letter uppercase
  return capitalWords.join(' '); // put back together
}