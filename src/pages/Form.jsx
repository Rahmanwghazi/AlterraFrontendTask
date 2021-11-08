import React, { useState, useRef } from 'react';
import './Form.css'

export default function FormPage() {
    const surat = useRef(null);
    const emptyData = {
        nama: "",
        email: "",
        handphone: "",
        harapan: ""
    }
    const [data, setData] = useState(emptyData);
    const [nameErrMsg, setNameErrMsg] = useState();
    const [emailErrMsg, setEmailErrMsg] = useState();
    const [hpErrMsg, setHpErrMsg] = useState();
    const [option] = useState([
        {
            label: "Pilih salah satu program",
            value: "",
        },
        {
            label: "Coding Backend with Golang",
            value: "Coding Backend with Golang"
        },
        {
            label: "Coding Frontend with ReactJS",
            value: "Coding Frontend with ReactJS"
        },
        {
            label: "Fullstack Developer",
            value: "Fullstack Developer"
        }
    ]);

    const nameRegex = /^[A-Za-z ]*$/;
    const hpRegex = /^[0-9]{9,14}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "nama") {
            if (nameRegex.test(value)) {
                setNameErrMsg("")
            } else {
                setNameErrMsg("Nama Lengkap Harus Berupa Huruf")
            }
        }

        if (name === "handphone") {
            if (hpRegex.test(value)) {
                setHpErrMsg("")
            } else {
                setHpErrMsg("No Handphone Tidak Sesuai")
            }
        }

        if (name === "email") {
            if (emailRegex.test(value)) {
                setEmailErrMsg("")
            } else {
                setEmailErrMsg("Email Tidak Sesuai")
            }
        }

        setData({
            ...data,
            [name]: value
        })
    }

    const handleSumbit = (e) => {
        if ((nameErrMsg !== "") || (hpErrMsg !== "") || (emailErrMsg !== "")) {
            alert("data pendftar tidak sesuai")
        } else {
            alert(`data Pendaftar "${data.nama}" berhasil ditermia`)
            resetData()
        }
        e.preventDefault()
    }

    const resetData = (item) => {
        setData(emptyData);
        setNameErrMsg("");
        setHpErrMsg("");
        setEmailErrMsg("");
        item.selectedIndex = 0;
    }

    return (
        <div className={"container"}>
            <h1 style={{ "textAlign": "center" }}>Pendaftaran Peserta Coding Bootcamp</h1>
            <form onSubmit={handleSumbit}>
                <div className="form-group">
                    <label>Nama:</label>
                    <input className="form-control" type="text" name="nama" required value={data.nama} onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input className="form-control" type="email" name="email" required value={data.email} onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label>
                        No Handphone: </label>
                    <input className="form-control" type="text" name="handphone" value={data.handphone} onChange={handleInput} required />
                </div>
                <div className="form-group">
                    <label>Latar Belakang Pendidikan: </label> <br />
                    <input type="radio" name="pendidikan" value="it" required /> IT
                    <input type="radio" name="pendidikan" value="non it" /> Non IT
                </div>
                <div class="form-group">
                    <label> Kelas Coding yang Dipilih: </label>
                    <select className="form-control" required>
                        {option.map(option => (
                            <option disabled={option.disabled} value={option.value}>
                                {option.label}  </option>
                        ))}
                    </select>
                </div>
                <div class="form-group">
                    <label>Foto Surat Kesungguhan: </label>
                    <input className="form-control" type="file" ref={surat} required />
                </div>
                <div class="form-group">
                    <label>Harapan Untuk Coding Bootcamp Ini:</label>
                    <textarea className="form-control" name="harapan" value={data.harapan} onChange={handleInput} />
                </div>
                <span style={{ color: "red" }}>{nameErrMsg}</span><br />
                <span style={{ color: "red" }}>{emailErrMsg}</span><br />
                <span style={{ color: "red" }}>{hpErrMsg}</span><br />
                <input type="submit" className={"btn btn-p"} value="Submit" onSubmit={handleSumbit} />
                <button className={"btn btn-r"} onClick={resetData}>Reset</button>
            </form>
        </div>
    )
}