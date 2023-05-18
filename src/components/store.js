import { createStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';

import mainRecuder from './main'
const reducers = combineReducers({
    data: mainRecuder,
});

const store = createStore(reducers, {})
export default store;