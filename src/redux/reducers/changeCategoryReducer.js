import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

//gelen aksiyona gore onun payload unu state olarak return ediyor
export default function changeCategoryReducer(state=initialState.currentCategory,action){
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload
        case actionTypes.CHANGE_CATEGORY_BY_DEFAULT:
            state=initialState.currentCategory
            return state

        default:
            return state
    }
}