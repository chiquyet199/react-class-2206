function calculateRank(score) {
  let rank
  let scoreNotValid = score === NaN || score > 10 || score < 0

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
  if (rank === 'error') {
    alert(`"${scoreElement.value}" is not a valid score`)
  } else {
    alert(rank)
  }
}