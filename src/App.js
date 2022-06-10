import './index.css'
import 'fabric'
import DesignCanvas from './DesignCanvas'
import Rect from './Rect'
import Circle from './Circle'
import { useEffect, useState } from 'react'

function useMouse() {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  })

  useEffect(() => {
    function handle(e) {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      })
    }
    document.addEventListener('mousemove', handle)
    return () => document.removeEventListener('mousemove', handle)
  })

  return mousePosition
}

function App() {
  const { x, y } = useMouse()
  return (
    <div className='App'>
      <p>X-axis position: {x}</p>
      <p>Y-axis position: {y}</p>
      <DesignCanvas>
        <Rect width={100} height={100} left={400} fill='blue' />
        <Circle radius={50} top={300} />
      </DesignCanvas>
    </div>
  )
}

export default App
