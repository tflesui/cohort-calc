import React, { useContext } from 'react'
import { StudentsContext } from '../../contexts/StudentsContext';

const StudentDetail = ({ student }) => {
  // individual student functions here
  const { removeStudent } = useContext(StudentsContext)
  return (
    <tr onClick={() => removeStudent(student.id)}>
      <th scope="row">{student.id}</th>
      <td>{student.name}</td>
      <td>{student.earnings}</td>
      <td>{student.hoursNeeded}</td>
    </tr>
  )
}

export default StudentDetail;