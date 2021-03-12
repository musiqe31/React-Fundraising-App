import { createStore } from 'redux'
import stores from '../reducers/'

const store = createStore(stores)

export default store;