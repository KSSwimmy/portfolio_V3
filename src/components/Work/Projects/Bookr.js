import styled from 'styled-components'
import BookrImg from '../../../Portfolio_v3_images/bookr.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AboutMe from '../../AboutMe'
//import { Link } from 'react-router-dom'


const Bookr = () => {
    return (
        <Container>
            <Title>BOOKR</Title>
        <ProjectContainer>
            <ProjectDisplay>
                <img style={{width:'100%'}} src={BookrImg} alt="Bookr App" />
                <Icons>
                <a href="https://bookr.vercel.app/login" target="_blank"><FontAwesomeIcon icon="link"/></a>
                <a href="https://github.com/BW-BookR-2019/BE" target="_blank"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                </Icons>
            </ProjectDisplay>

            <DescriptionContainer1>

                <AboutThisProjectContainer>
                    <AboutThisProject>About This Project</AboutThisProject>
                    <p>Bookr is a web application that allows its users to review books. You can create an account using the register form then login with the same information. After logging in, you are greeted by the book list which contains a search bar. Search through thousands of books. If the book is in stock, you can be transferred to the Google books store to buy it. Clicking the book will take you to a book page with information about the specific book. Here, you can add a review on that book using the link provided. You'll be transferred to the review page where you can give the book a rating out of 5 and a written review.</p>
                </AboutThisProjectContainer>

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
            </DescriptionContainer1> 

            
        </ProjectContainer>
            
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;

`;

const ProjectContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
margin-top: 55px;
`

const Title = styled.h1`
font-weight: 900;
margin-bottom: 0px;
color: #DCE3FF;
font-size: 6rem;
text-align: center;
`;

const ProjectDisplay = styled.div`
width: 50%;
height: auto;
margin: 50px;

`;

const AboutThisProjectContainer = styled.div`
font-size: 2.5rem;
color: #DCE3FF;
text-align: left;
margin: 50px;
font-family: 'Open Sans', sans-serif;

`;

const AboutThisProject = styled.h3`
text-align: center;
font-weight: 900;
font-size: 3rem
`;

const Icons = styled.div`

`;

const Unordered = styled.ul`

`;

const SoftwareUsed = styled.h3`
`;

const DescriptionContainer1 = styled.div`
display: flex;
flex-direction: column;
width: 50%;

`;

const SoftwareUsedContainer = styled.div`

`;




export default Bookr;