import React from 'react';
import { useHistory } from 'react-router-dom';

import Estudar from '../../assets/Estudar.png'; 
import DarAulas from '../../assets/DarAulas.png'; 
import TotalConexoes from '../../assets/TotalConexoes.png';

import { Container } from './style';

function Buttons() {

  const history = useHistory();

  return (
    <Container>
      <div className="footer">
        <div className="buttons">
          <button 
            className="btn-study" 
            data-testid="study"
            onClick={() => history.push('/list')}
          >
            <img 
              src={Estudar} 
              alt="Estudar"
              
            />
          </button>
          <button 
            className="btn-classes"
            onClick={() => history.push('/form')} 
          >
            <img 
              src={DarAulas} 
              alt="Dar Aulas" 
            />
          </button>
        </div>
        <div className="layer">
          <img className="img-conections" src={TotalConexoes} alt=""/>
        </div>
      </div>
    </Container>
  );
}

export default Buttons;

