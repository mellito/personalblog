import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { BLOGS_ROUTE, HOME_ROUTE,PROFILE_ROUTER } from "./components/Constans/Routes";
import Header from "./components/Header";

import Homes from "./pages/home";
import Blogs from "./pages/Blogs";
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path={HOME_ROUTE}
          element={
            <Homes greeting="know all about web technologies, study methods and more, lets" />
          }
        />
        <Route path={BLOGS_ROUTE} element={<Blogs />} />
        <Route path={PROFILE_ROUTER} element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
