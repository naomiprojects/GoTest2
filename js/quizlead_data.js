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
addQuestions("Which of the following is NOT true of charismatic leaders?", 
	["They have a vision.","They have behavior that is unconventional.","They are willing to take high personal risk.", "They are focused on their personal needs."], "d", 1);

addQuestions("A charismatic leader's _____ is key to follower acceptance.", 
	["Energy","Vision","Credentials", "History with the organization"], "b", 1);

addQuestions("Which of the following is NOT a dimension of trust?", 
	["Integrity","Competence","Loyalty", "Distance"], "d", 1);

addQuestions("CWhich of the following is NOT true of charismatic leaders?r", 
	["They have a vision.","They have behavior that is unconventional.","They are willing to take high personal risk.", "They are focused on their personal needs."], "d", 1);

addQuestions("Leaders demonstrate _______ when they use language to influence followers' perceptions of the world, the meaning of events, beliefs about causes and consequences, and visions of the future.", 
	["Mentoring","Influence","Framing", "Vision"], "c", 1);

addQuestions("Which of the following is NOT true of charismatic leaders?", 
	["They have a vision.","They have behavior that is unconventional.","They are willing to take high personal risk.", "They are focused on their personal needs."], "d", 1);

addQuestions("The overall evidence indicates that transformational leadership is more strongly correlated than transactional leadership with _____.", 
	["Lower turnover rates","Higher productivity","Higher employee satisfaction", "All of the above"], "d", 1);

addQuestions("_____ leaders know who they are, know that they believe in and value, and act on those values and beliefs openly and candidly.", 
	["transformational","Transactional","Charismatic", "Authentic"], "d", 1);

addQuestions("Leadership is __________________.", 
	["the process of influencing a group toward the achievement of goals","a group that achieves goals","the function of influencing a group towards the achievement of goals", "directing a group towards the achievement of goals"], "a", 1);

addQuestions("Early leadership trait research sought _______________.", 
	["to clarify the need for leadership traits","and found the traits status of leaders","identification of traits that leaders could use", "characteristics that might differentiate leaders from nonleaders"], "d", 1);



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
