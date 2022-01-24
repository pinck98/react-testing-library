import Recat from 'react'
import Index from './Index'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("if Counter and test text is rendered",() => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<Index/>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const header = component.getByTestId('header')
    expect(header.textContent).toBe('Counter and test')
})