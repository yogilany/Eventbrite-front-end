import React from 'react'
import styled from '@emotion/styled'
import { Form } from 'react-bootstrap'

export const TextInputStyled = styled(Form.Control)`
        --text-border-highlight:#3659e3;
        padding-bottom: 1.2rem;
        border-radius: 0.2vmin;
        
        &:focus {
        border: 2px var(--text-border-highlight) solid;
        box-shadow: unset;
        outline: 0 none;
        }
    
        &::placeholder {
                font-size: 0.8rem;
                line-height: 22px;
        }
    
        &:focus::placeholder {
                
        }
`;
export default TextInputStyled;
