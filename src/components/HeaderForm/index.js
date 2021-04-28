import React from 'react';
import { useHistory } from 'react-router-dom';


import { VscChevronLeft } from 'react-icons/vsc';
import Proffy from '../../assets/Proffy.png';

import { Container } from './style';

function HeaderForm() {

  const history = useHistory();

  return (
    <Container>
      <div className='header-btn'>
        <button onClick={() => history.push('/')}>
         <VscChevronLeft className='btn-back'/>
        </button>
        <img src={Proffy} alt=""/>
      </div>
      <div className="header-phrases">
        <h1>Que incrível que você quer dar aulas.</h1>
        <div className="second-phrase">
          <h3>O primeiro passo é preencher esse formulário de inscrição.</h3>
        </div>
      </div>
    </Container>
  );
}

export default HeaderForm;