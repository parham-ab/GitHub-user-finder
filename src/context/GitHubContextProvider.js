import { useState } from "react";
import { createContext } from "react";

export const GitHubContext = createContext();

const GitHubContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  return (
    <GitHubContext.Provider
      value={{ loading, userData, setLoading, setUserData }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContextProvider;
