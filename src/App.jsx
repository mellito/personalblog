import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getQuotes } from "./service/quotes";
import { getProjects } from "./service/projects";
import { addBlogs } from "./feature/blogs/blogsSlice";
import blogsData from "../src/assets/blogs.json";
import { HOME_ROUTE, PROFILE_ROUTER } from "./components/Constans/Routes";

import Homes from "./pages/home";
import Profile from "./pages/Profile";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addBlogs(blogsData));
    dispatch(getQuotes());
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={HOME_ROUTE}
          element={
            <Homes greeting="this is my personal page where you can find personals project and contact me. lest" />
          }
        />
        <Route path={PROFILE_ROUTER} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
