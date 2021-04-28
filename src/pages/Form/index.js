import React from 'react';
import HeaderForm from '../../components/HeaderForm';
import FormClasses from '../../components/FormClasses/index';

function Form() {

  const title = 'Que incrível que você quer dar aulas.';
  const subtitle = 'O primeiro passo é preencher esse formulário de inscrição.';

  return (
    <>
      <HeaderForm title={title} subtitle={subtitle} />
      <FormClasses />
    </>
  );
}

export default Form;
