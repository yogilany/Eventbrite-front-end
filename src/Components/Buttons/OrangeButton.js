import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { selectLoading } from "../../features/authSlice";
import { Spinner } from "react-bootstrap";

export const ButtonOrangeStyled = styled.button`
  background-color: #d1410c;
  border: unset;
  color: white;
  padding: 0.8rem 0rem;
  justify-content: center;
  transition: background-color 100ms ease-in;
  border-radius: 0.5vmin;
  font-size: 0.875rem;
  font-weight: bold;
  &:hover {
    color: white;
    background-color: #f05537;
    transition: 0.5s ease-out;
  }

  &:active {
    background-color: #c23c0c !important;
  }
`;

/**
 * @description Orange button component with optional loading spinner
 * @date 5/8/2023 - 8:03:57 PM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {*}
 */
export const OrangeButton = (props) => {
  const isLoading = useSelector(selectLoading);

  return (
    <ButtonOrangeStyled {...props}>
      {props.spinner ? (
        isLoading ? (
          <Spinner size="sm" animation="border" variant="light" />
        ) : (
          props.children
        )
      ) : (
        props.children
      )}
    </ButtonOrangeStyled>
  );
};

export default OrangeButton;
