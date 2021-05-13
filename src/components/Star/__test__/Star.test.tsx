import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen, cleanup, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from "react-test-renderer"
import Star from "../Star"


afterEach(cleanup);


test('Should render filled star', async () => {
    const starProps = {size: 1, sizeUnit: "rem", isFilled: true} 
    render(<Star size={starProps.size} sizeUnit={starProps.sizeUnit} isFilled={starProps.isFilled}/>)
    const starElement = screen.getByTestId("star");
    const filledStarElement = screen.getByTestId("filled-star")
    //  const container = document.querySelector('#empty-star')
    expect(starElement).toBeInTheDocument()
    // expect(container).not.toBeInTheDocument()
    expect(starElement).toContainElement(filledStarElement)

})


test('Should not render empty star', async () => {
    const starProps = {size: 1, sizeUnit: "rem", isFilled: false} 
    render(<Star size={starProps.size} sizeUnit={starProps.sizeUnit} isFilled={starProps.isFilled}/>)
    const starElement = screen.getByTestId("star");
    const emptyStarElement = screen.getByTestId("empty-star")
    //  const container = document.querySelector('#empty-star')
    expect(starElement).toBeInTheDocument()
    // expect(container).not.toBeInTheDocument()
    expect(starElement).toContainElement(emptyStarElement)

})

test("matches snapshots", ()=> {
  const starProps = {size: 1, sizeUnit: "rem", isFilled: false} 
  const tree = renderer.create(<Star size={starProps.size} sizeUnit={starProps.sizeUnit} isFilled={starProps.isFilled}/>).toJSON()
  expect(tree).toMatchSnapshot()

})