import React from 'react'
import styled from '@emotion/styled'
import { Button } from 'react-bootstrap'

export const ButtonOrangeStyled = styled(Button)`

    background-color: #d1410c;
    color: white;
    padding: 0.6rem 0rem;
    justify-content: center;
    transition: background-color 100ms ease-in;
    border-radius: 0.5vmin;
    font-size: 1rem;

    &:hover {
    color: white;
    background-color: #f05537;
    transition: 0.5s ease-out;
    }
`;
export default ButtonOrangeStyled;
