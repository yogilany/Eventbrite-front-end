import React from 'react'
import styled from '@emotion/styled'
import { Form } from 'react-bootstrap'

export const TextInputStyled = styled(Form.Control)`
        padding-bottom: 1.2rem;
        border-radius: 0.2vmin;
    
        &:focus {
        border: 2px #3659e3 solid;
        box-shadow: unset;
        outline: 0 none;
        }
    
        &::placeholder {
        font-size: 0.8rem;
        line-height: 1rem;
        }
    
        &:focus::placeholder {
        color: #3659e3;
    
        }
`;
export default TextInputStyled;
