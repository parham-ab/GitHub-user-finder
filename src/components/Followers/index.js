import { useContext, useEffect, useState } from "react";
import axios from "axios";
// import paginate from "../utils";
import { GitHubContext } from "../../context/GitHubContextProvider";
import paginate from "../../utils";

const Followers = () => {
  // const { userData } = useContext(GitHubContext);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  // const userId = userData && userData[0].login;
  const getData = async () => {
    const res = await axios.get(
      `https://api.github.com/users/ali/followers?per_page=100`
    );
    setData(paginate(res.data)[page]);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    if (loading) return;
  }, [loading]);
  // console.log(data);
  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {/* {data.map((item) => console.log(item.login))} */}
      {/* {data.map((item, i) => (
        <div key={i}>
          <h4>{item}</h4>
          <img src={item.isLogin} alt={item.login} />
        </div>
      ))} */}

      <div className="cards-container">
        {data.map((item) => (
          <div key={item.id} className="follow-cards">
            <img src={item.avatar_url} alt={item.login} />
            <a href={item.id} target="_blank" rel="noreferrer">
              <p>{item.login}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Followers;
