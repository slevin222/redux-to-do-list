import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';

export function getAllTodos() {
    const request = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: types.GET_ALL_TODOS,
        payload: request
    };

}

export function addItem(item) {
    const request = axios.post(`${BASE_URL}/todos${API_KEY}`, item);
    return {
        type: types.ADD_ITEM,
        payload: request

    };
}