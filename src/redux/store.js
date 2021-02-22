// import {  combineReducers} from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer  from './contacts/contacts-reducer'
import { persistStore, persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfigContacts = {
    key: 'items',
    storage,
    blacklist:['filter']
} 

// const rootReducer = combineReducers({
//     contacts: persistReducer(persistConfig,contactsReducer),
// })
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
   reducer: {
    contacts: persistReducer(persistConfigContacts,contactsReducer), 
},
    devtools: process.env.NODE_ENV ==='development',
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
});
const persistor = persistStore(store)

export default {store, persistor};






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

