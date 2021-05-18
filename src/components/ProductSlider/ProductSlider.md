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
const contentElem = (key, index) => <div key={key}>This is the content {index}</div>;
<ProductSlider scrollByValue={280} content={[1,2,3,4,5,6,7,8,9,10].map((val, ind) => contentElem(val, ind))}></ProductSlider>
```