//Question bank
var questionBank = [
    {
        question : 'Uma parcela grande das vendas é adquirida por um determinado comprador, aumentando sua importância nos resultados. Para Porter, essa situação integra o conjunto das cinco forças competitivas básicas. Assinale a alternativa que identifica corretamente qual força o trecho anterior se refere.',
        option : ['Ameaça de novos entrantes.','Poder de negociação dos compradores.','Poder de negociação dos fornecedores.','Rivalidade entre as empresas existentes.'],
        answer : 'Poder de negociação dos compradores.'
    },
    {
        question : 'Assinale a alternativa que não indica um dos objetivos da fase de abordagem no ciclo de vendas:',
        option : ['Adaptar a apresentação de vendas à situação e ao cliente.','Controlar a impressão criada na abordagem do cliente.','Estabelecer clima de empatia com o cliente.','Melhorar a capacidade de escutar.'],
        answer : 'Estabelecer clima de empatia com o cliente.'
    },
    {
        question : 'O método de previsão de vendas que tem como fundamento básico a observação do consumo com o objetivo de examinar seu comportamento, destacando dois aspectos importantes a identificação da parte controlada desse fenômeno e a análise da presença de uma parte acidental, é o baseado em:',
        option : ['médias móveis','médias ponderadas','dados históricos','regressão linear'],
        answer : 'dados históricos'
    },
    {
        question : 'Constituem aberturas usadas na abordagem ao cliente todas as abaixo, exceto:',
        option : ['Informar o benefício da oferta e ver se o cliente está interessado.','Usar um nome de um cliente atual como referência.','Fazer uma pesquisa para o cliente para determinar se o vendedor pode ajudá-lo.','Informar que o produto é o último do estoque.'],
        answer : 'Informar que o produto é o último do estoque.'
    },
    {
        question : 'Na condução da venda, é preciso estar atento às barreiras que servem como obstáculos à comunicação entre as pessoas. Assinale a alternativa que apresenta apenas as barreiras físicas que podem ocorrer nesse processo:',
        option : ['Hábitos de ouvir, significado das palavras, distância física.','Ambiente de trabalho, ruídos ambientais, falhas mecânicas.','Percepções, sentimentos pessoais, canal de comunicação congestionado.','Motivações pessoais, hábitos pessoais, ocorrências locais.'],
        answer : 'Ambiente de trabalho, ruídos ambientais, falhas mecânicas.'
    }

]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

// Sound Effects
var wrongAnswerSound = new Audio('./audio/wrong-answer-sound.mp3');
var correctAnswerSound = new Audio('./audio/correct-answer-sound.mp3');
var soundTrack = new Audio('./audio/soundtrack.mp3');

// Function to give credit to the author for the resources used
function copyrightCredits() {
    popupWindowCopyrightCredits = window.open (
        '',
        'popup-page',
        "width=900,height=300,scrollbars=no,resizable=no,status=no,toolbar=no,menubar=no,location=no,left=200,top=400,channelmode=no,titlebar=no"
    )
    popupWindowCopyrightCredits.document.write (
        "<head><title>Quiz Mestres das Vendas</title></head><body style='background: linear-gradient(115deg, rgba(101,151,209,0.8),rgba(211, 102, 184, 0.342)); font-family: Arial'><h1 style='padding: 0.7rem; font-size: 1.5rem; color: rgb(23, 26, 25); text-align: center'>App-Game Quiz Mestres das Vendas</h1><p style='font-size: 1rem'><strong>Objetivo do Game:</strong> uso acadêmico (atividade não comercial), promover apreendizado e estudo de caso da gamificação no setor de vendas.</p><p style='font-size: 1rem'><strong>Fontes de Pesquisa e Céditos:</strong></p><ul><li><a href='https://www.nerdconnectionoficial.com.br/2021/10/leonardo-dicaprio-improvisou-iconica.html' target='_blank' style='text-decoration: none; color:#0000CD'>Nerd Connection (imagem de fundo do jogo)</a></li><li><a href='https://www.flaticon.com/br/icones-gratis/desenvolvedor' target='_blank' style='text-decoration: none; color:#0000CD'>Flaticon (ícone para o jogo)</a></li><li><a href='https://open.spotify.com/album/1LKFvbwE5lQcO5f0NSBWLt' target='_blank' style='text-decoration: none; color:#0000CD'>Spotify - Trilha sonora jogo Top Gear</a></li><li><a href='https://www.amazon.com.br/Mestres-das-vendas-Don-Morgan/dp/8575429221' target='_blank' style='text-decoration: none; color:#0000CD'>Fonte de inspiração para nomear o jogo (Livro: Mestre das Vendas)</a></li><li><a href='https://github.com/Ahmad528/quizApp' target='_blank' style='text-decoration: none; color:#0000CD'>Github (fonte de inspiração e modelo de jogo - Quiz)</a></li><li><a href='https://www.provaseconcursos.com.br/questoes-de-concurso/materia/administracao/assunto/vendas/tipo/multipla-escolha/nivel/superior' target='_blank' style='text-decoration: none; color:#0000CD'>Provas & Concursos Público (fonte das questões sobre vendas)</a></li></ul></body>"
    );
}

// Function to play backgound sound (soundtrack)
function playSoundTrack() {
    soundTrack.load();
    soundTrack.volume = 0.5;
    soundTrack.play();
}

// Function to display questions
function displayQuestion() {
    for(var a = 0; a < span.length; a++) {
        span[a].style.background ='none';
    }
    question.innerHTML = 'Q.'+(i + 1)+' '+questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Questão"+' '+(i + 1)+' '+'de'+' '+questionBank.length;
}

// Function to calculate scores
function calcScore(e) {
    if(e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score+1;
        document.getElementById(e.id).style.background = 'limegreen';
        correctAnswerSound.play();
    } else {
        document.getElementById(e.id).style.background = 'tomato';
        wrongAnswerSound.play();
    }
    setTimeout(nextQuestion,500);
}

// Function to display next question
function nextQuestion() {
    if(i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score+ '/'+ questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}

// Click events to next button
next.addEventListener('click',nextQuestion);

// Back to Quiz button event
function backToQuiz() {
    location.reload();
}

// Function to check Answers
function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for(var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}

copyrightCredits();
playSoundTrack();
displayQuestion();