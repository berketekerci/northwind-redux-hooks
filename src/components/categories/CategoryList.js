import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";

const CategoryList = (props) => {
  useEffect(() => {
    props.getCategories();
  }, []);

  const selectCategory = (category) => {
    if (category) {
      props.changeCategory(category);
      props.getProducts(category.id);
    } else {
      props.changeCategoryByDefault();
      props.getProducts();
    }
  };

  return (
    <div>
      <h3>
        <Badge color="secondary">Category List</Badge>
      </h3>
      <ListGroup>
        <ListGroupItem
          onClick={() => selectCategory()}
          active={props.currentCategory.categoryId === 0 ? true : false}
        >
          Default Category
        </ListGroupItem>
        {props.categories.map((category) => (
          <ListGroupItem
            active={category.id === props.currentCategory.id ? true : false}
            onClick={() => selectCategory(category)}
            key={category.id}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
    changeCategory: bindActionCreators(
      categoryActions.changeCategory,
      dispatch
    ),
    changeCategoryByDefault: bindActionCreators(
      categoryActions.changeCategoryByDefault,
      dispatch
    ),
    getProducts: bindActionCreators(productActions.getProducts, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
