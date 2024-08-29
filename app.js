const quizData = [
  {
    question:
      "What is the main objective of the Preamble of the Indian Constitution?",
    a: "To provide a brief overview of all laws",
    b: "To outline the basic structure and guiding principles of the Constitution",
    c: "To list the Fundamental Rights",
    d: "To describe the roles of the President and Prime Minister",
    correct: "b",
  },
  {
    question: "Which Fundamental Right aims to abolish 'Untouchability?'",
    a: "Right to Equality",
    b: "Right to Freedom",
    c: "Right against Exploitation",
    d: "Right to Constitutional Remedies",
    correct: "a",
  },
  {
    question:
      "Which Fundamental Right is guaranteed by Article 21 of the Indian Constitution?",
    a: "Right to Freedom of Religion",
    b: "Right to Equality",
    c: "Right to Life and Personal Liberty",
    d: "Right to Education",
    correct: "c",
  },
  {
    question:
      "What does Article 3 of the Indian Constitution empower the Parliament to do?",
    a: "Form a new State by separation of territory",
    b: "Increase or diminish the area of any State",
    c: "Alter the boundaries of any State",
    d: "All of the above",
    correct: "d",
  },
  {
    question:
      "Article 6 grants citizenship to certain persons who migrated to India from which country?",
    a: "Bangladesh",
    b: "Pakistan",
    c: "Sri Lanka",
    d: "Nepal",
    correct: "b",
  },
  {
    question:
      " What is the term used to describe the special provisions made by the State for the advancement of socially and educationally backward classes of citizens?",
    a: "Reservation",
    b: "Quota",
    c: "Affirmative action",
    d: "Positive discrimination",
    correct: "a",
  },
  {
    question:
      "Which of the following is NOT a fundamental right guaranteed by the Constitution?",
    a: "Right to Freedom",
    b: "Right to Equality",
    c: "Right to Education",
    d: "Right to Employment",
    correct: "d",
  },
  {
    question:
      "What is the term used to describe the equal protection of laws within the territory of India?",
    a: "Equality before the law",
    b: "Equal protection of the laws",
    c: "Equal rights for all ",
    d: "Equal opportunities for all",
    correct: "b",
  },
  {
    question:
      "Which of the following is a restriction on the fundamental right to equality?",
    a: "Reasonable classification",
    b: "Unreasonable discrimination",
    c: "Special provisions for women and children",
    d: "All of the above",
    correct: "d",
  },
  {
    question:
      "Which part of the Indian Constitution deals with the Union and its Territory?",
    a: "Part I",
    b: "Part II",
    c: "Part III",
    d: "Part IV",
    correct: "a",
  },
];
let index = 0;
let correct = 0,
  incorrect = 0,
  total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
const loadQuestion = () => {
  if (total === index) {
    return quizEnd();
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
};

document.querySelector("#submit").addEventListener("click", function () {
  const data = quizData[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    correct++;
  } else {
    incorrect++;
  }
  index++;
  loadQuestion();
});

const getAnswer = () => {
  let ans;
  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
    }
  });
  return ans;
};

const reset = () => {
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
};

const quizEnd = () => {
  // console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
            <button class="btn btn-primary" onclick="location.reload()">Play Again</button>
            <button class="btn btn-primary" onclick="">Exit</button>
        </div>
   `;
};
loadQuestion(index);
