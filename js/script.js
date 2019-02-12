

var quotes = [
  {
    quote: "All our invention and progress seem to result in endowing material forces with intellectual life, and in stultifying human life into a material force.",
    author: "Karl Marx",
    source: "The People's Paper",
    year: "1856",
  },
  {
    quote: "You're in a bad way! Apparently, you have developed a soul.",
    author: "Yevgeny Zamyatin",
    source: "A Soviet Heretic",
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
    year: "2016"

  },
  {
    quote: "Okay, I write overblown, purple, self-indulgent prose. So fucking what?",
    author: "Angela Carter",

  },
  {
    quote: "Once there had been the subterranean language with the underground forces. If speech at all then it was the spaces between the words, and the echoes the words left, or what might be really meant under the surface.",
    author: "Ann Quin",
    source: "The Unmapped Country",
    year: "2018"
  },
  {
    quote: "The soul is said by some to be a bourgeois luxury, which shows a strange misunderstanding both of the soul and bourgeoisie.",
    author: "David Gascoyne",
    source: "A Vagrant",
  },
  {
    quote: "Unforgettable. Yes, that's what she said. An unforgettable love. And brief. Like a hurricane?. No, a love brief as the sigh of a guillotined head.",
    author: "Roberto Bolaño",
    source: "The Romantic Dogs",
  }
]

/*
Function that generates a random number..
Random number used to index from the global quotes array
*/
function getRandomQuote () {
  var randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum]
}

function randomRGB() {
  return Math.floor(Math.random() * 256);
  }
/*
Local variable message assigned to array from getRandomQuote
sets local html variable to string concat with quote and author
if there is a year, it's added to the html string
returns message string
*/
function printQuote () {
  var message = getRandomQuote();
  var quote = message.quote;
  var author = message.author;
  var source = message.source;
  var year = message.year;

  var html = "<p class='quote'>" + quote + "</p>" + "<p class='source'>" + author;
            if (year){
              html += "<span class='year'>" + year + "</span>";
            } if (source) {
              html += "<span class='citation'> " + source + "</span>";
            };
  document.getElementById('quote-box').innerHTML = html;
  return html
  }

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
