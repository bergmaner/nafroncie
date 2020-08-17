import { useState, useEffect } from "react"
const usePosition = (ref1, ref2, ref3) => {
  const [xPos, setXPos] = useState(0)
  const [width, setWidth] = useState(0)
  const [index, setIndex] = useState(0)
  useEffect(() => {
    switch (index) {
      case 0:
        setXPos(0)
        setWidth(0)
        break
      case 1:
        setXPos(ref1.current.getBoundingClientRect().left)
        setWidth(ref1.current.getBoundingClientRect().width)
        break
      case 2:
        setXPos(ref2.current.getBoundingClientRect().left)
        setWidth(ref2.current.getBoundingClientRect().width)
        break
      case 3:
        setXPos(ref3.current.getBoundingClientRect().left)
        setWidth(ref3.current.getBoundingClientRect().width)
        break
    }
  }, [index])
  return { xPos, width, setIndex }
}
export default usePosition
