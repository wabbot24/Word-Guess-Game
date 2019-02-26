var wordrandom = [
    "four", "score", "seven", "years", "fathers", "brought", "forth", "continent", "nation", "conceived", "liberty", "dedicated", "proposition", "created", "equal",
    "engaged", "great", "civil", "war", "testing", "whether", "long", "endure", "battlefield", "come", "dedicate", "portion", "field", "final", "resting",
    "place", "those", "here", "gave", "their", "lives", "might", "love", "altogether", "fitting", "proper", "larger", "sense", "consecrate", "hallow", "ground",
    "brave", "men", "living", "dead", "struggled", "consecrated", "above", "poor", "power", "far", "detract", "world", "will", "little", "note", "nor",
    "remember", "never", "forget", "rather", "unfinished", "work", "which", "fought", "thus", "nobly", "advanced", "task", "remaining", "before", "honored",
    "increased", "devotion", "cause", "full", "measure", "highly", "resolve", "these", "shall", "died", "vain", "under", "god", "birth", "freedom", 'necessity',
    "government", "people", "perish", "from", "this", "earth", 'emancipation', 'proclamation', 'whereas', 'whereof', 'executive', 'publicly', 'proclaimed',
    'suppressing', 'rebellion', 'commander', 'thousand', 'suitable', 'vessels', 'authorities', 'designated', 'virtue', 'represented', 'countervailing', 'testimony',
    'almighty', 'gracious', 'affixed', 'faithfully', 'abstain', 'necessary', 'excepted', 'declared', 'precisely', 'justice', 'garrison', 'wages', 'mankind'
]

var secessionlist = ["tn", "nc", "ar", "va", "tx", "la", "ga", "al", "fl", "ms", "sc"]
var battles = [
    'The War Begins. You must inspire courage, Mr. President!',
    "You've won the First Battle of Bull Run. Great Start!",
    "Antietem has been won. A Great Victory, though at Great Cost.",
    "We've won Gettysburg! Speech! Speech, Mr. President!",
    "Sherman has razed Atlanta! These Southerners are Gone With the Wind!"
]
var wins = 0;
var losses = 0;
var firsttime = true;
var consecutivewins = 0;

// upon win/loss restart() is called to re-initialize variables
document.onkeyup = function restart() {


    var thisword = wordrandom[Math.floor(Math.random() * wordrandom.length)];
    var totalGuesses = 11;
    var characterarray = [...thisword];
    var printarray = [];
    for (i = 0; i < thisword.length; i++) {
        printarray[i] = "_ ";
    }
    console.log(characterarray);

    var start = false;
    var guessedletters = [];

    var initialtext = [
        "The Year is 1866",
        "You are Abraham Lincoln",
        "You gotta fix this shit",
        "Guess a word"
    ]
    // for (i = 0; i < 4; i++) {
    //     document.getElementById("list0").innerHTML = initialtext[i];
    // }
    // if (firsttime === true) {
    // }
    // firsttime = false;

    for (i = 0; i < secessionlist.length; i++) {
        document.getElementById(secessionlist[i]).style.color = "rgb(243, 233, 89)";
    }

    // takes key in and runs only if it is ENTER / RETURN
    document.onkeyup = function uniKeyCode(event) {

        if (event.keyCode === 13) {
            start = true;
        }
        if (start) {
            document.getElementById("winscreen").style.display = "none";
            document.getElementById("container").style.display = "block";

            document.getElementById("enter").innerHTML = battles[consecutivewins];

            // document.getElementById("enter").style.display = "none";
            // document.getElementById("stately li").style.webkitTransition = "all 3s ease-in";

            document.getElementById("printwin").innerHTML = "";
            document.getElementById("printloss").innerHTML = "";
            var x = event.keyCode;
            document.getElementById("guessesleft").innerHTML = totalGuesses;
            document.getElementById("blanks").innerHTML = printarray.join(" ");

            //evaluates key, all non-alpha keys will be caught in if statement, code will not run
            if (x > 90 || x < 65) {

            } else {
                var inputletter = event.key.toLowerCase();
                var newletter = true;
                //evaluates if the letter has been guessed already - as above, code will not run if it has
                for (i = 0; i < guessedletters.length; i++) {
                    if (guessedletters[i] === inputletter) {
                        newletter = false;
                    }

                }
                if (newletter === false) {


                }
                // main iterative functionality
                else {
                    guessedletters[guessedletters.length] = inputletter;
                    // console.log(inputletter);
                    // console.log(guessedletters);
                    document.getElementById("lettersused").innerHTML += inputletter + " - ";

                    var c = false;
                    // letter guessed is evaluated, replaced in blanks where present, guess subracted if not
                    for (i = 0; i < thisword.length; i++) {
                        if (characterarray[i] === inputletter) {
                            printarray[i] = inputletter + " ";
                            document.getElementById("blanks").innerHTML = printarray.join(" ");
                            c = true;
                        }
                    }
                    if (c === false) {
                        totalGuesses--;
                        document.getElementById(secessionlist[totalGuesses]).style.color = "red";
                    }
                    // console.log(totalGuesses);
                    // console.log(printarray);
                    // console.log(c);
                    document.getElementById("guessesleft").innerHTML = totalGuesses;
                    // evaluates loss case, adds loss, triggers restart function
                    if (totalGuesses === 0) {
                        losses++;
                        consecutivewins = 0;
                        document.getElementById("consecutivewins").innerHTML = consecutivewins;
                        document.getElementById("lettersused").innerHTML = "";
                        document.getElementById("losses").innerHTML = losses;
                        // document.getElementById("printloss").innerHTML = "YOU LOSE!";
                        document.getElementById("enter").innerHTML = " YOU LOSE! Press ENTER to Try Again!";
                        document.getElementById("enter").style.display = "block";
                        restart();
                    }
                    // evalutes win case, adds win, triggers restart function
                    var wincheck = true;
                    for (i = 0; i < thisword.length; i++) {
                        if (printarray[i] === "_ ") {
                            wincheck = false;
                        }
                    }
                    if (wincheck === true) {
                        wins++;
                        consecutivewins++;
                        if (consecutivewins === 5) {
                            document.getElementById("winscreen").style.display = "block";
                            document.getElementById("container").style.display = "none";
                            consecutivewins = 0;
                        }
                        document.getElementById("consecutivewins").innerHTML = consecutivewins;
                        document.getElementById("lettersused").innerHTML = "";
                        document.getElementById("wins").innerHTML = wins;
                        // document.getElementById("printwin").innerHTML = "YOU WIN!";
                        document.getElementById("enter").innerHTML = " GREAT WORD! Press ENTER to Continue the Campaign!";
                        document.getElementById("enter").style.display = "block";
                        restart();
                    }
                }
            }
        }
    }
}





