import { useSelector, useDispatch } from "react-redux"
import { hapusPengunjung } from "../store/PengunjungSlice"

import ListItem from "./ListItem"
const tableStyle = {
    border: "1px solid black",
    margin: "auto",
    marginBottom: 20,
    marginTop: 20,
}

const ListPengunjung = (props) => {
    const pengunjung = useSelector((state) => state.pengunjung.pengunjung)
    const dispatch = useDispatch()

    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={tableStyle}>
                <thead style={{background: "wheat"}}>
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td>Action</td>
                </thead>
                <tbody>
                    {pengunjung.map((pengunjung) => <ListItem key={pengunjung.id} item={pengunjung} hapusPengunjung={() => {dispatch(hapusPengunjung(pengunjung.id))}}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListPengunjung