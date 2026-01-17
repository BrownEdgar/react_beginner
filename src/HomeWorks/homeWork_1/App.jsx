import React from 'react'
import { useState } from 'react'
import './App.css'


export default function App() {
    const [activeIndex, setActiveIndex] = useState(0);
   const handleclick = (index) => {setActiveIndex(index)}
  return (
    <div>{
        
      ["one", "two", "three"].map((item, index) =>
        
         <button 
      onClick={() => setActiveIndex(index)} 
      className={activeIndex === index ? "active" : ""}
       key={index}>
        {item}</button>
        
    )  }
    </div>
  )
}

    



