const Header = (course) => {
  return (
    <>
      <h1>{course[0].name}</h1>
    </>
  )
}

const Content = (course) => {
  return (
    <>
     <p>
      {course[1].part1} {course[1].exercises1}
     </p>

     <p>
      {course[2].part2} {course[2].exercises2}
     </p>

     <p>
      {course[3].part3} {course[3].exercises3}
     </p>
    </>
  )
}

const Total = (course) => {

  return(
    <>
    <p>
     Number of exercises {course[1].exercises1 + course[2].exercises2 + course[3].exercises3}
    </p>
    </>
  )
}

const App = () => {
  
  const course = [
    {name:'Half Stack application development'},
    {part1 : 'Fundamentals of React', exercises1: 10},
    {part2 : 'Using props to pass data', exercises2: 7},
    {part3: 'State of a component', exercises3: 14}
]
  
  return (
    <div>
      {Header(course)}

      {Content(course)}

      {Total(course)}
    </div>
  )
}

export default App

