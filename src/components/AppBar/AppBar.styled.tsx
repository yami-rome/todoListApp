import styled from 'styled-components'

//mobile
export const AppBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #007FFF;
    height: auto;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    box-shadow: 0px 0px 3px black;

    //escritorio
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        position: fixed;
        height: 60px;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
        z-index: 1;
        top: 0;
        left: 0 ;
 }
`


export const Select = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 92%;
    height: 30px;
    font-size: 16px; 
    background-color: #5399DE;
    margin: 5px 0px 5px 0px;
    
    @media (min-width: 1024px) {
        align-items: center;
        height: 60px;
        margin: 0px 2px 2px 0px;
        width: 60%;
    }
`


export const FilterSelect = styled.select`
    width: 92%;
    border: none;
    padding: 0px;
    background-color: #5399DE;
    border-radius: 2px;
    color: #e6ecf3;
    font-size: 16px;
    font-weight: medium;
    option {
      border: none;
    }
    
    &:focus {
        outline: none; 
    }

    @media (min-width: 1024px) {
        option {
        border: none;
        padding: 0;
      }
    }
  
`
export const ContentLogo = styled.div`
     align-items: center;
     width: 100%;
`
export const Logo = styled.img`
  width: 40%; 
  @media (min-width: 1024px) {
    width: 28%; 
    }
  
`

export const Search = styled.input`
    width: 92%;
    border: none;
    height: 30px;
    padding: 0px 0px 0px 4px;
    background-color: #5399DE;
    border-radius: 2px;
    font-size: 16px;
    color: white;
    margin: 5px 0px;
    ::placeholder{
        color: white;
        font-weight: medium;
    }
    &:focus {
    outline: none;
    }

    @media (min-width: 1024px) {
       width: 60%;
       height: 60px;
    }
`