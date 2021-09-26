import { Jumbotron, Container } from 'reactstrap';

import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import StudentList from './components/StudentList/StudentList';
import Calculate from './components/Calculate/Calculate';
import MaxHoursProvider from './contexts/MaxHoursContext';
import StudentsProvider from './contexts/StudentsContext';


function App() {
  return (
    <div className="App">
      <MaxHoursProvider>
        <StudentsProvider>
          <Container className='text-center'>
            <h1>Cohort Calculator</h1>
            <Jumbotron fluid>
              <Counter />
              <Form />
              <StudentList />
              <Calculate />
            </Jumbotron>  
          </Container>
        </StudentsProvider>
      </MaxHoursProvider>
    </div>
  );
}

export default App;
