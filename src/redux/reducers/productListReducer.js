import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

//gelen aksiyona gore onun payload unu state olarak return ediyor
export default function productListReducer(state=initialState.products,action){
    switch (action.type) {
        case actionTypes.GET_PRODUCT_SUCCESS:
            return action.payload

        default:
            return state
    }
}