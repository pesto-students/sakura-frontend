```jsx 
import summerSale from "../../assests/images/banner/summerSale.png"
import menSale from "../../assests/images/banner/menSale.jpg"
import saleDay from "../../assests/images/banner/saleDay.jpg"
import womenSaleCloth from "../../assests/images/banner/womenSaleCloth.jpg"
const itemsList = [summerSale, menSale, saleDay, womenSaleCloth]
;<Carousel 
    width ="50rem" 
    height ="20rem" 
    interval={1000} 
    handleClick={(index)=>{console.log("current slide index:", index)}}
    items={itemsList}
    />
```