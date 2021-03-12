import { combineReducers } from 'redux'
import data from './data'

const apples = combineReducers({
    data: data
})

export default apples;