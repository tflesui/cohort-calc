import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { StudentsContext } from '../../contexts/StudentsContext';
import StudentList from './StudentList';
import App from '../../App';

afterEach(cleanup)

describe('Student table test', () => {
  it('should display table correctly', () => {
    const { getByText } = render(
      <App>
        <StudentsContext.Provider>
          <StudentList />
        </StudentsContext.Provider>
      </App>
    )

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getAllByText('Earnings Potential')[0]).toBeInTheDocument();
    expect(screen.getByText('Instruction Hours Needed')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  })
})
