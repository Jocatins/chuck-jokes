import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";

const chuckAllJokesUrl = "https://api.chucknorris.io/jokes/search?query=all";

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
      <ul>
        {data?.result?.map((item) => (
          <li key={item.id}>{item.categories} </li>
        ))}
      </ul>
      <ul>
        {data?.result?.map((item) => (
          <li key={item.id}>{item.value} </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
