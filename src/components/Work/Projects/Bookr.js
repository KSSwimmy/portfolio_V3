import styled from 'styled-components'
import BookrImg from '../../../Portfolio_v3_images/bookr.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Bookr = () => {
    return (
        <Container>
            <Title>BOOKR</Title>
            <img style={{width:'50%'}} src={BookrImg} alt="Bookr App" />
            <Icons>
            <FontAwesomeIcon icon="link" />
            <FontAwesomeIcon icon={["fab", "github"]} />
            </Icons>
            

            <DescriptionContainer1>
            <AboutThisProject>About This Project</AboutThisProject>
            <p>Bookr is a web application that allows its users to review books. You can create an account using the register form then login with the same information. After logging in, you are greeted by the book list which contains a search bar. Search through thousands of books. If the book is in stock, you can be transferred to the Google books store to buy it. Clicking the book will take you to a book page with information about the specific book. Here, you can add a review on that book using the link provided. You'll be transferred to the review page where you can give the book a rating out of 5 and a written review.</p>
            </DescriptionContainer1> 

            <SoftwareUsedContainer>
                <SoftwareUsed>Tech Stack</SoftwareUsed>
                <Unordered>
                    <li>Java/Spring Boot</li>
                    <li>Maven</li>
                    <li>Hibernate</li>
                    <li>PostgreSQL</li>
                    <li>Swagger</li>
                    <li>Postman</li>
                </Unordered>
            </SoftwareUsedContainer>

            <MyroleContainer>
                <Myrole>Backend Engineer</Myrole>
            </MyroleContainer>

            
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100%;
`;
const Title = styled.h1`
font-weight: 900;
margin-bottom: 0px;
color: #DCE3FF;
font-size: 6rem;
text-align: center;
`;

const AboutThisProject = styled.div`

`

const Icons = styled.div`

`;

const Unordered = styled.ul`

`;

const SoftwareUsed = styled.h3`
`;

const DescriptionContainer1 = styled.div`

`;

const SoftwareUsedContainer = styled.div`

`;

const MyroleContainer = styled.div`
`;

const Myrole = styled.h3`
`


export default Bookr;