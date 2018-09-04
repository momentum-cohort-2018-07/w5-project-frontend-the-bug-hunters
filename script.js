let runningScore = 0

function setupQuestion (id, isLastQuestion = false) {
  const currentQuestionId = `question${id}`
  const inputName = `selection-set${id}`
  const nextQuestionId = isLastQuestion ? null : `question${id + 1}`

  document.getElementById(currentQuestionId).addEventListener('submit', function (e) {
    e.preventDefault()
    e.target.classList.add('hidden')
    let myAnswer = document.querySelector(`input[name="${inputName}"]:checked`).dataset.score
    console.log(myAnswer)

    runningScore += parseInt(myAnswer, 10)

    console.log(runningScore, typeof runningScore)

    if (nextQuestionId) {
      showQuestion(nextQuestionId)
    } else {
      document.getElementById('results').innerText = ending(runningScore)
      document.getElementById('results-pic').innerHTML = endingPhoto(runningScore)
      document.getElementById('answers-page').classList.remove('hidden')
    }
  })
}

function showQuestion (questionId) {
  for (let el of document.getElementsByClassName('question')) {
    el.classList.add('hidden')
  }
  document.getElementById(questionId).classList.remove('hidden')
}

function ending (score) {
  if (score <= 40 && score > 30) {
    return 'you are a nitro cold brew!'
  } else if (score <= 30 && score > 20) {
    return "you're a mocha, baby!"
  } else if (score <= 20 && score > 10) {
    return "you are a good 'ol diner coffee"
  } else {
    return 'you are a strong shot of espresso'
  }
}

function endingPhoto (score) {
  if (score <= 40 && score > 30) {
    return "<img src='http://funkyimg.com/i/2KXcn.jpg'>"
  } else if (score <= 30 && score > 20) {
    return "<img src='http://funkyimg.com/i/2KXcm.jpg'>"
  } else if (score <= 20 && score > 10) {
    return "<img src='http://funkyimg.com/i/2KXcj.jpg'>"
  } else {
    return "<img src='http://funkyimg.com/i/2KXck.jpg'>"
  }
}

function setup () {
  for (let i = 1; i < 10; i++) {
    setupQuestion(i)
  }
  setupQuestion(10, true)

  document.getElementById('start-quiz').addEventListener('click', function () {
    document.getElementById('start-quiz').classList.add('hidden')
    showQuestion('question1')
  })

  document.getElementById('start-over').addEventListener('click', function () {
    window.location.reload()
  })
}

setup()
