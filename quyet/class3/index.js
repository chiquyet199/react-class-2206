let scoreInput = document.querySelector('.score')

scoreInput.addEventListener('keydown', function(){
  console.log('onkeydown event fired')
})

scoreInput.onkeyup = function(event){
  const KEY_ENTER = 13
  if(event.keyCode === KEY_ENTER){
    onCalculateClick()
  }
}

function calculateRank(score) {
  let rank
  let scoreNotValid = isNaN(score) || score > 10 || score < 0

  if (scoreNotValid) {
    return 'error'
  }

  if (score < 5) {
    rank = 'O lai lop'
  } else if (score < 6.5) {
    rank = 'hoc sinh trung binh'
  } else if (score < 8) {
    rank = 'hoc sinh kha'
  } else {
    rank = 'hoc sinh gioi'
  }
  return rank
}

function onCalculateClick() {
  let scoreElement = document.querySelector('.score')
  let score = Number(scoreElement.value)
  if (scoreElement.value === '') {
    return
  }
  let rank = calculateRank(score)
  let erroMessage = `"${scoreElement.value}" is not a valid score`
  let successMessage = rank
  let message = rank === 'error' ? erroMessage : successMessage
  alert(message)
  scoreElement.value = ''
}