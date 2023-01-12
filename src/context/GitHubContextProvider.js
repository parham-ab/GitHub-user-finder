import { useState } from "react";
import { createContext } from "react";

export const GitHubContext = createContext();

const GitHubContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [inputValue, setInputValue] = useState("parham-ab");

  return (
    <GitHubContext.Provider
      value={{
        loading,
        userData,
        setLoading,
        setUserData,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContextProvider;
