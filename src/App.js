import logo from './logo.png';
import './App.css';
import {loadStdlib} from '@reach-sh/stdlib';
import {ALGO_MyAlgoConnect as MyAlgoConnect} from '@reach-sh/stdlib';
import * as backend from './reach/build/index.main.mjs';
import {useState} from 'react';
import {views, Loader} from './utils/';
import {ConnectAccount, SelectRole, Results, Waiting, Bid, WaitingForBuyer} from './screens'
const stdlib = loadStdlib('ALGO');
stdlib.setWalletFallback(stdlib.walletFallback({
  providerEnv: 'TestNet',
  MyAlgoConnect
}))

function App() {
  // state imports here
  const [account, setAccount] = useState({});
  const [view, setView] = useState(views.CONNECT_ACCOUNT);
  const [ctcInfo, setContractInfo] = useState();
  const [flag, setFlag] = useState();
  const [last, setLast] = useState(0);
  const [highest, setHighest] = useState('Address');
  const [theNFT, setNFT] = useState();
  const [bid] = useState();
  const [ctc, setCtc] = useState();

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = "";
      try {
        const account = mnemonic ? await stdlib.newAccountFromMnemonic(secret) : await stdlib.getDefaultAccount();
        setAccount(account);
        setView(views.SELL_OR_BUY);//here
        result = 'success';
      } catch (e) {
        result = 'failed';
      }
      return result;
    },
    deploy: async () => {
      const contract = account.contract(backend);
      backend.Creator(contract, Creator);
      const ctcInfo = JSON.stringify(await contract.getInfo(), null, 2);
      setContractInfo(ctcInfo);
      setView(views.SELECT_ROLE);
    },
    bid: async () => {
      setView(views.BID);
      const ctc = account.contract(backend, ctcInfo.getInfo());
      setCtc(ctc);
      await account.tokenAccept(theNFT.id);
    },
    placeBid: async () => {
      try{
        const [lastBidder, lastBid] = await ctc.apis.Bidder.bid(bid);
        setHighest(lastBidder);
        setLast(lastBid);
        setView(views.WAITING);
      } catch (e) {
        console.log(`${e}`);
      };
    },
  }
  const Creator = {
    getSale: async () => {
      const theNFT = await stdlib.launchToken(account, "bumple", "NFT", {supply: 1});
      setNFT(theNFT);
      const params = {
        nftId: theNFT.id,
        minBid: stdlib.parseCurrency(2),
        lenInBlocks: 30,
      };
      return params;
    },
    auctionReady: () => {
      // enable button?
      setView(views.AUCTION_READY);
      setFlag(true);
    },
    showOutcome: (highBidder, amount) => {
      //setHighest(highBidder);
      //setLast(amount);
      setView(views.RESULTS);
    },
  };// end of Creator interact object
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {view === views.CONNECT_ACCOUNT &&
          <ConnectAccount connect ={reachFunctions.connect}/>}
        {view === views.SELL_OR_BUY &&
          <SelectRole deploy={reachFunctions.deploy}/>}
        {view === views.RESULTS &&
          <Results showOutcome={reachFunctions.showOutcome(highest, last)}/>}
        {view === views.BID &&
          <Bid bid={reachFunctions.bid(bid)}/>}
        {view === views.WAITING &&
          <Waiting/>}
        {view === views.AUCTION_READY}
      </header>
    </div>
  );
}

export default App;
