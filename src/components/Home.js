import {v4 as uuidv4} from 'uuid'
import { Component  } from "react";
import ListPengunjung from './ListPengunjung';
import PengunjungInput from './PengunjungInput';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                {
                    id: uuidv4(),
                    nama: 'Wafiq',
                    umur: 20,
                    jenisKelamin: 'Pria'
                }
            ]
        }
    }

    hapusPengunjung = (id) => {
        const newListPengunjung = this.state.data.filter((item)=> item.id !==  id)

        this.setState({data:newListPengunjung})
    }

    tambahPengunjung = (newUser) => {
        const newPengunjung = {id: uuidv4(), ...newUser}

        this.setState({data: {...this.state.data, newPengunjung}})
    }

    render(){
        return (
            <div>
                <ListPengunjung data={this.state.data} hapusPengunjung={this.hapusPengunjung} />
                <PengunjungInput />
            </div>
        )
    }
}

export default Home