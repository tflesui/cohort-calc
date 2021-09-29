import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { StudentsContext } from '../../contexts/StudentsContext';
import StudentDetail from './StudentDetail';
import App from '../../App';

afterEach(cleanup)

describe('Student Info Test', () => {
  it('should render to screen', () => {
    const { getByText } = render(
      <App>
        <StudentsContext.Provider>
          <StudentDetail />
        </StudentsContext.Provider>
      </App>
    );

    expect(screen.getByText('Jane')).toBeInTheDocument();

  })

  it('should render remove button', () => {
    const { getByLabelText , getByText, queryByText } = render(
      <App>
        <StudentsContext.Provider>
          <StudentDetail />
        </StudentsContext.Provider>
      </App>
    );

    fireEvent.click(screen.getAllByText('Remove')[0])

    expect(queryByText('Remove')).toBeTruthy()
  })
})
