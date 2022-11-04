import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/SignUp";
import Register_slot from './page/Register_slot'



function App() {
  return (
   
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={ <Register/>} />
      <Route path="/register" element={<Register_slot/>} />

    </Routes>
   </BrowserRouter>
   
    
   </>
  );
}

export default App;
