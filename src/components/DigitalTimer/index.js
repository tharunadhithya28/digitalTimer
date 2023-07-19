import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    timer: 25,
    timelimit: 25,
    isRunning: false,
    text: 'Paused',
  }

  increaseTimer = () => {
    const {timer, timelimit} = this.state
    this.setState(prevState => ({
      timelimit: prevState.timelimit + 1,
      timer: prevState.timer + 1,
    }))
  }

  decreaseTimer = () => {
    const {timer, timelimit} = this.state
    this.setState(prevState => ({
      timelimit: prevState.timelimit - 1,
      timer: prevState.timer - 1,
    }))
  }

  playTimer = () => {
    this.timerId = setInterval(this.stopwatch, 1000)
  }

  resetTimer = () => {
    const {timelimit, timer, isRunning, text} = this.state
    clearInterval(this.timerId)
    this.setState({
      timer: timelimit,
      isRunning: false,
      text: 'Paused',
    })
  }

  pauseTimer = () => {
    clearInterval(this.timerId)
    this.setState({
      isRunning: false,
      text: 'Paused',
    })
  }

  stopwatch = () => {
    const {timelimit, timer, isRunning, text} = this.state
    if (timer !== 0) {
      this.setState(prevState => ({
        timer: prevState.timer - 1,
        isRunning: true,
        text: 'Running',
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({
        isRunning: false,
        text: 'Paused',
      })
    }
  }

  render() {
    const {timer, timelimit, isRunning, text} = this.state
    return (
      <div>
        <h1> Digital Timer </h1>
        <div className="bottomContainer">
          <div className="timerContainer">
            <div className="white">
              <h1> {timer}:00 </h1>
              <p> {text}</p>
            </div>
          </div>
          <div className="rightContainer">
            <div className="playResetContainer">
              <div>
                {isRunning ? (
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      alt="pause icon"
                    />
                    <button onClick={this.pauseTimer}> Pause </button>
                  </div>
                ) : (
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      alt="play icon"
                    />
                    <button onClick={this.playTimer}> Start</button>
                  </div>
                )}
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                />
                <button onClick={this.resetTimer}> Reset </button>
              </div>
            </div>
            <div className="setTimerContainer">
              <p> Set Timer limit </p>
              <div className="timer">
                <button onClick={this.decreaseTimer}> - </button>
                <p> {timelimit} </p>
                <button onClick={this.increaseTimer}> + </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
