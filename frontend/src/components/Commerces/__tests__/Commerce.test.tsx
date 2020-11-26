import React from 'react';
import { render } from '@testing-library/react';
import Commerce from '../Commerce'

const commerce = {
  id: 1,
  category: 'Lanchonete',
  description: 'Muito bom',
  address: 'Rua dos bobos, numero 0',
  name: 'Lanchonete fofinha',
  phone: '987654823',
  comments: ['top', 'perfeita']
}

describe('Commerce test', () => {

  it('should render commerce', async () => {
    const { getByTestId, getByText } = render(<Commerce commerce={commerce} />);

    expect(getByText('Lanchonete fofinha')).not.toBeNull();
    expect(getByTestId('commerce')).not.toBeNull();
  });

})