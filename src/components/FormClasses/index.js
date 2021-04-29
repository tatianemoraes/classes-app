import React, { useState } from 'react';
import { api } from '../../services/api';
import { Container, Form } from './style';
import { VscAdd } from "react-icons/vsc";

function FormClasses() {

  const [ proffy, setProffy ] = useState({});

  function validateFields(event) {
    setProffy({...proffy, [event.target.name]:event.target.value})
  }

  const postProffy = async (e) => {
 
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
      <Form>
        <span>Seus dados</span>
        <hr/>
        <label htmlFor="">Nome completo</label>
        <input 
          name="name"
          type="text"
          onChange={(e) => validateFields(e)}
          value={proffy.name}
        />
        <label htmlFor="">Whatsapp (somente números)</label>
        <input
          name="telephone" 
          type="tel"
          onChange={(e) => validateFields(e)}
          value={proffy.telephone}
        />
        <label htmlFor="">Frase</label>
        <input
          name="mainSentence" 
          type="text"
          onChange={(e) => validateFields(e)}
          value={proffy.mainSentence}
        />
        <label htmlFor="">Biografia</label>
        <textarea
          name="biography" 
          className="input-biography"
          onChange={(e) => validateFields(e)}
          value={proffy.biography}
        >
        </textarea>

        <span>Sobre a aula</span>
        <label htmlFor="">Matéria</label>
        <select 
          className="class"
          name="class" 
          placeholder="Selecione qual você quer ensinar"
          onChange={(e) => validateFields(e)}
          value={proffy.class}
        >
          <option value=''>Selecione qual você quer ensinar</option>
          <option value="english">Inglês</option>
          <option value="spanish">Espanhol</option>
          <option value="math">Matemática</option>
          <option value="chemistry">Química</option>
        </select>

        <label htmlFor="">Custo da sua hora por aula (em R$)</label>
        <input 
          type="text"
          name="price"
          onChange={(e) => validateFields(e)}
          value={proffy.price}
        />

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
            <select 
              className="weekdays" 
              name="day" 
              id="" 
              placeholder="Selecione o dia"
              onChange={(e) => validateFields(e)}
              value={proffy.day}
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
              className="hour1" 
              type="time"
              name="hour1"
              min="09:00" max="18:00"
              onChange={(e) => validateFields(e)}
              value={proffy.hour1}
            />
            <input 
              className="hour2" 
              type="time"
              name="hour2"
              min="08:00" max="23:59"
              onChange={(e) => validateFields(e)}
              value={proffy.hour2}
            />
          </div>

          <div>
            <button 
              className="btn-save"
              type="button"
              onClick={(e) => postProffy(e)}
            >
              Salvar Cadastro
            </button>
          </div>
      </Form>
    </Container>
  );
}

export default FormClasses;