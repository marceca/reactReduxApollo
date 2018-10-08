const UpdateUserMessages = 'UpdateUserMessages';

const updateUserMessages = (userName, message) => ({type: UpdateUserMessages, userName, message});

module.exports = {
  UpdateUserMessages,
  updateUserMessages
}