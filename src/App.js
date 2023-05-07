import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Homepage from "./Pages/Homepage";
import Summary from "./Pages/Summary";

import Formpage from "./Pages/Formpage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" Component={Homepage}></Route>
          <Route path="/summary/:id" Component={Summary}></Route>
          <Route path="/form" Component={Formpage}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
