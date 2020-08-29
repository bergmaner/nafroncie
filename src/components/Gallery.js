import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
width: 50%;
max-width: 415px;
height: 555px;
position:relative;
@media${props => props.theme.breakpoints.lg}{
    display:none;
}
div:nth-child(odd){
align-self:flex-start;
}
:before{
    position: absolute;
    top: -45px;
    left: -56px;
    display:block;
    content: '';
    width:100px;
    height:100px;
background-image: url(${props => props.image});
background-repeat: no-repeat;
}
:after{
    position: absolute;
    bottom: -45px;
    left: 208px;
    display:block;
    content: '';
    width:100px;
    height:100px;
background-image: url(${props => props.image});
background-repeat: no-repeat;
}
div:nth-child(2){
    transform:translateY(-180px) translateX(150px);
    }
    div:nth-child(3){
        transform:translateY(-356px) translateX(20px);
        z-index:2;
        }


`

const Image = styled(Img)`
width: 100%;
height: 100%;
position:relative;
`

const Gallery = () => {

const data = useStaticQuery(graphql`
query{
    dots: file(relativePath: {eq: "dots.svg"}) {
      publicURL
    }
    me1:    file(relativePath: { eq: "me1.jpg" }) {
        childImageSharp {
          fixed(width: 225, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      me2:  file(relativePath: { eq: "me2.jpg" }) {
        childImageSharp {
          fixed(width: 225, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      me3:    file(relativePath: { eq: "me3.jpg" }) {
        childImageSharp {
          fixed(width: 225, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
  }
  
`)

    return(
        <Container image={data.dots.publicURL}>
            <Image fixed={data.me1.childImageSharp.fixed}/>
            <Image fixed={data.me2.childImageSharp.fixed}/>
            <Image fixed={data.me3.childImageSharp.fixed}/>
        </Container>
    )
}
export default Gallery