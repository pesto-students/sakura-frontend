import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from "react-test-renderer"
import Cart from "../Cart"

const server = setupServer(
  rest.get('/search', (req, res, ctx) => {
    return res(ctx.json({}))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Should  call Cart callback on click', async () => {
  
  const { rerender, getByText } = render(<Cart cartSize={40} cartItemLength={10} cartCbk={cartCllback}/>)
  let st = ""

  function cartCllback() {
        st = "cart clicked! go to cart page"
        expect(st).toEqual("cart clicked! go to cart page")
  }

  const cartClick = screen.getByTestId("cart");
  fireEvent.click(cartClick);

})


test('Should render cartItemLegth', async () => {
  
  const cartProps = {cartSize: 50, cartItemLength: 20, cartCbk: function () {}}
  render(<Cart cartSize={cartProps.cartSize} cartItemLength={cartProps.cartItemLength} cartCbk={cartProps.cartCbk}/>)
  const cartElement = screen.getByTestId("cart");
  const cartCounterElement = screen.getByTestId("cart-counter");
  expect(cartElement).toBeInTheDocument()
  expect(cartCounterElement).toHaveTextContent("20")

})

test("matches snapshots", ()=> {
  const cartProps = {cartSize: 50, cartItemLength: 20, cartCbk: function () {}}
  const tree = renderer.create(<Cart cartSize={cartProps.cartSize} cartItemLength={cartProps.cartItemLength} cartCbk={cartProps.cartCbk}/>).toJSON()
  expect(tree).toMatchSnapshot()

})