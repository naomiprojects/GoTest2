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

// Question about Communication
addQuestions("What is Verbal Communication?", 
	["Talking to someone","When someone is talking and someone else is listening","When more than one person is talking", "Using verbal noises to show you are listening like... uh huh"], "b", 1);

addQuestions("If someone has a trouble speaking, for example had a stroke, what should you do?", 
	["Guess what they are trying to say","Give them paper so they can write it down","Teach them sign language", "Allow them time to answer"], "d", 1);

addQuestions("If you are speaking with someone who has a hearing impairment, what should you do?", 
	["Make sure you face them when you are talking","You should not be speaking to them, this is disrespectful as they cannot hear you","Give them paper and pen and write to each other", "You should learn sign language to communicate with them"], "a", 1);

addQuestions("What is communication without words?", 
	["There is no communication without words","Non-verbal communication","Telepathy", "Sign languagee"], "b", 1);

addQuestions("Which of the following is NOT a form of non-verbal communication?", 
	["Body language","Tone of voice","Written communication", "Telepathy"], "d", 1);

addQuestions("What are the two parts to communication?", 
	["There only needs to be one part, when someone says something","When someone says something, and the other person has understoods"," When someone says something, and the other person has replied", "When someone says something while using non-verbal communication"], "b", 1);

addQuestions("What needs to be complete for there to have been effective communication?", 
	["The persons sentence","The documentation","Both the sending and receiving of the message", "The task that was asked of the person"], "c", 1);

addQuestions("When you are talking directly to a person and you can see them, this is called what?", 
	["Verbal contact"," Face to face communication","Talking", "Interaction"], "b", 1);

addQuestions("When speaking on the phone, what type of communication is being used?", 
	["Verbal and tone of voice","Verbal and body languagee","Verbal", "Nonverbal communication"], "a", 1);

addQuestions("When speaking on the phone, you need to ensure you do not do what?", 
	["Break communication law","Break telephone contracts","Breach confidentiality", "Hang up on someone"], "c", 1);



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
