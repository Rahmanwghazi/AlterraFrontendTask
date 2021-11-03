import ListItem from "./ListItem"
const tableStyle = {
    border: "1px solid black",
    margin: "auto",
    marginBottom: 20,
    marginTop: 20,
}

const ListPengunjung = (props) => {
    const {data, hapusPengunjung} = props
    
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
                    {data.map((pengunjung) => <ListItem key={pengunjung.id} item={pengunjung} hapusPengunjung={hapusPengunjung}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListPengunjung