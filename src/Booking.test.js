import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Booking from "./components/Booking"; // Adjust the import path as necessary
import userEvent from "@testing-library/user-event";

describe("Booking Component", () => {
  const submitFormMock = jest.fn();
  const dispatchMock = jest.fn();

  beforeEach(() => {
    submitFormMock.mockClear();
    dispatchMock.mockClear();
  });

  test("renders the booking form correctly", () => {
    render(<Booking submitForm={submitFormMock} dispatch={dispatchMock} />);

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/make your reservation/i)).toBeInTheDocument();
  });

  test("allows the user to select a date", () => {
    render(<Booking submitForm={submitFormMock} dispatch={dispatchMock} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    
    userEvent.type(dateInput, "2023-12-25");

    expect(dateInput).toHaveValue("2023-12-25");
    expect(dispatchMock).toHaveBeenCalledWith("2023-12-25");
  });

  test("allows the user to select a time", () => {
    render(<Booking submitForm={submitFormMock} dispatch={dispatchMock} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    
    userEvent.selectOptions(timeSelect, "18:00");

    expect(timeSelect).toHaveValue("18:00");
  });

  test("allows the user to enter the number of guests", () => {
    render(<Booking submitForm={submitFormMock} dispatch={dispatchMock} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    
    userEvent.type(guestsInput, "4");

    expect(guestsInput).toHaveValue(4);
  });
});
