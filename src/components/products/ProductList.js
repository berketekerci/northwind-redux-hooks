import { connect } from "react-redux";
import { Badge, Button, Table } from "reactstrap";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import alertify from "alertifyjs";
import {Link} from "react-router-dom"

const ProductList = (props) => {
  const addToCart = (product) => {
    props.addToCart({ quantity: 1, product });
    alertify.success(product.productName + " added to cart");
  };
  useEffect(() => {
    props.getProducts();
  }, []);
  return (
    <div>
      <h3>
        <Badge color="warning">Product List </Badge>{" "}
        <Badge color="success">{props.currentCategory.categoryName}</Badge>
      </h3>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Units In Stock</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td><Link to={"/saveproduct/"+product.id}>{product.productName}</Link></td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
              <td>
                <Button onClick={() => addToCart(product)} color="primary">
                  Add
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: bindActionCreators(productActions.getProducts, dispatch),
    addToCart: bindActionCreators(cartActions.addToCart, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
