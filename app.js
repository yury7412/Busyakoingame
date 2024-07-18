const $circle = document.querySelector('#circle')
const $score = document.querySelector('#score')

function start() {
  setScore(getScore())
  setImage()
}

function setScore(score) {
  localStorage.setItem('score', score)
  $score.textContent = score
}

function setImage() {
  if (getScore() >= 5000000000000000000000000000) {
    $circle.setAttribute('src', './assets/lizzard.png')
  }
}

function getScore() {
  return Number(localStorage.getItem('score')) ?? 0
}

function addOne() {
  setScore(getScore() + 1)
  setImage()
}

$circle.addEventListener('click', (event) => {
  const rect = $circle.getBoundingClientRect()

  const offfsetX = event.clientX - rect.left - rect.width / 2
  const offfsetY = event.clientY - rect.top - rect.height / 2

  const DEG = 40

  const tiltX = (offfsetY / rect.height) * DEG
  const tiltY = (offfsetX / rect.width) * -DEG

  $circle.style.setProperty('--tiltX', `${tiltX}deg`)
  $circle.style.setProperty('--tiltY', `${tiltY}deg`)

  setTimeout(() => {
    $circle.style.setProperty('--tiltX', `0deg`)
    $circle.style.setProperty('--tiltY', `0deg`)
  }, 300)

  const plusOne = document.createElement('div')
  plusOne.classList.add('plus-one')
  plusOne.textContent = '+1'
  plusOne.style.left = `${event.clientX - rect.left}px`
  plusOne.style.top = `${event.clientY - rect.top}px`

  $circle.parentElement.appendChild(plusOne)

  addOne()

  setTimeout(() => {
    plusOne.remove()
  }, 2000)
})

start()

document.addEventListener('DOMContentLoaded', () => {
  // Simulate a delay for demo purposes
  setTimeout(() => {
    // Fetch the Telegram account name from a server or input
    const accountName = 'Юрий';  // This should be dynamically fetched in a real application
    const nameElement = document.getElementById('account-name');
    nameElement.textContent = `Здравствуйте, ${accountName}`;

    // Hide preloader and show game content
    const preloader = document.getElementById('preloader');
    const game = document.querySelector('.game');
    preloader.style.display = 'none';
    game.style.display = 'block';
  }, 5000); // 2 seconds delay for demonstration
});


