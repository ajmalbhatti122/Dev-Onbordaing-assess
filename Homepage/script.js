const steps = [
  {
    question: "What's your age?",
    options: ["Under 40", "Over 40"],
  },
  {
    question: "How do you define your lifestyle?",
    answer: "(Did you know an average person walks about 900 miles per year?)",
    options: [
      "Sedentary",
      "Moderately active",
      "Active",
      "Varies",
      "Prefer not to say",
    ],
  },
  {
    question: "Do you think an hour of cardio is beneficial for fat loss?",
    answer: "Many people think doing cardio every day is the answer.",
    options: ["Yes", "No", "Not sure"],
  },
  {
    question:
      "If there was a 7-minute routine to get fit, would you want to add it to your daily routine?",
    answer:
      "(Certain exercise routines can help ignite your metabolism for faster fat burn.)",
    options: ["Definitely", "Maybe", "Not sure"],
  },
  {
    question: "What are your weight loss goals?",
    answer: "(Knowing your goals will keep you on track.)",
    options: [
      "I'd like to lose up to 10 pounds",
      "I'd like to lose 10 to 20 pounds",
      "I'd like to lose 20 to 50 pounds",
      "I'd like to lose over 50 pounds",
    ],
  },
  {
    question:
      "How much ‘workout time’ do you have each day to reach your body goals?",
    answer: "(You need a solution that fits your lifestyle.)",
    options: ["Over one hour", "30 minutes", "Under 10 minutes", "Not sure"],
  },
  {
    question: "What is a major concern when thinking about working out?",
    answer:
      "(Make sure your solution is personalized to you.)(Select all that apply)",
    options: [
      "Past or current injuries (back, shoulder, knees, ankles, muscle tear)",
      "Current medical condition (heart disease, diabetes, kidney issues, arthritis, cancer, high blood pressure)",
      "Lack of time",
      "Lack of knowing what to do",
      "Lack of motivation",
      "Lack of energy",
      "Other",
    ],
  },
  {
    question: "How fast do you want to reach your goals?",
    answer:
      "(Make sure you have the help you need to get where you want, when you want.)",
    options: [
      "Within 14 days",
      "Within 1 month",
      "Within 3 months",
      "I’m in no rush, as long as I get long-term results",
    ],
  },
];

let currentStep = 0;

const progress = document.getElementById("progress");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const optionsEl = document.getElementById("options");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateUI() {
  questionEl.textContent = steps[currentStep].question;

  answerEl.textContent = steps[currentStep].answer || "";

  optionsEl.innerHTML = "";
  steps[currentStep].options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className = "option";
    optionsEl.appendChild(button);
  });

  const progressPercent = ((currentStep + 1) / steps.length) * 100;
  progress.style.width = `${progressPercent}%`;

  prevBtn.disabled = currentStep === 0;
  // nextBtn.disabled = currentStep === steps.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    updateUI();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateUI();
  } else if (currentStep === steps.length - 1) {
    window.location.href = "./greatpage.html";
  }
});

updateUI();
