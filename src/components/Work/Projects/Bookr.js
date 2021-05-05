import styled from 'styled-components'
import React from 'react'


const Bookr = () => {
    return (
        <Container>
            <Title>BOOKR</Title>
            <DescriptionContainer>
            <p>Bookr is a web application that allows its users to review books. You can create an account using the register form then login with the same information. After logging in, you are greeted by the book list which contains a search bar. Search through thousands of books. If the book is in stock, you can be transferred to the Google books store to buy it. Clicking the book will take you to a book page with information about the specific book. Here, you can add a review on that book using the link provided. You'll be transferred to the review page where you can give the book a rating out of 5 and a written review.</p>
            </DescriptionContainer>


        </Container>
    )
}

const Container = styled.div`
width: 50%;
height: 100%;
`;
const Title = styled.h1`
font-weight: 900;
margin-bottom: 0px;
color: #DCE3FF;
font-size: 6rem;
text-align: center;
`;
const DescriptionContainer = styled.div`

`



export default Bookr;