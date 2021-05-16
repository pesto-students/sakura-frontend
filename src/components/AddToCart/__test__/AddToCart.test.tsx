import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from "react-test-renderer"
import AddToCart from "../AddToCart"

afterEach(cleanup)

test('Should call addToCart callback on click', async () => {
  
  render(<AddToCart size={2} sizeUnit="rem" addToCartCbk={addToCartCbk}/>)
  let st = ""
  function addToCartCbk() {
        st = "add to cart clicked add this item to cart"
        expect(st).toEqual("add to cart clicked add this item to cart")
  }

  const addToCartClick = screen.getByTestId("addToCart");
  fireEvent.click(addToCartClick);

})


test("matches snapshots", ()=> {
  const tree = renderer.create(<AddToCart size={2} sizeUnit="rem" addToCartCbk={()=>console.log()}/>).toJSON()
  expect(tree).toMatchSnapshot()

})