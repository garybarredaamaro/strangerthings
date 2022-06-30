const title = document.querySelector('.title-container')
const episode  = document.querySelector('.episode-container')
const skip  = document.querySelector('.skip')
const audio  = document.querySelector('audio')
const body = document.querySelector('body')
const container = document.querySelector('.container')

window.onload = () => {
  container.addEventListener('click', start)
}

function start() {
  container.classList.add('noevent')
  title.classList.remove('grow')
  title.classList.remove('glow')
  episode.classList.remove('grow')
  title.style.display = 'block'
  episode.style.display = 'none'
  audio.currentTime = 0
  audio.play()
  title.classList.add('glow')
  setTimeout(startTitle, 3000)
  setTimeout(hideSkipButton, 6000)
  setTimeout(startEpisode,8500)
}

function startTitle() {
  skip.style.visibility = 'visible'
  title.style.display = 'block'
  episode.style.display = 'none'
  title.classList.add('grow')
  episode.classList.remove('grow')
}

function hideSkipButton() {
  skip.style.visibility = 'hidden'
}

function startEpisode() {
  title.style.display = 'none'
  episode.style.display = 'block'
  episode.classList.add('grow')
  title.classList.remove('grow')
}