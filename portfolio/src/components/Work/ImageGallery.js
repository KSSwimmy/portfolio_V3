import ReUsableModal from './ReUsableModal'
import styled from 'styled-components'
import React from 'react'



const ImageGallery = () => {
    const modalRef = React.useRef();

    const openModal = () => {
        modalRef.current.openModal()
        
    }

    return(
        <OpenModal>
            <Button onClick={openModal}>Open Modal</Button>
            <ReUsableModal ref={modalRef}>
                <h1>Bookr App</h1>
            </ReUsableModal>
        </OpenModal>
    )
}


const OpenModal = styled.div`

`;

const Button = styled.button`

`;


export default ImageGallery;
