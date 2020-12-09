import React from 'react';
import styled from 'styled-components'


const ReUsableModal = (props) => {
    const [display, setDisplay] = React.useState(true);

    // open function to set display to true. 
    const open = () => {
        setDisplay(true)
    }

    // close function to se display to false
    const close = () => {
        setDisplay(false)
    }

    return(
        <ModalWrapper>
            <ModalBackdrop onClick={close}/>
            <ModalBox>
                {props.children}
            </ModalBox>
        </ModalWrapper>
        
    )
}


const ModalWrapper = styled.div `
`;

const ModalBackdrop = styled.div `
`;

const ModalBox = styled.div `
`;


export default ReUsableModal;