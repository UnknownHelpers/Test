import { REQUEST_USER_DATA, RECEIVE_USER_DATA } from './action';
const initPostState = {
    users: [],
    fetching: false,
    fetched: false,
    error: ''
}
const app = (state = initPostState, action) => {
    switch(action.type) {
        case REQUEST_USER_DATA: 
            state = Object.assign({}, state, {
                fetched: false,
                fetching: true
            })
             
            break;
        case RECEIVE_USER_DATA: 
            state = Object.assign({}, state, {
                fetched: false,
                fetching: true,
                users: action.payload,
            })
            break;
    }
    return state;
}
export default app;