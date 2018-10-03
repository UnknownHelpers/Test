import { createStore, combineReducers, applyMiddleware } from 'redux';
import app from '../containers/App/reducer'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rules from '../components/Business-Administration/Rule-Administration/reducer'
import vdnOverRides from '../components/Business-Administration/VDN-Override/reducers';


export default createStore(combineReducers({
    app, vdnOverRides,rules
}),
{},
    applyMiddleware(thunk) //logger
);