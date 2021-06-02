```jsx
import productImage from "../../assests/images/productImages/photo-1523275335684-37898b6baf30.jpg";
<Card2 
    productDesc={productDes={ 
        "brandName": "Apple",
        "productName": "watch",
        "productColor": "yellow",
        "productSize":"small",
        "originalPrice": "20$",
        "discountedPrice": "10$",
        "productImage": productImage,
        "productId": "12345",
        "quantity":2
        }}
        showAddtoCartButton={true}
        showAddtoFavoriteButton={true}
        handleAddToDeleteClick={(productId)=>{console.log("clicked on add to cart. "+ "product id:", productId)}}
        handleAddToCartClick={(productId)=>{console.log("clicked on add to cart. "+ "product id:", productId)}}
        handleAddToFavoriteClick={(productId)=>{console.log("clicked on add to favorite. "+ "product id:", productId)}}
        />
```