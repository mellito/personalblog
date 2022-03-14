import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {
            <Route
              path="/"
              element={
                <Home greeting="know all about web technologies, study methods and more..." />
              }
            ></Route>

            /* 
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/pricing" element={<PricingPage />}></Route>
          <Route path="/character/:id" element={<Card data={data} />}></Route> */
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
