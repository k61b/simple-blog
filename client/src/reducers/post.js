import * as types from '../actions/types'

const initialState = {
    posts: [],
    currentPost: null
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case types.FETCH_SINGLE_POST:
            return {
                ...state,
                currentPost: action.payload
            }
        case types.CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        default:
            return {
                ...state
            }
    }
}

export default postReducer