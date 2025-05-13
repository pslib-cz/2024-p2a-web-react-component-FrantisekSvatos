import './App.css'
import ViewBox from './components/PercentView'
import {useState} from 'react'
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
  const [rangeValue, setRangeValue] = useState(100)
  const initialValue: number = 50;
  
  return (
    <>
      <div>
          <input type="range" min={0} max={200} onChange={(e) => setRangeValue(parseInt(e.target.value))} defaultValue={initialValue}></input>
      </div>
      <ViewBox value={rangeValue} max={200} makeColor={(p) => `hsl(${p * 100}, 100%, 50%)`}/>
    </>
  )
}

export default App
