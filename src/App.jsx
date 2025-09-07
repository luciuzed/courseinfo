const Header = (props) => {
  // console.log("bruh") //for testing
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part p={props.p1.name} e={props.p1.exercises} />
      <Part p={props.p2.name} e={props.p2.exercises} />
      <Part p={props.p3.name} e={props.p3.exercises} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.p} {props.e}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
    </>
  )
}


const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <div>
      <Header course={course}/>
      <Content p1={part1} p2={part2} p3={part3}/>
      <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises} />
    </div>
  )
}

export default App  