import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import Apireducer from './reducer/ApiReducer'
import Comidareducer from './reducer/ComidasReducer'

const rootReducer = combineReducers({
    api: Apireducer,
    Comidas:Comidareducer

})


export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}