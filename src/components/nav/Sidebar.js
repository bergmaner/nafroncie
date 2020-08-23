import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import {sideMenu} from "../../config"

const SideContainer = styled.nav`
position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: #fff;
    width: calc(100% - 35px);
    padding: 20px;
    transition: 0.35s transform ease;
display: none;
    @media${props => props.theme.breakpoints.sm}{
    display: block;
      transform: ${props => props.open ? "translateX(0)" : "translateX(-100%)"};
    }
`;

const Menu = styled.ul`
list-style-type: none;
padding: 0;
margin: 0;
margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`

const MenuItem = styled.li`
position: relative;
display: list-item;
cursor: pointer;
:hover{
    a:after{
        width: 100%;
    }
}
a{
    display: block;
    padding: 15px 0;
    position: relative;
    font-size: 14px;
    color: #000;
    text-decoration: none;
    :after{
        position: absolute;
        left: 0;
        content: "";
        width: 50px;
        height: 2px;
        background-color: ${props => props.theme.colors.main_variant1};
        bottom: 0;
        transition: 1s  ease;
    }
}
`

const Sidebar = ({open}) => {
    return(
<SideContainer open={open}>
    <Menu>
        {sideMenu.map((item,index) =><MenuItem><Link to={item.path}>{item.content}</Link></MenuItem>)}
    </Menu>
</SideContainer>
    )
}
export default Sidebar