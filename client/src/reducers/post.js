import * as types from '../actions/types'

const initialState = {
    posts: []
}

const postReducer = (state = initialState, action) => {
    switch(action.types) {
        case types.FETCH_POSTS: 
        return {
            ...state,
            posts: action.payload
        }
        default: 
        return {
            ...state
        }
    }
}

export default postReducer