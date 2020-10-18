import React from "react"
import styled, { keyframes, css } from "styled-components"
import { FaExclamationCircle, FaTimes } from "react-icons/fa"

const show_slide = keyframes`
    0%{
      transform: translateX(400%);
    }
    40%{
      transform: translateX(-10%);
    }
    80%{
      transform: translateX(0%);
    }
    100%{
      transform: translateX(0px);
    }`

const hide_slide = keyframes`
    0%{
      transform: translateX(0px);
    }
    40%{
      transform: translateX(0%);
    }
    80%{
      transform: translateX(-10%);
    }
    100%{
      transform: translateX(400%);
    }`

const showSlide = () =>
  css`
    ${show_slide} 1s ease forwards;
  `

const hideSlide = () =>
  css`
    ${hide_slide} 1s ease forwards;
  `

const NotificationEl = styled.div`
  border-radius: 0.25rem;
  padding: 15px 40px;
  display: grid;
  background: ${props => props.status === "success" ? "#5cb85c" : "#c23211" };
  border-left: 6px solid ${props => props.status === "success" ? "#408140" : "#991101"};
  opacity: ${props => props.active === undefined ? 0 : 1};
  pointer-events: ${props => (props.active ? "auto" : "none")};
  animation: ${props => (props.active ? showSlide : props.active === false ? hideSlide : "none")};
  position: relative;
`

const Exclamation = styled(FaExclamationCircle)`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.status === "success" ? "#408140" : "#991101"};
  font-size: 30px;
`

const Message = styled.span`
  padding: 0 20px;
  color: ${props => props.status === "success" ? "#408140" : "#991101"};
`

const CloseIcon = styled(FaTimes)`
  color: ${ props => props.status === "success" ? "#408140" : "#991101"};
  font-size: 22px;
  line-height: 40px;
`

const CloseButton = styled.div`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  background: ${ props => props.status === "success" ? "#53a653" : "#c24322"};
  padding: 13px 18px;
  cursor: pointer;
  transition: 0.34s;
  :hover {
    filter: brightness(95%);
  }
`

const Notification = ({ active, status, message, handleClose }) => {
  return (
    <NotificationEl active={active} status={status}>
      <Exclamation status ={status}/>
      <Message status={status}>{message}</Message>
      <CloseButton onClick={() => handleClose(false)} status={status}>
        <CloseIcon status={status}/>
      </CloseButton>
    </NotificationEl>
  )
}
export default Notification
