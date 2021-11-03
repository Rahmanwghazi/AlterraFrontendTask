import ListItem from "./ListItem"

const ListPengunjung = (props) => {
    const {data, hapusPengunjung} = props
    
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead style={{background: "wheat"}}>
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                </thead>
                <tbody>
                    {data.map((pengunjung) => <ListItem key={pengunjung.id} item={pengunjung} hapusPengunjung={hapusPengunjung}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListPengunjung