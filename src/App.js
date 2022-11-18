import logo from './logo.png';
import './App.css';
import {loadStdlib} from '@reach-sh/stdlib';
import {ALGO_MyAlgoConnect as MyAlgoConnect} from '@reach-sh/stdlib';
import * as backend from './reach/build/index.main.mjs';
import {useState} from 'react';
import {views, Loader} from './utils/';
import {ConnectAccount, SelectRole, Results, Waiting, SaleInfo, Bidf, WaitingForBuyer} from './screens'
const stdlib = loadStdlib('ALGO');
stdlib.setWalletFallback(stdlib.walletFallback({
  providerEnv: 'TestNet',
  MyAlgoConnect
}))

function App() {
  const [dAcc, setDacc] = useState({});
  const [view, setView] = useState(views.SELL_OR_BUY);
  const [flag, setFlag] = useState(false);
  const [last, setLast] = useState(0);
  const [highest, setHighest] = useState('Address');
  const [theNFT, setNFT] = useState({});
  const [bid, setBid] = useState();
  const [ctcCreate, setCtcCreate] = useState();
  const [acc, setAcc] = useState();
  const [ctc, setCtc] = useState();
  const [min, minBid] = useState();
  const [dead, setDead] = useState();
  const [nftid, setNftid] = useState();
  let ctcC;
  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = "";
        try {
          const deployAcc = mnemonic ? await stdlib.newAccountFromMnemonic(secret) : await stdlib.getDefaultAccount();
          setDacc(deployAcc);
          setView(views.SALE_INFO);//here
          result = 'success';
        } catch (e) {
          result = 'failed';
        }
        return result;
    },
    deploy: async () => {
        ctcC = dAcc.contract(backend);
        setCtcCreate(ctcC);
        backend.Creator(ctcC, Creator);
        //ctcInfo = JSON.stringify(await ctcCreator.getInfo(), null, 2);
        setView(views.AUCTION_READY);  
    },
    getBid: async () => {
      setView(views.BID);
    },
    placeBid: async () => {
      try{
        const x = await stdlib.getDefaultAccount();
        await x.tokenAccept(theNFT.id);
        console.log(ctcC);
        const ctc = x.contract(backend, ctcC.getInfo());
        console.log(x);
        setCtc(x);
        const [lastBidder, lastBid] = await ctc.apis.Bidder.bid(bid);
        //setHighest(lastBidder);
        //setLast(lastBid);
        setView(views.WAITING);
      } catch (e) {
        console.log(`${e}`);
      };
    },
  };// end of Reach functions
  const Creator = {
    getSale: async () => {
      setView(views.SALE_INFO);
      const theNFT = await stdlib.launchToken(dAcc, "bumple", "NFT", {supply: 1});
      setNFT(theNFT);
      setNftid(theNFT.id);
      const params = {
        nftId: theNFT.id,
        minBid: stdlib.parseCurrency(5),
        lenInBlocks: 40,//change this to 30 or 40 (ish)
      };
      return params;
    },
    auctionReady: () => {
      // enable button?
      console.log('ready');
      setView(views.AUCTION_READY);
      setFlag(true);
    },
    showOutcome: (addr, amt) => {
      setHighest(addr);
      setLast(amt);
      setView(views.RESULTS);
    },
  // seeBid: Fun([Address, UInt], Null),
  };// end of Creator interact object

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {view === views.CONNECT_ACCOUNT &&
          <ConnectAccount connect={reachFunctions.connect}/>}
        {view === views.SALE_INFO &&
          <SaleInfo deploy={reachFunctions.deploy}/>}
        {view === views.SELL_OR_BUY &&
          <SelectRole connect={reachFunctions.connect}
            getBid={reachFunctions.getBid}/>}
        {view === views.RESULTS &&
          <Results />}
        {view === views.BID &&
          /**Green is the name of the file */
          /**Light blue is the name of the function being called from Bidf */
          /**Yellow is the name of the function here in App.js */
          <Bidf placeBid={reachFunctions.placeBid}
            nft={theNFT.id}/>}
        {view === views.WAITING &&
          <Waiting/>}
        {view === views.AUCTION_READY &&
          <WaitingForBuyer />}
      </header>
    </div>
  );
}

export default App;
