"use strict;"
let score = 20;
let highscore = localStorage.getItem('highscore') || 0;
let guess_number = Math.trunc(Math.random() * 20 + 1);
let return_string = "Enter a number"

function set_items() {
    document.querySelector('#highscore').textContent = highscore;
    document.querySelector('#score').textContent = score;
    document.querySelector("#hint").textContent = return_string;
}
set_items();
function clickEvent() {
    input_number = Number(document.querySelector('#numbers').value);
    return_string = "";
    if (input_number > 20 || input_number < 1) {
        return_string = "Number should be in between {0-20}";
        set_items();
    }
    else if (input_number === guess_number) {
        highscore = score;
        if (!localStorage.getItem('highscore') || localStorage.getItem('highscore') < highscore)
            localStorage.setItem('highscore', highscore);
        document.querySelector('body').style.backgroundColor = "green";
        return_string = "🎉Correct Number🎉"

    } else if (input_number < guess_number) {
        return_string = "Too low";
        score -= 1;
    } else if (input_number > guess_number) {
        return_string = "Too high";
        score -= 1;
    }
    set_items();
}

document.querySelector('.check').addEventListener(
    'click', clickEvent
);
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    highscore = 0
    return_string = "Enter a number";
    set_items();
    guess_number = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('body').style.backgroundColor = "black";

}
)