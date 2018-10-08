import * as type from '../constants/actions';

const initState = {
  userName: '',
  userMessages: []
}

const appReducer = (state = initState, action) => {
  switch(action.type){
    case type.UpdateUserMessages:
      let updateUserMessagesState = Object.assign({}, state);
      updateUserMessagesState.userName = action.userName;
      updateUserMessagesState.userMessages.push(action.message)
    return updateUserMessagesState;

    default:
      return state;
  }
}

export default appReducer;