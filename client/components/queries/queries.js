let addUser = `
  mutation{
    addUser(name: $name, message: $message) {
      userName
      userPass
    }
  }
`

module.exports = {
  addUser
};