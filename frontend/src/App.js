import Register from "./components/registration/Register";
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./components/registration/Login";
import Home from "./components/Home";
import  {Toaster} from "react-hot-toast"
function App() {

  const BASE_URL = "https://todo-backend-production-2594.up.railway.app/";
    

return (
  <BrowserRouter>
  <Toaster
  position="top-right"
  reverseOrder={true}
  />
  <Routes>
    <Route path="/" element = {<Login  BASE_URL={BASE_URL} />}/>
    <Route path="/signup" element = {<Register  BASE_URL={BASE_URL} />}/>
    <Route path="/Home" element = {<Home/>}/>
    </Routes>
    </BrowserRouter>
);
}

export default App