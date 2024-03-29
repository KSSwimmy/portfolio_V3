import styled from 'styled-components'
import LandingPageStars from '../SVG/bodyStars.svg'
import { device } from '../device'





const AboutMe = () => {
    return (
        <AboutMeDiv>
            <TheParagraphDiv>
                <AboutBorderDiv 
                    style={{borderBottomStyle: 'solid',
                    borderBottomColor: '#DCE3FF', borderWidth: 'thin'}}>
                    <About>ABOUT</About>
                </AboutBorderDiv>

                <TheHTwo>HI! IT'S ME! KIMBERLY!</TheHTwo>
                <FirstP>

                    <p>I’m a Full Stack Software Engineer with design being my first love. I was born and raised in the PeeDee area of South Carolina, but the beat of a fast paced “Concrete Jungle” called, New York City caught my heart! I have a flair for problem solving complex problems from code to design. Being able to empathize with the user is my top priority as a designer, software engineer, and also as a person who is visually impaired. Diversity and inclusion is needed in the tech industry because it serves a plethora of people who are not the same. I feel I'd be a perfect fit on any team because of my passion to make technology more beautifully designed and accessible for all! 
</p> 
                </FirstP>

                
                
            </TheParagraphDiv>
        </AboutMeDiv>  
    )
}

const Page = styled.div`
width: 100%;
`

const AboutMeDiv = styled.div`
width: 100%;
display: flex;
text-align: center;
justify-content: center;
background: transparent;

@media ${device.iPhone678Plus} {
    
    margin-top: 220px;
}
`;

const TheParagraphDiv = styled.div`
width: 100%;
margin: 50px; 
display: flex;
flex-direction: column;
justify-content: center;
`;

const AboutBorderDiv = styled.div`
text-align: center;
width: 300px;
margin: 0 auto;
`;

const About = styled.h1`
font-family: 'Exo 2', sans-serif;
font-weight: 900;
margin-bottom: 0px;
color: #DCE3FF;
font-size: 5rem;
text-align: center;
`;
const FirstP = styled.div`
font-family: 'Open Sans', sans-serif;
color: #DCE3FF;
text-align: center;
font-size: 2.5rem ;
margin-bottom: 40px;
line-height: 1.5;
`
const Hobbies = styled.div`
font-family: 'Open Sans', sans-serif;
text-align: left;
font-size: 2.5rem ;
`
const TheHTwo = styled.h2`
font-family: 'Exo 2', sans-serif;
font-weight: 900;
color: #DCE3FF;
margin-top: 40px;
margin-bottom: 40px;
font-size: 2.5rem ;
text-align: center;
`

const ThirdP = styled.div`

`


export default AboutMe;