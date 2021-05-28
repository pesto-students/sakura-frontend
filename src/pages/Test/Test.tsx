import React from 'react'
// import QuantityInput from "../../components/QuantityInput"
import Dropdown from "../../components/Dropdown"


const Test = () => {

    const dummy  = () => {}
    const arrayItems = ["red", "green", "black"]
    return (
        
        <div>
            {/* <QuantityInput handleChange={(value)=>console.log("quantity value:"+value)}/> */}
            <Dropdown  
            handleChange={(value)=>console.log("dropdown value"+value)} 
            initialValue="yellow" 
            possibleValues={arrayItems}/>
        </div>
    )
}

export default Test
