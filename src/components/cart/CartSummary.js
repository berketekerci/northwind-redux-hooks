import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

const CartSummary = ({ cart, removeFromCart }) => {
  const renderEmpty = () => {
    return (
      <NavItem>
        <NavLink className="align-content-center justify-content-center fw-bold " style={{fontSize:"12px"}}>Empty Cart</NavLink>
      </NavItem>
    );
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    alertify.error(`${product.productName} Removed cart!`, 2);
  };

  const renderSummary = () => {
    return (
      <UncontrolledDropdown nav inNavbar color="secondary" className="bg-primary border-3 rounded">
        <DropdownToggle nav caret className="text-white align-content-center justify-content-center fw-semibold " style={{fontSize:"14px"}}>
          Your Cart
        </DropdownToggle>
        <DropdownMenu right>
          {cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id} className="d-flex justify-content-between gap-3 fw-bold  " style={{fontSize:"13px"}}>
              <Badge
                onClick={() => handleRemoveFromCart(cartItem.product)}
                color="danger"
              >
                X
              </Badge>
              {cartItem.product.productName}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem >
            <Link to={"/cart"}> Go To Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  return <div>{cart.length > 0 ? renderSummary() : renderEmpty()}</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
