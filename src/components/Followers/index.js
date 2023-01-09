import { useContext, useEffect, useState } from "react";
import axios from "axios";
// import paginate from "../utils";
import paginate from "../../utils";
import Loading from "../Loading";

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
  if (loading) return <Loading />;

  return (
    <div className="d-flex text-center cards-container m-auto shadow">
      {data.map((item) => (
        <div key={item.id} className="follow-cards">
          <img src={item.avatar_url} alt={item.login} />
          <a href={item.id} target="_blank" rel="noreferrer">
            <p>{item.login}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Followers;
