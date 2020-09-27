import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import InputSearch from './components/InputSearch/InputSearch'

const Line = () => {
  return (
    <div className='f5 bb mp2 pa2 ' />
  )
}

function App() {
  return (
    <>

      <div style={{ backgroundColor: '#f5f7fc', height: '100%', fontFamily: 'Arial, Helvetica, sans-serif', }}>
        <div className='pa4'>
          <h1 className='flex justify-center'>Ache Aqui</h1>

          <div >
            <InputSearch placeholder='Busque por um comércio' />
            <Line />
            <ul>
              <li>
                <div>
                  <h2>Lanchonete 3</h2>
                  <p>Salgados, doces, tudo.</p>
                  <p>Rua da Paixão, 15, próximo à Viação Progresso. Pedra Lavrada-PB.</p>
                  <p>Telefone: (83) 997846565</p>
                  <span>
                    <Button label='Comentários' variation='primary' disabled={false} />
                    <Button label='Editar' variation='secondary' disabled={false} />
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <h2>Lanchonete 3</h2>
                  <p>Salgados, doces, tudo.</p>
                  <p>Rua da Paixão, 15, próximo à Viação Progresso. Pedra Lavrada-PB.</p>
                  <p>Telefone: (83) 997846565</p>
                  <span>
                    <Button label='Comentários' variation='primary' disabled={false} />
                    <Button label='Editar' variation='secondary' disabled={false} />
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <h2>Lanchonete 3</h2>
                  <p>Salgados, doces, tudo.</p>
                  <p>Rua da Paixão, 15, próximo à Viação Progresso. Pedra Lavrada-PB.</p>
                  <p>Telefone: (83) 997846565</p>
                  <span>
                    <Button label='Comentários' variation='primary' disabled={false} />
                    <Button label='Editar' variation='secondary' disabled={true} />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
