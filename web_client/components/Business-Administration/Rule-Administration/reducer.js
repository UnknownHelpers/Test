import * as types from './ACTION_TYPES';
import _ from 'lodash';

const rules = (state = null, action) => {
    switch (action.type) {
      case types.RULSE_ADMIN_DATA: return _.assign({}, state, {rulesList: action.rulesList, filtersList: action.filtersList, isLoading: action.isLoading});
      case types.RULES_ADMIN_READY: return _.assign({}, state, {isLoading: action.isLoading});
      default:
        return state
    }
  }
  
export default rules