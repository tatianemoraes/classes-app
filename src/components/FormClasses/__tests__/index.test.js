import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FormClasses from '../index';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'

describe('should renders correctly', () => {
  it('should render text', () => {
    render(<FormClasses />); 
    
    const text = screen.getByText('Seus dados'); 
    expect(text).toBeInTheDocument();
  }); 

  it('should have input field name', () => {
    render(<FormClasses />);

    const inputName = screen.getByLabelText('Nome completo', { selector: 'input' });
    expect(inputName).toBeInTheDocument();
  });

  it('should have input field whatsapp', () => {
    render(<FormClasses />);

    const inputWhatsapp = screen.getByLabelText('Whatsapp (somente números)', { selector: 'input' });
    expect(inputWhatsapp).toBeInTheDocument();
  });

  it('should have input field sentence', () => {
    render(<FormClasses />);

    const inputSentence = screen.getByLabelText('Frase', { selector: 'input' });
    expect(inputSentence).toBeInTheDocument();
  });

  it('should have input field biography', () => {
    render(<FormClasses />);

    const inputBiography = screen.getByLabelText('Biografia');
    expect(inputBiography).toBeInTheDocument();
  });

  it('should have select field class', () => {
    render(<FormClasses />);

    const selectClass = screen.getByLabelText('Matéria');
    expect(selectClass).toBeInTheDocument();
  });

  it('should have input field price', () => {
    render(<FormClasses />);

    const inputPrice = screen.getByLabelText('Custo da sua hora por aula (em R$)', { selector: 'input' });
    expect(inputPrice).toBeInTheDocument();
  });

  it('should have select field day', () => {
    render(<FormClasses />);

    const selectDay = screen.getByLabelText('Dia da semana');
    expect(selectDay).toBeInTheDocument();
  });

  it('should have input field since', () => {
    render(<FormClasses />);

    const inputSince = screen.getByLabelText('Das', { selector: 'input' });
    expect(inputSince).toBeInTheDocument();
  });

  it('should have input field until', () => {
    render(<FormClasses />);

    const inputUntil = screen.getByLabelText('Até', { selector: 'input' });
    expect(inputUntil).toBeInTheDocument();
  });

// value tests

  it('should have input field name after received value', () => {
    render(<FormClasses />);

    const inputName = screen.getByLabelText('Nome completo', { selector: 'input' });

    fireEvent.change(inputName, { target: { value: 'texto'} });

    expect(inputName).toHaveValue('texto');
  });

  it('should have input field whatsapp after received value', () => {
    render(<FormClasses />);

    const inputWhatsapp = screen.getByLabelText('Whatsapp (somente números)', { selector: 'input' });

    fireEvent.change(inputWhatsapp, { target: { value: '12344321' } });

    expect(inputWhatsapp).toHaveValue('12344321');
  });

  it('should have input field sentence after received value', () => {
    render(<FormClasses />);

    const inputSentence = screen.getByLabelText('Frase', { selector: 'input' });

    fireEvent.change(inputSentence, { target: { value: 'Eu tenho conhecimento em línguas estrangeiras' } });

    expect(inputSentence).toBeInTheDocument('Eu tenho conhecimento em línguas estrangeiras');
  });

  it('should have input field biography after received value', () => {
    render(<FormClasses />);

    const inputBiography = screen.getByLabelText('Biografia');

    fireEvent.change(inputBiography, { target: { value: 'Morei no Canadá durante 5 anos, desenvolvi trabalhos focando em conversação com nativos e expessões nativas. A partir disso, possuo vasta experiência.' } });

    expect(inputBiography).toHaveValue('Morei no Canadá durante 5 anos, desenvolvi trabalhos focando em conversação com nativos e expessões nativas. A partir disso, possuo vasta experiência.');
  });

  it('should have select field class after selected value', () => {
    render(<FormClasses />);

    const selectClass = screen.getByLabelText('Matéria');

    fireEvent.click(screen.getByText('Inglês'));

    expect(selectClass).toHaveTextContent('Inglês');
  });

  it('should have input field price after received value', () => {
    render(<FormClasses />);

    const inputPrice = screen.getByLabelText('Custo da sua hora por aula (em R$)', { selector: 'input' });

    fireEvent.change(inputPrice, { target: { value: '30,00' } });

    expect(inputPrice).toHaveValue('30,00');
  });

  it('should have select field day after selected value', () => {
    render(<FormClasses />);

    const selectDay = screen.getByLabelText('Dia da semana');

    fireEvent.click(screen.getByText('Segunda-Feira'));

    expect(selectDay).toHaveTextContent('Segunda-Feira');
  });


  it('should have input field since after received value', () => {
    render(<FormClasses />);

    const inputSince = screen.getByLabelText('Das', { selector: 'input' });

    fireEvent.change(inputSince, { target: { value: '06:00' } });

    expect(inputSince).toHaveValue('06:00');
  });

  it('should have input field until after received value', () => {
    render(<FormClasses />);

    const inputUntil = screen.getByLabelText('Até', { selector: 'input' });

    fireEvent.change(inputUntil, { target: { value: '08:00' } });

    expect(inputUntil).toHaveValue('08:00');
  });


  it('should register after received all needed values', async () => {
    global.alert = jest.fn();

    const mockHandler = jest.fn();

    render(<FormClasses onSubmit={mockHandler}/>); 
  
      const inputName = screen.getByLabelText('Nome completo', { selector: 'input' });
      const inputWhatsapp = screen.getByLabelText('Whatsapp (somente números)', { selector: 'input' });
      const inputSentence = screen.getByLabelText('Frase', { selector: 'input' });
      const inputBiography = screen.getByLabelText('Biografia');
      const selectClass = screen.getByLabelText('Matéria');
      const inputPrice = screen.getByLabelText('Custo da sua hora por aula (em R$)', { selector: 'input' });
      const selectDay = screen.getByLabelText('Dia da semana');
      const inputSince = screen.getByLabelText('Das', { selector: 'input' });
      const inputUntil = screen.getByLabelText('Até', { selector: 'input' });

      fireEvent.change(inputName, { target: { value: 'texto'}});
      fireEvent.change(inputWhatsapp, { target: { value: '12344321' } });
      fireEvent.change(inputSentence, { target: { value: 'Eu tenho conhecimento em línguas estrangeiras' }});
      fireEvent.change(inputBiography, { target: { value: 'Morei no Canadá durante 5 anos, desenvolvi trabalhos focando em conversação com nativos e expessões nativas. A partir disso, possuo vasta experiência.' } });
      fireEvent.change(screen.getByPlaceholderText('Selecione qual você quer ensinar'), { target: { value: 'english' } });
      fireEvent.change(inputPrice, { target: { value: '30,00' } });
      fireEvent.change(screen.getByPlaceholderText('Selecione o dia'), { target: { value: 'sunday' } });
      fireEvent.change(inputSince, { target: { value: '06:00' } });
      fireEvent.change(inputUntil, { target: { value: '08:00' } });
      
      expect(inputName).toHaveValue('texto');
      expect(inputWhatsapp).toHaveValue('12344321');
      expect(inputSentence).toHaveValue('Eu tenho conhecimento em línguas estrangeiras');
      expect(inputBiography).toHaveValue('Morei no Canadá durante 5 anos, desenvolvi trabalhos focando em conversação com nativos e expessões nativas. A partir disso, possuo vasta experiência.');
      expect(selectClass).toHaveValue('english');
      expect(inputPrice).toHaveValue('30,00');
      expect(selectDay).toHaveValue('sunday');
      expect(inputSince).toHaveValue('06:00');
      expect(inputUntil).toHaveValue('08:00');
      
      const btn = screen.getByTestId('form-proffy');
      fireEvent.submit(btn); 
      // screen.debug()

      expect(mockHandler).toHaveBeenCalled();
       screen.debug()
    
        
      // await waitFor(() => { 
      //   expect(inputName).toBeInTheDocument('');
      //   expect(inputWhatsapp).toBeInTheDocument('');
      //   expect(inputSentence).toBeInTheDocument('');
      //   expect(inputBiography).toBeInTheDocument('');
      //   expect(selectClass).toBeInTheDocument('');
      //   expect(inputPrice).toBeInTheDocument('');
      //   expect(selectDay).toBeInTheDocument('');
      //   expect(inputSince).toBeInTheDocument('');
      //   expect(inputUntil).toBeInTheDocument('');
      // });


  });

});
