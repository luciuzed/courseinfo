const Header = (props) => {
  // console.log("bruh") //for testing
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  const array1 = props.parts[0]
  const array2 = props.parts[1]
  const array3 = props.parts[2]
  return (
    <>
      <Part name={array1.name} ex={array1.exercises} />
      <Part name={array2.name} ex={array2.exercises} />
      <Part name={array3.name} ex={array3.exercises} />

    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.ex}</p>
    </>
  )
}

const Total = (props) => {
  const array = props.parts
  return (
    <>
      <p>Number of exercises {array[0].exercises + array[1].exercises + array[2].exercises}</p>
    </>
  )
}


const App = () => {

  const course = 'Half Stack application development'
  const parts = [
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
  
  return (
    <div>
      <Header course={course}/>
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </div>
  )
}

export default App  