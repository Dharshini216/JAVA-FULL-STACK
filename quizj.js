const questions=[
    {
        question:"Which among the following is not an operating system?",
        answers:[
            {text:"UNIX",correct:false},
            {text:"LINUX",correct:false},
            {text:"OS X",correct:false},
            {text:"PITEX",correct:true},
        ]
    },
    {
        question:"1 Terabyte (Tb) =",
        answers:[
            {text:"1,024 Gb",correct:true},
            {text:"1,000 Gb",correct:false},
            {text:"1,200 Gb",correct:false},
            {text:"1,275 Gb",correct:false},
        ]
    },
    {
        question:"What does HTML stand for?",
        answers:[
            {text:"Hyper Text Markup Language",correct:true},
            {text:"Home Tool Markup Language",correct:false},
            {text:"Hyperlinks and Text Markup Language",correct:false},
            {text:"High Tech Modern Language",correct:false},
        ]
    },
    {
        question:"Which tag is used to define a hyperlink?",
        answers:[
            {text:"link",correct:false},
            {text:"a",correct:true},
            {text:"href",correct:false},
            {text:"hyperlink",correct:false},
        ]
    },
    {
        question:"Which tag is used to define an ordered list?",
        answers:[
            {text:"ul",correct:false},
            {text:"ol",correct:true},
            {text:"li",correct:false},
            {text:"dl",correct:false},
        ]
    },
    {
        question:"Which attribute is used to specify the source of an image?",
        answers:[
            {text:"alt",correct:false},
            {text:"link",correct:false},
            {text:"href",correct:false},
            {text:"src",correct:true},
        ]
    },
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
            {text:"Vatican City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Sri Lanka",correct:false},
        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answers:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antarctica",correct:true},
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();