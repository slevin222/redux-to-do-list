import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {}
}

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.GET_ALL_TODOS:
            console.log('get all todos: ', action.payload);
            //middleware working
            return { ...state, all: action.payload.data.todos };
        default:
            return state;
    }
}


