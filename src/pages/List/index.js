import React, { useState, useEffect } from 'react';
import HeaderForm from '../../components/HeaderForm';
import { api } from '../../services/api';

import Profile from '../../assets/Profile.png';

import { VscCallOutgoing } from 'react-icons/vsc';
import { Container, Panel } from './style';

function List() {
  const title = 'Estes são os proffys disponíveis.'; 
  const [proffys, setProffys] = useState([]);

  useEffect(() => {
    async function getData() { 
      const { data } = await api.get('/proffys');
      setProffys(data);
    }
    getData();
  }, []);

  return (
    <>
      <HeaderForm title={title} />
      <Container>
        {
          proffys.map(prof => (
            <Panel key={prof.id}>
            <div className="profile">
              <div className='proffy-details'>
                <img src={Profile} alt=""/>
                <div className='title-design'>
                  <h1 className='proffy-name'>{prof.name}</h1>
                  <h2 className='proffy-class'>{prof.class}</h2>
                </div>
              </div> 
              <div className='proffy-sentences'>
                <span className='proffy-main-phrase'>
                  {prof.mainSentence}
                </span>
                <span className='proffy-more-about'>{prof.moreAbout}</span>
              </div>
              <hr/>
              <div className='details-price'>
                <h3 className='proffy-title-price'>Preço/hora</h3>
                <h4 className='proffy-price'>R$ {prof.price}</h4>
                <button className='proffy-contact'>
                  <VscCallOutgoing className="call-img"/>
                  Entrar em contato
                </button>
              </div>
            </div>
            </Panel>
          ))
        }
      </Container>
    </>

  );
}

export default List;
