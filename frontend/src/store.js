import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk'
import { productListReucer } from './reducers/productReducers';

const intialState={};

const reducer=combineReducers({
    productList:productListReucer,
});

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(
    reducer,
    intialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;