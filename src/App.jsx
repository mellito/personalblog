import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HOME_ROUTE, PROFILE_ROUTER } from "./components/Constans/Routes";

import Homes from "./pages/home";
import Profile from "./pages/Profile";

function App() {
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
