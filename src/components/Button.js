import React from "react"
import styled from "styled-components"

const BlobButton = styled.div`
	position: relative;
	margin: 20px 0px;
	width: calc(0.8 * 200px);
	height: calc(0.7 * 50px);
	display: flex;
    justify-content: center;
	align-items: center;
	cursor: pointer;
    overflow: hidden;
	border: 2px solid ${props => props.theme.colors.main_variant2};
	border-radius: 20px;
	transition: background ease, color 0.17s ease 0.2s;
	background: transparent !important;
	font-weight: 700;
    color: ${props => props.theme.colors.main_variant2};
:hover{
    color: #fff;
}

	&:hover div{
		width: calc(2 * 200px);
        height: calc(2 * 50px);
	}

	&:before{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.1);
	}

	span{
		font-size: 1rem;
		z-index: 3;
		letter-spacing: 2px;
    }
    
	div{
		position: absolute;
		width: 0;
		height: 0;
		border-radius: 50%;
		z-index: 2;
        transition: all 2.5s cubic-bezier(0.1, 0.22, .3, 1);
        left: -50%;
		bottom: -50%;
        background: ${props => props.theme.colors.main_variant2} !important;
	}

`

const Button = ({children}) => {
	
  return <BlobButton><span>{children}</span><div></div></BlobButton>
}
export default Button
