import React from "react";
import { Cart3 } from "react-bootstrap-icons";
import "./Cart.scss";

/**
 * This component tells how many items are there in user cart
 */
export default class Cart extends React.Component<CartProps> {
  constructor(props: CartProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { size = 2, sizeUnit = "rem", cartItemCount: cartItemLength = 0 } = this.props;
    let iconSize: string = String(size * 1.3) + sizeUnit;
    let counterSize: string = String(size) + sizeUnit;

    return (
      <div
        className="primary_cart"
        data-testid="cart"
        onClick={(e) => this.props.cartCbk()}
      >
        <Cart3
          className="primary_cart_icon"
          style={{ width: iconSize, height: iconSize }}
        />
        <div
          className="primary_cart_counter"
          data-testid="cart-counter"
          style={{
            width: counterSize,
            height: counterSize,
            lineHeight: counterSize,
          }}
        >
          {cartItemLength}
        </div>
      </div>
    );
  }
}

export type CartProps = {
  /**
   * Size defines the size of component on different screen.
   */
  size?: number;
  /**
   * Define unit of size
   */
  sizeUnit?: String;
  /**
   * Cart item length tells the number of item in user favorite.
   */
  cartItemCount: number;
  /**
   * Cart callback to be called on click
   */
  cartCbk: () => void;
};
