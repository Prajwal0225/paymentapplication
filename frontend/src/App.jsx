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
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
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
