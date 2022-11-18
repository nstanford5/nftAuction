/**
 * Add:
 * onClick for Bid on NFT
 * button: Sell NFT (no launchToken)
 */
import './index.css';
import {useState} from 'react';

export function SelectRole({connect, getBid}){
  // use this to enable/disable buttons?
  const [flag] = useState();
  return(
    <div className='section'>
      <button className='button' disabled={flag} onClick={() => connect()}>Create + Sell NFT</button>
      <button className='button' onClick={() => getBid()}>Bid on NFT</button>
    </div>
  );
};