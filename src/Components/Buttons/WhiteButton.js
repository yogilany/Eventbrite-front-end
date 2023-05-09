import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { selectLoading } from "../../features/authSlice";
import { Spinner } from "react-bootstrap";

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
  &:active {
    background-color: #eeedf2 !important;
    color: unset;
  }
`;

/**
 * @description White button component with optional loading spinner
 * @date 5/8/2023 - 8:03:57 PM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {*}
 */
export const WhiteButton = (props) => {
  const isLoading = useSelector(selectLoading);

  return (
    <ButtonWhiteStyled {...props}>
      {props.spinner ? (
        isLoading ? (
          <Spinner size="sm" animation="border" variant="light" />
        ) : (
          props.children
        )
      ) : (
        props.children
      )}
    </ButtonWhiteStyled>
  );
};

export default WhiteButton;
