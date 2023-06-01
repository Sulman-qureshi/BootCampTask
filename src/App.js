import {Routes, Route} from 'react-router';
import "./App.css";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup'

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route exact path="/home"  element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
    </Routes>
    </div>
  )
}

export default App;
