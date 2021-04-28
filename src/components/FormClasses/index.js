import React from 'react';
import { Container, Form } from './style';
import { VscAdd } from "react-icons/vsc";

function FormClasses() {
  return (
    <Container>
      <Form>
        <span>Seus dados</span>
        <hr/>
        <label htmlFor="">Nome completo</label>
        <input type="text"/>
        <label htmlFor="">Link da sua foto (comece com //http)</label>
        <input type="text"/>
        <label htmlFor="">Whatsapp (somente números)</label>
        <input type="tel"/>
        <label htmlFor="">Biografia</label>
        <textarea className="input-biography"></textarea>

        <span>Sobre a aula</span>
        <label htmlFor="">Matéria</label>
        <select 
          className="class"
          name="class" 
          placeholder="Selecione qual você quer ensinar">
          <option value=''>Selecione qual você quer ensinar</option>
          <option value="english">Inglês</option>
          <option value="spanish">Espanhol</option>
          <option value="math">Matemática</option>
          <option value="chemistry">Química</option>
        </select>

        <label htmlFor="">Custo da sua hora por aula (em R$)</label>
        <input type="text"/>

          <div className="availables-hours">
            <span>Horários disponíveis</span>
            <button>
              <VscAdd />
            </button>
          </div>

          <div className="alignment-label">
            <label htmlFor="">Dia da semana</label>
            <label htmlFor="">Das</label>
            <label htmlFor="">Até</label>
          </div>

          <div className="appointment-configuration">
            <select className="weekdays" name="days" id="" placeholder="Selecione o dia">
              <option value="sunday">Domingo</option>
              <option value="monday">Segunda-Feira</option>
              <option value="tuesday">Terça-Feira</option>
              <option value="wednesday">Quarta-Feira</option>
              <option value="thursday">Quinta-Feira</option>
              <option value="friday">Sexta-Feira</option>
              <option value="saturday">Sábado</option>
            </select>
            <input className="hour1" type="text"/>
            <input className="hour2" type="text"/>
          </div>
      </Form>
    </Container>
  );
}

export default FormClasses;