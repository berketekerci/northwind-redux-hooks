import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router";

function AddOrUpdateProduct({
  products,
  categories,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const { productId } = useParams(); 
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    const selectedProduct = getProductById(products, productId);
    setProduct({ ...selectedProduct });
  }, [productId, products, categories, getCategories]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct(previousProduct => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value
    }));

    validate(name, value);
  }

  function validate(name, value) {
    if (name === "productName" && value === "") {
      setErrors(previousErrors => ({
        ...previousErrors,
        productName: "Product Name Required."
      }));
    } else {
      setErrors(previousErrors => ({
        ...previousErrors,
        productName: ""
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  }

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

export function getProductById(products, productId) {
  let product = products.find(product => product.id == productId) || {};
  return product;
}

function mapStateToProps(state) {
  return {
    products: state.productListReducer,
    categories: state.categoryListReducer
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOrUpdateProduct);
