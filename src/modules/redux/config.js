import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

/**
 * REDUCER
 */
import loading from './stores/loading/reducer';

const reducer = combineReducers({
  loading
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

/**
 * PERSISTOR
 */

const persistConfig = {
  key: 'root',
  storage
};

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const persistor = persistStore(persistedReducer);

/**
 * ACTION
 */
export * from './stores/loading/action';
