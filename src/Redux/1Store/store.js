import { legacy_createStore as createStore } from 'redux'


import { allReducers } from '../3Reducer';

let store = createStore(allReducers, window.REDUX_DEVTOOL_EXTENSION__ && window.REDUX_DEVTOOL_EXTENSION__())

export default store