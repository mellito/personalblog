import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { addQuote } from "../src/feature/quote/quoteSlice";
import quoteData from "../src/assets/quoutes.json";
import {
  BLOGS_ROUTE,
  HOME_ROUTE,
  PROFILE_ROUTER,
} from "./components/Constans/Routes";

import Homes from "./pages/home";
import Blogs from "./pages/Blogs";
import Profile from "./pages/Profile";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addQuote(quoteData));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={HOME_ROUTE}
          element={
            <Homes greeting="know all about web technologies, study methods, video games and more, lets" />
          }
        />
        <Route path={BLOGS_ROUTE} element={<Blogs />} />
        <Route path={PROFILE_ROUTER} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
