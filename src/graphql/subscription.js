import { gql } from '@apollo/client'

export const GetPassengersSub = gql`
subscription MySubscription {
    passenger(order_by: {id: asc}) {
      id
      nama
      umur
      jenis_kelamin
    }
  }
`