import * as api from '../api/index'
import * as types from './types'


export const fetchPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({
            type: types.FETCH_POSTS,
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({
            type: types.CREATE_POST,
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}