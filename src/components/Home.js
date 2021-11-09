import ListPengunjung from './ListPengunjung';
import PengunjungInput from './PengunjungInput';


function Home() {
    return (
        <div>
            <h1>Daftar Pengunjung</h1>
            <h3>Stasiun Gubeng</h3>
            <ListPengunjung  />
            <PengunjungInput />
        </div>
    )

}

export default Home