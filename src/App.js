import { useState } from "react"

function App() {
  let [seconds, setSeconds] = useState(0)
  const handleInputChange = (event) => {
    const inputedSeconds = event.target.value
    const parsed = parseInt(inputedSeconds)
    if (!isNaN(parsed)) {
      setSeconds(parsed)
    }
  }

  const handleClick = () => {
    const id = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(id)
          alert("Time's up, you're late.")
        } else {
          return prevSeconds - 1
        }
      })
    }, 1000)
  }

  return (
    <div className="App">
      <h1>{seconds} seconds</h1>
      <div>
        <input type="number" onChange={handleInputChange} />
        <button onClick={handleClick}>Start Timer</button>
      </div>
    </div>
  );
}

export default App;
