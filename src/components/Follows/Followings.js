import { useContext, useEffect, useState } from "react";
import axios from "axios";
import paginate from "../../utils";
// components
import Loading from "../Loading";
// context
import { GitHubContext } from "../../context/GitHubContextProvider";

const Followings = () => {
  const { inputValue } = useContext(GitHubContext);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(
      `https://api.github.com/users/${inputValue}/following?per_page=100`
    );
    setData(paginate(res.data)[page]);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    if (loading) return;
  }, [loading, page]);
  // preloader
  if (loading) return <Loading />;
  // paginate followers or followings
  const paginateHandle = (i) => {
    setPage(i);
  };

  return (
    <>
      <div className="d-flex text-center cards-container m-auto shadow-lg">
        {data &&
          data.map((item) => (
            <div key={item.id} className="follow-cards">
              <img src={item.avatar_url} alt={item.login} />
              <a href={item.id} target="_blank" rel="noreferrer">
                <p>{item.login}</p>
              </a>
            </div>
          ))}
      </div>
      <div className="paginate-container text-center my-4">
        {data ? (
          data.map((item, i) => (
            <span
              key={i}
              onClick={() => paginateHandle(i)}
              className={i == page ? "active paginate-btn" : "paginate-btn"}
            >
              {i + 1}
            </span>
          ))
        ) : (
          <span onClick={() => paginateHandle(1)} className="follower-ended">
            First page
          </span>
        )}
      </div>
    </>
  );
};

export default Followings;
