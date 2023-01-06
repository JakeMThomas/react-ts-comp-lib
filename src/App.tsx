import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Button text="Test" onClick={() => console.log("You clicked on the button")}/> 
      <Button text="Signup" onClick={handleOpen}></Button>
      {
        isOpen && (
          <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleClose}>
              &times;
            </span>
            <h2>Sign Up</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" />
              <br />
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
