import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getQuotes } from "./service/quotes";
import { addBlogs } from "./feature/blogs/blogsSlice";
import blogsData from "../src/assets/blogs.json";
import {
  BLOGS_ROUTE,
  HOME_ROUTE,
  PROFILE_ROUTER,
  BLOG_ROUTE,
} from "./components/Constans/Routes";

import Homes from "./pages/home";
import Blogs from "./pages/Blogs";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addBlogs(blogsData));
    dispatch(getQuotes());
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
        <Route path={BLOG_ROUTE} element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
