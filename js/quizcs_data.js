var questionsOpt1 = [];
var questionsOpt2 = [];

function addQuestions(valueQuestion, arrChoices, valueAnswer, option) {

	var quest = { 
		question: valueQuestion,
	    choices: {
    		a: arrChoices[0],
    		b: arrChoices[1],
    		c: arrChoices[2],
    		d: arrChoices[3]
    	},
	    correctAnswer: valueAnswer
	};

  	if (option == 1) {
  		questionsOpt1.push(quest)
  	} else {
		questionsOpt2.push(quest)
  	}
}

// Question about Customer Service
addQuestions("A complaining customer is:", 
	["Always right","Almost right","Often lying", "Always the customer"], "d", 1);

addQuestions("Customers who complain:", 
	["Had unhappy childhoods","Are genetically predisposed to be sourpusses","Have trouble in their primary relationships", "Are doing you a service in identifying what isn’t working in your business or organization"], "d", 1);

addQuestions("The best reward for your customer service representatives is:", 
	["Earplugs and punching bags","Valium or other mind-numbing drugs","Recognition and appreciation on your part", "Anger management seminars"], "c", 1);

addQuestions("CRM stands for:", 
	["Customers Rarely Matter","Can’t Remember Much","Communicating Random Meaning", "Customer Relationship Management"], "d", 1);

addQuestions("Customers who complain want...", 
	["Something for nothing","To be heard and have their experience validated","To vent for the sport of it", "To be made majority shareholders in the company"], "b", 1);

addQuestions("Customer Service departments:", 
	["Are the afterthought that cleans up messes other departments cause","Build customer loyalty","Are leaders in understanding customer behavior patterns and market research", "All the above"], "b", 1);

addQuestions("For a company to be considered service-oriented:", 
	["It must mention customer service in its mission statement.","At least 18.3% of its employees must work in the customer service department","Its managers must at one time have been CSRs", " Customer service must be addressed by all departments"], "d", 1);

addQuestions("A Call Center is defined as:", 
	["The midpoint in duration of a telephone call","A revenue sink hole","A place where middle-of-the-road calls coexist with liberal and arch-conservative calls", "A location where complaints and problems are converted into successful saves for your customers and your company"], "d", 1);

addQuestions("Customer Care is:", 
	["A managed care medical program for customers"," A nifty alliterative phrase that looks good in company brochures","A new program where customers care for themselves", "A philosophy wherein the customer is wrapped in service even before a problem arises"], "d", 1);

addQuestions("Customer Service Culture is:", 
	["A new form of yogurt where the lid removes itself for you","Behavior being analyzed in a Petrie dish for contagions","A mythical civilization in which everyone smiles and welcomes you when they meet", "An environment where customer service permeates the thinking of the entire company"], "d", 1);



// User Data

function saveUserData(){
	
    var txtFisrtNameValue = $("#txtFirstName").val();
    var txtLastNameValue = $("#txtLastName").val();
    var txtEmailValue = $("#txtEmail").val();

    localStorage.setItem('firstName', txtFisrtNameValue);
    localStorage.setItem('lastName', txtLastNameValue);
    localStorage.setItem('email', txtEmailValue);

    console.log("save in localStorage");
}

function retrieveUserData() {
	
	var retrivedFistNameValue = localStorage.getItem('firstName');
	var retrivedLastNameValue = localStorage.getItem('lastName');
	var retrivedEmailValue = localStorage.getItem('email');


    console.log("retrieve from localStorage");
}
