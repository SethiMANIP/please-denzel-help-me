// Q1. Create a variable called `denzel` - that can't be redeclared - and assign it the string 'please denzel, help me'
const denzel="please denzel, help me";

// Q2. Use the variable `actor` to create a new variable called `inspirational` that is assigned the string "Is Denzel Washington an inspirational actor?"
const actor = 'Denzel Washington';
var inspirational="Is "+actor+" an inspirational actor?";
console.log(inspirational);

// Q3  Make an object called `family` and give it the following properties:
// family has been `married` on "1983" (Number)
// family is not `presidentOfTheUnitedStates` (boolean)
// family has `children` called "John David", "Katia", "Olivia" and "Malcolm" (array of strings)
var family = new Object();
family.married=1983;
family.presidentOfTheUnitedStates=false;
family.children=["John David", "Katia", "Olivia","Malcolm"];

console.log(family);
//other way
const familyy = {
  'married': 1983,
  'presidentOfTheUnitedStates': false,
  'children':["John David", "Katia", "Olivia","Malcolm"]
};
console.log(familyy)
// Q4. Change
// * the `name` stage to "A Raisin in the Sun"
// * the `year` stage to "2014"
// using dot notation
const stage = {
  'name': 'Fences',
  'year': '2010'
};
stage.name="A Raisin in the Sun";
stage.year="2014";
console.log(stage);

// Q5. Change the `movie` "glory" to "Training Day" using square bracket notation
const awards = {
  'movie': 'glory'
};
awards["movie"]="Training Day";
console.log(awards);

// Q6. Create an object call "earlywork"
// The key should be the movie name and the value the release year
// Movies are
// * Carbon Copy (1981)
// * A Soldier Story (1984)
// * Power (1986)
// * Cry Freedom (1987)
// * For Queen and Countryy (1988)

var earlywork = {
	'Carbon Copy':1981,
	'A soldier story':1984,
	'Power':1986,
	'Cry Freedom':1987,
	'For Queen and Country':1988
 };
console.log(earlywork);

// Q7. Return a new array from `debaters` with all item in uppercase
const debaters = ['we do', 'what we have to do', 'in order to do', 'what we want to do'];
function upper(debaters){
	var Udebaters=[];
	for (i=0;i<4;i++){
		Udebaters[i]=debaters[i].toUpperCase();
		
	}
		
	return Udebaters
}
console.log(upper(debaters));


// Q8. Using this array do the following
const directors = ['spikelee', 'ridleyscott', 'zemeckis'];

// 1. add "tonyscott" value to the end of `directors` array
directors.push("tonyscott");
console.log(directors);

// 2. remove "spikelee" value and store it in a variable called firstDirector
firstDirector=directors.shift();
console.log(firstDirector);
// 3. add "himself" value  to the start of `directors` array
directors.unshift("himself");
console.log(directors);

// 4. remove "ridleyscott" value from the array and store it in a variable called secondDirector
secondDirector=directors.splice(1,1);
console.log(directors);
console.log(secondDirector);
// 5. let 'zemeckis' in the array but put a copy of it on a variable called thirdDirector
thirdDirector=directors[1];

// Q9. Write the function `duplicate` that return the expected result
function duplicate(ok){
return(ok.concat(ok));
}

console.log(duplicate(['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']));
// ❯ ['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child', 'Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']


// Q10. Refactor the current ES5-style function `police` in ES6-style.
const police = function (names) {
  const results = [];

  for (let i = 0; i < names.length; i++) {
    results.push(names[i] + 'I am the police');
  }
  return results;
};

const quotes = ['You will never see the light of... ', 'I run shit around here ', 'King Kong aint got shit on me '];

console.log(police(quotes));
 // ❯ ['You will never see the light of... I am the police', 'I run shit around here I am the police', 'King Kong aint got shit on me I am the police'];


// Q11. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// What's the query selector to get all Cast Credits titles (Live with Kelly & Ryan, The Late Show with Stephen Colbert...).			
			

//document.querySelector("#credits > div > article:nth-child(2) > div:nth-child(2) > div > strong > a")


// Q12. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// How many http requests are performed to render the page?


//183 requests


// Q13. Related to the following api call with "curl"
// ❯ curl "http://api.tvmaze.com/people/6616"
// Could you describe and explain the response?

// Q14. Refactor the following codebase with a promise notation
/*fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})
*/
// Q15. Refactor the following codebase with async/await notation
/*fetch('http://api.tvmaze.com/search/people?q=denzel+washington')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const {person} = data[0];
    const {id} = person;

    return fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`);
  })
  .then(response => {
    return response.json();
  })
  .then(console.log);
*/

// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI AND avoid to give me facebook, airbnb etc...)
/*I like the website https://views.fr/ because it is very visual ,you can easily find what your are looking for.
I like the website http://fr.topman.com/?geoip=home because the user expereince is very intuitive, when you move you cursor photos changes.
I like the website  https://devincijunior.fr/ because it is very interactive, there is some dynamic content when you scroll.*/

// Q17. Describe an ESILV project that you worked on that you’re proud of?
/*This year i was year proud of my PI2 project ,me and my team have to automatize the migration of a relationnal database to an Nosql database (mongoDb).
It was very intersesting because we really work with an ingeeneer approach,we compared some solutions ,try some of them ,use strategic 
choices in order to respect the timing and satistfy all customer exigences.
The first part of the project was a research about Nosql database because i didn't study it before ,thanks to this i really learn plenty of things about Nosql database
their advantage and how to use them.The second part of project make me progress in java because i had to manipulate big xmi files.*/

// Q18. Describe an ESILV project that you worked on that you’re not so proud of?
/*This semester i had to work on a network project .I'm not so proud of this because i didn't achieve the project beacause of the course was ininteresting and bad explained.
I had to create connexion socket and a platorm which allow computers to connect and send little text messages and pictures to others.But i had many problems with commands we should used but which didin't worked on some computers.*/

// Q19. What are some things you like about the developer tools you use?
/*One thing i like with my developper tools is that they are used by many people, so it is very easy to learn new things,there is already many tutorials,and 
you can find quickly an answer when you want to solve something.
Another thing is that most of the time the softwares we use to perform our tools don't require license for personnal use.
Another thing is that most of them are already ready to use ,just a quick installation and you can work with it that means that we can use them with almost any material.*/

// Q20. Last question: could you explain me - in your terms - why I decided to focus on Javascript Ecosystem for the Web Architecture(s) course?
/*It is very simple to start with javascript you just need a text editor, no deed to download and install complicated software.
Futhermore it is independent from IDE so if you are working a on project with others there is no problem of compatibility wtih orther IDE or versions.
The syntax is very simple and intuitive to use.
Javascript is very universal ,it can deal with other languages,for example it is very compatible with html and css,and javascript is the most used language with web application .
*/