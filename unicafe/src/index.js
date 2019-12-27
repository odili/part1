import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good === 0 && neutral === 0 && bad === 0){
    return <p>No feedback given</p>
  }
  return (
  <>
      {/* <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={good + neutral + bad} />
      <Statistic text="average" value={(good + neutral + bad)/3}/>
      <Statistic text="positive" value={((good + neutral)/(good + neutral + bad)*100) + '%'}/> */}

      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{good + neutral + bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(good + neutral + bad)/3}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{((good + neutral)/(good + neutral + bad)*100) + '%'}</td>
          </tr>
        </tbody>
      </table>
  </> 
  )   
}

// const Statistic = ({text, value}) => {
//   return <p>{`${text}  ${value}`}</p>
// }

const App = () => {

  const [good, setGood] = React.useState(0)
  const [neutral, setNeutral] = React.useState(0)
  const [bad, setBad] = React.useState(0)

  const giveFeedback = (feedback, setFeedback) =>() => {
      setFeedback(feedback + 1)
    }
  

  return (
    <>
      <h1>Give feedback</h1>
      <Button onClick={giveFeedback(good, setGood)} text="good" />
      <Button onClick={giveFeedback(neutral, setNeutral)} text="neutral" />
      <Button onClick={giveFeedback(bad, setBad)} text="bad" />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
