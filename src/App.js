import { Jumbotron, Container } from 'reactstrap';

import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import MaxHoursProvider from './contexts/MaxHoursContext';


function App() {
  return (
    <div className="App">
      <MaxHoursProvider>
        <Container className='text-center'>
          <h1>Cohort Calculator</h1>
          <Jumbotron fluid>
            <Counter />
            <Form />
          </Jumbotron>  
        </Container>
      </MaxHoursProvider>
    </div>
  );
}

export default App;
