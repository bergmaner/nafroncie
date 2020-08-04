import React from "react"
import Button from "./Button"
import styled from "styled-components"

const Paginate = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  background: white;
`

const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <Paginate>
      <Button isPossible={!isFirst} path={prevPage}>Prev</Button>
      <Button isPossible={!isLast} path={nextPage}>Next</Button>
    </Paginate>
  )
}

export default Pagination
