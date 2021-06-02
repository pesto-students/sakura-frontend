```js
const arrayItems = ["red", "green", "black"];
;<Dropdown  
            handleChange={(value)=>console.log("dropdown value"+value)} 
            initialValue="yellow" 
            possibleValues={arrayItems}/>
```