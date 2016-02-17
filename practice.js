//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name,
// and another key of age with the value being your age. 
//Then alert your name using dot notation.

  var me = {
    name: 'Vanessa',
    age: 27
  }
  console.log(me.name);


//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: 
//band, food, person, book, movie, holiday. Have the values to those 
//keys be your favorite thing in that category.

  var favoriteThings = {
    band: 'The Black Keys',
    food: 'Sushi',
    person: 'Ricardo',
    movie: 'the shining',
    book: 'Satanas',
    holiday: 'Christmas'
  }


//After you've made your object, add another key named 'car'
// with the value being your favorite car and then another key 
//named 'brand' with the value being your favorite brand.

favoriteThings.car = 'honda';
favoriteThings.brand = 'accord';

//Now change the food key in your favoriteThings object to be 
//'Lettuce' and change the book key in your favoriteThings object 
//to be '50 Shades of Gray'.

favoriteThings['food'] = 'Lettuce';
favoriteThings['book'] = '50 Shades of Gray';



//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  var backPack = {}; //empty object is by creating a new one works
  var item = 'firstPocket';
  backPack[item] = 'chapstick';



//After you do the above, alert your entire backPack object.

alert(backPack)

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  console.log(backPack);




//NEXT PROBLEM


//Create an 'alsoMe' object with the following properties name, 
//age, height, gender, married, eyeColor, hairColor. Fill those 
//properties in with the appropriate values.

var alsoMe = {
  name: 'Vanessa',
  age: 27,
  height: '1.5',
  gender: 'female',
  married: 'engaged',
  eyeColor: 'green',
  hairColor: 'brunette'
};

//Now, loop through your object and alert every value. 
//*Tyler --> 24 --> 6'0 --> Male, etc etc
var examineObject = function(obj) {
  for(var key in obj) {
    console.log(obj[key]);
  }
}
examineObject(alsoMe);



//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song 
//titles that you make up, with the values being the length of each song.

var album = {
  roxxane: '2:00',
  laMacarena: '3:00',
  ilegal: '1:00',
  cerdo: '1:50',
  lola: '4:00'
}

//Now, loop through your album object alerting every song title individually.

var songs = function(obj) {
  for(var key in obj) {
     alert(key);
  }
}
songs(album);




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties 
//with the values being their population (doesn't have to be accurate).


  var states = {
    florida: 20000,
    texas: 50000,
    newYork: 10000,
    atlanta: 40000,
    california: 60000
  }

//Now, loop through your states object and if the states population is 
//greater than 30K, alert that state.

var population = function(obj) {
  for(var key in obj) {
    if(obj[key] > 30000) {
      alert(key);
    }
  }
}
population(states);




//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  var info = function(obj) {
    for(var key in obj) {
      if(!obj[key]) { 
        delete obj[key];
        // console.log('should delete'); // by console is checking the falsy
      }
    }
  }

info(user1);
console.log(user1); 



//Once you get your truthy Object, Change the remaining values 
//in the object to be specific to you (name: 'your name', username: 
//'your username'), rather than my information.

user1.name = 'vanessa';
user1.pwHash = 'hhh';
user1.username = 'vanealvarez8a';
console.log(user1)



//NEXT PROBLEM


var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  user2['name'] = 'Tyler S. McGinnis';
  user2['email'] = 'tyler.mcginnis@devmounta.in'

//Now call the sayName method that's on the user object which will alert the users email

user2.sayName();


//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {}

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  methodCollection['alertHello'] = function() { alert('hello'); }
  methodCollection['logHello'] = function() { console.log('hello'); }

//Now call your alertHello and logHello methods.

  methodCollection.alertHello();
  methodCollection.logHello;



//NEXT PROBLEM



// Create a function called MakePerson which takes in name, 
//birthday, ssn as its parameters and returns a new object with 
//all of the information that you passed in.

//is this the right approach to this problem??? 


//NEXT PROBLEM

  var MakePerson = function(name, birthday, ssn) {
     var newPerson = {};
     newPerson.name = name;
     newPerson.birthday = birthday;
     newPerson.ssn = ssn;
     return newPerson;
     
  }

// Create a function called MakeCard which takes in cardNumber, expirationDate, 
//and securityCode to make a Credit Card object and returns that object so that
// whenever you invoke MakeCard, you get a brand new credit card.

var MakeCard = function(cardNumber, expirationDate, securityCode) {
  return { 
  cardNumber: cardNumber,
  expirationDate: expirationDate,
  securityCode: securityCode,
  }
}



//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns
 you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter 
   and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all 
   the properties from the person as well as the creditcard. While Object.assign would 
   give you the answer, specRunner requires an answer without using it.
*/

var bindCard = function(person, creditcard) {
  var newObjeto = {}
  for (var key in person) {
    newObjeto[key] = person[key];
  }
  for (var key in creditcard) {
    newObjeto[key] = creditcard[key];
  }
  return newObjeto;
}
