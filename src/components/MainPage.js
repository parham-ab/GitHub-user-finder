import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
// React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// icons
import { BsGithub, BsSearch } from "react-icons/bs";
// components
import UserProfile from "./UserProfile";
import Loading from "./Loading";
import { GitHubContext } from "../context/GitHubContextProvider";

const MainPage = () => {
  const { loading, setLoading, userData, setUserData } =
    useContext(GitHubContext);
  const [inputValue, setInputValue] = useState("");
  const BASE_URL = `https://api.github.com/users`;
  const navigate = useNavigate();
  // display my github profile onMount
  const GetUserGithub = async () => {
    const { data } = await axios.get(`${BASE_URL}/parham-ab`);
    setLoading(false);
    setUserData([data]);
  };
  useEffect(() => {
    GetUserGithub();
  }, []);
  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    // clear input
    setInputValue("");
    // search user
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
    GetUserData();
    navigate("/");
  };
  return (
    <div className="mainPage-container">
      <form onSubmit={submitHandler}>
        <div className="search-container">
          <BsGithub />
          <input
            type="text"
            placeholder="Search username..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            disabled={!inputValue || (!inputValue.trim() && true)}
            type="submit"
          >
            <BsSearch />
          </button>
        </div>
      </form>
      {loading ? (
        <Loading />
      ) : (
        userData.map(
          (item) => item.login && <UserProfile key={item.id} data={item} />
        )
      )}
      <ToastContainer />
      <Outlet />
    </div>
  );
};
export default MainPage;
