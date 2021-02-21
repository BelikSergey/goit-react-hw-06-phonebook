// функции изменения состояния  
// import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';

const addItems = createAction('contacts/add_item')


// const addItems = item =>({
//     type: types.ADD_ITEMS,
//     payload: item,
// })

const removeItem = createAction('contacts/remove_item')
 
// const removeItem = itemId=>({
//     type: types.REMOVE_ITEM,
//     payload: itemId,
// })

const filterItems = createAction('contacts/filter_items')

// const filterItems = value =>({
//     type: types.FILTER_ITEMS,
//     payload:value,
// })




 export default { addItems, removeItem, filterItems }; 