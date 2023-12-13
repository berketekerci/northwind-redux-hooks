import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

//gelen aksiyona gore onun payload unu state olarak return ediyor
export default function saveProductReducer(state=initialState.savedProduct,action){
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return action.payload
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return action.payload
        default:
            return state
    }
}