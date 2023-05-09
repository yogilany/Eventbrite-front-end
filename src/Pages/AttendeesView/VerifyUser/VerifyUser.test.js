import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import VerifyUser from "./VerifyUser";
import { renderWithProviders } from "src/test_utils";

jest.mock("react-redux");
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("VerifyUser", () => {
  beforeEach(() => {
    useDispatch.mockClear();
    useSelector.mockClear();
    useNavigate.mockClear();
    useSearchParams.mockClear();
  });

  it("should render correctly", () => {
    const mockDispatch = jest
      .fn()
      .mockResolvedValueOnce({ payload: "success" });
    const mockSelector = jest.fn().mockReturnValue(false);
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockReturnValue(mockSelector);
    useNavigate.mockReturnValue(jest.fn());
    useSearchParams.mockReturnValue([new URLSearchParams("?token=123")]);

    const view = renderWithProviders(<VerifyUser />);

    expect(view).toMatchSnapshot();
  });
});
