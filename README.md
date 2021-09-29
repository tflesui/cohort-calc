# Cohort Calc

A responsive Single Page Web Application built with ReactJS!

### Project Overview

Given a list of students with revenue potentials and hours of instruction needed, as well as max instruction hours per cohort, find the maximum earnings you can generate from the student cohort where the sum of the instruction hours are less than or equal to the max instruction hours.

## Demo

Check it out [Live](https://cohort-calc.netlify.app)

To test out the code:  Clone, Fork, or Download this repo. Install dependencies with `npm install`.  Use `npm start` to run the start script.  Testing can be run using `npm test`.

---

### Tech Stack

- Javascript (ES6)
- React Hooks
  - useContext
  - JSX
- Bootstrap (Reactstrap)
- React Testing Library

### The Approach

On first explanation, this project seemed very doable and my first question was related to data requirements.  After learning about the freedom to choose how the data is brought in, my thoughts were use local storage or maybe the useReducer hook, of which I had experience with both.  Further research led me to the useContext hook, which seemed perfect for this project and ended up being the choice to manage state (data).

After building a scaffold of the layout with Bootstrap/Reactstrap components, the next problem to tackle was the logic.  At this point in the project, I quickly realized that the algorithm to satisfy the project requirements would make this app much more challenging than initially imagined.  Researching algorithms and dynamic programming yielded the appropriate algorithm and the work to re-structure the code began.

The last major step to work on was to implement a few unit tests for the code.  Testing the components was accomplished through the React Testing Library.  Previous unit testing experience is with Jest, so using the React Testing Library was a first for me and a worthwhile experience.

### Conclusion

This project ended up being much more challenging than first thought of.  Implementation of the algorithm and working with the React Testing Library consumed the most time.  The Reacstrap library was very useful in fulfilling the requirement of making this app responsive.  Lastly, learning about and successfully using the useContext React hook was by far the most enjoyable part of building out this project.

Cheers!
  

