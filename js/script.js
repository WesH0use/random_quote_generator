/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing
var green;
var blue;
var red;

var quotes = [
  {
    quote: "At the same pace that mankind masters nature, man seems to become enslaved to other men or to his own infamy...All our invention and progress seem to result in endowing material forces with intellectual life, and in stultifying human life into a material force.",
    author: "Karl Marx",
    source: "The People's Paper",
    year: "1856",
  },
  {
    quote: "You're in a bad way! Apparently, you have developed a soul.",
    author: "Yevgeny Zamyatin",
    source: "A Soviet Heretic",
    year: ''
  },
  {
    quote: "Art must make its own way and by its own means. The Marxian methods are not the same as the artistic. The party leads the proletariat but not the historic processes of history.",
    author: "Leon Trotsky",
    source: "Communist Policy Toward Art",
    year: "1923"
  },
  {
    quote: "Poetry arises from the desire to get beyond the finite and the historical and to reach the transcendent or diving...The poem is always a record of failure.",
    author: "Ben Lerner",
    source: "The Hatred of Poetry",
    year:''

  },
  {
    quote: "Okay, I write overblown, purple, self-indulgent prose. So fucking what?",
    author: "Angela Carter",
    source: '',
    year:'',
  },
  {
    quote: "Once there had been the subterranean language with the underground forces. If speech at all then it was the spaces between the words, and the echoes the words left, or what might be really meant under the surface.",
    author: "Ann Quin",
    source: "The Unmapped Country",
    year:'111'
  },
  {
    quote: "The soul is said by some to be a bourgeois luxury, which shows a strange misunderstanding both of the soul and bourgeoisie.",
    author: "David Gascoyne",
    source: "A Vagrant",
    year:''
  },
  {
    quote: "Unforgettable. Yes, that's what she said. An unforgettable love. And brief. Like a hurricane?. No, a love brief as the sigh of a guillotined head.",
    author: "Roberto Bolaño",
    source: "The Romantic Dogs",
    year:''
  }
]

/*
Function that generates a random number..
Random number used to index from the global quotes array
local variables of quote, source, author, year are set to the randomQuote
returns an array of the quote, author, source, and year
*/
function getRandomQuote () {
  var randomNum = Math.floor(Math.random() * quotes.length);
  var RandomQuote = quotes[randomNum];
  var quote = RandomQuote.quote;
  var source = RandomQuote.source;
  var author = RandomQuote.author;
  var year = RandomQuote.year;
  return [quote, author, source, year];
}

/*
Local variable message assigned to array from getRandomQuote
Local variables of quote, source, author, year are set to respective indexes from the array
sets local html variable to string concat with quote and author
if there is a year, it's added to the html string
returns message string
*/
function printQuote () {
  var message = getRandomQuote();
  var quote = message[0];
  var author = message[1];
  var source = message[2];
  var year = message[3]

  var html = "<p class='quote'>" + quote + "</p>" + "<p class='source'>" + author + "</p>" + "<p class='citation'> " + source + "</p>";
            if (year){
              html += "<p class='year'>, " + year + "</p>";
            } else document.getElementById('quote-box').innerHTML = html;
  return html
  }



//Function to genereate random rgb color value
function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", randomColorGenerator, false);



// Remember to delete the comments that came with this file, and replace them with your own code comments.
