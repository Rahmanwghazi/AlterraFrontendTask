import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import ListPengunjung from './ListPengunjung';
import PengunjungInput from './PengunjungInput';


const initValue = [{
    id: uuidv4(),
    nama: "Yoga",
    umur: 22,
    jenisKelamin: "Pria"
},
{
    id: uuidv4(),
    nama: "Ria",
    umur: 19,
    jenisKelamin: "Wanita"
},
{
    id: uuidv4(),
    nama: "Fahmi",
    umur: 25,
    jenisKelamin: "Pria"
},
{
    id: uuidv4(),
    nama: "Lala",
    umur: 21,
    jenisKelamin: "Wanita"
},
{
    id: uuidv4(),
    nama: "Ivan",
    umur: 25,
    jenisKelamin: "Pria"
}
]

function Home() {
    const [data, setData] = useState(initValue)

    const hapusPengunjung = (id) => {
        setData((oldData) => oldData.filter(item => {
            return item.id !== id
        }))
    }

    const tambahPengunjung = (newUser) => {
        //console.log("tambahh")
        const newPengunjung = {
            id: uuidv4(),
            ...newUser
        }
        setData((oldData) => [...oldData, newPengunjung])
    }


    return (
        <div>
            <ListPengunjung data={data} hapusPengunjung={hapusPengunjung} />
            <PengunjungInput tambahPengunjung={tambahPengunjung} />
        </div>
    )

}

export default Home