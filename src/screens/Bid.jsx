import './index.css';
import {useState} from 'react';

export function Bid({placeBid}){
  const [bid, setBid] = useState();
  return(
    <div className='section'>
      <textarea className='textarea' onChange={e => setBid(e.target.value())}/>
      <button className='button' onClick={() => placeBid(bid)}>Place Bid</button>
    </div>
  )
}