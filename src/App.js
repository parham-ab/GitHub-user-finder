import { Navigate, Route, Routes } from "react-router-dom";
// components
import MainPage from "./components/MainPage";
import Followers from "./components/Followers";
import GitHubContextProvider from "./context/GitHubContextProvider";

const App = () => {
  return (
    <GitHubContextProvider>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="followers" element={<Followers />} />
        </Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </GitHubContextProvider>
  );
};

export default App;
