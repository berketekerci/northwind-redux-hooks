import React from "react";
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import { bindActionCreators } from "redux";
import alertify from "alertifyjs";
import { Table, Button } from "reactstrap";

const CartDetail = ({ cart, removeFromCart }) => {
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    alertify.error(`${product.productName} sepetten silindi!`, 2);
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <th scope="row">{cartItem.product.id}</th>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => handleRemoveFromCart(cartItem.product)}
                >
                  sil
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
