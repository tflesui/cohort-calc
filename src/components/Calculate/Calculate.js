import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { MaxHoursContext } from '../../contexts/MaxHoursContext';
import { StudentsContext } from '../../contexts/StudentsContext';

const Calculate = () => {
  const { students } = useContext(StudentsContext);
  const { maxHours } = useContext(MaxHoursContext);
  const [total, setTotal] = useState(0)

  const earningsArr = students.map(student => parseFloat(student.earnings));
  const hrsNeededArr = students.map(student => student.hoursNeeded);

  const calcCohort = (earnings, hrsNeeded, maxHrs) => {
    const n = earnings.length;
    if (maxHrs <= 0 || n == 0 || hrsNeeded.length != n) return 0;
  
    const dp = Array(earnings.length)
      .fill(0)
      .map(() => Array(maxHrs + 1).fill(0));
  
    // populate the maxHrs=0 columns; with '0' maxHrs we have '0' profit
    for (let i = 0; i < n; i++) dp[i][0] = 0;
  
    // if we have only one weight, we will take it if it is not more than the maxHrs
    for (let c = 0; c <= maxHrs; c++) {
      if (hrsNeeded[0] <= c) dp[0][c] = earnings[0];
    }
  
    // process all sub-arrays for all the capacities
    for (let i = 1; i < n; i++) {
      for (let c = 1; c <= maxHrs; c++) {
        let profit1 = 0,
          profit2 = 0;
        // include the item, if it is not more than the maxHrs
        if (hrsNeeded[i] <= c) profit1 = earnings[i] + dp[i - 1][c - hrsNeeded[i]];
        // exclude the item
        profit2 = dp[i - 1][c];
        // take maximum
        dp[i][c] = Math.max(profit1, profit2);
      }
    }
  
    let selectedHrsNeeded = '';
    let totalProfit = dp[hrsNeeded.length - 1][maxHrs];
    let remainingMaxHrs = maxHrs;
    for (let i = hrsNeeded.length - 1; i > 0; i--) {
      if (totalProfit != dp[i - 1][remainingMaxHrs]) {
        selectedHrsNeeded = `${hrsNeeded[i]} ${selectedHrsNeeded}`;
        remainingMaxHrs -= hrsNeeded[i];
        totalProfit -= earnings[i];
      }
    }
  
    if (totalProfit != 0) selectedHrsNeeded = `${hrsNeeded[0]} ${selectedHrsNeeded}`;
  
    console.log(`Selected hrsNeeded: ${selectedHrsNeeded}`);
    console.log(`Total Profit: ${totalProfit}`);
  
    // maximum profit will be at the bottom-right corner.
    setTotal(dp[n - 1][maxHrs]);
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
              onClick={() => calcCohort(earningsArr, hrsNeededArr, maxHours)}>
                Calculate
            </Button>
          : ''
      }
      {
        total
          ? <p>Max Earnings of ${total}</p>
          : ''
      }
    </div>
  )
}

export default Calculate
