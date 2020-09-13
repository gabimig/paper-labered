import React from 'react'
import { render } from '@testing-library/react';
import PaperLabeled from './PaperLabeled'
import '@testing-library/jest-dom'


test('PaperLabeled - Renders without crashing', ()=>{
  const { getByTestId } = render(<PaperLabeled></PaperLabeled>)
  const label = getByTestId('default-label')
  expect(label).toBeInTheDocument()
})
test('PaperLabeled - Test with title', () => {
  const title= 'Proving title' 
  const { getByTestId } = render(<PaperLabeled title={title}></PaperLabeled>)
  const label = getByTestId('default-label')
  expect(label).toBeInTheDocument()
  expect(label).toHaveTextContent(title)
})
test('PaperLabeled - Test with icon', () => {
  const title= 'Proving header title' 
  const titleComponent= <h3 data-testid="header-id">{title}</h3>

  const { getByTestId } = render(<PaperLabeled labelComp={titleComponent}></PaperLabeled>)
  const labelComponent = getByTestId('header-id')
  expect(labelComponent).toBeInTheDocument()
  expect(labelComponent).toHaveTextContent(title)
})
