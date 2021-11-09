import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

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

export const PengunjungSlice = createSlice({
    name: "pengunjung",
    initialState: {
        pengunjung: initValue
    },
    reducers: {
        hapusPengunjung: (state, action) => {
            state.pengunjung = state.pengunjung.filter(item => {
                return item.id !== action.payload
            })
        },
        tambahPengunjung: (state, action) => {
            const newPengunjung = {
                id: uuidv4(),
                ...action.payload
            }
            state.pengunjung = [...state.pengunjung, newPengunjung]
        }
    }
})

export const {
    hapusPengunjung,
    tambahPengunjung
} = PengunjungSlice.actions
export default PengunjungSlice.reducer