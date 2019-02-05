import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// Session Storage is used to persist Store in Redux

function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState)
    }
    catch(e){
        console.log(e);
    }
}

function loadFromLocalSotrage (){
    try{
        const serializedState = sessionStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }
    catch(e){
        console.log(e);
    }
}


const persistedState = loadFromLocalSotrage();

const store = createStore(
    rootReducer, persistedState,
applyMiddleware(thunk)
);

store.subscribe(() => {saveToLocalStorage(store.getState())});

export default store;