import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import JokeComponent from "./JokeComponent";
import { setJokes } from "./redux/actions/chuckActions";

const chuckAllJokesUrl = "https://api.chucknorris.io/jokes/search?query=all";

const JokeListing = () => {
  const jokes = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchJokes = async () => {
    const response = await axios.get(chuckAllJokesUrl).catch((err) => {
      console.log("error", err);
    });
    dispatch(setJokes(response.data));
  };
  useEffect(() => {
    fetchJokes();
  }, []);
  console.log("Jokes- jokeListing", jokes);
  return (
    <div className="ui grid container">
      <JokeComponent />
    </div>
  );
};
export default JokeListing;
