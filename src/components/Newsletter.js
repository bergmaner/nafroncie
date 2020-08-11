import React from "react";
import styled from "styled-components"

const Container = styled.div`
color: black;
background: #fff;

`;

const NewsletterContainer = styled.div`
background: ${props => props.theme.colors.main_variant1};
display: inline-block;
`;

const Newsletter = () => {
    return(
        <Container>
            <NewsletterContainer>kkkk</NewsletterContainer>
        </Container>
    )
}
export default Newsletter;