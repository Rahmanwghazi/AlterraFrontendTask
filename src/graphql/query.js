import { gql } from '@apollo/client'

export const GetPassengers = gql`
query MyQuery {
    passenger(order_by: {id: asc}) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`

export const GetPassengerById = gql`
query MyQuery($id: Int!) {
    passenger(where: {id: {_eq: $id}}) {
      jenis_kelamin
      nama
      umur
    }
  }
`

export const AddPassenger = gql`
mutation MyMutation($nama: String!, $umur: Int!, $jenis_kelamin: String!) {
    insert_passenger(objects: {nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin}) {
      affected_rows
    }
  }
`

export const DeletePassenger = gql`
mutation MyMutation($id: Int!) {
    delete_passenger(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
  
`

export const UpdatePassenger = gql`
mutation MyMutation($jenis_kelamin: String, $nama: String, $umur: Int, $id: Int) {
    update_passenger(where: {id: {_eq: $id}}, _set: {jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur}) {
      affected_rows
    }
  }  
`