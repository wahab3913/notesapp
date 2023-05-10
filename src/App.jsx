import { useState } from "react";
import Details from "./Component/Details";
import Home from "./Component/Home";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [allData, setAllData] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home allData={allData} setAllData={setAllData} />}
          />
          <Route path="/details/:id" element={<Details allData={allData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
