import React from "react";
import { useSelector } from "react-redux";

const JokeComponent = () => {
  const jokes = useSelector((state) => state.allJokes.jokes);
  const jokeList = jokes?.result?.map((joke) => {
    const { id, value, icon_url, categories, created_at } = joke;
    return (
      <div className="four wide column" key={id}>
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <img
                className="right floated mini ui image"
                src={icon_url}
                alt="Chuck Jokes"
              />
              <div className="header">{categories}</div>
              <div className="meta">{created_at}</div>
              <div className="description">{value}</div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic green button">Read More</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img
                className="right floated mini ui image"
                src={icon_url}
                alt="Chuck Jokes"
              />
              <div className="header">{categories}</div>
              <div className="meta">{created_at}</div>
              <div className="description">{value}</div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic green button">Read More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{jokeList}</>;
};
export default JokeComponent;
