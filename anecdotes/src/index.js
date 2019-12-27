import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
const App = props => {
  const [selected, setSelected] = useState({
    anecdote: 0,
    points: {}
  });

  const getQuote = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const changeAnecdotes = () => {
    const next = getQuote(0, props.anecdotes.length);
    setSelected(current => ({
      ...current,
      anecdote: next
    }));
    // console.log(next, selected);
  };

  const voteAnecdotes = () => {
    let votes = selected.points;
    if (!votes[selected.anecdote]) {
      votes[selected.anecdote] = 1;
      setSelected(current => ({
        ...current,
        points: { ...current.points, ...votes }
      }));
      // console.log(votes)
      return;
    }
    votes[selected.anecdote] += 1;
    setSelected(current => ({
      ...current,
      points: { ...current.points, ...votes }
    }));
    // console.log(votes)
  };
  const mostRated = points => {
    if (Object.entries(points).length === 0) return 0;
    return Object.keys(points).find(
      ele => points[ele] === Math.max(...Object.values(points))
    );
    
  };
  return (
    <>
      <h1>Anecdote of the Day</h1>
      <div>{props.anecdotes[selected.anecdote]}</div>
      <hr />
      <div>{`has ${selected.points[selected.anecdote] || 0} votes`}</div>
      <button onClick={voteAnecdotes}>vote</button>
      <button onClick={changeAnecdotes}>next anecdotes</button>
      <br />
      <br />
      <br />
      <h1>Anecdote with most votes</h1>
      <div>{props.anecdotes[mostRated(selected.points)]}</div>
      <hr />
      <div>{`has ${selected.points[mostRated(selected.points)] || 0} votes`}</div>

    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
