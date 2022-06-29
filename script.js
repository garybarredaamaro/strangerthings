const title = document.querySelector('.title-container')
const episode  = document.querySelector('.episode-container')
const skip  = document.querySelector('.skip')

start()

function start() {
  setTimeout(() => {
    title.style.display = 'block'
    episode.style.display = 'none'
    title.classList.add('grow')
    episode.classList.remove('grow')

    skip.style.visibility = 'visible'
  },1000)

  setTimeout(() => {
    skip.style.visibility = 'hidden'
  }, 4000)
  
  setTimeout(() => {
    title.style.display = 'none'
    episode.style.display = 'block'
    episode.classList.add('grow')
    title.classList.remove('grow')
  },5000)  
}


setInterval(start, 10000);