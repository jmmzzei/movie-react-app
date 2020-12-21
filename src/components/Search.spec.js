import React from 'react'
import SearchBar from '../components/elements/SearchBar'
import { render, fireEvent } from '@testing-library/react'

test('it should show the inserted text', () => {
  const value = 'The Martian'
  const { getByPlaceholderText } = render(<SearchBar />)
  const searchInput = getByPlaceholderText('Search Movie')
  fireEvent.click(searchInput)
  fireEvent.change(searchInput, { target: { value } })
  expect(searchInput.value).toBe(value)
})
