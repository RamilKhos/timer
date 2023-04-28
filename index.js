const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
    let timer
    return (timeFromInput) => {
        clearInterval(timer)
        let time = timeFromInput

        const formatTime = (number) => {
            return number < 10 ? '0' + number : number
        }

        const updateTime = () => {
            const hours = Math.floor( time / 3600 )
            const minutes = Math.floor(( time - hours * 3600 ) / 60)
            const seconds = time - hours * 3600 - minutes * 60
            timerEl.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
        }
        updateTime()

        timer = setInterval(() => {
            time--
            if (time >= 0){
                updateTime()
            } else {
                clearInterval(timer)
            }
        }, 1000)
    }
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, '')
})

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value)

  animateTimer(seconds)

  inputEl.value = ''
})







