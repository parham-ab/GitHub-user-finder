import { Navigate, Route, Routes } from "react-router-dom";
import Followers from "./components/Followers";
// components
import MainPage from "./components/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="followers" element={<Followers />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
