import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './reducers';

const middleware = [thunk]; // Include any middleware you need

const store = createStore(
    userReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
        // other store enhancers if any
    )
);

export default store;
