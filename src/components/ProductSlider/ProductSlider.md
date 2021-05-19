 The slider can be used to exhibit any kind of component through sliders.
 The slider has navigation buttons along with horizontal bottom scroll.

| Prop name                        | Type           | Default             |  Description                       |
|----------------------------------|----------------|---------------------|------------------------------------|
| sliderColor                      | string         | "#6B206A"           |  Overall theme of the slider,      |
|                                  |                |                     |  including buttons, scroll gets    |
|                                  |                |                     |  color through this property.      |         
| sliderHeight                     | string         | "10rem"             |  Height of the slider              |                    
| scrollByValue                    | number         | 120                 |  Value by which the scroller       |
|                                  |                |                     |  should be incremented on click.   |
| content                          | any[]          | []                  |  Content that should be rendered   |
|                                  |                |                     |  inside of the slider.             |

```js
import productImage from "../../assests/images/productImages/photo-1523275335684-37898b6baf30.jpg"
import Card from "../Card"
;
const contentElem = (key, index) => <div key={key}><Card 
    productDesc={productDes={  
        "discountPercentage": 10,
        "rating": 3,
        "brandName": "Apple",
        "productName": "watch",
        "productColor": "yellow",
        "productSize":"small",
        "originalPrice": "20$",
        "discountedPrice": "10$",
        "productImage": productImage,
        "productId": "12345",
        }}
        handleClick={(productId)=>{console.log("clicked on product card. "+"product id:", productId)}}
        handleAddToCartClick={(productId)=>{console.log("clicked on add to cart. "+ "product id:", productId)}}
        handleAddToFavoriteClick={(productId)=>{console.log("clicked on add to favorite. "+ "product id:", productId)}}
        /></div>;
<ProductSlider 
    sliderHeight="26rem" 
    scrollByValue={280} 
    content={[1,2,3,4,5,6,7,8,9,10].map((val, ind) => contentElem(val, ind))}></ProductSlider>
```