```js
const contentElem = (key, index) => <div key={key}>This is the content {index}</div>;
<ProductSlider scrollByValue={280} content={[1,2,3,4,5,6,7,8,9,10].map((val, ind) => contentElem(val, ind))}></ProductSlider>
```