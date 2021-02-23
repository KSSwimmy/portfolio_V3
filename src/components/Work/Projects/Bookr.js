import styled from 'styled-components'
import React from 'react'


const Bookr = (bookrProps) => {
    return (
        <div>
            <p>I am showing {bookrProps.modalData.name}</p>
        </div>
    )
}

export default Bookr;