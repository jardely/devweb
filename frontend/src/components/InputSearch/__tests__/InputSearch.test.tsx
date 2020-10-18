import React from 'react';
import { render } from '@testing-library/react';
import InputSearch from '../InputSearch';

test('renders learn react link', () => {
  const { getById } = render(<InputSearch placeholder='Digite aqui' />);

  expect(getById('input-search')).toBeDefined();
});
