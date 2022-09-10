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

function titleCased()  {
    return tutorials.map(function(word) {
      const tokens = word.split(' ')
      const words = tokens.map(
       (word) => word.charAt(0).toUpperCase() + word.slice(1));
       const capitalizeArray = words.join(' ');
       return capitalizeArray
  })
}

