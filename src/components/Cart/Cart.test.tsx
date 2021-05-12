import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Cart from "./Cart"

const server = setupServer(
  rest.get('/search', (req, res, ctx) => {
    return res(ctx.json({}))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('it emits observables when user clickes on button', async () => {
  
  const { rerender, getByText } = render(<Cart  cartSize={40} cartItemLength={10} cartCbk={CartCllback} />)
  
  function CartCllback(val: Observable<Object>) {
    val.subscribe(v => { 
        rerender(<Cart cartSize={60} cartItemLength={10} cartCbk={CartCllback} />);
        expect(getByText(/asdasdasd/i)).toBeInTheDocument();
      })
    })
  }

  const searchInput = screen.getByTestId("search-bar-input");
  searchInput.focus();
  // fireEvent.keyDown(document.activeElement || document.body);
  fireEvent.change(searchInput, { target: { value: "testText" } });

  const resultsContainer = screen.getByTestId('search-results-container');
  await waitFor(() => screen.getByTestId('search-results-container'));


})