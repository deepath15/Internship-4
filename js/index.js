// Used to load the js file correctly
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        init();
    }
});

let paper = document.getElementById("paper");
let rock = document.getElementById("rock");
let scissor = document.getElementById("scissor");
let button=document.getElementById("button");
// all should comes under init() function
const init = () => {

    // Variables Initialized
    const choices = ["Paper", "Rock", "Scissor"]
    let rand = Math.floor(Math.random() * 3);
    let computer = choices[rand];
    button.style.display="none";
   // Define the event listener functions
const paperClickListener = () => {
    fight("Paper", computer);
  };
  
  const rockClickListener = () => {
    fight("Rock", computer);
  };
  
  const scissorClickListener = () => {
    fight("Scissor", computer);
  };
  
  // Add the event listeners
  paper.addEventListener("click", paperClickListener);
  rock.addEventListener("click", rockClickListener);
  scissor.addEventListener("click", scissorClickListener);
  
  // Function to remove the event listeners
  const removeListeners = () => {
    paper.removeEventListener("click", paperClickListener);
    rock.removeEventListener("click", rockClickListener);
    scissor.removeEventListener("click", scissorClickListener);
  };
    // Comparing process 
    const fight = (use, comp) => {
        let user = use;
        let com = comp;
        let result = document.getElementById("result");
        if (com === user) {
            result.innerHTML = "Match Draw";
        }
        else if (com.toUpperCase() === "PAPER" && user.toUpperCase() === "ROCK") {

            result.innerHTML = "computer choosed Paper.<br> So You Are Defeated"
        }
        else if (com.toUpperCase() === "ROCK" && user.toUpperCase() === "SCISSOR") {

            result.innerHTML = "Computer Choosed Rock.<br>So You Are Defeated";
        }
        else if (com.toUpperCase() === "SCISSOR" && user.toUpperCase() === "PAPER") {
            result.innerHTML = "Computer Choosed Scissor.<br>So You Are Defeated";
        }
        else if (com.toUpperCase() === "ROCK" && user.toUpperCase() === "PAPER") {
            result.innerHTML = "computer choosed Rock.<br> So You Won"
        }
        else if (com.toUpperCase() === "SCISSOR" && user.toUpperCase() === "ROCK") {
            result.innerHTML = "Computer Choosed Scissor.<br>So You Won";
        }
        else if (com.toUpperCase() === "PAPER" && user.toUpperCase() === "SCISSOR") {
            result.innerHTML = "Computer Choosed paper.<br>So You Won";
        }
        removeListeners();
        
        button.addEventListener('click',()=>{
            location.reload();
            alert("You Can Play Again Now")
        });
        button.style.display="block";
       
    };

 
};





