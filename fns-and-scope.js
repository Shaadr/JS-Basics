//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
  if (name === "Tyler") {
    return true;
  } else {
    return false;
  }
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
  var name = prompt("please enter your name");
  return name;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome() {
    var name = getName();
    alert("Welcome, " + name);
  }


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //argument is the value/variable/reference being passed in, parameter is the receiving VARIABLE used w/in the function/block


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


//  0, "", undefined, nul, NaN, false;
//  if any statement within if/else statment does not evaluate to true, or evaluates to one of the above, it is falsy.



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName() {
    return "Mike";
  }



//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn() {
    return function() {
      return "mike";
    }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
