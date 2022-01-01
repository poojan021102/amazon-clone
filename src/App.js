import './App.css';
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Checkout from './components/Checkout';
import Home from './components/Home';
import { useEffect } from "react"
import auth from './firebase';
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux"
function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth,user=>{
      if(user){
        //usere is logged in
        dispatch({
          type:"SET_USER",
          user:user
        })
      }
      else{
        //user is logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
      console.log(user);
    })
    return ()=>{
      unsubscribe();
    }
  }, [])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
