import React from 'react'
import styled from '@emotion/styled'
import { Button } from 'react-bootstrap'

export const ButtonWhiteStyled = styled.button`

    background-color: white;
    color: #39364f;
    justify-content: center;
    border-radius: 0.1vmin;
    border: 0.01rem solid #dbdae3;
    margin: 0.5rem 0;
    padding: 0.8rem 0rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: bold;
    letter-spacing: 0.2px;
  
    &:hover {
      border: 0.01rem solid #dbdae3;
      color: unset;
      transition: 0.5s;
      background-color: #f8f7fa;
  
    }
    &:active{
      background-color: #eeedf2 !important;
      color:unset;
    }
`;
export default ButtonWhiteStyled;
