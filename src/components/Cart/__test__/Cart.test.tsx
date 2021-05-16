import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from "react-test-renderer"
import Cart from "../Cart"

// const server = setupServer(
//   rest.get('/search', (req, res, ctx) => {
//     return res(ctx.json({}))
//   })
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

test('Should  call Cart callback on click', async () => {
  
  render(<Cart size={2} sizeUnit="rem" cartItemCount={10} cartCbk={cartCllback}/>)
  let st = ""

  function cartCllback() {
        st = "cart clicked! go to cart page"
        expect(st).toEqual("cart clicked! go to cart page")
  }

  const cartClick = screen.getByTestId("cart");
  fireEvent.click(cartClick);

})


test('Should render cartItemLegth', async () => {
  
  const cartProps = {size:2, sizeUnit:"rem", cartItemLength: 20, cartCbk: function () {}}
  render(<Cart size={cartProps.size} sizeUnit={cartProps.sizeUnit} cartItemCount={cartProps.cartItemLength} cartCbk={cartProps.cartCbk}/>)
  const cartElement = screen.getByTestId("cart");
  const cartCounterElement = screen.getByTestId("cart-counter");
  expect(cartElement).toBeInTheDocument()
  expect(cartCounterElement).toHaveTextContent("20")

})

test("matches snapshots", ()=> {
  const cartProps = {size:2, sizeUnit:"rem", cartItemLength: 20, cartCbk: function () {}}
  const tree = renderer.create(<Cart size={cartProps.size} sizeUnit={cartProps.sizeUnit}  cartItemCount={cartProps.cartItemLength} cartCbk={cartProps.cartCbk}/>).toJSON()
  expect(tree).toMatchSnapshot()

})