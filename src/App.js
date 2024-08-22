import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignForm from "./component/signinfrom";
import Home from "./pages/home";
function App() {
  return (
    <div>
      <h1>app page</h1>
        <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
