import React from "react"
import Navbar from "./nav/Navbar"
import StickyNavbar from "./nav/StickyNavbar"
import HeroHeader from "./hero/HeroHeader"

const Layout = ({activeIndex, name, description, path, children}) =>{
    return(
        <>
        <Navbar activeIndex={activeIndex} />
        <StickyNavbar activeIndex={activeIndex}/>
        <HeroHeader path={path} name={name} description={description} />
        {children}
        </>
    )
}
export default Layout