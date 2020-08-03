import { useState, useEffect, useRef } from "react"

const useOpacity = () => {
  const [opacity, setOpacity] = useState(1)
  const ref = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if( ref.current.offsetTop < window.innerHeight)
     setOpacity(1 - 1.1 * ref.current.offsetTop/window.innerHeight);
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return { ref, opacity }
}
export default useOpacity
