var questions = [
    {
      question: "Pregunta 1: ¿Utilizas el compostaje como método de gestión de residuos orgánicos en tu hogar?",
      options: [
        { text: "Si", score: 1 },
        { text: "No", score: 0 }
      ]
    },
    {
      question: "Pregunta 2: ¿Cuántos kilogramos de residuos orgánicos compostas por semana?",
      options: [
        { text: "Menos de 1 kg", score: 0 },
        { text: "Entre 1 y 5 kg", score: 1 },
        { text: "Entre 5 y 10 kg", score: 2 },
        { text: "Más de 10 kg", score: 3 }

      ]
    },
    {
        question: "Pregunta 3: ¿Utilizas compost casero o adquieres compost producido localmente?",
        options: [
          { text: "Compost casero", score: 1 },
          { text: "Compost adquirido", score: 0 }
        ]
      },
      {
        question: "Pregunta 4: ¿Cuánta energía utilizas para el proceso de compostaje?",
        options: [
          { text: "Ninguna energía externa", score: 3 },
          { text: "Energía mínima", score: 2 },
          { text: "Energía moderada", score: 1 },
          { text: "Energía alta", score: 0 },
        ]
      },
      {
        question: "Pregunta 5: ¿Realizas un adecuado mantenimiento y volteo del compost para acelerar la descomposición de los residuos?",
        options: [
          { text: "Si", score: 1 },
          { text: "No", score: 0 }
        ]
      },
      {
        question: "Pregunta 6: ¿Utilizas el compost producido en tu hogar o lo compartes con otros para su uso en jardines u huertos?",
        options: [
          { text: "Si", score: 1 },
          { text: "No", score: 0 }
        ]
      },
    // Agrega más preguntas aquí
  ];
  
  var currentQuestion = 0;
  var score = 0;
  
  function displayQuestion() {
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    
    questionElement.textContent = questions[currentQuestion].question;
    
    optionsElement.innerHTML = "";
    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
      var option = document.createElement("button");
      option.textContent = questions[currentQuestion].options[i].text;
      option.className = "option";
      option.onclick = selectOption;
      optionsElement.appendChild(option);
    }
  }
  
  function selectOption(event) {
    var selectedOption = event.target;
    var selectedOptionIndex = Array.from(selectedOption.parentNode.children).indexOf(selectedOption);
    var selectedOptionScore = questions[currentQuestion].options[selectedOptionIndex].score;
    
    score += selectedOptionScore;
    
    selectedOption.classList.add("selected");
    disableOptions();
  }
  
  function disableOptions() {
    var options = document.getElementsByClassName("option");
    
    for (var i = 0; i < options.length; i++) {
      options[i].onclick = null;
    }
  }
  
  function nextQuestion() {
    var options = document.getElementsByClassName("option");
    
    for (var i = 0; i < options.length; i++) {
      options[i].classList.remove("selected");
    }
    
    currentQuestion++;
    
    if (currentQuestion === questions.length) {
      showResult();
    } else {
      displayQuestion();
    }
  }
  
  function showResult() {
    var quizContainer = document.getElementById("quiz-container");
    var resultContainer = document.getElementById("result-container");
    var scoreElement = document.getElementById("score");
    
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = score;
  }
  
  displayQuestion();
  