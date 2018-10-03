export const REQUEST_USER_DATA = 'REQUEST_USER_DATA';
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';
import axios from 'axios';
export const getUsersInfo = () => {
    return (dispatch) => {
        dispatch({
            type: REQUEST_USER_DATA,
            payload: true
        })
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.data;
            })
            .then(users => {
                dispatch({
                    type: RECEIVE_USER_DATA,
                    payload: users
                })
            })
            .catch(function (error) {
                dispatch({
                    type: RECEIVE_USER_DATA,
                    payload: error
                })
            });
    }
}