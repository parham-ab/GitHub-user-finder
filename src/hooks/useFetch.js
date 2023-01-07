import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(``);
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading };
};

export default UseFetch;
