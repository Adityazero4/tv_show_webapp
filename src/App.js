import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Summary from "./pages/Summary";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/summary/:id" element={<Summary />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
