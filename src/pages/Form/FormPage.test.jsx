import { render, screen, fireEvent } from "@testing-library/react";
import React  from "react";

import FormPage from "./FormPage";

describe('FormPage', ()=>{
    test('renders FormPage compoennt', ()=>{
        render(<FormPage />)
        expect(screen.getByText('Formulir Buku Baru')).toBeInTheDocument()
        expect(screen.getByLabelText(/Judul/)).toBeInTheDocument()
    })
    test('input text for judul and pengarang', ()=>{
        render(<FormPage />)
        fireEvent.input(
            screen.getByRole('textbox', {name: /judul/i}), 
            {target: {value: "Bumi Manusia"}}
        )
        expect(screen.getByLabelText(/Judul/)).toHaveValue("Bumi Manusia")

        fireEvent.input(
            screen.getByRole('textbox', {name: /pengarang/i}), 
            {target: {value: "Pram"}}
        )
        expect(screen.getByLabelText(/Judul/)).toHaveValue("Bumi Manusia")
        expect(screen.getByLabelText(/Pengarang/)).toHaveValue("Pram")
    })

    test('input text for pengarang with number', ()=>{
        render(<FormPage />)
        fireEvent.input(
            screen.getByRole('textbox', {name: /judul/i}), 
            {target: {value: "Bumi Manusia"}}
        )
        expect(screen.getByLabelText(/Judul/)).toHaveValue("Bumi Manusia")

        fireEvent.input(
            screen.getByRole('textbox', {name: /pengarang/i}), 
            {target: {value: "Pram2"}}
        )
        expect(screen.getByLabelText(/Judul/)).toHaveValue("Bumi Manusia")
        expect(screen.getByLabelText(/Pengarang/)).toHaveValue("Pram2")
        expect(screen.getByText("Nama Pengarang Harus Berupa Huruf")).toBeInTheDocument()
    })
    
    test('subimt button', () => {
        render(<FormPage />)
        fireEvent.input(
            screen.getByRole('textbox', {name: /judul/i}), 
            {target: {value: "Bumi Manusia"}}
        )
        expect(screen.getByLabelText(/Judul/)).toHaveValue("Bumi Manusia")

        fireEvent.input(
            screen.getByRole('textbox', {name: /pengarang/i}), 
            {target: {value: "Pram"}}
        )
        expect(screen.getByLabelText(/Judul/)).toHaveValue("Bumi Manusia")
        expect(screen.getByLabelText(/Pengarang/)).toHaveValue("Pram")

        fireEvent.click(screen.getByRole("button"))
        expect(screen.getByLabelText(/Judul/)).toHaveValue("")
        expect(screen.getByLabelText(/Pengarang/)).toHaveValue("")
    })
})