import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { MaxHoursContext } from '../../contexts/MaxHoursContext';
import { StudentsContext } from '../../contexts/StudentsContext';
import Calculate from './Calculate';
import App from '../../App';

afterEach(cleanup);

describe('Calculate test', () => {
  it('Should render on screen', () => {
    const { getByText } = render(
      <App>
        <MaxHoursContext.Provider>
          <StudentsContext.Provider>
            <Calculate />
          </StudentsContext.Provider>
        </MaxHoursContext.Provider>
      </App>
    )

    fireEvent.click(getByText('Increase'));
    expect(screen.getByText('Calculate')).toBeInTheDocument();
  })
})