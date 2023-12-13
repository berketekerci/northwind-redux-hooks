import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

//gelen aksiyona gore onun payload unu state olarak return ediyor
export default function categoryListReducer(state=initialState.categories,action){
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload

        default:
            return state
    }
}