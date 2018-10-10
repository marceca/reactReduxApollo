const UpdateUserMessages = 'UpdateUserMessages';
const GetUser = 'GetUser';

const updateUserMessages = (userName, message) => ({type: UpdateUserMessages, userName, message});
const getUser = (userId) => ({type: GetUser, userId})

module.exports = {
  UpdateUserMessages,
  updateUserMessages,
  GetUser,
  getUser
}