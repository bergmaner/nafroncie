import { useState, useEffect, useRef } from "react"

const useOpacity = () => {
  const [opacity, setOpacity] = useState(1);
  const [zIndex, setZIndex] = useState(0);
  const ref = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if( ref.current.offsetTop < window.innerHeight)
      {
        setOpacity(1 - 1.1 * ref.current.offsetTop/window.innerHeight);
        if(ref.current.offsetTop === 0){
          setZIndex(0);
        }
        else{
          setZIndex(-1);
        }

      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return { ref, opacity, zIndex }
}
export default useOpacity
