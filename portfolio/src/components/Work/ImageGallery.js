import React from 'react'
import ReUsableModal from './ReUsableModal'
import styled from 'styled-components'



const ImageGallery = () => {

    const openModal = () => {
        console.log('Open Modal')
    }

    return(
        <OpenModal>
            <Button onClick={openModal}>Open Modal</Button>
        </OpenModal>
    )
}


const OpenModal = styled.div`

`;

const Button = styled.button`

`;


export default ImageGallery;
