const questionDiv=document.querySelector('.question');
const a_text=document.getElementsByClassName('choice')[0];
const b_text=document.getElementsByClassName('choice')[1];
const c_text=document.getElementsByClassName('choice')[2];
const d_text=document.getElementsByClassName('choice')[3];

const a_input=document.getElementsByClassName('option')[0];
const b_input=document.getElementsByClassName('option')[1];
const c_input=document.getElementsByClassName('option')[2];
const d_input=document.getElementsByClassName('option')[3];

const form=document.querySelector('form');
const nextBtn=document.querySelector('button');
const choice=document.querySelectorAll('input');

const Questions=[
    {
        question:"What is the capital city of South Korea?",
        a:"Tokyo",
        b:"Beijing",
        c:"Seoul",
        d:"Bangkok",
        answer:"c"

    },
    {
        question:"Which desert is the largest in the world?",
        a:"Sahara",
        b:"Gobi",
        c:"Atacama",
        d:"Arabian",
        answer:"a"

    },
    {
        question:"Which element has the chemical symbol \"Mg\"?",
        a:"Madan gowri",
        b:"Morris Garages",
        c:"Manganese",
        d:"Magnesium",
        answer:"d"

    },
    {
        question:"What is the main language spoken in Brazil",
        a:"Spanish",
        b:"Portuguese",
        c:"Italian",
        d:"French",
        answer:"b"

    },
    {
        question:"What is the currency of Japan?",
        a:"Yen",
        b:"Won",
        c:"Ringgit",
        d:"Baht",
        answer:"a"

    },

];
let correctAnswer=0;
let questionNumber=0;

const showQuestions=()=>{
    let currentQuestion=Questions[questionNumber];

    questionDiv.innerText=currentQuestion.question;
    a_text.innerText=currentQuestion.a;
    b_text.innerText=currentQuestion.b;
    c_text.innerText=currentQuestion.c;
    d_text.innerText=currentQuestion.d;

    if(questionNumber<Questions.length){
        questionNumber++;
    }
}

let count=1;
const nextQuestion=()=>{
    if(count<Questions.length){
        showQuestions(evaluate);
        count++;
    }
    else{
        alert(`Score ${correctAnswer}/${Questions.length}`);
    }
}

const evaluate=(question)=>{
    for(let i=0;i<choice.length;i++){
        if(choice[i].checked){
            console.log(choice[i].id)
            console.log(question.answer);
            if(choice[i].id==question.answer){
                correctAnswer++;
                // console.log(correctAnswer)
            }
        }
    }
}

showQuestions();

nextBtn.addEventListener('click',nextQuestion);

