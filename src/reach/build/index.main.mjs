// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function _Bidder_bid5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v284, v285, v309, v310, v311, v312, v313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v335 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:37:33:application call to [unknown function] (defined at: ./index.rsh:37:33:function exp)', 'at ./index.rsh:37:33:application call to [unknown function] (defined at: ./index.rsh:37:33:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v336 = v335[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v338 = stdlib.gt(v336, v312);
  stdlib.assert(v338, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:33:application call to [unknown function] (defined at: ./index.rsh:37:33:function exp)', 'at ./index.rsh:37:33:application call to [unknown function] (defined at: ./index.rsh:37:33:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v284, v285, v309, v310, v311, v312, v313, v335],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v336, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v347], secs: v349, time: v348, didSend: v165, from: v346 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v351 = v347[stdlib.checkedBigNumberify('./index.rsh:37:14:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v351,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v360 = [v310, v312];
      const v361 = await txn1.getOutput('Bidder_bid', 'v360', ctc5, v360);
      
      if (v311) {
        const v616 = v346;
        const v617 = false;
        const v618 = v351;
        const v619 = v348;
        const v621 = stdlib.le(v313, v309);
        if (v621) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v346,
            tok: v285
            });
          sim_r.txns.push({
            kind: 'from',
            to: v284,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v310,
          tok: undefined /* Nothing */
          });
        const v622 = v346;
        const v623 = false;
        const v624 = v351;
        const v625 = v348;
        const v627 = stdlib.le(v313, v309);
        if (v627) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v346,
            tok: v285
            });
          sim_r.txns.push({
            kind: 'from',
            to: v284,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v347], secs: v349, time: v348, didSend: v165, from: v346 } = txn1;
  undefined /* setApiDetails */;
  const v351 = v347[stdlib.checkedBigNumberify('./index.rsh:37:14:spread', stdlib.UInt_max, '0')];
  const v352 = stdlib.gt(v351, v312);
  stdlib.assert(v352, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:33:application call to [unknown function] (defined at: ./index.rsh:37:33:function exp)', 'at ./index.rsh:37:33:application call to [unknown function] (defined at: ./index.rsh:37:33:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  ;
  const v360 = [v310, v312];
  const v361 = await txn1.getOutput('Bidder_bid', 'v360', ctc5, v360);
  if (v165) {
    stdlib.protect(ctc6, await interact.out(v347, v361), {
      at: './index.rsh:37:15:application',
      fs: ['at ./index.rsh:37:15:application call to [unknown function] (defined at: ./index.rsh:37:15:function exp)', 'at ./index.rsh:40:23:application call to "notify" (defined at: ./index.rsh:39:36:function exp)', 'at ./index.rsh:39:36:application call to [unknown function] (defined at: ./index.rsh:39:36:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v311) {
    const v616 = v346;
    const v617 = false;
    const v618 = v351;
    const v619 = v348;
    const v621 = stdlib.le(v313, v309);
    if (v621) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    ;
    const v622 = v346;
    const v623 = false;
    const v624 = v351;
    const v625 = v348;
    const v627 = stdlib.le(v313, v309);
    if (v627) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    lenInBlocks: ctc0,
    minBid: ctc0,
    nftId: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc0]);
  const ctc7 = stdlib.T_Bool;
  
  
  const v277 = stdlib.protect(ctc2, await interact.getSale(), {
    at: './index.rsh:20:73:application',
    fs: ['at ./index.rsh:19:17:application call to [unknown function] (defined at: ./index.rsh:19:21:function exp)'],
    msg: 'getSale',
    who: 'Creator'
    });
  const v278 = v277.lenInBlocks;
  const v279 = v277.minBid;
  const v280 = v277.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v279, v278],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v285, v286, v287], secs: v289, time: v288, didSend: v35, from: v284 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v285
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v285, v286, v287], secs: v289, time: v288, didSend: v35, from: v284 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v284, v285, v286, v287, v288],
    evt_cnt: 0,
    funcNum: 1,
    lct: v288,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:25:13:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:23:17:decimal', stdlib.UInt_max, '1'), v285]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v296, time: v295, didSend: v42, from: v294 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:23:17:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v285
        });
      
      const v309 = stdlib.safeAdd(v288, v287);
      const v310 = v284;
      const v311 = true;
      const v312 = v286;
      const v313 = v295;
      const v314 = v288;
      
      if (await (async () => {
        const v328 = stdlib.le(v314, v309);
        
        return v328;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v310,
          tok: v285
          });
        if (v311) {
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v284,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v296, time: v295, didSend: v42, from: v294 } = txn2;
  ;
  ;
  const v303 = stdlib.addressEq(v284, v294);
  stdlib.assert(v303, {
    at: './index.rsh:25:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.auctionReady(), {
    at: './index.rsh:26:34:application',
    fs: ['at ./index.rsh:26:34:application call to [unknown function] (defined at: ./index.rsh:26:34:function exp)', 'at ./index.rsh:26:34:application call to "liftedInteract" (defined at: ./index.rsh:26:34:application)'],
    msg: 'auctionReady',
    who: 'Creator'
    });
  
  const v309 = stdlib.safeAdd(v288, v287);
  let v310 = v284;
  let v311 = true;
  let v312 = v286;
  let v313 = v295;
  let v314 = v288;
  
  let txn3 = txn2;
  while (await (async () => {
    const v328 = stdlib.le(v314, v309);
    
    return v328;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: ['time', v309],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v284, v285, v309, v310, v311, v312, v313],
        evt_cnt: 0,
        funcNum: 4,
        lct: v313,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:50:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v380, time: v379, didSend: v221, from: v378 } = txn5;
          
          ;
          const cv310 = v310;
          const cv311 = v311;
          const cv312 = v312;
          const cv313 = v379;
          const cv314 = v313;
          
          await (async () => {
            const v310 = cv310;
            const v311 = cv311;
            const v312 = cv312;
            const v313 = cv313;
            const v314 = cv314;
            
            if (await (async () => {
              const v328 = stdlib.le(v314, v309);
              
              return v328;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v310,
                tok: v285
                });
              if (v311) {
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v285
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v284,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v285
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc1, ctc0, ctc5, ctc7, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v380, time: v379, didSend: v221, from: v378 } = txn5;
      ;
      const v381 = stdlib.addressEq(v284, v378);
      stdlib.assert(v381, {
        at: './index.rsh:50:21:dot',
        fs: ['at ./index.rsh:49:40:application call to [unknown function] (defined at: ./index.rsh:49:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv310 = v310;
      const cv311 = v311;
      const cv312 = v312;
      const cv313 = v379;
      const cv314 = v313;
      
      v310 = cv310;
      v311 = cv311;
      v312 = cv312;
      v313 = cv313;
      v314 = cv314;
      
      txn3 = txn5;
      continue;
      }
    else {
      const {data: [v347], secs: v349, time: v348, didSend: v165, from: v346 } = txn4;
      undefined /* setApiDetails */;
      const v351 = v347[stdlib.checkedBigNumberify('./index.rsh:37:14:spread', stdlib.UInt_max, '0')];
      const v352 = stdlib.gt(v351, v312);
      stdlib.assert(v352, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:38:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:33:application call to [unknown function] (defined at: ./index.rsh:37:33:function exp)', 'at ./index.rsh:37:33:application call to [unknown function] (defined at: ./index.rsh:37:33:function exp)'],
        msg: 'bid is too low',
        who: 'Creator'
        });
      ;
      const v360 = [v310, v312];
      await txn4.getOutput('Bidder_bid', 'v360', ctc6, v360);
      if (v311) {
        stdlib.protect(ctc3, await interact.seeBid(v346, v351), {
          at: './index.rsh:45:40:application',
          fs: ['at ./index.rsh:45:40:application call to [unknown function] (defined at: ./index.rsh:45:40:function exp)', 'at ./index.rsh:45:40:application call to "liftedInteract" (defined at: ./index.rsh:45:40:application)', 'at ./index.rsh:39:36:application call to [unknown function] (defined at: ./index.rsh:39:36:function exp)'],
          msg: 'seeBid',
          who: 'Creator'
          });
        
        const cv310 = v346;
        const cv311 = false;
        const cv312 = v351;
        const cv313 = v348;
        const cv314 = v313;
        
        v310 = cv310;
        v311 = cv311;
        v312 = cv312;
        v313 = cv313;
        v314 = cv314;
        
        txn3 = txn4;
        continue;}
      else {
        ;
        stdlib.protect(ctc3, await interact.seeBid(v346, v351), {
          at: './index.rsh:45:40:application',
          fs: ['at ./index.rsh:45:40:application call to [unknown function] (defined at: ./index.rsh:45:40:function exp)', 'at ./index.rsh:45:40:application call to "liftedInteract" (defined at: ./index.rsh:45:40:application)', 'at ./index.rsh:39:36:application call to [unknown function] (defined at: ./index.rsh:39:36:function exp)'],
          msg: 'seeBid',
          who: 'Creator'
          });
        
        const cv310 = v346;
        const cv311 = false;
        const cv312 = v351;
        const cv313 = v348;
        const cv314 = v313;
        
        v310 = cv310;
        v311 = cv311;
        v312 = cv312;
        v313 = cv313;
        v314 = cv314;
        
        txn3 = txn4;
        continue;}}
    
    }
  ;
  if (v311) {
    stdlib.protect(ctc3, await interact.showOutcome(v310, v312), {
      at: './index.rsh:56:37:application',
      fs: ['at ./index.rsh:56:37:application call to [unknown function] (defined at: ./index.rsh:56:37:function exp)', 'at ./index.rsh:56:37:application call to "liftedInteract" (defined at: ./index.rsh:56:37:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc3, await interact.showOutcome(v310, v312), {
      at: './index.rsh:56:37:application',
      fs: ['at ./index.rsh:56:37:application call to [unknown function] (defined at: ./index.rsh:56:37:function exp)', 'at ./index.rsh:56:37:application call to "liftedInteract" (defined at: ./index.rsh:56:37:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  
  
  
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Bidder_bid5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`],
    pure: [],
    sigs: [`Bidder_bid(uint64)(address,uint64)`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAKAAEEBSggCFFZoI0GJgIBAAAiNQAxGEEDEylkSSJbNQEhBls1AjYaABdJQQAUIjUEIzUGgaCbvIEBEkQ2GgFCAHQ2GgIXNQQ2GgM2GgEXSYEDDEABEUkkDEAAWSQSRCU0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEEWzX+gASRJzTzsDIGNP4PRDT/MQASRDT/NAMhBVs0/jQDVzAgNANXUAEXNAMhB1syBjQDIQhbQgGHSCU0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/IQVbNf4hBFs1/VcwIDX8IQdbNfshCFs1+kk1BTX5gATXkLTdNPlQsDIGNP0MRDT5F0k1+DT7DUQ0+IgCO4AIAAAAAAAAAWg0/DT7FlBQsDT8NPsWUDUHNANXUAEXQQASNP80/jT9MQAiNPgyBjT6QgD3sSKyATT7sggjshA0/LIHszT/NP40/TEAIjT4MgY0+kIA1UkjDEAAVyMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBVs1/oE4WzX9gASai5F0sCM0/ogBwDT/MQASRDT/NP40/TQDgTBbCDT/IzQDIQRbMgY0/UIAeEghCYgBgSI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hBls1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsCEJiAFGsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlA0/RZQMgYWUChLAVcAQGdIIzUBMgY1AkIAvTX/Nf41/TX8Nfs1+jX5Nfg0/zT6DkEALjT4NPkWUDT6FlA0+1A0/BZRBwhQNP0WUDT+FlAoSwFXAGFnSCU1ATIGNQJCAHexIrIBI7ISJLIQNPuyFDT5shGzNPxBABqxIrIBIrISJLIQMgmyFTIKshQ0+bIRs0IAKrEisgE0/bIII7IQNPiyB7OxIrIBIrISJLIQMgmyFTIKshQ0+bIRs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 97,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T3","name":"v633","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v360","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v628","type":"uint256"}],"name":"Bidder_bid","outputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"v635","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T2","name":"v642","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"v654","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620016c59081380391601f1980601f85011683019360018060401b0392848610848711176200038f5781608092869260409889528339810103126200038a5783519260808401848110848211176200038f578552805184526020808201516001600160a01b039590919086831683036200038a57818101928352606088850151948983019586520151936060820194855243600355885193620000a485620003a5565b600094858152848b5191620000b983620003a5565b8783528782840152015260049260ff84541662000373577f6325dde25bfa6ff85dd776156bfdeeefc36ff7c4a07f10fdc0c4fb6b1f92fb9760a08c513381528351888201528d8d865116908201528551606082015289516080820152a151801590811562000366575b50156200034f5734620003385789519160a083018381108a82111762000325578b52848301968688528b8401918783528b606086019489865260808701968a8852339052511689525182525182524383526001998a8755438b558b519733878a015251168b8801525160608701525160808601525160a085015260a0845260c0840184811087821117620003125788528351958611620002ff57600254908782811c92168015620002f4575b83831014620002e15750601f811162000295575b508093601f86116001146200022d5750509183949184939462000221575b50501b916000199060031b1c1916176002555b516113039081620003c28239f35b01519250388062000200565b600283528183209493928692918316915b888383106200027a575050501062000260575b505050811b0160025562000213565b015160001960f88460031b161c1916905538808062000251565b8587015188559096019594850194879350908101906200023e565b60028352818320601f870160051c810191838810620002d6575b601f0160051c019087905b828110620002ca575050620001e2565b848155018790620002ba565b9091508190620002af565b634e487b7160e01b845260229052602483fd5b91607f1691620001ce565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b634e487b7160e01b875260418552602487fd5b895163100960cb60e01b8152600981850152602490fd5b895163100960cb60e01b8152600881850152602490fd5b9050600154143862000122565b8a5163100960cb60e01b8152600781860152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176200038f5760405256fe60806040526004361015610018575b361561001657005b005b6000803560e01c9081631e93b0f1146100a757508063573b85101461009e5780638323075714610095578063a13579731461008c578063ab53f2c614610083578063b62792241461007a5763d3c64a7a0361000e5761007561040c565b61000e565b50610075610384565b506100756102e6565b50610075610289565b5061007561026a565b506100756100dc565b346100c357806003193601126100c35760035460805260206080f35b80fd5b60209060031901126100d757600490565b600080fd5b5061024e6100fc6100ec366100c6565b6100f4610707565b50369061117f565b61011761011261010e60045460ff1690565b1590565b610a5c565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815966040518061014784338361119d565b0390a1610158600160005414610a7c565b610187610175610166610643565b602080825183010191016111b7565b9151801590811561025e575b50610a9c565b6101913415610abc565b60208101906101b16101ac6101a68451610358565b33611254565b610adc565b6101cd3360018060a01b036101c68451610358565b1614610afc565b6101fe6101f56101db6107f5565b936101ef6101e98551610358565b866107d9565b51610358565b602084016107d9565b60406080820191610215835160608301519061122a565b8285015261022f6102268251610358565b606086016107d9565b60016080850152015160a08301524360c08301525160e0820152610e8b565b60405160008152602090f35b0390f35b90506001541438610181565b50346100d75760003660031901126100d7576020600154604051908152f35b5060403660031901126100d75761029e610707565b604051906102ab826105c2565b600435825260203660231901126100d7576102db916040516102cc816105ea565b60243581526020820152610852565b602060405160008152f35b50346100d7576000806003193601126100c3578054610303610643565b906040519283918252602090604082840152835191826040850152815b83811061034157505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610320565b6001600160a01b031690565b81516001600160a01b031681526020918201519181019190915260400190565b5060203660031901126100d7576103996106ee565b5061025a60206103a7610707565b6103fe816040516103b7816105ea565b6040516103c3816105ea565b8082526004359052604051906103d8826105c2565b60008252858201906040516103ec816105ea565b60008152825260008352519052610852565b015160405191829182610364565b5061024e61041c6100ec366100c6565b61043361042e61010e60045460ff1690565b610b1c565b7fa02f9e9e84cc99a78168965468765447ea5d90bf01d61078964695bb27c512d46040518061046384338361119d565b0390a1610474600560005414610b3c565b6104a3610491610482610643565b60208082518301019101610763565b91518015908115610565575b50610b5c565b60c060408201916104b78351431015610b7c565b6104c13415610b9c565b6104dd3360018060a01b036104d68451610358565b1614610bbc565b6104e56107f5565b926104f96104f38351610358565b856107d9565b6105126105096020840151610358565b602086016107d9565b5160408401526105316105286060830151610358565b606085016107d9565b61054a6105416080830151151590565b15156080850152565b60a081015160a08401524382840152015160e0820152610e8b565b9050600154143861049d565b90600182811c921680156105a1575b602083101461058b57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610580565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176105dd57604052565b6105e56105ab565b604052565b602081019081106001600160401b038211176105dd57604052565b60e081019081106001600160401b038211176105dd57604052565b601f909101601f19168101906001600160401b038211908210176105dd57604052565b604051906000826002549161065783610571565b8083526001938085169081156106cd575060011461067f575b5061067d92500383610620565b565b600260009081526000805160206112d783398151915294602093509091905b8183106106b557505061067d935082010138610670565b8554888401850152948501948794509183019161069e565b905061067d94506020925060ff191682840152151560051b82010138610670565b604051906106fb826105c2565b60006020838281520152565b60405190610714826105c2565b816000815260206107236106ee565b910152565b60405190610735826105ea565b8161073e6106ee565b9052565b51906001600160a01b03821682036100d757565b519081151582036100d757565b908160e09103126100d75760c06040519161077d83610605565b61078681610742565b835261079460208201610742565b6020840152604081015160408401526107af60608201610742565b60608401526107c060808201610756565b608084015260a081015160a0840152015160c082015290565b6001600160a01b039091169052565b506040513d6000823e3d90fd5b6040519061010082016001600160401b03811183821017610845575b6040528160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b61084d6105ab565b610811565b61085a610728565b61087161086c61010e60045460ff1690565b610bdc565b60408051338152835160208083019190915284015151918101919091527f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc190606090a160006108c36005825414610bfc565b6108cb610643565b926108e0602094858082518301019101610763565b946108f682518015908115610a50575b50610c1c565b84604087019261090884514310610c3c565b01938451519161091e60a0890193845110610c5c565b61092b8651513414610c7c565b86606089019261094561093e8551610358565b82516107d9565b845182825101527f216835c7eea22b69307d3475736ebcdcdf48107212d1da49fbb21ab3a8f74e4461097e825160405191829182610364565b0390a1519101526080870151156109fd5750509161067d949160c0936109cd6109a56107f5565b966109b96109b38751610358565b896107d9565b6109c581870151610358565b9088016107d9565b5160408601526109e033606087016107d9565b6080850152515160a08401524382840152015160e0820152610e8b565b918380808061067d9a9795610a1d610a1860c09b9951610358565b610358565b905190828215610a47575bf115610a3a575b6109cd6109a56107f5565b610a426107e8565b610a2f565b506108fc610a28565b905060015414386108f0565b15610a6357565b60405163100960cb60e01b8152600a6004820152602490fd5b15610a8357565b60405163100960cb60e01b8152600b6004820152602490fd5b15610aa357565b60405163100960cb60e01b8152600c6004820152602490fd5b15610ac357565b60405163100960cb60e01b8152600d6004820152602490fd5b15610ae357565b60405163100960cb60e01b8152600e6004820152602490fd5b15610b0357565b60405163100960cb60e01b8152600f6004820152602490fd5b15610b2357565b60405163100960cb60e01b815260166004820152602490fd5b15610b4357565b60405163100960cb60e01b815260176004820152602490fd5b15610b6357565b60405163100960cb60e01b815260186004820152602490fd5b15610b8357565b60405163100960cb60e01b815260196004820152602490fd5b15610ba357565b60405163100960cb60e01b8152601a6004820152602490fd5b15610bc357565b60405163100960cb60e01b8152601b6004820152602490fd5b15610be357565b60405163100960cb60e01b815260106004820152602490fd5b15610c0357565b60405163100960cb60e01b815260116004820152602490fd5b15610c2357565b60405163100960cb60e01b815260126004820152602490fd5b15610c4357565b60405163100960cb60e01b815260136004820152602490fd5b15610c6357565b60405163100960cb60e01b815260146004820152602490fd5b15610c8357565b60405163100960cb60e01b815260156004820152602490fd5b818110610ca7575050565b60008155600101610c9c565b610cbe600254610571565b80610cc65750565b601f8111600114610cd957506000600255565b6002600052610d1e90601f0160051c6000805160206112d7833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610c9c565b6000602081208160025555565b60405190610d3882610605565b8160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b90601f8211610d70575050565b61067d9160026000526020600020906020601f840160051c83019310610d9e575b601f0160051c0190610c9c565b9091508190610d91565b80519091906001600160401b038111610e7e575b610dd081610dcb600254610571565b610d63565b602080601f8311600114610e0c5750819293600092610e01575b50508160011b916000199060031b1c191617600255565b015190503880610dea565b6002600052601f198316949091906000805160206112d7833981519152926000905b878210610e66575050836001959610610e4d575b505050811b01600255565b015160001960f88460031b161c19169055388080610e42565b80600185968294968601518155019501930190610e2e565b610e866105ab565b610dbc565b60e0810151604082018051909111610f8d57610f88610f7a9160c061067d94610eb2610d2b565b92610ec06104f38351610358565b610ed06105096020840151610358565b516040840152610ee66105286060830151610358565b610ef66105416080830151151590565b60a081015160a0840152015160c0820152610f116005600055565b610f1a43600155565b6040519283916020830191909160c08060e083019460018060a01b0380825116855280602083015116602086015260408201516040860152606082015116606085015260808101511515608085015260a081015160a08501520151910152565b03601f198101835282610620565b610da8565b50610fbc610f9e6020830151610358565b60608301516001600160a01b0390610fb590610358565b1690611029565b608081015115610fdd575060008055610fd56000600155565b61067d610cb3565b600080808360a0610ff2610a18849751610358565b91015190828215611020575bf115611013575b60008055610fd56000600155565b61101b6107e8565b611005565b506108fc610ffe565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152600160448084019190915282526110a79360009384939092918491608081016001600160401b038111828210176110ae575b6040525193165af16110976110906110bb565b809261111f565b5060208082518301019101611108565b156100d757565b6110b66105ab565b61107d565b3d15611103573d906001600160401b0382116110f6575b604051916110ea601f8201601f191660200184610620565b82523d6000602084013e565b6110fe6105ab565b6110d2565b606090565b908160209103126100d75761111c90610756565b90565b156111275790565b80511561113657805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156111575790565b80511561116657805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b91908260209103126100d757604051611197816105ea565b91358252565b6001600160a01b0390911681529051602082015260400190565b908160a09103126100d7576040519060809060a083016001600160401b0381118482101761121d575b6040526111ec81610742565b83526111fa60208201610742565b602084015260408101516040840152606081015160608401520151608082015290565b6112256105ab565b6111e0565b919082019182811161123e5782106100d757565b634e487b7160e01b600052601160045260246000fd5b6040516323b872dd60e01b602082019081526001600160a01b0392831660248301523060448301526001606480840191909152825261111c93600093849391929184919060a081016001600160401b038111828210176112c9575b6040525193165af16110976112c26110bb565b809261114f565b6112d16105ab565b6112af56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 5829,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:24:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:57:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:57:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:33:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bidder_bid": Bidder_bid,
  "Creator": Creator
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid
    }
  };
