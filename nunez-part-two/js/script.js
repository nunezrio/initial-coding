// What To Wear



// Prompting user for both the temperature and type of event

let tempInput = 'What is the current temperature in Fahrenheit?';
let eventInput = 'Will you be attending a casual, semi-formal, or formal event?';

let tempFahr = prompt(tempInput);
let eventType = prompt(eventInput);

// Arrays of Suggestions based on the temperature and type of event

let tempSug = ['a coat', 'a jacket', 'no jacket'];

let eventSug = ['something comfy', 'a polo', 'a suit'];

// Conditional Function that is based on the previous input from the user

function whatToWear(tempFahr, eventType, eventSug, tempSug) {

  if (tempFahr < 54) {
    tempSug = tempSug[0];
  } else if ((tempFahr >= 54 && tempFahr <= 70)) {
    tempSug = tempSug[1];
  } else if (tempFahr > 70) {
    tempSug = tempSug[2];
  }

  if (eventType == 'casual') {
    eventSug = eventSug[0];
  } else if (eventType == 'semi-formal') {
    eventSug = eventSug[1];
  } else if (eventType == 'formal') {
    eventSug = eventSug[2];
  }

return `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear ${eventSug} and ${tempSug}.`;

}

let result = whatToWear(tempFahr, eventType, eventSug, tempSug)

console.log(result);