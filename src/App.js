import logo from './logo.svg';
import './App.css';
import './Components/Login/Login.js'
import Login from './Components/Login/Login.js';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    Login({name:"alo"})
  );
}

export default (App);
