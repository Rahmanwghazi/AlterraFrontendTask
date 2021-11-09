import { useState } from "react"
import { useDispatch } from "react-redux"
import { tambahPengunjung } from '../store/PengunjungSlice'
function PengunjungInput(props) {
    const dispatch = useDispatch()

    const [data, setData] = useState({
        nama: "",
        umur: "",
        jenisKelamin: "Pria"
    })

    const [editing, setEditing] = useState(true)

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formIsNotEmpty = data.nama && data.umur && data.jenisKelamin
        if (formIsNotEmpty) {
            const newData = {
                nama: data.nama,
                umur: data.umur,
                jenisKelamin: data.jenisKelamin
            }
            dispatch(tambahPengunjung(newData))
            setData({
                nama: "",
                umur: "",
                jenisKelamin: "Pria"
            })
        } else {
            alert("Data belum lengkap!")
        }
    }

    const handleBukaInput = () => {
        setEditing(false)
    }

    const handleTutupInput = () => {
        setEditing(true)
    }


    const viewMode = {};
    const editMode = {};

    if (editing) {
        viewMode.display = 'none'
    } else {
        editMode.display = 'none'
    }

    return (
        <div>
            <div onSubmit={() => { }} style={viewMode}>
                <p>Masukkan nama Anda</p>
                <input type="text" placeholder="Nama anda" defaultValue={data.nama} name="nama" onChange={onChange}></input><br /><br />
                <p>Masukkan umur Anda</p>
                <input type="text" placeholder="Umur anda" defaultValue={data.umur} name="umur" onChange={onChange}></input><br /><br />
                <p>Masukkan jenis kelamin Anda</p>
                <select onChange={onChange} name="jenisKelamin">
                    <option defaultValue="Pria" selected>Pria</option>
                    <option defaultValue="Wanita">Wanita</option>
                </select>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleTutupInput}>Selesai</button>
            </div>
            <button onClick={handleBukaInput} style={editMode}>Masukkan nama pengunjung</button>
        </div>
    )
}

export default PengunjungInput