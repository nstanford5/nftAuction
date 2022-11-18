/**
 * Add:
 * Information about the NFT for sale
 * Picture?
 * Time remaining?
 */

import './index.css';
import {useState} from 'react';
import {loadStdlib} from '@reach-sh/stdlib';
const stdlib = loadStdlib('ALGO');

export function Bidf({placeBid, nft}){
  const [bid, setBid] = useState(0);
  //const [theNFT] = useState();
  return(
    <div className='section'>
      <h4>Bidding on NFT ID: </h4>
      {nft}{'test'}
      <textarea className='text' onChange={e => setBid(e.target.value)}/>
        {stdlib.standardUnit}
      <br/>
      <button className='button' onClick={() => placeBid(bid)}>Place Bid</button>
    </div>
  )
}