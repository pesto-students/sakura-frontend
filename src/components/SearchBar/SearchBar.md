```js {"props": {}}
<SearchBar searchResults={[{"title":"Tata Tea","meta":{"id":1,"subCategory":"Beverages"}},
                        {"title":"Wagh Bakri Chai Humesha Rishtey Banaye","meta":{"id": 2,"subCategory":"Beverages"}}]}
        searchCbk = {(query) => { console.log(query) }}
        resultClickFn= {(meta) => { console.log(meta)}}                      
>
</SearchBar>
```