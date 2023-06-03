import styled from 'styled-components'

export const FloatButton = styled.button`
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: rgb(25, 118, 210);
    color: rgb(255, 255, 255);
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-radius: 50px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;
    border: none;
    margin: 0;
    cursor: point;
    min-height: 36px;
    width: 56px;
    height: 56px;
    z-index: 99;
    font-weight: bold;
    &:focus{
        border: none;
    }

`