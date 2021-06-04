import { createMatchSelector, push } from "connected-react-router";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../appStore/hooks";
import Card from "../../components/Card";
import { addItemToCart } from "../cart/cart.slice";
import { addItemToFavorite } from "../favorite/favorite.slice";
import { getProductList } from "./searchList.slice";
import "./searchList.scss";

export const SearchList: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const searchState = useAppSelector((state) => state.searchList);
  const matchSelector = createMatchSelector("/search/:subcategoryId");
  const match: any = useAppSelector((state) => matchSelector(state));
  const subCategoryId = match?.params.subcategoryId;
  const searchList = searchState.productList || [];

  const formattedProductList: any[] = [];
  if (searchList && Array.isArray(searchList)) {
    searchList.forEach((searchItem) => {
      const productClasses = searchItem?.productClasses;
      if (productClasses) {
        productClasses.forEach((productClass: any) => {
          const product = {
            // discountPercentage: 10,
            rating: productClass?.rating,
            brandName: productClass?.brandName,
            productName: productClass?.products[0]?.name,
            productColor: productClass?.products[0]?.color,
            productSize: productClass?.products[0]?.size,
            originalPrice: productClass?.products[0]?.inventory?.retailPrice,
            // discountedPrice: "10$",
            productImage:
              productClass?.products[0]?.productAssets[0]?.publicAsset?.uri,
            productId: productClass?.products[0]?.id,
          };
          formattedProductList.push(product);
        });
      }
    });
  }

  const handleAddToCartClick = (data: any) => {
    let sendData = {
      ...data,
      originalPrice: data.originalPrice.replace("INR ", ""),
      discountedPrice: data.discountedPrice.replace("INR ", ""),
      quantity: 1,
      size: data.productSize,
      color: data.productColor,
    };

    dispatch(addItemToCart(sendData));
  };

  const handleAddToFavoriteClick = (data: any) => {
    let sendData = {
      ...data,
      originalPrice: data.originalPrice.replace("INR ", ""),
      discountedPrice: data.discountedPrice.replace("INR ", ""),
      quantity: 1,
      size: data.productSize,
      color: data.productColor,
    };

    dispatch(addItemToFavorite(sendData));
  };

  useEffect(() => {
    dispatch(getProductList({ subCategoryId: parseInt(subCategoryId) }));
  }, [subCategoryId]);

  return (
    <Row>
      <Col>
        <div className="productDisplay">
          {formattedProductList.map((product, indx) => {
            return (
              <Card
                key={indx}
                productDesc={product}
                handleClick={(productId) => {
                  dispatch(push(`/product/${productId}`));
                }}
                handleAddToCartClick={(productId) => {
                  handleAddToCartClick(product);
                }}
                handleAddToFavoriteClick={(productId) => {
                  handleAddToFavoriteClick(product);
                }}
              />
            );
          })}
        </div>
      </Col>
    </Row>
  );
};

export default SearchList;
