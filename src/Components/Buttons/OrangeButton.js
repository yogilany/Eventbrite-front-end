import React from 'react'
import styled from '@emotion/styled'
import { Button } from 'react-bootstrap'

export const ButtonOrangeStyled = styled.button`

    background-color: #d1410c;
    border:unset;
    color: white;
    padding: 0.8rem 0rem;
    justify-content: center;
    transition: background-color 100ms ease-in;
    border-radius: 0.5vmin;
    font-size: 0.875rem;
    font-weight:bold;
    &:hover {
        color: white;
        background-color: #f05537;
        transition: 0.5s ease-out;
    }

    &:active{
        background-color: #c23c0c !important;
    }
`;
export default ButtonOrangeStyled;
