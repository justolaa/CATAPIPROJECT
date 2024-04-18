import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/reducers'
import { url } from '../utils/constants'
import {
  GET_IMAGES_BEGIN,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR,
  LIKE_IMAGE,
  FAVOURITE_IMAGE,
  DISLIKE_IMAGE,
  OPEN_MODAL,
  CLOSE_MODAL,
  GET_LIMITIMAGES_SUCCESS,
  GET_LIMITIMAGES_ERROR,
  GET_LIMITIMAGES_BEGIN,
  SORT_IMAGES,
  UPDATE_SORT,
  UPDATE_FILTERS,
  FILTER_PRODUCTS
} from '../actions'

const initialState = {
  sort: 'ascending',
  images_loading:false,
  images_error:false,
  open_modal: false,
  images:[],
  log:[],
  limit_image_loading: false,
  limit_image_error: false,
  limit_image: [],
  all_products: [], 
  filters: {
    text: ''
  }

}

const ImagesContext = React.createContext()

export const ImagesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {limit_image} = state;

const updateFilters = (e) =>{
      let name =  e.target.name
      let value = e.target.value
      dispatch({type:UPDATE_FILTERS, payload:{name,value}})
      dispatch({type:FILTER_PRODUCTS})
  }

  const updateSort = (value) =>{
    dispatch({type: SORT_IMAGES, payload: limit_image})
    dispatch({type: UPDATE_SORT, payload:value})
    console.log(value);
  }
  
const openmodal = () =>{
    dispatch({type: OPEN_MODAL})
}

const closemodal = () =>{
    dispatch({type: CLOSE_MODAL})
}
 

  const fetchImages = async ()=>{
    dispatch({type: GET_IMAGES_BEGIN})
    try {
      const response = await axios.get(url)
      const images = response.data
      dispatch({type:GET_IMAGES_SUCCESS, payload: images})
    } catch (error) {
       dispatch({type:GET_IMAGES_ERROR})
    }
    
  }
   const LimitImages = async (url)=>{
    dispatch({type: GET_LIMITIMAGES_BEGIN})
    try {
      const response = await axios.get(url)
      const limitimages = response.data
      dispatch({type:GET_LIMITIMAGES_SUCCESS, payload: limitimages})
    } catch (error) {
       dispatch({type:GET_LIMITIMAGES_ERROR})
    }
    
  }

   const Like = (id)=>{
      dispatch({type: LIKE_IMAGE, payload: id})
     }
     const Favourite = (id)=>{
      dispatch({type: FAVOURITE_IMAGE, payload:id})
     }
     const Dislike = (id)=>{
      dispatch({type: DISLIKE_IMAGE, payload:id})
     }
     

  useEffect(()=>{
     fetchImages(url);
  },[])

  return (
    <ImagesContext.Provider value={{...state, fetchImages, Like, Favourite, Dislike, openmodal, closemodal, LimitImages,updateSort,updateFilters}}>
      {children}
    </ImagesContext.Provider>
  )
}
// make sure use
export const useImagesContext = () => {
  return useContext(ImagesContext)
}
