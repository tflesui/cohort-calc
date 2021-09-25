import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const StudentsContext = createContext();

const StudentsProvider = props => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Jane',
      earnings: 1000,
      hoursNeeded: 3
    },
    {
      id: 2,
      name: 'Bob',
      earnings: 3000,
      hoursNeeded: 5
    },
  ]);

  // Students functions go here
  const addStudent = (name, earnings, hoursNeeded) => {
    setStudents([...students, {name, earnings, hoursNeeded, id: uuidv1() }])
  }

  const removeStudent = id => {
    setStudents(students.filter(student => student.id !== id));
  }

  return (
    <StudentsContext.Provider 
      value={{students, addStudent, removeStudent}}>
        { props.children }
    </StudentsContext.Provider>
  )
}

export default StudentsProvider;
