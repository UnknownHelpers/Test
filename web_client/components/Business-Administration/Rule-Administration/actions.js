import axios from 'axios';
import * as types from './ACTION_TYPES';
export const API_URL = 'https://api.myjson.com/bins/94zmc';
export const API_URL_GET_FILTERS = 'https://api.myjson.com/bins/s4heo';

function getRules() {
    return axios.get(API_URL);
}

function getFitersData() {
    return axios.get(API_URL_GET_FILTERS);
}

 

function getRulesAdmin() {
    let _apiRequest = axios.all([getRules(), getFitersData()]);
    return(dispatch)=>{
        dispatch({type: types.RULES_ADMIN_READY, isLoading: true});
        return _apiRequest.then(axios.spread(function (rules, filters) {
            const rulesList = rules.data;
            const filtersList = filters.data;
           return dispatch({type: types.RULSE_ADMIN_DATA, rulesList, filtersList, isLoading: false});
        })).catch((error)=>{
            dispatch({type: types.RULES_ADMIN_READY, isLoading: false});
            throw new Error(error);
        });
    }
}

export {getRulesAdmin};