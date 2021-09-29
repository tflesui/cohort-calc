import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { StudentsContext } from '../../contexts/StudentsContext';
import Form from './Form';
import App from '../../App';

afterEach(cleanup)

describe('Form rendering', () => {
  it('should render the fields correctly', () => {
    const { getByLabelText, getByRole } = render(
      <App>
        <StudentsContext.Provider>
          <Form />
        </StudentsContext.Provider>
      </App>
    );

    expect(screen.getByRole('textbox', { name: 'Student Name' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Earnings Potential' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Hours Needed' })).toBeInTheDocument();
  })
})