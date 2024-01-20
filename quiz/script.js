const questionDiv=document.querySelector('.question');
const a_text=document.getElementsByClassName('choice')[0];
const b_text=document.getElementsByClassName('choice')[1];
const c_text=document.getElementsByClassName('choice')[2];
const d_text=document.getElementsByClassName('choice')[3];

const form=document.querySelector('form');
const nextBtn=document.querySelector('button');
const choice=document.querySelectorAll('input');
//question array
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

//default question is 1st question
let questionNumber=0;
let correctAnswer=0;

let currentQuestion=Questions[questionNumber];

questionDiv.innerText=currentQuestion.question;
a_text.innerText=currentQuestion.a;
b_text.innerText=currentQuestion.b;
c_text.innerText=currentQuestion.c;
d_text.innerText=currentQuestion.d;
let answer=currentQuestion.answer;

const loadQuiz=()=>{

    let currentQuestion=Questions[questionNumber];
    
    questionDiv.innerText=currentQuestion.question;
    a_text.innerText=currentQuestion.a;
    b_text.innerText=currentQuestion.b;
    c_text.innerText=currentQuestion.c;
    d_text.innerText=currentQuestion.d;
    
    return currentQuestion.answer;
}


nextBtn.addEventListener('click',()=>{
    choice.forEach((option,index)=>{
        if(!option.checked){}
        else{
            if(option.id==answer){
                correctAnswer++
            }
        }
    })
    questionNumber++;
    if(questionNumber<Questions.length){
        answer=loadQuiz();
    }
    else{
        alert(correctAnswer)
    }

});












