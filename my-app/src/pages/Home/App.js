import React from 'react';
import {SingUp} from '../../components/singUp'
import { Container } from 'react-bootstrap'


function App() {
  return (
    <Container
      className='d-flex align-itens-center justify-content-center'
      style={{minHeight: "100vh"}}
    >
      <div className='w-100' style={{ maxWidth: '400px'}}>
        <SingUp/>
      </div>
    </Container>
  );
}

export default App;
