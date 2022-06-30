const title = document.querySelector('.title-container')
const episode  = document.querySelector('.episode-container')
const skip  = document.querySelector('.skip')

start()

setInterval(start, 10000);

function start() {
  setTimeout(startTitle,1000)
  setTimeout(hideSkipButton, 4000)
  setTimeout(startEpisode,5000)  
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