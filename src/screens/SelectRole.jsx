/**
 * Add:
 * onClick for Bid on NFT
 * button: Sell NFT (no launchToken)
 */
import './index.css';
import {useState} from 'react';

export function SelectRole({deploy, bid}){
  const [flag] = useState();
  return(
    <div className='section'>
      <button className='button' onClick={() => deploy()}>Create + Sell NFT</button>
      <button className='button' onClick={() => bid()}>Bid on NFT</button>
    </div>
  );
};