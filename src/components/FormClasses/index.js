import React, { useState } from 'react';
import { api } from '../../services/api';
import { Container, Form } from './style';
import { VscAdd } from "react-icons/vsc";

function FormClasses() {

  const [ proffy, setProffy ] = useState({});

  function validateFields(event) {
    setProffy({...proffy, [event.target.name]:event.target.value})
  }

  async function postProffy (e) {
   
    e.preventDefault();

    if(proffy.name && proffy.telephone && proffy.mainSentence && proffy.price && proffy.hour1 && proffy.hour2 && proffy.biography && proffy.class && proffy.day) {
      await api.post('/proffys', proffy);
      alert('cadastrado com sucesso!');
      setProffy({ name: '', telephone: '', mainSentence: '', price: '', hour1: '', hour2: '', biography: '', class: '', day: '' })
      return;
    }
    if(!proffy.name || !proffy.telephone || !proffy.mainSentence || !proffy.price || !proffy.hour1 || !proffy.hour2 || !proffy.biography || !proffy.class || !proffy.day) {
      return alert('todos os campos devem estar preenchidos!');
    }
    if(proffy.name || !proffy.telephone || !proffy.mainSentence || !proffy.price || !proffy.hour1 || !proffy.hour2 || !proffy.biography || !proffy.class || !proffy.day) {
      return alert('todos os campos devem estar preenchidos!');
    }
    if(!proffy.name || proffy.telephone || !proffy.mainSentence || !proffy.price || !proffy.hour1 || !proffy.hour2 || !proffy.biography || !proffy.class || !proffy.day) {
      return alert('todos os campos devem estar preenchidos!');
    }
    if(!proffy.name || !proffy.telephone || proffy.mainSentence || !proffy.price || !proffy.hour1 || !proffy.hour2 || !proffy.biography || !proffy.class || !proffy.day) {
      return alert('todos os campos devem estar preenchidos!');
    }
    if(!proffy.name || !proffy.telephone || !proffy.mainSentence || proffy.price || !proffy.hour1 || !proffy.hour2 || !proffy.biography || !proffy.class || !proffy.day) {
      return alert('todos os campos devem estar preenchidos!');
    }
    if(!proffy.name || !proffy.telephone || !proffy.mainSentence || !proffy.price || proffy.hour1 || !proffy.hour2 || !proffy.biography || !proffy.class || !proffy.day) {
      return alert('todos os campos devem estar preenchidos!');
    }
    if(!proffy.name || !proffy.telephone || !proffy.mainSentence || !proffy.price || !proffy.hour1 || proffy.hour2 || !proffy.biography || !proffy.class || !proffy.day) {
      return alert('todos os campos devem estar preenchidos!');
    }
    if(!proffy.name || !proffy.telephone || !proffy.mainSentence || !proffy.price || !proffy.hour1 || !proffy.hour2 || proffy.biography || !proffy.class || !proffy.day) {
      return alert('todos os campos devem estar preenchidos!');
    }
    if(!proffy.name || !proffy.telephone || !proffy.mainSentence || !proffy.price || !proffy.hour1 || !proffy.hour2 || !proffy.biography || proffy.class || !proffy.day) {
      return alert('todos os campos devem estar preenchidos!');
    }
    if(!proffy.name || !proffy.telephone || !proffy.mainSentence || !proffy.price || !proffy.hour1 || !proffy.hour2 || !proffy.biography || !proffy.class || proffy.day) {
      return alert('todos os campos devem estar preenchidos!');
    }
  }

  return (
    <Container>
      <Form data-testid="form-proffy" onSubmit={postProffy}>
        <span>Seus dados</span>
        <hr/>
        <label htmlFor="input-name">Nome completo</label>
        <input 
          name="name"
          id="input-name"
          type="text"
          onChange={(e) => validateFields(e)}
          value={proffy.name || ''}
        />
        <label htmlFor="input-whatsapp">Whatsapp (somente números)</label>
        <input
          id="input-whatsapp"
          name="telephone" 
          type="tel"
          onChange={(e) => validateFields(e)}
          value={proffy.telephone || ''}
        />
        <label htmlFor="input-sentence">Frase</label>
        <input
          id="input-sentence"
          name="mainSentence" 
          type="text"
          onChange={(e) => validateFields(e)}
          value={proffy.mainSentence || ''}
        />
        <label htmlFor="input-biography">Biografia</label>
        <textarea
          id="input-biography"
          name="biography" 
          className="input-biography"
          onChange={(e) => validateFields(e)}
          value={proffy.biography || ''}
        >
        </textarea>

        <span>Sobre a aula</span>
        <label htmlFor="select-class">Matéria</label>
        <select 
          id="select-class"
          className="class"
          name="class" 
          placeholder="Selecione qual você quer ensinar"
          onChange={(e) => validateFields(e)}
          value={proffy.class || ''}
        >
          <option value=''>Selecione qual você quer ensinar</option>
          <option value="english">Inglês</option>
          <option value="spanish">Espanhol</option>
          <option value="math">Matemática</option>
          <option value="chemistry">Química</option>
        </select>

        <label htmlFor="input-price">Custo da sua hora por aula (em R$)</label>
        <input 
          id="input-price"
          type="text"
          name="price"
          onChange={(e) => validateFields(e)}
          value={proffy.price || ''}
        />

          <div className="availables-hours">
            <span>Horários disponíveis</span>
            <button>
              <VscAdd />
            </button>
          </div>

          <div className="alignment-label">
            <label htmlFor="select-day">Dia da semana</label>
            <label htmlFor="since">Das</label>
            <label htmlFor="until">Até</label>
          </div>

          <div className="appointment-configuration">
            <select 
              className="weekdays" 
              name="day" 
              id="select-day" 
              placeholder="Selecione o dia"
              onChange={(e) => validateFields(e)}
              value={proffy.day || ''}
            >
              <option value="sunday">Domingo</option>
              <option value="monday">Segunda-Feira</option>
              <option value="tuesday">Terça-Feira</option>
              <option value="wednesday">Quarta-Feira</option>
              <option value="thursday">Quinta-Feira</option>
              <option value="friday">Sexta-Feira</option>
              <option value="saturday">Sábado</option>
            </select>
            <input 
              id="since"
              className="hour1" 
              type="time"
              name="hour1"
              min="08:00" max="18:00"
              onChange={(e) => validateFields(e)}
              value={proffy.hour1 || ''}
            />
            <input 
              id="until"
              className="hour2" 
              type="time"
              name="hour2"
              min="08:00" max="23:59"
              onChange={(e) => validateFields(e)}
              value={proffy.hour2 || ''}
            />
          </div>

          <div>
            <button 
              className="btn-save"
              type="submit"
            >
              Salvar Cadastro
            </button>
          </div>
      </Form>
    </Container>
  );
}

export default FormClasses;