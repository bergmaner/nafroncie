import React from "react"
import styled from "styled-components"

const Categories = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 0;
  background: transparent !important;
`
const Category = styled.div`
  background: ${props => props.theme.colors.main_variant2}!important;
  display: inline-block;
  color: #fff;
  font-size: 14px;
  position: relative;
  padding: 5px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  margin: 0 30px 0 0;
  text-decoration: none;
  :before {
    background: #fff;
    width: 10px;
    height: 10px;
    content: "";
    display: inline-block;
    border-radius: 20px;
    margin: 0 5px 0 0;
  }
  :after {
    display: inline-block;
    border: 14px solid;
    border-color: transparent transparent transparent
      ${props => props.theme.colors.main_variant2};
    height: 0;
    width: 0;
    position: absolute;
    right: -28px;
    top: 0;
    content: "";
    display: inline-block;
  }
`

const CategoryList = ({ categories }) => {
  return (
    <Categories>
      {categories.map((category, index) => (
        <Category key={index}>{category}</Category>
      ))}
    </Categories>
  )
}
export default CategoryList
