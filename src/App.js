// import './App.css';

import { Jumbotron, Container } from 'reactstrap';
import Counter from './components/Counter/Counter';

import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Container className='text-center'>
        <h1>Cohort Calculator</h1>
        <Jumbotron fluid>
          <Counter />
          <Form />
        </Jumbotron>  
      </Container>
    </div>
  );
}

export default App;
