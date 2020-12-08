import styled from 'styled-components'
import LandingPageStars from '../SVG/bodyStars.svg'
import MyPic from '../SVG/me.jpg'





const AboutMe = () => {
    return (
        <AboutMeDiv>
                    <Me>
                        <img
                        style={{borderRadius: '30px', width: '85%'}}  
                        src={MyPic} 
                        alt="That's Me" />
                    </Me>
                    <TheParagraphDiv>
                        <AboutBorderDiv 
                            style={{borderBottomStyle: 'solid',
                            borderBottomColor: '#DCE3FF', borderWidth: 'thin'}}>
                            <About>ABOUT</About>
                        </AboutBorderDiv>
                        <FirstP>
                            <TheHTwo>Hi! It's Me!</TheHTwo>
                            <p>I am a Full Stack Software Engineer and UX Designer from South Carolina with a background in design, retail, and hospitality. I'm capable of creating beautiful web applications and business branding design from top to bottom. Building awesome, functional, and eye catching products that people will use is my passion!</p> 
                        </FirstP>
                        <SecP>
                            <p>I’m also a mobile Paint & Sip hostess, can paint on your denim jackets from time to time! (The Painting Gallivanter)</p>
                        </SecP>
                    </TheParagraphDiv>
                </AboutMeDiv>  
    )
}

const Page = styled.div`
width: 100%;
height: 100vh;

`
const AboutMeDiv = styled.div`
margin-left: -35px;
width: 100%;
height: 100vh;
display: flex;
margin-top: 75px;
`
const Me = styled.div`
width: 400px
text-align: center;
margin: 100px 20px 20px 80px;
`
const AboutBorderDiv = styled.div`
text-align: center;
width: 300px;
margin: 0 auto;
`
const About = styled.h1`
font-weight: 900;
margin-bottom: 0px;
color: #DCE3FF;
font-size: 6rem;
text-align: center;
`
const FirstP = styled.div`

`
const SecP = styled.div`

`
const TheHTwo = styled.h2`
font-weight: 400;
color: #DCE3FF;
margin-top: 40px;
`
const TheParagraphDiv = styled.div`
font-size: 2.2rem;
width: 530px;
`



export default AboutMe;