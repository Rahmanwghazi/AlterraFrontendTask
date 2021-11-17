import { useState } from "react"
import "./Home.css"

function UpdateField(props) {
    console.log("propsss", props)
    const [state, setState] = useState({
        nama: "",
        umur: "",
        jenis_kelamin: "Pria",
        editing: true,
    })

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleUpdate = (e) => {
        if (state.nama.trim() && state.umur && state.jenis_kelamin) {
            const umur = state.umur
            if (umur >= 75 || umur <= 12) {
                alert("Umur tidak sesuai")
            } else {
                const newData = {
                    nama: state.nama,
                    umur: state.umur,
                    jenis_kelamin: state.jenis_kelamin,
                }
                props.updatePengunjung(props.id, newData)
                setState({
                    ...state,
                    nama: "",
                    umur: "",
                    jenis_kelamin: "Pria",
                })
            }
        } else {
            alert("Data masih ada yang kosong")
        }
    }

    const handleBukaInput = () => {
        setState({
            ...state,
            editing: false,
        })
    }

    const handleTutupInput = () => {
        setState({
            ...state,
            editing: true,
        })
    }

    let viewMode = {
        marginTop: 5
    }
    let editMode = {
        marginTop: 5
    }

    if (state.editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    return (
        <div>
            <div onSubmit={handleUpdate} style={viewMode}>
                <input type="text" className="input-text" placeholder="Nama anda ..." value={state.nama} name="nama" onChange={onChange} />
                <input type="number" className="input-text" placeholder="Umur anda ..." value={state.umur} name="umur" onChange={onChange} />
                <select onChange={onChange} name="jenis_kelamin">
                    <option value="Pria" selected>Pria</option>
                    <option value="Wanita">Wanita</option>
                </select>
                <button onClick={() => { handleUpdate(); handleTutupInput() }}>Update</button>
                <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>Cancel</button>
            </div>
            <button className="inputan" onClick={handleBukaInput} style={editMode}>Edit</button>
        </div>
    )
}

export default UpdateField