import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import ListPassenger from './ListPassenger';
import PassengerInput from './PassengerInput';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client'
import Header from './Header';
import { AddPassenger, DeletePassenger, GetPassengerById, GetPassengers, UpdatePassenger } from '../graphql/query';


function Home() {
    // const [value, setValue] = useState([])
    const { loading, data } = useQuery(GetPassengers);
    const [getPassengers, { data: data2, loading:loadingGet }] = useLazyQuery(GetPassengerById)
    const [id, setId] = useState(0);
    const [deletePassenger, {loading: loadingDelete}] = useMutation(DeletePassenger, {
        refetchQueries: [GetPassengers]
    })
    const [addPassenger, {loading: loadingAdd}] = useMutation(AddPassenger, {
        refetchQueries: [GetPassengers]
    })

    const [updatePassengerById,{loading: loadingUpdate}] = useMutation(UpdatePassenger,{
        refetchQueries: [GetPassengers]
    })

    const onGetData = () => {
        getPassengers({
            variables: {
                id: id
            }
        })
    }

    const onChangeId = (e) => {
        if (e.target) {
            setId(e.target.value)
        }
    }

    const hapusPengunjung =  (id) => {
        deletePassenger({
            variables: {id}
        })
    }

    const tambahPengunjung = (newUser) => {
        
        const newPengunjung = {
            id: uuidv4(),
            ...newUser
        }
        addPassenger({
            variables: {
                nama: newPengunjung.nama,
                umur: newPengunjung.umur,
                jenis_kelamin: newPengunjung.jenis_kelamin
            }
            
        })
    }

    const updatePengunjung = (id, updatedData) => {
        updatePassengerById({
            variables: {
                id: id,
                nama: updatedData.nama,
                umur: updatedData.umur,
                jenis_kelamin: updatedData.jenis_kelamin
            }
        })
    }

    return (
        <div>
            <Header />
            {
                loading || loadingAdd || loadingDelete || loadingUpdate ? <h5>Loading...</h5> : <br />
            }    
            <ListPassenger data={data} hapusPengunjung={hapusPengunjung} updatePengunjung={updatePengunjung} />    
            <PassengerInput tambahPengunjung={tambahPengunjung} />
            <input value={id} onChange={onChangeId} />
            <button onClick={onGetData} >Get Data By Id</button>
        </div>
    )

}

export default Home