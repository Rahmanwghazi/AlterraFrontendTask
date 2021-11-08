import React, { useState, useRef} from 'react';

export default function FormPage(){
    const emptyData ={
        judul: "",
        pengarang: "",
        cetakan: "",
        tahunTerbit: 0,
        kotaTerbit: "",
        harga: 0
    }

    const [data, setData] = useState(emptyData)
    const fotoSampul = useRef(null)
    const regex = /^[A-Za-z ]*$/;
    const [errMsg, setErrMsg] = useState("")
    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "pengarang"){
            if(regex.test(value)){
               setErrMsg("")
            }else{
                setErrMsg("Nama Pengarang Harus Berupa Huruf")
            }
        }

        setData({
            ...data,
            [name]: value
        })
        console.log("ini data",data)
    }

    const handleSumbit = (e) => {
        if(errMsg !== ""){
            alert("terdapat data yang tidak sesuai")
        }else{
            alert(`data buku "${data.judul}" berhasil ditermia`)
        }
        resetData()
        e.preventDefault()
    }

    const resetData = () => {
        setData(emptyData);
        setErrMsg("");
    }
    return (
        <div className={"container"}>
        <h1 style={{ "textAlign": "center" }}>Formulir Buku Baru</h1>
        <form onSubmit={handleSumbit}>
            <label>
                Judul:<br/>
                <input type="text" name="judul" required value={data.judul} onChange={handleInput}/>
            </label><br/>
            <label>
                Pengarang:<br/>
                <input type="text" name="pengarang" required value={data.pengarang} onChange={handleInput}/>
            </label><br/>
            <label>
                Cetakan:<br/>
                <input type="text" name="cetakan" value={data.cetakan} onChange={handleInput}/>
            </label><br/>
            <label>
                Tahun Terbit:<br/>
                <input type="number" name="tahunTerbit" value={data.tahunTerbit} onChange={handleInput}/>
            </label><br/>
            <label>
                Kota Terbit:<br/>
                <input type="text" name="kotaTerbit" value={data.kotaTerbit} onChange={handleInput}/>
            </label><br/>
            <label>
                Harga:<br/>
                <input type="number" name="harga" value={data.harga} onChange={handleInput}/>
            </label><br/>
            <label>
                Foto sampul:<br/>
                <input type="file" ref={fotoSampul}/>
            </label><br/>
            <span style={{color:"red"}}>{errMsg}</span><br/>
            <input type="submit" value="Submit" onSubmit={handleSumbit}/>
            <button onClick={resetData}>Reset</button>
        </form>
        </div>
    )
}