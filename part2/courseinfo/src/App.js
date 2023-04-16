import {Course, Total, Header} from "./Course"

const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

 const [courses1 , courses2] = courses

  return (
    <div>

     <Header name = {courses1.name}></Header>

      {courses1.parts.map(element => 
        <Course course = {element} key = {element.id}></Course>
      )}

      <Total items={courses1.parts}></Total>

      <Header name = {courses2.name}></Header>

      {courses2.parts.map(element => 
        <Course course = {element} key = {element.id}></Course>
      )}

      <Total items={courses2.parts}></Total>


    </div>
  )
}

export default App
