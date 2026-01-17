import { useState } from 'react'
import './App.css'


const arr = ["one", "two", "three"];
export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleclick = (index) => { setActiveIndex(index) }


  return (
    <div className="App">
      <h1>{arr[activeIndex]}</h1>

      <div>
        {
          arr.map((item, index) =>
            <button
              onClick={() => handleclick(index)}
              className={activeIndex === index ? "active" : ""}
              key={index}>
              {item}
            </button>

          )}
      </div>
    </div>

  )
}





