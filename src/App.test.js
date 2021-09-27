import { cleanup, render } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

test('should take a snapshot', () => {
  const { asFragment } = render(<App />)
  
  expect(asFragment(<App />)).toMatchSnapshot()
});
