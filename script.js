let runningScore = 0

function setupQuestion (currentQuestionId, inputName, nextQuestionId) {
  document.getElementById(currentQuestionId).addEventListener('submit', function (e) {
    e.preventDefault()
    e.target.classList.add('hidden')
    let myAnswer = document.querySelector('input[name="' + inputName + '"]:checked').dataset.score
    console.log(myAnswer)

    runningScore += parseInt(myAnswer, 10)

    console.log(runningScore, typeof runningScore)

    if (nextQuestionId) {
      document.getElementById(nextQuestionId).classList.remove('hidden')
    } else {
      document.getElementById('results').innerText = ending(runningScore)
      document.getElementById('results-pic').innerHTML = endingPhoto(runningScore)
      document.getElementById('answers-page').classList.remove('hidden')
    }
  })
}

setupQuestion('question1', 'selection-set1', 'question2')
setupQuestion('question2', 'selection-set2', 'question3')
setupQuestion('question3', 'selection-set3', 'question4')
setupQuestion('question4', 'selection-set4', 'question5')
setupQuestion('question5', 'selection-set5', 'question6')
setupQuestion('question6', 'selection-set6', 'question7')
setupQuestion('question7', 'selection-set7', 'question8')
setupQuestion('question8', 'selection-set8', 'question9')
setupQuestion('question9', 'selection-set9', 'question10')
setupQuestion('question10', 'selection-set10')

document.getElementById('start-over').addEventListener('click', function () {
  window.location.reload()
})

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
