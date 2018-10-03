import * as types from './ACTION_TYPES';
import _ from 'lodash';

const rules = (state = null, action) => {
    switch (action.type) {
      case types.GET_VDN_OVERRIDES: return _.assign({}, state, {data: action.data, isLoading: action.isLoading});
      case types.SET_GET_VDN_READY: return _.assign({}, state, {isLoading: action.isLoading});
      case types.GET_VDN_IDS: return _.assign({}, state, {vdnIdList: action.vdnIdListArray, reasonsList: action.reasonsList, isLoading: action.isLoading});
      default:
        return state
    }
  }
  
export default rules