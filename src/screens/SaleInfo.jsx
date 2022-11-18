import './index.css';
import {useState} from 'react';

export function SaleInfo({deploy}){
  const [min, setMin] = useState();
  const [dead, setDead] = useState();
  const [view, setView] = useState();
  return(
    <div>
      <textarea className="textline" placeholder='Enter min bid' onChange={e => setMin(e.target.value)}></textarea>
      <br />
      <textarea className="textline" placeholder='Enter deadline' onChange={e => setDead(e.target.value)}></textarea>
      <br />
      <button className='button' onClick={() => deploy()}>Deploy Auction</button>
    </div>
  )
}