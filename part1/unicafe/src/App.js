import { useState } from 'react'


const updater = (opinion, setStats, props, propsStats, setStatistics) => {
  const { good, neutral, bad, total } = props;
  const { average, positive } = propsStats;

  if (opinion === good) {
    setStats({
      ...props,
      good: good + 1,
      total: total + 1,
    });

    updateStats({ good: good + 1, neutral, bad, total: total + 1 },{ average, positive }, setStatistics);
  } 
  
  else if (opinion === neutral) {
    setStats({
      ...props,
      neutral: neutral + 1,
      total: total + 1,
    });

    updateStats({ good, neutral: neutral + 1, bad, total: total + 1 }, { average, positive }, setStatistics);
  } 
  
  else {
    setStats({
      ...props,
      bad: bad + 1,
      total: total + 1,
    });

    updateStats({ good, neutral, bad: bad + 1, total: total + 1 }, { average, positive }, setStatistics);
  }
};


const updateStats = (propsScore, propsStatistics, setStatistics) => {

  const {good, neutral, bad, total} = propsScore
  const {average, positive} = propsStatistics

 
  const averageNumber = total/3

  const positivePercentage = (good/total) * 100

    setStatistics(
      {
      average: averageNumber,
      positive: positivePercentage
    })

}


const Counter = ({ good, neutral, bad, total }) => {

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <tbody>
          <tr>
           <td> No feedback given </td>
          </tr>
        </tbody>
      </>
    )
  }
  return (
    <>
      <tbody>
        <tr>
          <td> good </td> 
          <td> {good} </td>
        </tr>

        <tr>
          <td> neutral </td>
          <td>{neutral}</td>
        </tr>

        <tr>
          <td> bad </td>
          <td> {bad} </td>
        </tr>

        <tr>
          <td> all </td>
          <td> {total} </td>
        </tr>
      </tbody>
     
    </>
  )}
  

const Button = ({text, event}) => {
  return (
    <>
      <button onClick= {event}>
        {text}
      </button>
    </>
  )
}



const StatisticLine = ({statistic, total, text}) => {
  
  if (total === 0){
    return (
      <>
      <tfoot>
      </tfoot>
      </>
  )}
    return (
      <>
      <tfoot>
        <tr> 
          <td> {text}</td>
          <td> {statistic} </td>
        </tr>
        </tfoot>
      </>
    )
}

const Anecdotes = ({anecdote, anecdoteList, anecdoteVotes}) => {
  
  return (
    <>
      <p style = {{fontWeight :'900', fontSize: 'larger'}}>Anecdote of the day</p>
      <p> {anecdoteList[anecdote]} </p>
      <p> has {anecdoteVotes[anecdote]} votes</p>
    </>
  )

}

const AnecdoteTopRated = ({props, anecdotes}) => {

  const values = Object.values(props)
  
  const topRated = Math.max(...values)

  const topAnecdote = anecdotes[values.indexOf(topRated)]




  return (
    <>
      <p style = {{fontWeight :'900', fontSize: 'larger'}}>Anecdote with most votes</p>
      <p>{topAnecdote}</p>
      <p> has {topRated} votes</p>


    </>
  )
}

const UpdateAnecdote = (setState, anecdotes) => {

 setState(Math.floor(Math.random() * anecdotes.length))

}

const VoteAnecdote = (setState, props, currentAnecdote) => {
  setState({
    ...props,
    [currentAnecdote]: props[currentAnecdote] + 1
  })

  

 
}

const App = () => {
  
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0, 
    bad: 0,
    total: 0
  })

  const [statistics, setStatistics] = useState({
    average: 0,
    positive: 0
  })

  const [randomizer, setNumber] = useState(0)

  const [selected, setSelected] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0 })

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const {good, neutral, bad, total} = stats

  const {average, positive} = statistics

  return (
    <div>

      <p> Give feedback </p>

      <Button text = {"good"} event = {()=> updater(good , setStats, stats, statistics, setStatistics)}></Button>

      <Button text = {"neutral"} event = {()=> updater(neutral , setStats, stats, statistics, setStatistics)}></Button>

      <Button text = {"bad"} event = {()=> updater(bad , setStats, stats, statistics, setStatistics)}></Button>


      <table style = {{border :'solid', borderColor : 'black'}}>

      <Counter good={good} neutral={neutral} bad={bad} total = {total}></Counter>

      <StatisticLine statistic={average} total = {total} text = {"average"}></StatisticLine>

      <StatisticLine statistic={positive} total = {total} text = {"positive"}></StatisticLine>

      </table>

      <Anecdotes anecdote = {randomizer} anecdoteList = {anecdotes} anecdoteVotes = {selected}></Anecdotes>

      <Button text ={'vote'} event = {()=> VoteAnecdote(setSelected, selected, randomizer)}></Button>

      <Button text = {'next anecdote'} event = {()=> UpdateAnecdote(setNumber, anecdotes)}></Button>

      <AnecdoteTopRated props = {selected} anecdotes = {anecdotes}></AnecdoteTopRated>

    </div>
  )}




export default App
