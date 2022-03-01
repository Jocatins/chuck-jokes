import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";

const chuckAllJokesUrl = "https://api.chucknorris.io/jokes/categories";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => getData(), []);
  const getData = () => {
    axios
      .get(chuckAllJokesUrl)
      .then((res) => {
        console.log(res.data);
        const responseData = res.data;
        setData(responseData);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="row">
        <div className="column">
          <div className="card">{data}</div>
        </div>
        <div className="column">
          <div className="card">..</div>
        </div>
        <div className="column">
          <div className="card">..</div>
        </div>
        <div className="column">
          <div className="card">..</div>
        </div>
      </div>
    </>
  );
};

export default Home;
