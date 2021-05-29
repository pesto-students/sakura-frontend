import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../appStore/hooks";
import Carousel from "../../components/Carousel";
import NamedSeparator from "../../components/NamedSeparator";
import Header from "../header";
import { getExclusivePromo, getProductHotDeals } from "./home.slice";

import "./home.scss";
import ProductSlider from "../../components/ProductSlider";
import Card from "../../components/Card";
import { ErrorBoundary } from "../../components/ErrorBoundary/ErrorBoundary";

export const Home = () => {
  const dispatch = useAppDispatch();
  const exclusiveEvents = useAppSelector((state) => state.home.exclusiveEvents);
  const hotProductDeals = useAppSelector((state) => state.home.hotProductDeals);

  const carousalImages = exclusiveEvents.map(
    (event: any) => event["carouselImage"]["uri"]
  );

  let topDealsCard = hotProductDeals
    .map((deal: any) => {
      if (!deal.eventCollection) return null;
      const products = deal.eventCollection.map((collection: any) => {
        const product = collection.product;
        const discount = collection.discount;
        const inventory = product.inventory;
        const productClass = product.productClass;
        const reatilPrice = inventory.retailPrice;
        const discountedPrice =
          reatilPrice - Math.round(reatilPrice * 0.01 * discount.discountRate);
        const productAsset = product.productAssets[0];
        return {
          productName: product.name,
          productColor: product.color,
          productSize: product.size,
          originalPrice: `INR ${inventory.retailPrice}`,
          discountedPrice: `INR ${discountedPrice}`,
          rating: parseInt(productClass.rating),
          productId: product.id,
          discountPercentage: parseInt(discount.discountRate),
          brandName: productClass.brandName,
          productImage: productAsset.publicAsset.uri,
        };
      });
      return {
        name: deal.name,
        products,
      };
    })
    .filter((val: any) => val !== null);

  useEffect(() => {
    dispatch(getExclusivePromo({}));
    dispatch(getProductHotDeals({}));
  }, []);

  return (
    <div>
      <Header />
      <Row>
        {/* <Col md={0}></Col> */}
        <Col>
          <div className="home-carousal">
            <ErrorBoundary>
              <Carousel
                width="100%"
                height="50vh"
                interval={2000}
                handleClick={(index) => {
                  console.log("current slide index:", index);
                }}
                items={carousalImages}
              />
            </ErrorBoundary>
          </div>
        </Col>
        {/* <Col md={0}></Col> */}
      </Row>
      <Row>
        <Col>
          <div>
            {topDealsCard.map((deal: any, indx: number) => {
              return (
                <div className="home-product-deal" key={indx}>
                  <div className="home-deal-header">
                    <NamedSeparator title={deal.name} />
                  </div>
                  {/* <ErrorBoundary> */}
                  <ProductSlider
                    sliderHeight="30rem"
                    content={deal.products.map(
                      (product: any, dealIndx: number) => (
                        <div key={`${dealIndx}-card`}>
                          <ErrorBoundary>
                            <Card
                              productDesc={product}
                              handleClick={(productId) => {
                                console.log(
                                  "clicked on product card. " + "product id:",
                                  productId
                                );
                              }}
                              handleAddToCartClick={(productId) => {
                                console.log(
                                  "clicked on add to cart. " + "product id:",
                                  productId
                                );
                              }}
                              handleAddToFavoriteClick={(productId) => {
                                console.log(
                                  "clicked on add to favorite. " +
                                    "product id:",
                                  productId
                                );
                              }}
                            />
                          </ErrorBoundary>
                        </div>
                      )
                    )}
                  />
                  {/* </ErrorBoundary> */}
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
};
