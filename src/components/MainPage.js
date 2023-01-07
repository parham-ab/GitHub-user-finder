import { useState, useEffect } from "react";
import axios from "axios";
// React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// icons
import { BsGithub, BsSearch } from "react-icons/bs";
// components
import UserProfile from "./UserProfile";
import Loading from "./Loading";

const MainPage = () => {
  const [userData, setUserData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const BASE_URL = `https://api.github.com/users`;
  // display my github profile onMount
  useEffect(() => {
    GetMyGithub();
  }, []);
  // fetch data function
  const GetUserData = async () => {
    setLoading(true);
    await axios
      .get(`${BASE_URL}/${inputValue}`)
      .then(function (res) {
        setUserData([res.data]);
      })
      .catch(function (res) {
        if (res instanceof Error) {
          console.log(res.message);
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
        } else {
          console.log([res.data]);
        }
      });
    setLoading(false);
  };
  const GetMyGithub = () => {
    axios.get(`${BASE_URL}/parham-ab`).then(function (res) {
      setUserData([res.data]);
    });
  };
  // submitHandler
  const submitHandler = async (e) => {
    e.preventDefault();
    // clear input
    setInputValue("");
    await GetUserData();
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
    </div>
  );
};

export default MainPage;
