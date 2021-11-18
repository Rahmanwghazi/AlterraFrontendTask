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