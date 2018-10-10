import * as type from '../constants/actions';
import * as queries from '../queries/queries';

// Wasp
import WaspQuery from '../../WaspReduxApolloLink/WaspReduxApolloQuery';

const initState = {
  userName: '',
  userMessages: []
}

const appReducer = (state = initState, action) => {
  switch(action.type){
    case type.UpdateUserMessages:
      let updateUserMessagesState = Object.assign({}, state);
      updateUserMessagesState.userName = action.userName;
      updateUserMessagesState.userMessages.push(action.message);
      console.log('state', updateUserMessagesState)
    return updateUserMessagesState;

    case type.GetUser:
      let getUserState = Object.assign({}, state);
      console.log(action)


    return getUserState;

    default:
      return state;
  }
}

export default appReducer;