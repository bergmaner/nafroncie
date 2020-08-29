import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Input from "./Input"
import SubmitButton from "./SubmitButton"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Notification from "./Notification"
import useInterval from "../hooks/useInterval"

const Container = styled.div`
  color: black;
  background: #fff;
  padding: 10%;
  overflow: hidden;
`

const Informations = styled.ol`
  margin: 15px 5px;
  clear: both;
  list-style: none;
  li {
    margin: 10px;
    font-size: 18px;
    margin: 2em 0;
    padding-top: 2em;
    display: block;
    position: relative;
    counter-increment: inst;
    @media${props => props.theme.breakpoints.sm}{
      font-size: 16px;
      padding-top: 1.75em;
    }
  }
  li:before {
    content: counter(inst);
    background: ${props => props.theme.colors.main_variant2};
    color: #fff;
    font-size: 1em;
    font-weight: 700;
    font-style: italic;
    text-shadow: 1px 1px rgba(255, 150, 0, 0.5);
    border-radius: 0 0.675em 0.675em 0;
    font-size: 1.5em;
    text-align: center;
    padding-top: 0;
    padding-left: 2.25%;
    left: -2.3rem;
    top: -0.65em;
    height: 1.35em;
    width: 1.35em;
    position: absolute;
    @media${props => props.theme.breakpoints.sm}{
      left: -1.3rem;
    }
  }
`

const NewsletterContainer = styled.div`
  background: ${props => props.theme.colors.main_variant1};
  max-width: 48rem;
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.25rem;
  color: #fff;
  h2 {
    margin: 10px;
  }
  h4 {
    margin: 7px;
  }
  @media${props => props.theme.breakpoints.sm}{
    padding: 1rem;
  }
`
const Info = styled.div`
  margin: 15px 0;
  font-size: 18px;
`

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [active, setActive] = useState(undefined)
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    setActive(true);
    addToMailchimp(email)
      .then(data => {
        console.log(data)
        setStatus(data.result)
        switch (data.result) {
          case "error":
            setMessage("Podany email jest nieprawidłowy")
            break
          case "success":
            setMessage("Gratulacje! Zapisałeś się do Newslettera")
            break
        }
      })
      .catch(() => {})
    setEmail("")
  }
  useInterval(() => {
    if(active === true)setActive(false);
  }, 3000);
  return (
    <Container id="newsletter">
      <NewsletterContainer>
        <h2>Zapisz się do Newslettera</h2>
        <h4>Bądź zawsze na bieżąco!</h4>
        <Informations>
          <li>Informacje o nowodostępnych artykułach</li>
          <li>Brak Spamu</li>
          <li>Nowości z frontendowego świata</li>
        </Informations>
        <Notification
          message={message}
          active={active}
          status={status}
          handleClose={setActive}
        />
        <Input
          placeholder="Twój adres e-mail"
          type="email"
          value={email}
          onChange={setEmail}
        />
        <SubmitButton onClick={handleSubmit} />
        <Info>Dołącz do innych subskrybentów.</Info>
      </NewsletterContainer>
    </Container>
  )
}
export default Newsletter
