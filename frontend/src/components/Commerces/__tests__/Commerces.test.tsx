import React from 'react';
import { render } from '@testing-library/react';
import Commerces from '../Commerces'

const mockCommerces = [{
  categoria: 'Lanchonete',
  descricao: 'Muito bom',
  endereco: 'Rua dos bobos, numero 0',
  nome: 'Lanchonete fofinha 1',
  telefone: '987654823'
}, {
  categoria: 'Lanchonete',
  descricao: 'Muito bom',
  endereco: 'Rua dos bobos, numero 0',
  nome: 'Lanchonete fofinha 2',
  telefone: '987654823'
}]

const mockEmptyCommerces = undefined

describe('Commerces test', () => {

  it('should render Commerces', async () => {
    const { getByTestId, getByText, queryByTestId } = render(<Commerces commerces={mockCommerces} />);

    expect(getByText('Lanchonete fofinha 1')).not.toBeNull();
    expect(getByTestId('commerces')).not.toBeNull();
    expect(queryByTestId('empty-state')).toBeNull();
  });

  it('should render empty state', async () => {
    const { getByTestId, getByText, queryByTestId } = render(<Commerces commerces={mockEmptyCommerces} />);

    expect(queryByTestId('commerces')).toBeNull();
    expect(getByTestId('empty-state')).not.toBeNull();
  });
})