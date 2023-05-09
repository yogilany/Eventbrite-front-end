import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { selectLoading } from "../../features/authSlice";
import { Spinner } from "react-bootstrap";

export const ButtonBlueStyled = styled.button`
  background-color: #3659e3;
  border: unset;
  color: white;
  padding: 0.8rem 0rem;
  justify-content: center;
  transition: background-color 100ms ease-in;
  border-radius: 0.5vmin;
  font-size: 0.875rem;
  font-weight: bold;
  //   &:hover {
  //     color: white;
  //     background-color: #f05537;
  //     transition: 0.5s ease-out;
  //   }
`;

/**
 * @description Blue button component with optional loading spinner
 * @date 5/8/2023 - 8:03:57 PM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {*}
 */
export const BlueButton = (props) => {
  const isLoading = useSelector(selectLoading);

  return (
    <ButtonBlueStyled {...props}>
      <div class="flex flex-col items-center">
        <div class="flex flex-row items-center">{props.children}</div>
      </div>
    </ButtonBlueStyled>
  );
};

export default BlueButton;
