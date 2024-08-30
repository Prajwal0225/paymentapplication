import {React} from 'react';
import SignUp from './Pages/signUp';
import SignIn from './Pages/SignIn';
import Desktop from './Pages/desktop';
import SendMoney from './Pages/sendMoney';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './Pages/homePage';
function App() {

let flag = false;
const tokenisPresent = localStorage.getItem("token");

if(tokenisPresent !== null){
  flag = true;
}

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={flag? <Desktop/>:<HomePage/>}/>
        <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Desktop />} />
          <Route path="/send" element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
  

      

    </>
  )
}

export default App
