import styled, { css } from 'styled-components'

export const Pagination = styled.div`
     width: 100%;
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     
    @media (min-width: 1024px) {
        margin-top: 40px;
    }    
`

export const ButtonPaginationStyled = css`
    background-color: #007FFF;
    color: white;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    border: none;
    font-weight: bold;
    cursor: auto;
    width: auto;
    border-radius: 5px;
    padding: 7px 15px;
`

export const PreviusButton = styled.button<{ disabled: boolean }>`
    ${ButtonPaginationStyled}
    opacity: ${props => props.disabled ? 0.5 : 1};
`
export const CurrentPageButton = styled.span`
     color: black;
     width: auto;
     padding: 15px;     
    
`

export const NextButton = styled.button<{ disabled: boolean }>`
   ${ButtonPaginationStyled}
   opacity: ${props => props.disabled ? 0.5 : 1};
`