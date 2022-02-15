import { createStore } from 'redux';
import reducer from './reducer.js';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';




const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['idCount']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer);

export const persistor = persistStore(store)

export default store;