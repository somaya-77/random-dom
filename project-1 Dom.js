// variables

let quote = document.querySelector('.qoute');
console.log(quote)
let person = document.querySelector('.person');
console.log(person)

let btn = document.querySelector('#new-quote');
console.log(btn)


const quotes = [{
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person: `Mahatma Gandhi`
},{
  quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
  person: `Albert Einstein`
},{
  quote: `"At this best, man is the noblest of all animals; separated from law and justice he is the worst."`,
  person: `Aristotle`
},{
  quote: `"your time is limited, so dont waste it living someone else's life."`,
  person: `Steve Jobs`
},{
  quote: `"Tell me and I forget. teach me and I remember. Involve me and I learn."`,
  person: `Benjamin Franklin`
},];


btn.addEventListener('click', function(){

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

});
// btn();