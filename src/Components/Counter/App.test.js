/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import Recat from 'react'
import Index from './Index'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("if Counter and test text is rendered",() => {
    const component = render(<Index/>)
    const header = component.getByTestId('header')
    expect(header.textContent).toBe('Counter and test')
})

test("counter start with 0 ?", () => {
    const component = render(<Index/>)
    const header = component.getByTestId('counter')
    expect(header.textContent).toBe('0')
})

test("increase button has the right text", () => {
    const component = render(<Index/>)
    const header = component.getByTestId('increase-button')
    expect(header.textContent).toBe('increase')
})

test("decrease button has the right text", () => {
    const component = render(<Index/>)
    const header = component.getByTestId('decrease-button')
    expect(header.textContent).toBe('decrease')
})

test('change input value',() => {
    const component = render(<Index/>)
    const input = component.getByTestId('input')
    fireEvent.change(input,{
        target : {
            value : "7"
        }
    })
    expect(input.value).toBe('7')
})

test('increase counter with increase button',() => {
    const component = render(<Index/>)
    const button = component.getByTestId('increase-button')
    const counter = component.getByTestId('counter')
    fireEvent.click(button)
    expect(counter.textContent).toBe('1')
})

test('decrease counter with decrease button',() => {
    const component = render(<Index/>)
    const button = component.getByTestId('decrease-button')
    const counter = component.getByTestId('counter')
    fireEvent.click(button)
    expect(counter.textContent).toBe('-1')
})

test('input = 5 and click increase button',() => {
    const component = render(<Index/>)
    const input = component.getByTestId('input')
    const counter = component.getByTestId('counter')
    const button = component.getByTestId('increase-button')
    fireEvent.change(input,{
        target : {
            value : "5"
        }
    })
    fireEvent.click(button)
    expect(counter.textContent).toBe('5')
})

test('counter green color',() => {
    const component = render(<Index/>)
    const input = component.getByTestId('input')
    const counter = component.getByTestId('counter')
    const button = component.getByTestId('increase-button')
    fireEvent.change(input,{
        target : {
            value : "100"
        }
    })
    fireEvent.click(button)
    expect(counter.style.color).toBe('green')
})

test('counter red color',() => {
    const component = render(<Index/>)
    const input = component.getByTestId('input')
    const counter = component.getByTestId('counter')
    const button = component.getByTestId('increase-button')
    fireEvent.change(input,{
        target : {
            value : "-100"
        }
    })
    fireEvent.click(button)
    expect(counter.style.color).toBe('red')
})