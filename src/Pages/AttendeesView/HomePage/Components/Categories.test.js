import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CategoriesTaps from "../Components/Categories";

describe("CategoriesTaps", () => {
  test("renders all tabs", () => {
    render(<CategoriesTaps categorySelector={() => {}} location={{}} />);
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("For you")).toBeInTheDocument();
    expect(screen.getByText("Online")).toBeInTheDocument();
    expect(screen.getByText("Today")).toBeInTheDocument();
    expect(screen.getByText("St Patrick's Day")).toBeInTheDocument();
    expect(screen.getByText("International Women's Day")).toBeInTheDocument();
    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(screen.getByText("Music")).toBeInTheDocument();
    expect(screen.getByText("Business")).toBeInTheDocument();
    expect(screen.getByText("Sports")).toBeInTheDocument();
    expect(screen.getByText("Design")).toBeInTheDocument();
    expect(screen.getByText("Food & Drink")).toBeInTheDocument();
  });
});
