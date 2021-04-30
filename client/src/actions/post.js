import * as api from '../api/index'
import * as types from './types'

export const fetchPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    dispatch({
      type: types.FETCH_POSTS,
      payload: data,
    })
  } catch (err) {
    console.log(err)
  }
}

export const fetchSinglePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSinglePost(id)
    dispatch({
      type: types.FETCH_SINGLE_POST,
      payload: data,
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
      payload: data,
    })
  } catch (err) {
    console.log(err)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post)
    dispatch({
      type: types.UPDATE_POST,
      payload: data,
    })
  } catch (err) {
    console.log(err)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id)
    dispatch({
      type: types.DELETE_POST,
      payload: data._id,
    })
  } catch (err) {
    console.log(err)
  }
}
