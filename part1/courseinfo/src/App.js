const Header = ({name}) => {
  return (
    <>
      <p>
          {name}
      </p>
    </>
)
  
}

const Part = ({name, exercises}) => {
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  )
 
}

const Content = ({course}) => {
  return(
    <>
      <Part name = {course[0].name} exercises = {course[0].exercises}></Part>
      <Part name = {course[1].name} exercises = {course[1].exercises}></Part>
      <Part name = {course[2].name} exercises = {course[2].exercises}></Part>

      
    </>
  )

}
  

const Total = ({course}) => {
  return (
    <>
      <p>
       Number of exercises {course[0].exercises + course[1].exercises + course[2].exercises}
      </p>
    </>
)

}


const App = () => {

  const course = {

    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  
  return (

    <div>
      <Header name = {course.name}></Header>
      <Content course = {course.parts} ></Content>
      <Total course = {course.parts}></Total>
    </div>
  )
  
}

export default App

