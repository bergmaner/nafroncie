import { useState, useEffect } from "react"

const useScroll = () => {
  const [scrollVisible, setScrollVisible] = useState(false)
  useEffect(() => {
    const handleScroll = () => {

        if (window.scrollY >= 84) setScrollVisible(true)
        else setScrollVisible(false)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { scrollVisible }
}
export default useScroll
