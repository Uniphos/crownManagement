import HomePage from './pages/homePage'
import LogIn from './pages/logIn'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="contant">
        <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/logIn" element={<LogIn />} />
        </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App