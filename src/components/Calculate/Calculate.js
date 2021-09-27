import React, { useContext, useState } from 'react';
import { Button } from 'reactstrap';
import { MaxHoursContext } from '../../contexts/MaxHoursContext';
import { StudentsContext } from '../../contexts/StudentsContext';

const Calculate = () => {
  const { students } = useContext(StudentsContext);
  const { maxHours } = useContext(MaxHoursContext);
  const [total, setTotal] = useState(0);
  const [finalCohort, setFinalCohort] = useState([])

  // const earningsArr = students.map(student => parseFloat(student.earnings));
  // const hrsNeededArr = students.map(student => student.hoursNeeded);

  const calcCohort = (cohort, maxHrs) => {    
    // This implementation uses dynamic programming.
    // Variable 'memo' is a grid(2-dimentional array) to store optimal solution for sub-problems,
    // which will be later used as the code execution goes on.
    // This is called memoization in programming.
    // The cell will store best solution objects for different capacities and selectable items.
    let memo = [];

    // Filling the sub-problem solutions grid.
    for (let i = 0; i < cohort.length; i++) {
      // Variable 'cap' is the capacity for sub-problems.
      let row = [];
      for (let cap = 1; cap <= maxHrs; cap++) {
        row.push(getSolution(i,cap));
      }
      memo.push(row);
    }

    // The right-bottom-corner cell of the grid contains the final solution for the whole problem.
    return(getLast());

    function getLast(){
      let lastRow = memo[memo.length - 1];
      return lastRow[lastRow.length - 1];
    }

    function getSolution(row,cap){
      const NO_SOLUTION = {maxValue:0, subset:[]};
      // the column number starts from zero.
      let col = cap - 1;
      let lastItem = cohort[row];
      // The remaining capacity for the sub-problem to solve.
      let remaining = cap - lastItem.hoursNeeded;

      // Refer to the last solution for this capacity,
      // which is in the cell of the previous row with the same column
      let lastSolution = row > 0 ? memo[row - 1][col] || NO_SOLUTION : NO_SOLUTION;
      // Refer to the last solution for the remaining capacity,
      // which is in the cell of the previous row with the corresponding column
      let lastSubSolution = row > 0 ? memo[row - 1][remaining - 1] || NO_SOLUTION : NO_SOLUTION;

      // If any one of the items weights greater than the 'cap', return the last solution
      if(remaining < 0){
        return lastSolution;
      }

      // Compare the current best solution for the sub-problem with a specific capacity
      // to a new solution trial with the lastItem(new item) added
      let lastValue = lastSolution.maxValue;
      let lastSubValue = lastSubSolution.maxValue;

      let newValue = lastSubValue + parseFloat(lastItem.earnings);
      if(newValue >= lastValue){
        // copy the subset of the last sub-problem solution
        let _lastSubSet = lastSubSolution.subset.slice();
        _lastSubSet.push(lastItem);

        setTotal(newValue);

        const res = []
        for (let item of _lastSubSet){
          res.push(item.name)
          setFinalCohort(res);
        }
        return {maxValue: newValue, subset:_lastSubSet};
      }else{
        return lastSolution;
      }
    }
  }
 
  // Funtion to properly format final answer
  const answer = (amount, names) => {
    if (names.length === 1) {
      return `Max Earnings of $${new Intl.NumberFormat().format(amount)} with ${names[0]}`
    } else if (names.length === 2) {
      return `Max Earnings of $${new Intl.NumberFormat().format(amount)} with ${names[0]} and ${names[1]}`
    } else if (names.length > 2) {
      const finalName = names[names.length - 1];
      const multiName = names.slice(0, -1);
      return `Max Earnings of $${new Intl.NumberFormat().format(amount)} with ${multiName.join(', ')} and ${finalName}`
    }
  }
  

  return (
    <div>
      {
        students.length && maxHours > 0 
          ? <Button 
              color='success'
              sz='lg'  
              block
              style={{
                marginBottom: 15
              }}
              onClick={() => calcCohort(students, maxHours)}>
                Calculate
            </Button>
          : ''
      }
      {
        total
          ? <div>
              <p>
                {
                  answer(total, finalCohort)
                }
              </p>
            </div>
          : ''
      }
    </div>
  )
}

export default Calculate
