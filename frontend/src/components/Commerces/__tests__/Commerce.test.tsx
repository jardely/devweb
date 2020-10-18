import React from 'react';
import { render } from '@testing-library/react';
import Commerce from '../Commerce'

const commerce = {
  categoria: 'Lanchonete',
  descricao: 'Muito bom',
  endereco: 'Rua dos bobos, numero 0',
  nome: 'Lanchonete fofinha',
  telefone: '987654823'
}

describe('Commerce test', () => {

  it('should render commerce', async () => {
    const { getByTestId, getByText } = render(<Commerce commerce={commerce} />);

    expect(getByText('Lanchonete fofinha')).not.toBeNull();
    expect(getByTestId('commerce')).not.toBeNull();
  });

})