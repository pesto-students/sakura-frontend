import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from "react-test-renderer"
import Favorite from '../Favorite'

// const server = setupServer(
//   rest.get('/search', (req, res, ctx) => {
//     return res(ctx.json({}))
//   })
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

test('Should  call Cart callback on click', async () => {
  
  render(<Favorite size={2} sizeUnit="rem" favoriteItemCount={10} favoriteCbk={favoriteCallCbk}/>)
  let st = ""

  function favoriteCallCbk() {
        st = "favorite clicked! go to cart page"
        expect(st).toEqual("favorite clicked! go to cart page")
  }

  const favoriteClick = screen.getByTestId("favorite");
  fireEvent.click(favoriteClick);

})


test('Should render cartItemLegth', async () => {
  
  const favoriteProps = {favoriteSize: 50, favoriteItemLength: 20, favoriteCbk: function () {}}
  render(<Favorite size={2} sizeUnit="rem" favoriteItemCount={favoriteProps.favoriteItemLength} favoriteCbk={favoriteProps.favoriteCbk}/>)
  const favElement = screen.getByTestId("favorite");
  expect(favElement).toBeInTheDocument()
  expect(favElement).toHaveTextContent("20")

})

test("matches snapshots", ()=> {
  const favoriteProps = {favoriteSize: 50, favoriteItemLength: 20, favoriteCbk: function () {}}
  const tree = renderer.create(<Favorite size={2} sizeUnit="rem" favoriteItemCount={favoriteProps.favoriteItemLength} favoriteCbk={favoriteProps.favoriteCbk}/>).toJSON()
  expect(tree).toMatchSnapshot()
})