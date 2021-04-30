/* eslint-disable testing-library/await-async-utils */
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import Buttons from '../index';

describe('should renders components in screen', () => {

  beforeEach(() => {
    cleanup();
  });

  it('should renders buttons', () => {
    render(<Buttons />);

    const btnStudy = screen.getByRole('button', { name: 'Estudar' });
    const btnClasses = screen.getByRole('button', { name: 'Dar Aulas' }); 

    expect(btnStudy).toBeInTheDocument(); 
    expect(btnClasses).toBeInTheDocument();
  });

  it('Should be change page on click in "Estudar"', () => {
    const history = createMemoryHistory()

    render(
      <Router history={history}>
        <Buttons />
      </Router>
    );

    const btnStudy = screen.getByTestId('study');
    userEvent.click(btnStudy);

    waitFor(() => {
      expect(screen.getByText("Estes são os proffys disponíveis.")).toBeInTheDocument();
    });
  
  });

  it('Should be change page on click in "Dar Aulas"', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Buttons />
      </Router>
    );

    const btnClasses = screen.getByAltText('Dar Aulas');
    userEvent.click(btnClasses);

    waitFor(() => {
      expect(screen.getByText("Que incrível que você quer dar aulas.")).toBeInTheDocument();
    });

  });
})