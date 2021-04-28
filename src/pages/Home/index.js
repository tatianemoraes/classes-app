import React from 'react';
import Buttons from '../../components/Buttons';

import Ilustra from '../../assets/Ilustra.png';
import Intro from '../../assets/Intro.png';
import { Container } from './style';

function Home() {
  return (
    <Container>
      <div className="first-imgs">
        <img src={Intro} alt=""/>
        <img src={Ilustra} alt=""/>
      </div>
      <Buttons/>
    </Container>
  );
}

export default Home;