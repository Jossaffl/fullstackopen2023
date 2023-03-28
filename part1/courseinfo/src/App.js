const Header = ({course}) => {

  return (
    <>
      <h1>{course[0].name}</h1>
    </>
  )
}


const Part = ({part, exercises}) => {

  return (
  <>
    <p>
      {part} {exercises}
    </p>
  </>
  )
}

const Content = ({course}) => {

  return (
    <>
      <Part part = {course[1].part} exercises = {course[1].exercises}></Part>
      <Part part = {course[2].part} exercises = {course[2].exercises}></Part>
      <Part part = {course[3].part} exercises = {course[3].exercises}></Part>
    </>
  )
}
    


const Total = ({course}) => {

  return(
    <>
    <p>
     Number of exercises {course[1].exercises + course[2].exercises + course[3].exercises}
    </p>
    </>
  )
}


const App = () => {

  const course = [
    {name:'Half Stack application development'},
    {part : 'Fundamentals of React', exercises: 10},
    {part : 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14}
]
  
  return (

    <div>
      <Header course = {course}></Header>
      <Content course = {course}></Content>
      <Total course = {course}></Total>
    </div>
  )
  
}

export default App

