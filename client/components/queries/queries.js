import gql from 'graphql-tag';


let addUser = gql`
  mutation addUser($name: String!){
    addUser(name: $name, password: "mikePass") {
      userName
      userPass
    }
  }
`

let getMike = gql`
  {
    user(id: "5bbcd752aa6e7b3a408d2d41") {
      userName
    }
  }
`

let getUser = gql`
  query($id: ID!){
    user(id: $id) {
      userName
    }
  }
`
let getAllUsers = gql`
  {
    getUsers {
      userName
    }
  }
`

let getAllUsersWaspFetch = `
{
  getUsers {
    userName
  }
}
`
export {
  addUser,
  getUser,
  getAllUsers,
  getAllUsersWaspFetch
}