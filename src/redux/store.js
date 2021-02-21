// import {  combineReducers} from 'redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer  from './contacts/contacts-reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
} 

const rootReducer = combineReducers({
    contacts: contactsReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
//  const initialState = {}

// const reducer = (state = initialState  , action) => {
//     console.log(action);
//     return state;
// }




// const contactsinitialState = {
//      items:[], 
//      filter:'',
// }

// const itemsReducer = ( state=[], {type, payload}) => {
//      switch (type) {
//          case 'contacts/items':
//              return{
//                  ...state,
//                  state: payload,
//              };
     
//          default:
//              return state;
//      }
// }

// const filterReducer = (state='', action)=> state;



// const contactsReducer = combineReducers({
//     items:itemsReducer,
//     filter: filterReducer,
// })

 const store = configureStore({
     reducer: persistedReducer,
     devtools: process.env.NODE_ENV ==='development',

 });
 const persistor = persistStore(store)

export default {store, persistor};