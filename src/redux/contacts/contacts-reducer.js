import {combineReducers} from 'redux';
import  actions from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';


// const contactsinitialState = {
//     items:[], 
//     filter:'',
// }

const itemsReducer = createReducer([], {
    [actions.addItems]:(state, {payload})=>[...state, payload],
    [actions.removeItem]: ( state, {payload}) => state.filter((item)=>item.id !== payload),
})

// const itemsReducer = ( state=[], {type, payload}) => {
//     switch (type) {
//         case types.ADD_ITEMS : 
//             return[...state, payload];
//         case types.REMOVE_ITEM : 
//         return state.filter((item)=>item.id !== payload );

//         default:
//             return state;
//     }
// }

const filterReducer= createReducer('',{
    'contacts/filter_items':(_, {payload})=> payload,
})

// const filterReducer = (state='', {type, payload})=> {
//     switch (type) {
//         case types.FILTER_ITEMS:
//             return payload;
    
//         default:
//             return state;
//     }
// };

export default combineReducers({
    items:itemsReducer,
    filter: filterReducer,
})