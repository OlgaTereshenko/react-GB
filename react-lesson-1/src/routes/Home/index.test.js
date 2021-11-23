import React from 'react'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react';
import {HelloChat, HelloChatTextIDs} from "./index";

describe('HelloChat', () => {
  it('корректный заголовок', () => {

    const component = render(<HelloChat/>)
    expect(component.queryByTestId(HelloChatTextIDs.title)).toHaveTextContent('Добро пожаловать в наш чат!')
  })
})