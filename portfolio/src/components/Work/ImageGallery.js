import ReUsableModal from './ReUsableModal'
import styled, { ThemeProvider } from 'styled-components'
import React from 'react'
import Bookr from '../Work/Projects/Bookr'


const ImageGallery = () => {
    const modalRef = React.useRef();

    const openModal = () => {
        modalRef.current.openModal()
        
    }

    
    

    return(
        <OpenModal>
        
            <WorkBorderDiv 
                style={{
                borderBottomStyle: 'solid',
                borderBottomColor: '#DCE3FF', 
                borderWidth: 'thin'}}>
                <Work>WORK</Work>
            </WorkBorderDiv>

        <ThemeProvider theme={theme}>
            <OpenModalContainer>

                <BookrWrapper>
                    <Button onClick={openModal}>
                        Open Modal
                    </Button>
                    <ReUsableModal ref={modalRef}>
                        <Bookr />
                    </ReUsableModal>
                </BookrWrapper>

                <BookrWrapper>
                    <Button theme={{ main: "linear-gradient(-35deg, rgba(158,221,0,1) 0%, rgba(0,117,52,1) 49%, rgba(1,4,0,1) 100%)"}}  onClick={openModal}>
                        Open Modal
                    </Button>
                    <ReUsableModal ref={modalRef}>
                        <Bookr />
                    </ReUsableModal>
                </BookrWrapper>

                <BookrWrapper>
                    <Button theme={{ main: "linear-gradient(-144deg, rgba(85,0,193,1) 0%, rgba(99,27,135,1) 49%, rgba(30,0,48,1) 100%)"}} onClick={openModal}>
                        Open Modal
                    </Button>
                    <ReUsableModal ref={modalRef}>
                        <Bookr />
                    </ReUsableModal>
                </BookrWrapper>

                <BookrWrapper>
                    <Button theme={{ main: "linear-gradient(-144deg, rgba(255,17,17,1) 0%, rgba(171,0,0,1) 49%, rgba(94,0,0,1) 100%)"}} onClick={openModal}>
                        Open Modal
                    </Button>
                    <ReUsableModal ref={modalRef}>
                        <Bookr />
                    </ReUsableModal>
                </BookrWrapper>

            </OpenModalContainer>
            </ThemeProvider>
        </OpenModal>

        

        
    )
}

const BookrWrapper = styled.div`

`;

const OpenModalContainer = styled.div`
padding-top: 50px;
padding-bottom: 100px;
font-weight: lighter:
width: 100%;
height: auto;
display: flex;
justify-content: space-evenly;
`;

const WorkBorderDiv = styled.div`
text-align: center;
width: 300px;
margin: 0 auto;
`;

const Work = styled.h1`
font-weight: 900;
margin-bottom: 0px;
color: #DCE3FF;
font-size: 6rem;
text-align: center;
`;

const OpenModal = styled.div`
background: rgb(22,0,57);
text-align: center;

`;

const Button = styled.button`
border-radius: 30px;
border: none;
margin: 0;
text-decoration: none;
cursor: pointer;
text-align: center;
background: ${props => props.theme.main};
height: 200px;
width: 200px;
`;

const theme = {
    main: "linear-gradient(115deg, rgba(252,255,0,1) 0%, rgba(255,184,0,1) 54%, rgba(242,118,0,1) 100%);"
}




export default ImageGallery;
