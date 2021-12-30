import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<h1>Login</h1>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/" element={<Header/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
