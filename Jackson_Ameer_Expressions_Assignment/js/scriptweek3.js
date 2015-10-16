// Ameer J. Jackson 10/15/2015 AssignmentName:Conditionals

// Conditionals - PEMDAS - The Order of Operations

// variables
var NID = "\"Network Interface Device\"";
var jack = "telephone jack";
var distancetojack = 100;
var atticaccess = true;
var crawlspace = true;

// outputs
console.log("The start point of my wire run is at the " + NID + " which is located on the outside of the customer's home.");
console.log("The end point of my wire run is at the " + jack + ", which is located in the customer's office.");
console.log("The distance is approximately " + distancetojack + "ft. straight from the " + NID + " to the office.");
console.log("It is " + atticaccess + " that there is attic access?");

// confirm returns a Boolean of either true or false
atticaccess = confirm("Is there attic access? (Ok for Yes, Cancel for No)");

// comparison operators 
// == - the equality operator - only looks at the value when comparing
// === - the strict equality or identity operator - looks at the value AND the data type
	if (atticaccess === true) {

		// code that runs if there is attic access
		var extraFeet = prompt("How many more feet of wire is needed for this route?");
		extraFeet = Number(extraFeet);

			// number conditional
			if (extraFeet >= 10) {
			
				// code that runs if there is attic access and extraFeet is greater than or equal to 10
				extraFeet = extraFeet + distancetojack;
				console.log("The total distance to the phone jack running the wire through attic will be " + extraFeet + "ft.");
	
			} else if (extraFeet === 0) {
				extraFeet = Number(prompt("Please enter the extra feet of wire needed:"));
				console.log("Thank you. The new total feet of wire needed is " + (extraFeet + distancetojack) + "ft.")
			
			} else {
				// code that runs if there is attic access and extraFeet is less than 10
				console.log("This route does not require much more feet.");
}
	 
	} else {

		// code that runs if there is no attic access
		console.log("No, there is no attic access.");
		console.log("It is " + crawlspace + " that there is a crawl space entrence?");
}
// confirm Boolean of either true or false
crawlspace = confirm("Is there a crawl space entrence? (Ok for Yes, Cancel for No)");

	if (crawlspace === true) {

		// code that will run if there is a crawl spaces entrence
		var extraFeet = prompt("How many more feet of wire is needed for this route?");
		extraFeet = Number(extraFeet);
		
			// number conditional
			if (extraFeet >= 10) {
			
				// code that will run if there is a crawl space entrence and extarFeet is greater than or eqaul to 10		
				extraFeet = extraFeet + distancetojack;
				console.log("The total distance to the phone jack running the wire under house will be " + extraFeet + ".");
	
			} else if (extraFeet === 0) {
				extraFeet = Number(prompt("Please enter the extra feet of wire needed:"));
				console.log("Thank you. The new total feet of wire needed is " + (extraFeet + distancetojack) + "ft.");
			
			} else {
				// code that runs if there is attic access and extraFeet is less than 10
				console.log("This route does not require much more feet.");
}
 
	} else {	
	// code that will run if there is no crawl space entrence
	console.log("No, there is no crawl space entrence.");
	
		// Validation
		var deny = prompt("Have you looked for an alternative route?");
	
			if (deny === "") {

				// if they entered nothing, confirm denial of service
				deny = prompt("So you are saying that there are no alternative routes and we have to deny the customer service right?");
				console.log("Thanks. Please inform the customer that " + deny + ", we have to deny service.");

			} else {
				//if they entered yes
				console.log("Ok, Please inform the customer that " + deny + " we have to deny service.");


	}

}


