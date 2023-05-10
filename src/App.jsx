import Details from "./Component/Details";
import Home from "./Component/Home";
import Modal from "./Component/modal";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
      
      <Modal />
    </>
  );
}

export default App;
