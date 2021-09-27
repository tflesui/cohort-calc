import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { MaxHoursContext } from '../../contexts/MaxHoursContext';
import Counter from './Counter';
import App from '../../App';

afterEach(cleanup);

const renderCounter = (maxHours) => {
  return render(
    <MaxHoursContext.Provider value={maxHours}>
      <Counter />
    </MaxHoursContext.Provider>
  )
}

test('should show on screen', () => {
  renderCounter(0);
  expect(screen.getByText('Max Instructor Hours:')).toBeInTheDocument();
 });


 test('should be enabled', () => {
  renderCounter(0);
  expect(screen.getByTestId('increase-button')).not.toHaveAttribute('disabled')
  expect(screen.getByText('Increase')).toBeInTheDocument();
});

test('Decrease button should show on screen', () => {
  const { getByText } = render (
    <App>
      <MaxHoursContext.Provider>
        <Counter />
      </MaxHoursContext.Provider>
    </App>
  )
  
  fireEvent.click(getByText('Increase'));
  expect(screen.getByTestId('decrease-button')).toBeInTheDocument();
})
