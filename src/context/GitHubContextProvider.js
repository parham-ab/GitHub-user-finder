import { useState, createContext } from "react";
import axios from "axios";
// React-Toastify
import { ToastContainer, toast } from "react-toastify";

export const GitHubContext = createContext();

const GitHubContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [inputValue, setInputValue] = useState("parham-ab");
  const BASE_URL = `https://api.github.com/users`;
  // search for user
  const GetUserData = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${inputValue}`);
      setLoading(false);
      setUserData([data]);
    } catch (error) {
      toast.error("Not Found!!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <GitHubContext.Provider
      value={{
        loading,
        userData,
        setLoading,
        setUserData,
        inputValue,
        setInputValue,
        GetUserData,
      }}
    >
      {children}
      <ToastContainer />
    </GitHubContext.Provider>
  );
};

export default GitHubContextProvider;
