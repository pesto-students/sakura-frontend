import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AppLogo from "../../components/AppLogo";
import Cart from "../../components/Cart";
import Favorite from "../../components/Favorite";
import SearchBar, { SearchResults } from "../../components/SearchBar";
import { useAppDispatch, useAppSelector } from "../../appStore/hooks";
import { getItemFromCart } from "../cart/cart.slice";
import { getItemFromFavorite } from "../favorite/favorite.slice";
import { push } from "connected-react-router";
import "./header.scss";
import { getSearchQuery } from "./header-slice";

export const Header: React.FC = () => {
  const [cartCount, updateCartCount] = useState(0);
  const [favoriteCount, updateFavoriteCount] = useState(0);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const favoriteItems = useAppSelector((state) => state.favorite.favoriteItems);
  const fetchedSearchResults = useAppSelector(
    (state) => state.header.searchResults
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    updateCartCount(cartItems.length);
    updateFavoriteCount(favoriteItems.length);

    // TODO: call api and get items currently present in favorite and cart
    // TODO: useAppSelector to get precise state of products
  }, [cartItems, favoriteItems]);

  useEffect(() => {
    dispatch(getItemFromCart({}));
    dispatch(getItemFromFavorite({}));
    // TODO: call api and get items currently present in favorite and cart
    // TODO: useAppSelector to get precise state of products
  }, []);

  const formatSearchResults = () => {
    const formattedSearchResults: SearchResults[] = [];
    fetchedSearchResults.forEach((res) => {
      res.subCategories.forEach((subCategory) => {
        formattedSearchResults.push({
          title: subCategory.name,
          meta: {
            categoryId: res.id,
            categoryName: res.name,
            subCategoryId: subCategory.id,
          },
        });
      });
    });
    return formattedSearchResults;
  };

  return (
    <div className="header_container">
        <div
          className="header_container_logo"
          onClick={() => {
            dispatch(push(`/`));
          }}
        >
          <AppLogo />
        </div>
        <div className="header-content">
          <SearchBar
            searchCbk={(str: string) => {
              dispatch(getSearchQuery({ matchString: str }));
            }}
            resultClickFn={() => {}}
            searchResults={formatSearchResults()}
          ></SearchBar>
        </div>

        <div id="header-favorite" className="header_container_favorite">
          <Favorite
            favoriteItemCount={favoriteCount}
            favoriteCbk={() => {
              dispatch(push(`/favorite`));
            }}
          />
        </div>

        <div className="header_container_cart">
          {/* Write callback to route to next page upon change */}
          <Cart
            cartItemCount={cartCount}
            cartCbk={() => {
              dispatch(push(`/cart`));
            }}
          />
        </div>
        
    </div>
  );
};
