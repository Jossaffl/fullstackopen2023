const Course = ({course}) => {
    return(
      <>
        <p key = {course.id}>
          {course.name} {course.exercises}
        </p>
      </>
    )
  }
  
  
const Total = ({ items }) => {
    return (
      <>
        <p>
          total of {items.reduce((total, item)=> {
            return total + item.exercises
          },0 )} exercises
        </p> 
      </>
    )
  }
  
const Header = ({name}) =>{
    return (
      <>
        <h1>
          {name}
        </h1>
      </>
    )
  }

export {Course, Total, Header}
