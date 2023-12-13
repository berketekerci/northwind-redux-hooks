import * as actionTypes from "./actionTypes";

//category ile ilgili islemler
export function changeCategory(category) {
  //reduxun anlayacagi objeye cevirdik
  //payload parametre ile gonderilen kategori
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}
export function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}
export function changeCategoryByDefault(category) {
  return { type: actionTypes.CHANGE_CATEGORY_BY_DEFAULT, payload: category };
}

export function getCategories() {
  return function (dispatch) {
    let url = "http://localhost:3000/categories";
    return fetch(url)
      .then((response) => response.json())
      .then((res) => dispatch(getCategoriesSuccess(res)))
      .then(res => console.log(res));
  };
}
