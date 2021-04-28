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
          <button className="btn-study">
            <img 
              src={Estudar} 
              alt="Estudar"
              onClick={() => history.push('/list')}
            />
          </button>
          <button className="btn-classes">
            <img 
              src={DarAulas} 
              alt="Dar Aulas" 
              onClick={() => history.push('/form')}
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

