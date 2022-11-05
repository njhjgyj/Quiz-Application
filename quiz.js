// quiz application code


var timer1 = document.querySelector('#ptagtimer1');
var timer2 = 30;
var timer3;

function timeout() {
    
    timer3 = setInterval(function () {
        timer2--;
        timer1.innerHTML = timer2;
    }, 1000);

    setTimeout(function () {
        clearInterval(timer3);
        // document.write(`<h3> Dear Player ${localStorage.getItem('First Name')} ${localStorage.getItem('Last Name')} You Scored ${score}/${obj.length} your time has beed ended </h3>
        // <button id="timeoverres" onclick="location.reload()"> Restart </button>`)
        if(timer2 === 0){
            document.write(`<h3> Dear Player ${localStorage.getItem('First Name')} ${localStorage.getItem('Last Name')} You Scored ${score}/${obj.length} your time has beed ended </h3>
        <button id="timeoverres" onclick="location.reload()"> Restart </button>`)
        }
        
    }, 30000);
}

var obj = [
    {
        // time: timeout(),
        Question: 'Q1: What does HTML Stands for ?',
        Answer: 'inpoption2',
        Options: [
            'a) Hyper Text Makeup Language',
            'b) Hyper Text Markup Language',
            'c) Hyper Text Mercury Language',
            'd) Hyper Text Markup License'
        ]

    },

    {
        // time: timeout(),
        Question: 'Q2: What does php Stands for ?',
        Answer: 'inpoption3',
        Options: [
            'a) Hyper Text Processing',
            'b) Hyper Text Procedure',
            'c) Hyper Text Processor',
            'd) High Text Processor'
        ]

    },

    {
        // time: timeout(),
        Question: 'Q3: What does CSS Stands for ?',
        Answer: 'inpoption1',
        Options: [
            'a) Cescading Style Sheet',
            'b) Case Solving System',
            'c) Core Service System',
            'd) care serial sign'
        ]
    },

    {
        // time: timeout(),
        Question: 'Q4: What does SQL Stands for ?',
        Answer: 'inpoption1',
        Options: [
            'a) Structured Query Language',
            'b) Scripting Quit Language ',
            'c) Signature quick language',
            'd) Sleep Quit Land'
        ]
    },

    {
        // time: timeout(),
        Question: 'Q5: What does JS Stands for ?',
        Answer: 'inpoption4',
        Options: [
            'a) Jason',
            'b) Join Scripts',
            'c) Junior School ',
            'd) Java Script',
            
        ]
    }

]


var getques = document.querySelector('.questions');
var option1 = document.querySelector('#inpoption1');
var option2 = document.querySelector('#inpoption2');
var option3 = document.querySelector('#inpoption3');
var option4 = document.querySelector('#inpoption4');
var labeloption1 = document.querySelector('#labeloption1');
var labeloption2 = document.querySelector('#labeloption2');
var labeloption3 = document.querySelector('#labeloption3');
var labeloption4 = document.querySelector('#labeloption4');
var optionclass = document.querySelector('.optionclass');
var submitbtn = document.querySelector('#nxtbtn');

var answers = document.querySelectorAll('.optionclass');

var showresult = document.querySelector('#showresult');

// var timer = document.querySelector('#ptagtimer1');



function foo1() {
    var a = document.getElementById('infodiv1');
    var b = document.getElementById('quizdiv1');
    a.style.display = "none";
    b.style.display = "inherit";
    // getques.innerHTML = obj[Question1];
    timeout()

}



var all = 0;

function ques() {

    for (var i = 0; i < obj.length; i++) {
        // console.log(obj[i].Question1)
        getques.innerHTML = obj[all].Question;
        // timer.innerHTML = obj[all].time;
        for (var j = 0; j < obj.length; j++) {
            labeloption1.innerHTML = obj[all].Options[0];
            labeloption2.innerHTML = obj[all].Options[1];
            labeloption3.innerHTML = obj[all].Options[2];
            labeloption4.innerHTML = obj[all].Options[3];

            
        }
    }

};

function removecheck() {
    answers.forEach((curanselem) => curanselem.checked = false);
}

ques();






var score = 0;

function checkanswers() {
    var answer;
    answers.forEach((curanselem) => {
        if (curanselem.checked) {
            answer = curanselem.id;
        }
    })
    return answer;
};

function nxtfunction() {
    var nxtclick = checkanswers();
    console.log(nxtclick);
    if (nxtclick === obj[all].Answer) {
        score++;
    }

    
    all++;
    removecheck();



    if (all < obj.length) {
        ques();
    } else {
        showresult.innerHTML = `
        <h3> ${localStorage.getItem('First Name')} ${localStorage.getItem('Last Name')} You Scored ${score}/${obj.length} (-: </h3>
        <button class="resbtn" onclick="location.reload()"> Restart </button>
        `;
        // var a = document.querySelector('.timecount').innerHTML = 0;
        setTimeout(function(){
            clearInterval(timer3);
        },1000);
    }

}

console.log(score);

// for(var key in obj){
//     console.log(key + obj[0].Answer);
// }


