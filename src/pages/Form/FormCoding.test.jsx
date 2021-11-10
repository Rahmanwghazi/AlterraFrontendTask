import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
 
import FormCoding from "./FormCoding";
 
describe("FormPage", () => {
  test("renders Form component", () => {
    render(<FormCoding />);
    expect(screen.getByText(/Nama Lengkap:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
  });

  test("input text for name and email with false value", () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "wafiq56" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "aabbaabb" },
    });
    expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument();
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama/)).toHaveValue("wafiq56");
    expect(screen.getByLabelText(/Email/)).toHaveValue("aabbaabb");
  });

  test("input text for ideal value", () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "wafiq" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "rahmanwghazi@mail.com" },
    });
    expect(screen.getByLabelText(/Nama/)).toHaveValue("wafiq");
    expect(screen.getByLabelText(/Email/)).toHaveValue("rahmanwghazi@mail.com");
  });

  test("submit button with error", () => {
    render(<FormCoding />);
    jest.spyOn(window, "alert").mockImplementation(() => {});
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "ininama" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "emailaja" },
    });
    fireEvent.submit(screen.getByText("Submit"))
    expect(window.alert).toBeCalledWith("Data Pendaftar Tidak Sesuai");
    expect(screen.getByLabelText(/Nama/)).toHaveValue("ininama");
    expect(screen.getByLabelText(/Email/)).toHaveValue("emailaja");
  });
});