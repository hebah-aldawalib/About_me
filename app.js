"use strict";
let userName = prompt("whats your name?");
alert(`Welcome ${userName}`)
let score = 0;
function question1() {
    let favoriteSport = prompt('is football my favorite sport?')
    favoriteSport = favoriteSport.toLowerCase();

    if (favoriteSport === "yes" || favoriteSport === "y") {



        alert('good');
        score++;
    }


    else if (favoriteSport === "no" || favoriteSport === "n") {
        alert('wrong')

    } else { alert("please asnwer with yes or no") };
}
question1();

function question2() {
    let swimming = prompt('i like swimming?')
    if (swimming === "yes" || (swimming === "y")) {
        alert('wawooo')
        score++;

    }
    else if (swimming === "no" || (swimming === "n")) {
        alert('wrong')
    } else { alert("please asnwer with yes or no") };

}
question2();

function question3() {
    let basket = prompt('i like backetball?')
    if (basket === "yes" || basket === "y") {
        alert('nice')
        score++;
    }
    else if (basket === "no" || basket === "n") {
        alert('wrong')
    } else { alert("please asnwer with yes or no") }
    question3();
}
function question4() {
    for (let i = 0; i < 4; i++) {


        let guess = prompt('guess number between 1-6')


        if (guess === "3") {
            alert('right')
            score++;
            break;
        }
        else if (guess < '3') {
            alert('too low')
        }
        else if (guess > '3') {
            alert('too high ')
        }
    }
}
question4();


function question5() {

    let color = ['blue', 'pink', 'black', 'yallow'];
    console.log(color.length);
    let fav = prompt('what is my bed color?');
    fav = fav.toLowerCase();
    let flag = false;
    for (let g = 0; g < 6; g++) {

        for (let i = 0; i < color.length; i++) {
            if (fav === color[i]) {
                alert("goodjob");
                flag = true;
                score++;
                break;


            }

        }
        if (flag === true) {
score++;
            break;

        }
        else {
            fav = prompt('pleas guss more');

            fav = fav.toLowerCase();

        }
        if (g === 5) {
            alert("the correct answer" + color);
        }
    }

}

question5();


function question6() {
    let horremovie = prompt('i like horremovi?')
    if (horremovie === "yes" || horremovie === "y") {
        alert('nice')
        score++;
    }
    else if (horremovie === "no" || horremovie === "n") {
        alert('wrong')
    } else { alert("please asnwer with yes or no") }
}

question6();

function question7() {
    let mansaf = prompt('i like mansaf?')
    if (mansaf === "yes" || mansaf === "y") {
        alert('nice')
        score++;
    }
    else if (mansaf === "no" || mansaf === "n") {
        alert('wrong')
}
 else { alert("please asnwer with yes or no") }}



    question7();


    alert(`your score is  ${score}`)




