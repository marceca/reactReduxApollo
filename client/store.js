import { createStore } from 'redux';
import reducers from './components/reducers/index';


const store = createStore(
  reducers
)

export default store;