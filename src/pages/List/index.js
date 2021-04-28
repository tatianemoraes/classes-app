import React from 'react';
import HeaderForm from '../../components/HeaderForm';

import Profile from '../../assets/Profile.jpg';

import { VscCallOutgoing } from 'react-icons/vsc';
import { Container, Panel } from './style';

function List() {

  const title = 'Estes são os proffys disponíveis.'; 

  return (
    <>
      <HeaderForm title={title} />
      <Container>
        <Panel>
          <div className="profile">
            <div className='proffy-details'>
            <img src={Profile} alt=""/>
            <div className='title-design'>
              <h1 className='proffy-name'>Maria Antonia</h1>
              <h2 className='proffy-class'>Português</h2>
            </div>
            </div> 
            <div className='proffy-sentences'>
              <span className='proffy-main-phrase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim consectetur fuga facilis!</span>
              <span className='proffy-more-about'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, repudiandae praesentium. Molestias at voluptatibus officia sed voluptas, eius numquam similique hic necessitatibus odit officiis aut tenetur autem est excepturi cum.</span>
            </div>
            <hr/>
            <div className='details-price'>
              <h3 className='proffy-title-price'>Preço/hora</h3>
              <h4 className='proffy-price'>R$ 40,00</h4>
              <button className='proffy-contact'>
                <VscCallOutgoing className="call-img"/>
                Entrar em contato
              </button>
            </div>
          </div>
        </Panel>
      </Container>
    </>

  );
}

export default List;
