import styled from 'styled-components'

export const EmptyTasksList = styled.div`
    display: flex;
    width:100px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    @media(width: 1024px) {
        flex-direction: row;
        justify-content: space-around;
    }
`

export const Message = styled.p`
    text-align: center;
    font-size: 18px;
`