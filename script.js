let runningScore = 0

document.getElementById('question1').addEventListener('submit', function (e) {
  e.preventDefault()
  e.target.classList.add('hidden')
  let myAnswer = document.querySelector('input[name="selection-set1"]:checked').dataset.score
  console.log(myAnswer)

  runningScore += parseInt(myAnswer, 10)

  console.log(runningScore, typeof runningScore)

  document.getElementById('question2').classList.remove('hidden')
})

document.getElementById('question2').addEventListener('submit', function (e) {
  e.preventDefault()
  e.target.classList.add('hidden')
  let myAnswer = document.querySelector('input[name="selection-set2"]:checked').dataset.score
  console.log(myAnswer)

  runningScore += parseInt(myAnswer, 10)

  console.log(runningScore, typeof runningScore)
  document.getElementById('question3').classList.remove('hidden')
})

document.getElementById('question3').addEventListener('submit', function (e) {
  e.preventDefault()
  e.target.classList.add('hidden')
  let myAnswer = document.querySelector('input[name="selection-set3"]:checked').dataset.score
  console.log(myAnswer)

  runningScore += parseInt(myAnswer, 10)
  console.log(runningScore, typeof runningScore)
  document.getElementById('question4').classList.remove('hidden')
})

document.getElementById('question4').addEventListener('submit', function (e) {
  e.preventDefault()
  e.target.classList.add('hidden')
  let myAnswer = document.querySelector('input[name="selection-set4"]:checked').dataset.score
  console.log(myAnswer)

  runningScore += parseInt(myAnswer, 10)
  console.log(runningScore, typeof runningScore)
  document.getElementById('question5').classList.remove('hidden')
})

document.getElementById('question5').addEventListener('submit', function (e) {
  e.preventDefault()
  e.target.classList.add('hidden')
  let myAnswer = document.querySelector('input[name="selection-set5"]:checked').dataset.score
  console.log(myAnswer)

  runningScore += parseInt(myAnswer, 10)
  console.log(runningScore, typeof runningScore)
  document.getElementById('question6').classList.remove('hidden')
})

document.getElementById('question6').addEventListener('submit', function (e) {
  e.preventDefault()
  e.target.classList.add('hidden')
  let myAnswer = document.querySelector('input[name="selection-set6"]:checked').dataset.score
  console.log(myAnswer)

  runningScore += parseInt(myAnswer, 10)
  console.log(runningScore, typeof runningScore)
  document.getElementById('question7').classList.remove('hidden')
})

document.getElementById('question7').addEventListener('submit', function (e) {
  e.preventDefault()
  e.target.classList.add('hidden')
  let myAnswer = document.querySelector('input[name="selection-set7"]:checked').dataset.score
  console.log(myAnswer)
  runningScore += parseInt(myAnswer, 10)
  console.log(runningScore, typeof runningScore)
  document.getElementById('question8').classList.remove('hidden')
})

document.getElementById('question8').addEventListener('submit', function (e) {
  e.preventDefault()
  e.target.classList.add('hidden')
  let myAnswer = document.querySelector('input[name="selection-set8"]:checked').dataset.score
  console.log(myAnswer)

  runningScore += parseInt(myAnswer, 10)
  console.log(runningScore, typeof runningScore)

  document.getElementById('question9').classList.remove('hidden')
})

document.getElementById('question9').addEventListener('submit', function (e) {
  e.preventDefault()
  e.target.classList.add('hidden')
  let myAnswer = document.querySelector('input[name="selection-set9"]:checked').dataset.score
  console.log(myAnswer)

  runningScore += parseInt(myAnswer, 10)
  console.log(runningScore, typeof runningScore)

  document.getElementById('question10').classList.remove('hidden')
})

document.getElementById('question10').addEventListener('submit', function (e) {
  e.preventDefault()
  e.target.classList.add('hidden')
  let myAnswer = document.querySelector('input[name="selection-set10"]:checked').dataset.score
  console.log(myAnswer)

  runningScore += parseInt(myAnswer, 10)
  console.log(runningScore, typeof runningScore)

  document.getElementById('results').innerText = ending(runningScore)

  document.getElementById('answers-page').classList.remove('hidden')
})

document.getElementById('start-over').addEventListener('click', function () {
  window.location.reload()
})

function ending (score) {
  if (score <= 40 && score > 30) {
    return 'you like d'
  } else if (score <= 30 && score > 20) {
    return 'you like c'
  } else if (score <= 20 && score > 10) {
    return 'you like b'
  } else {
    return 'you like a'
  }
}
