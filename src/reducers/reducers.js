import {
  GET_IMAGES_BEGIN,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR,
  LIKE_IMAGE,
  FAVOURITE_IMAGE,
  DISLIKE_IMAGE,
  OPEN_MODAL,
  CLOSE_MODAL,
  GET_LIMITIMAGES_BEGIN,
  GET_LIMITIMAGES_ERROR,
  GET_LIMITIMAGES_SUCCESS,
  SORT_IMAGES,
  UPDATE_SORT,
  FILTER_PRODUCTS,
  UPDATE_FILTERS

} from '../actions'


const reducers = (state, action) => {
      if (action.type === GET_IMAGES_BEGIN) {
      return {...state, images_loading:true}
  }
  if (action.type === GET_IMAGES_SUCCESS) {
      return{...state, images_loading:false, images:action.payload}
  }
   if (action.type === GET_IMAGES_ERROR) {
      return{...state, images_loading:false, images_error:true}
  }
if(action.type === LIKE_IMAGE){
    const id = action.payload;
    const newlog = {
        id: id
    }
    return{...state, log: [...state.log, newlog]}
}
if(action.type === FAVOURITE_IMAGE){
    const id = action.payload;
    const newlog = {
        id: id
    }
    return{...state, log: [...state.log, newlog]}
}
if(action.type === DISLIKE_IMAGE){
    const id = action.payload;
    const newlog = {
        id: id
    }
    return{...state, log: [...state.log, newlog]}
}

if (action.type === OPEN_MODAL) {
    return{...state, open_modal: true}
}
if (action.type === CLOSE_MODAL) {
    return{...state, open_modal: false}
}
if (action.type === GET_LIMITIMAGES_BEGIN) {
    return {...state, limit_image_loading: true,
    limit_image_error: false, 
  }
}
  if (action.type === GET_LIMITIMAGES_SUCCESS) {
       return {
    ...state, 
    limit_image_loading: false,
    limit_image: action.payload,
   }
}
 if (action.type === GET_LIMITIMAGES_ERROR) {
    return {
      ...state, 
    single_product_loading: false,
    single_product_error: true, 
  }
}
if (action.type === UPDATE_SORT) {
  return {...state, sort: action.payload}
}
if (action.type === SORT_IMAGES) {
    const {sort,limit_image} = state;
    let tempProducts = [...limit_image]
    if (sort === 'ascending') {
    tempProducts = tempProducts.sort((a,b)=> {
      if (a && a['data-value'] && b && b['data-value']) {
        return a['data-value'].localeCompare(b['data-value']);
      } else if (!a['data-value']) {
        return -1; // Move undefined/null values to the end
      } else {
        return 1; // Move undefined/null values to the end
      }
    });
   }
   if (sort === 'descending') {
      tempProducts = tempProducts.sort((a,b)=> {
     if (a && a['data-value'] && b && b['data-value']) {
        return b['data-value'].localeCompare(a['data-value']);
      } else if (!a['data-value']) {
        return 1; // Move undefined/null values to the end
      } else {
        return -1; // Move undefined/null values to the end
      }
    });
    
   }
  return{...state, limit_image:tempProducts}
}
if (action.type === UPDATE_FILTERS) {
      const {name,value} = action.payload
      return {...state, filters:{...state.filters,[name]:value}}
}
if (action.type === FILTER_PRODUCTS ) {
  const {all_products} = state
  const {text} = state.filters
  let tempProducts = [...all_products]
  if (text) {
    tempProducts = tempProducts.filter((product) => {
      return product.name.toLowerCase().startsWith(text)
    })
  }
     return{...state, filtered_products: tempProducts}
}
 throw new Error(`No Matching "${action.type}" - action type`)

}

export default reducers
