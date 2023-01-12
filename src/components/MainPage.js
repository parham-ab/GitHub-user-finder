import { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// icons
import { BsGithub, BsSearch } from "react-icons/bs";
// components
import UserProfile from "./UserProfile";
import Loading from "./Loading";
import { GitHubContext } from "../context/GitHubContextProvider";

const MainPage = () => {
  const { loading, userData, inputValue, setInputValue, GetUserData } =
    useContext(GitHubContext);
  const navigate = useNavigate();

  // display my github profile onMount
  useEffect(() => {
    GetUserData();
  }, []);
  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
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
      <Outlet />
    </div>
  );
};
export default MainPage;
