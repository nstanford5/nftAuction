import {useState} from 'react';
import {loadStdlib} from '@reach-sh/stdlib';
const stdlib = loadStdlib('ALGO');

export function Results(){
  const [highest] = useState();
  const [last] = useState();

  return(
    <div className='section'>
      <h4>Address of Highest Bidder: {highest}</h4>
      <br/>
      <h4>Final Sale Price: {last}</h4>
    </div>
  )
}