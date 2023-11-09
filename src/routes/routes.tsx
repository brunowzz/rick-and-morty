import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../layout/DefaultLayout";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import Episodes from "../pages/Episodes";
import Locations from "../pages/Locations";
import IndependentCharacter from "../pages/IndependentCharacter";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/characters/:id" element={<IndependentCharacter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
