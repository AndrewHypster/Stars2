import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import * as stl from './Stars-styled'

const Stars = () => {
  const
  [percentage, setPercentage] = useState(localStorage.getItem('percentage')),
  [rating, setRating] = useState(Math.floor(percentage/20)),
  [currentPerc, setCurrentPerc] = useState(localStorage.getItem('percentage')? localStorage.getItem('percentage') : false),

  changeRating = e => {
    const percent = e.nativeEvent.offsetX*100/e.target.offsetWidth
    setPercentage(currentPerc? percentage : percent)
    setRating(percentage===100? 5 : percentage===0? 0 : Math.floor(percentage/20)+1)
    localStorage.setItem('percentage', percentage)
  }

  return (
    <>
      {console.log(percentage)}
      <ThemeProvider theme={{rating: `${percentage}%`}}>
        <stl.stars onMouseMove={e => changeRating(e)} onClick={() => setCurrentPerc(percentage)}>★★★★★</stl.stars>
      </ThemeProvider>
      <stl.rating>{currentPerc? rating : rating}</stl.rating>
      <button onClick={() => localStorage.clear()}>Очистити дані</button>
    </>
  )
}

export default Stars