import React, { useContext } from 'react'
import { Table } from 'reactstrap';

import { StudentsContext } from '../../contexts/StudentsContext'
import StudentDetail from '../StudentDetail/StudentDetail';

const StudentList = () => {
  const { students } = useContext(StudentsContext);
  return students.length ? (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Earnings Potential</th>
          <th>Instruction Hours Needed</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map(student => {
            return <StudentDetail student={student} key={student.id}/>
          })
        }
      </tbody>
    </Table>
  ) : ''
}

export default StudentList

