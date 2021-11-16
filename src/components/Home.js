import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import ListPassenger from './ListPassenger';
import PassengerInput from './PassengerInput';
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import Header from './Header';

const getPassengers = gql`
query MyQuery {
    passenger {
      jenis_kelamin
      nama
      umur
    }
  } 
`

const getPassengerById = gql`
query MyQuery($id: Int) {
    passenger(where: {id: {_eq: $id}}) {
      jenis_kelamin
      nama
      umur
    }
  }
`

function Home() {
    const [value, setValue] = useState([])
    // const { loading, error, data } = useQuery(getPassengers);
    const [getPassengers, { data, loading, error }] = useLazyQuery(getPassengerById)
    const [id, setId] = useState(0);

    if (loading) {
        return (
            <h5>Loading..</h5>
        )
    }

    if (error) {
        console.log(error)
    }

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

    const hapusPengunjung = (id) => {
        setValue((oldData) => oldData.filter(item => {
            return item.id !== id
        }))
    }

    const tambahPengunjung = (newUser) => {
        const newPengunjung = {
            id: uuidv4(),
            ...newUser
        }
        setValue((oldData) => [...oldData, newPengunjung])
    }

    console.log("ni eh", data)
    return (
        <div>
            <Header />
            <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />
            <PassengerInput tambahPengunjung={tambahPengunjung} />
            <input value={id} onChange={onChangeId} />
            <button onClick={onGetData} >Get Data By Id</button>
        </div>
    )

}

export default Home