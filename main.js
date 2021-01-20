alert("Welcome to Casa de Pat")

let partySize = parseInt(prompt("How many members in your party?"))
let ofLegalAge = ""

while (!Number.isInteger(partySize)) {
  partySize = parseInt(prompt("Please enter a valid number"))
}

if(!(partySize > 8)){
  while(!(ofLegalAge == "yes" || ofLegalAge == "no")){
    ofLegalAge = prompt("Is everyone in your party over the age of 21?")
  } 
  if(ofLegalAge === "yes") {
    let validId;
    do {
      validId = prompt("Does every member of your party have a valid id")
    } while (!(validId == "yes" || validId == "no"))
    if (validId == "yes"){
      let wearingJeans;
      do {
        wearingJeans = prompt("Are any of you wearing jeans?")
      } while (!(wearingJeans == "yes" || wearingJeans == "no"))

      if(!(wearingJeans == "yes")){
        let tableNumber = Math.floor(Math.random() * (max - min) +1)
        alert(`Welcome to Casa de Pat. You will be seated at table number ${tableNumber} please enjoy your meal.`)
      } else {
        alert("Sorry y'all we got standards. Please change out of your jeans.")
      }
    } else {
      alert("Sorry, we need to prove everyone age to CYA")
    }
  } else {
    alert("Sorry y'all this is an adult establishment. Get lost.")
  }
} else {
  alert("Sorry, we are too busy")
}
