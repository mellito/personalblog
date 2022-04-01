import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { BLOGS_ROUTE, HOME_ROUTE } from "./components/Constans/Routes";
import Header from "./components/Header";

import Homes from "./pages/home";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path={HOME_ROUTE}
          element={
            <Homes greeting="know all about web technologies, study methods and more, let" />
          }
        />
        <Route path={BLOGS_ROUTE} element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
