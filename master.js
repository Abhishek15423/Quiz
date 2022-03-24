const quizList = [{
        question: 'What is 2 + 3 = ?',
        a: '5',
        b: '6',
        c: '9',
        d: '11',
        ans: 'ans1'
    },
    {
        question: 'What is 3*6 = ?',
        a: '9',
        b: '16',
        c: '18',
        d: '10',
        ans: 'ans3'
    },
    {
        question: 'What is 10/2 = ?',
        a: '4',
        b: '2',
        c: '8',
        d: '5',
        ans: 'ans4'
    },
    {
        question: 'What is 2 + 2 + 2 = ?',
        a: '5',
        b: '6',
        c: '9',
        d: '11',
        ans: 'ans2'
    },
    {
        question: 'What is 2 * 3 = ?',
        a: '5',
        b: '9',
        c: '6',
        d: '11',
        ans: 'ans3'
    }
];

let qNumber = 0;
let num = 1;
let qnum = 0;
const qns = document.querySelector('.question');
const submit = document.querySelector('.btn');
const ans_1 = document.querySelector('.a');
const ans_2 = document.querySelector('.b');
const ans_3 = document.querySelector('.c');
const ans_4 = document.querySelector('.d');
const radio = document.querySelectorAll('.answer');
let score = 0;
const finalScore = document.querySelector('.score');

let radio1 = document.getElementById('ans1');
let radio2 = document.getElementById('ans2');
let radio3 = document.getElementById('ans3');
let radio4 = document.getElementById('ans4');

function loadpage() {
    qns.innerHTML = quizList[qNumber].question;
    ans_1.innerHTML = quizList[qNumber].a;
    ans_2.innerHTML = quizList[qNumber].b;
    ans_3.innerHTML = quizList[qNumber].c;
    ans_4.innerHTML = quizList[qNumber].d;
    qNumber++;
}

loadpage();

const getAnswere = () => {
    let answerevalue;

    radio.forEach((CorrectAns) => {
        if (CorrectAns.checked) {
            answerevalue = CorrectAns.id;
        }
    })

    return answerevalue;

}
function showScore() {
    submit.style.display = "none";
    qns.style.display = "none";
    ans_1.style.display = "none";
    ans_2.style.display = "none";
    ans_3.style.display = "none";
    ans_4.style.display = "none";
    radio1.style.display = "none";
    radio2.style.display = "none";
    radio3.style.display = "none";
    radio4.style.display = "none";
}
submit.addEventListener("click", () => {
    const checkAnswere = getAnswere();

    if (checkAnswere == quizList[qnum].ans) {
        score++;
    }
    qnum++;

    if (num < quizList.length) {
        loadpage();
    } else {
        if (score >= 3) {
            finalScore.innerHTML = `<h2>Whoooyaaa✌😊</h2><br><b>Your Final Score is ${score}/${quizList.length}</b>
                                    <br><br><button onclick="location.reload()" style="width:100px; height:30px;">Play Again</button>`;
        } else {
            finalScore.innerHTML = `<h2>You are fail😔</h2><br><b>Your Final Score is ${score}/${quizList.length}</b><br><br><button onclick="location.reload()" style="width:100px; height:30px;">Play Again</button>`;
        }
        showScore();
    }
    num++;

});