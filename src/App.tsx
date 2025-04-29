import './App.css'
import ViewBox from './components/PercentView'
// type ArrowType = (x: number) => number

// const arrow1:ArrowType = (x) => x + 1

// const arrow2:ArrowType = (x) => (
//   x + 1
// )

// const arrow3:ArrowType = (x) => {
//   x = 2;
//   return (
//     x + 1
//   )
// }



const App = () => {
  let cislo: number = 34;
  cislo -= 1;

  return (
    <>
      <ViewBox value={cislo + 1} max={100} makeColor={(p) => `hsl(${p * 100}, 100%, 50%)`}/>
      <ViewBox value={100} max={200} makeColor={(p) => `hsl(${p * 100}, 100%, 50%)`}/>
      <ViewBox value={20} max={300} makeColor={(p) => `hsl(${p * 100}, 100%, 50%)`}/>
    </>
  )
}

export default App
