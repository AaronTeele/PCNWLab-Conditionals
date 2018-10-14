function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}

/*
    @func generateTrafficLight
    @returns {string}
    @desc - generates a random number from 1 to 3
            if 1, return 'red'
            if 2, return 'green',
            if 3, return 'blue'
            
    @example generateTrafficLight(); // 'red' or 'blue' or 'green'
*/
    const generateTrafficLight = () => {
        const light = generateRandomNumberFromRange(1, 3)
        if (light === 1) return "red";
        if (light === 2) return "green";
        return "yellow";
    };
    console.log('Traffic Light:', generateTrafficLight());
/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/

    const pad = (phoneNum, digits) => {
        if(digits === 3){
            if (num < 10) {
                return digits = "00" + digits;
            } else if (phoneNum < 100) {
              return digits = "0" + digits;
            };
        } else if (num === 4){
            if (digits < 10) {
                digits = "000" + digits;
            } else if (digits < 100) {
                digits = "00" + digits;
            } else if (digits < 1000){
                digits = "0" + digits;
            };
        }
    }
    const generateRandomPhoneNumber = () => {
        //let phoneNum = `1 - ${generateRandomNumberFromRange(000, 999)} - ${generateRandomNumberFromRange(000, 999)} - ${generateRandomNumberFromRange(1000, 9999)} `;
        let phoneNum = "1-"
        let digits1 = generateRandomNumberFromRange(0, 999)
        let digits2 = generateRandomNumberFromRange(0, 999)
        let digits3 = generateRandomNumberFromRange(0, 9999)
        
        

        if (digits2 < 10) {
            digits2 = "00" + digits2;
        } else if (digits2 < 100) {
            digits2 = "0" + digits1;
        };

        if (digits3 < 10) {
            digits3 = "000" + digits3;
        } else if (digits3 < 100) {
            digits3 = "00" + digits3;
        } else if (digits3 < 1000){
            digits3 = "0" + digits3;
        };

        return phoneNum += `${digits1}-${digits2}-${digits3}`;
    };
    
    console.log("Random Phone #:", generateRandomPhoneNumber());

/*
    @func generateRandomRGB
    @returns {string}
    @desc - generates a random rgb value
            HINT: you will need to use the 
                  generateRandomNumberFromRange 
                  function from above
    
    @example generateRandomRGB(); // "rgb(255, 123, 0)"
*/


  const generateRandomRGB = () => {
    let r = generateRandomNumberFromRange(0, 255);
    let g = generateRandomNumberFromRange(0, 255);
    let b = generateRandomNumberFromRange(0, 255);
    return `rgn(${r}, ${g}, ${b})`
  }
  console.log("Random RGB:", generateRandomRGB());

/*
    @func generateLottoTicket
    @returns {string}
    @desc - generates a random lotto ticket with:
            A random number 0-9
            A random number 0-15
            A random number 0-30
            
            Present it as such: L [0-9] [0-15]-[0-30]
    
    @example generateLottoTicket(); // L 9 11-28
*/
const generateLottoTicket = () => {
    let a = generateRandomNumberFromRange(0, 9);
    let b = generateRandomNumberFromRange(0, 15);
    let c = generateRandomNumberFromRange(0, 30);
    return `L [${a}] [${b}]-[${c}]`
}
    console.log("Generate Lotto Ticket:", generateLottoTicket());
/*
    @func generatePhoneNumberWithAreaCode
    @param {number} areaCode
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
            IF `areaCode` is provided, it will use that area code
            and NOT generate one
            
    @example generatePhoneNumberWithAreaCode(); // "1-718-786-2825"
    @example generatePhoneNumberWithAreaCode( 646 ); // "1-646-786-2825"
*/

const generatePhoneNumberWithAreaCode = (areaCode) => {
   
     let phoneNum = "1-"
      
     let digits2 = generateRandomNumberFromRange(000, 999)
     let digits3 = generateRandomNumberFromRange(0000, 9999)
     
     if (areaCode = undefined) {
        digits1 = generateRandomNumberFromRange(000, 999)
     };

     if (digits1 < 10) {
         digits1 = "00" + digits1;
     } else if (digits1 < 100) {
         digits1 = "0" + digits1;
     };

     if (digits2 < 10) {
         digits2 = "00" + digits2;
     } else if (digits2 < 100) {
         digits2 = "0" + digits1;
     };

     if (digits3 < 10) {
         digits3 = "000" + digits3;
     } else if (digits3 < 100) {
         digits3 = "00" + digits3;
     } else if (digits3 < 1000){
         digits3 = "0" + digits3;
     };

     return phoneNum += `${areaCode}-${digits2}-${digits3}`;   
};
    console.log("Phonne # with area code:", generatePhoneNumberWithAreaCode());

/*
    @func generateTicketWithLetters
    @returns {string}
    @desc - geneartes a random lotto ticket with:
            A random number 0-9
            A random LOWERCASED LETTER a-z
            A random UPPERCASED LETTER A-Z
            A random number 0-30
            
            Present it as such: L [a-z] [A-Z]-[0-30]
            HINT: look up `String.fromCharCode()` on the Google
            
        @example generateLottoTicket(); // L g M-28
*/
    const generateTicketWithLetters = () => {
        let a = generateRandomNumberFromRange(0, 9);
        let upperCase = String.fromCharCode(generateRandomNumberFromRange(65, 90));
        let lowerCase = String.fromCharCode(generateRandomNumberFromRange(97, 122));
        
        let b = generateRandomNumberFromRange(0, 15);
        let c = generateRandomNumberFromRange(0, 30);
        return `L ${lowerCase} ${upperCase}-${c}`
    }
    console.log(generateTicketWithLetters())
/*
    @func rockPaperScissors
    @param {string} player1
    @param {string} player2
    @returns {number}
    @desc - given a player1 and player2
            returns 1 if player1 has won
            returns 2 if player2 has won
            returns 0 if tie
            returns -1 if invalid input
            expects both player1 and player2 inputs to be either
            "rock", "paper", or "scissors"
    
    @example rockPaperScissors( "rock", "paper" ); // 2
    @example rockPaperScissors( "rock", "scissors"); // 1
    @example rockPaperScissors( "rock", "rock" ); // 0
    @example rockPaperScissors( "r", "p" ); // -1
    @example rockPaperScissors( "r" ); // -1
    @example rockPaperScissors(); // -1
*/
const rockPaperScissors = (p1, p2) => {
    p1 = p1.toLowerCase()
    p2 = p2.toLowerCase()
    if (p1 !== "rock" && p !== "scissors" && p !== "paper" || p !== "rock" && p !== "scissors" && p !== "paper"){
        return -1
    } else if (p === p && ) {
        return 0;
    } else if ((p === "rock" && p2 === "scissors") || (p === "scissors" &&  p2 === "paper") || (p === "paper" && p2 === "rock")){
        return 1
    } else return 2
}
rockPaperScissors("rock", "scissors");


/*
    @func RPSwithComputer
    @param {string} player
    @returns {number}
    @desc - given a player,
            randomly selects a "choice" for the computer
            RUNS rockPaperScissors from before with computer's choice
            as `player2`
            expect same results as above

    @example rockPaperScissors( "rock" ); // 2, if computer won
    @example rockPaperScissors( "rock" ); // 1, if player won
    @example rockPaperScissors( "rock" ); // 0, if tied
    @example rockPaperScissors(); // -1
*/
const RPSwithComputer = player => {
    
    //computer makes random choice from the compPicksOne array. computerChoice has to be made inside the function so it makes a new choice everytime.
    let computerChoice = compPicksOne[Math.floor(Math.random() * 3)];
    if (computerChoice === 1) {
        return rockPaperScissors(player, r)
    }
    if (computerChoice === 2){
        return rockPaperScissors(player, p)
    }

    if (computerChoice === 3){
        return rockPaperScissors(player, s)
    }

    //just in case player enters invalid input, prompts with correct choices
    if(playerChoic !== "rock" && playerChoic !== "scissors" && playerChoic !== "paper"){
        return -1;
    } else if (playerChoic === computerChoice){
        //log player and computer made the same choice
        return 0;
    } else if ((playerChoic === "rock" && computerChoice === "scissors") || (playerChoic === "scissors" &&  computerChoice === "paper") || (playerChoic === "paper" && computerChoice === "rock")){
        //the above scenarios are all in which the player wins (rock vs scissors, scissors vs paper or paper vs rock)        
        return 1;
    } else {
        //log that computers choice beats players choice
        return 2;
    };
}

/*
    @func calculateGrade
    @param {number} grade
    @returns {string}
    @desc - given a numerical grade,
            determine the letter grade

    @example calculateGrade( 90 ); // A
    @example calculateGrade( 80 ); // B
    @example calculateGrade( 70 ); // C
    @example calculateGrade( 60 ); // D
    @example calculateGrade( 54 ); // F
    @example calculateGrade( -10 ); // Error
    @example calculateGrade( 10000 ); // Error
    @example calculateGrade( "lol skool sucks" ); // Error
    
*/

// function calculateGrade( grade ) {
//     // Write your codes below here
//     /*
//         assume that grade is the value the user input
//         IF grade is between [100, 95]
//             UPDATE grade = A (question: what kind of variable should A be?)
//         if grade is between [95, 85]
//             UPDATE grade = B
//         if grade is between [85, 75]
//             UPDATE grade = C
//         if grade is between [75, 65]
//             UPDATE grade = D
//         if grade is between [65, 0]
//             UPDATE grade = F
//     */
    
//     if ( grade > 90 ) {
//         return "A";
//     }
//    return "F"; // you may choose not to use this
// } 

const calculateGrade = grade => {
    if (grade <= 100 && grade >= 95) return "A";
    else if (grade < 95 && grade >= 85 ) return "B";
    else if (grade < 85 && grade >= 75) return "C";
    else if (grade < 75 && grade >= 65) return "D";
    else if (grade < 65 && grade >= 0) return "F";
    else return "ERROR"
}