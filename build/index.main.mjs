// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '500'));
  const ctc3 = stdlib.T_Struct([['name', ctc1], ['url', ctc2], ['addr', ctc0]]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc9
    });
  const map0_ctc = ctc10;
  
  
  return {
    infos: {
      BeautyQueens: {
        first: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v668, v669, v670, v671, v672, v673, v674, v675, v676, v677, v678, v679, v708] = svs;
              return (await ((async () => {
                
                
                return v669;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v668, v669, v670, v671, v673, v675, v677, v799, v800] = svs;
              return (await ((async () => {
                
                
                return v669;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v668, v669, v670, v671, v673, v675, v677, v787, v788, v789, v790, v791, v792, v799, v800] = svs;
              return (await ((async () => {
                
                
                return v669;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          },
        second: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v668, v669, v670, v671, v672, v673, v674, v675, v676, v677, v678, v679, v708] = svs;
              return (await ((async () => {
                
                
                return v670;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v668, v669, v670, v671, v673, v675, v677, v799, v800] = svs;
              return (await ((async () => {
                
                
                return v670;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v668, v669, v670, v671, v673, v675, v677, v787, v788, v789, v790, v791, v792, v799, v800] = svs;
              return (await ((async () => {
                
                
                return v670;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          },
        third: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v668, v669, v670, v671, v672, v673, v674, v675, v676, v677, v678, v679, v708] = svs;
              return (await ((async () => {
                
                
                return v671;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v668, v669, v670, v671, v673, v675, v677, v799, v800] = svs;
              return (await ((async () => {
                
                
                return v671;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v668, v669, v670, v671, v673, v675, v677, v787, v788, v789, v790, v791, v792, v799, v800] = svs;
              return (await ((async () => {
                
                
                return v671;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          }
        }
      },
    views: {
      1: [ctc0, ctc3, ctc3, ctc3, ctc4, ctc5, ctc4, ctc5, ctc4, ctc5, ctc4, ctc4, ctc8],
      3: [ctc0, ctc3, ctc3, ctc3, ctc5, ctc5, ctc5, ctc8, ctc4],
      5: [ctc0, ctc3, ctc3, ctc3, ctc5, ctc5, ctc5, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc8, ctc4]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Judge(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Judge expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Judge expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '500'));
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Struct([['name', ctc3], ['url', ctc4], ['addr', ctc5]]);
  const ctc7 = stdlib.T_Tuple([ctc6, ctc6, ctc6]);
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Tuple([ctc8, ctc2, ctc8, ctc2, ctc8, ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc5, ctc2, ctc2, ctc2]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc5, ctc5, ctc5]);
  const ctc14 = stdlib.T_Tuple([ctc2, ctc2, ctc11]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v616 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v617 = [v616, v616, v616];
  const v621 = stdlib.protect(ctc2, interact.deadline, 'for Judge\'s interact field deadline');
  
  const v624 = stdlib.protect(ctc7, await interact.getFinalists(), {
    at: './index.rsh:28:92:application',
    fs: ['at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: 'getFinalists',
    who: 'Judge'
    });
  const v625 = v624[stdlib.checkedBigNumberify('./index.rsh:28:92:application', stdlib.UInt_max, '0')];
  const v626 = v624[stdlib.checkedBigNumberify('./index.rsh:28:92:application', stdlib.UInt_max, '1')];
  const v627 = v624[stdlib.checkedBigNumberify('./index.rsh:28:92:application', stdlib.UInt_max, '2')];
  const v640 = stdlib.protect(ctc9, await interact.prizes(), {
    at: './index.rsh:31:108:application',
    fs: ['at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: 'prizes',
    who: 'Judge'
    });
  const v641 = v640[stdlib.checkedBigNumberify('./index.rsh:31:108:application', stdlib.UInt_max, '0')];
  const v642 = v640[stdlib.checkedBigNumberify('./index.rsh:31:108:application', stdlib.UInt_max, '1')];
  const v643 = v640[stdlib.checkedBigNumberify('./index.rsh:31:108:application', stdlib.UInt_max, '2')];
  const v644 = v640[stdlib.checkedBigNumberify('./index.rsh:31:108:application', stdlib.UInt_max, '3')];
  const v645 = v640[stdlib.checkedBigNumberify('./index.rsh:31:108:application', stdlib.UInt_max, '4')];
  const v646 = v640[stdlib.checkedBigNumberify('./index.rsh:31:108:application', stdlib.UInt_max, '5')];
  const v653 = stdlib.tokenEq(v641, v643);
  const v654 = v653 ? false : true;
  stdlib.assert(v654, {
    at: './index.rsh:33:11:application',
    fs: ['at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v655 = stdlib.tokenEq(v643, v645);
  const v656 = v655 ? false : true;
  stdlib.assert(v656, {
    at: './index.rsh:34:11:application',
    fs: ['at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v657 = stdlib.tokenEq(v641, v645);
  const v658 = v657 ? false : true;
  stdlib.assert(v658, {
    at: './index.rsh:35:11:application',
    fs: ['at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v659 = stdlib.eq(v642, stdlib.checkedBigNumberify('./index.rsh:37:23:decimal', stdlib.UInt_max, '0'));
  const v660 = v659 ? false : true;
  stdlib.assert(v660, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:37:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v662 = stdlib.eq(v644, stdlib.checkedBigNumberify('./index.rsh:38:24:decimal', stdlib.UInt_max, '0'));
  const v663 = v662 ? false : true;
  stdlib.assert(v663, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v665 = stdlib.eq(v646, stdlib.checkedBigNumberify('./index.rsh:39:23:decimal', stdlib.UInt_max, '0'));
  const v666 = v665 ? false : true;
  stdlib.assert(v666, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:39:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v625, v626, v627, v621, v641, v642, v643, v644, v645, v646],
    evt_cnt: 10,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc6, ctc6, ctc2, ctc8, ctc2, ctc8, ctc2, ctc8, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v669, v670, v671, v672, v673, v674, v675, v676, v677, v678], secs: v680, time: v679, didSend: v136, from: v668 } = txn1;
      
      const v689 = v617[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '0')];
      const v691 = v689[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '1')];
      const v692 = v689[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '2')];
      const v693 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v691, v692];
      const v694 = stdlib.Array_set(v617, stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '0'), v693);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v673
        });
      const v696 = v694[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '1')];
      const v698 = v696[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '1')];
      const v699 = v696[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '2')];
      const v700 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v698, v699];
      const v701 = stdlib.Array_set(v694, stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '1'), v700);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v675
        });
      const v703 = v701[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '2')];
      const v705 = v703[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '1')];
      const v706 = v703[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '2')];
      const v707 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v705, v706];
      const v708 = stdlib.Array_set(v701, stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '2'), v707);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v677
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc6, ctc6, ctc2, ctc8, ctc2, ctc8, ctc2, ctc8, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v669, v670, v671, v672, v673, v674, v675, v676, v677, v678], secs: v680, time: v679, didSend: v136, from: v668 } = txn1;
  const v681 = stdlib.tokenEq(v673, v675);
  const v683 = stdlib.tokenEq(v673, v677);
  const v684 = v683 ? false : true;
  const v685 = v681 ? false : v684;
  const v686 = stdlib.tokenEq(v675, v677);
  const v687 = v686 ? false : true;
  const v688 = v685 ? v687 : false;
  stdlib.assert(v688, {
    at: './index.rsh:42:9:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Judge'
    });
  const v689 = v617[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '0')];
  const v691 = v689[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '1')];
  const v692 = v689[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '2')];
  const v693 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v691, v692];
  const v694 = stdlib.Array_set(v617, stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '0'), v693);
  ;
  const v696 = v694[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '1')];
  const v698 = v696[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '1')];
  const v699 = v696[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '2')];
  const v700 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v698, v699];
  const v701 = stdlib.Array_set(v694, stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '1'), v700);
  ;
  const v703 = v701[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '2')];
  const v705 = v703[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '1')];
  const v706 = v703[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '2')];
  const v707 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v705, v706];
  const v708 = stdlib.Array_set(v701, stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '2'), v707);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v668, v669, v670, v671, v672, v673, v674, v675, v676, v677, v678, v679, v708],
    evt_cnt: 0,
    funcNum: 1,
    lct: v679,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '0'), [[v674, v673], [v676, v675], [v678, v677]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v739, time: v738, didSend: v204, from: v737 } = txn2;
      
      ;
      const v758 = v708[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '0')];
      const v759 = v758[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '0')];
      const v760 = stdlib.add(v759, v674);
      const v763 = v758[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '1')];
      const v764 = v758[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '2')];
      const v765 = [v760, v763, v764];
      const v766 = stdlib.Array_set(v708, stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '0'), v765);
      sim_r.txns.push({
        amt: v674,
        kind: 'to',
        tok: v673
        });
      const v767 = v766[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '1')];
      const v768 = v767[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '0')];
      const v769 = stdlib.add(v768, v676);
      const v772 = v767[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '1')];
      const v773 = v767[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '2')];
      const v774 = [v769, v772, v773];
      const v775 = stdlib.Array_set(v766, stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '1'), v774);
      sim_r.txns.push({
        amt: v676,
        kind: 'to',
        tok: v675
        });
      const v776 = v775[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '2')];
      const v777 = v776[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '0')];
      const v778 = stdlib.add(v777, v678);
      const v781 = v776[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '1')];
      const v782 = v776[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '2')];
      const v783 = [v778, v781, v782];
      const v784 = stdlib.Array_set(v775, stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '2'), v783);
      sim_r.txns.push({
        amt: v678,
        kind: 'to',
        tok: v677
        });
      const v787 = stdlib.add(v679, v672);
      const v788 = stdlib.checkedBigNumberify('./index.rsh:56:80:decimal', stdlib.UInt_max, '0');
      const v789 = stdlib.checkedBigNumberify('./index.rsh:56:83:decimal', stdlib.UInt_max, '0');
      const v790 = stdlib.checkedBigNumberify('./index.rsh:56:85:decimal', stdlib.UInt_max, '0');
      const v791 = stdlib.checkedBigNumberify('./index.rsh:54:22:decimal', stdlib.UInt_max, '10');
      const v792 = stdlib.checkedBigNumberify('./index.rsh:56:65:decimal', stdlib.UInt_max, '0');
      const v793 = v738;
      const v799 = v784;
      const v800 = stdlib.checkedBigNumberify('./index.rsh:25:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v809 = stdlib.lt(v792, v791);
        
        return v809;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc6, ctc6, ctc6, ctc2, ctc8, ctc2, ctc8, ctc2, ctc8, ctc2, ctc2, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v739, time: v738, didSend: v204, from: v737 } = txn2;
  ;
  const v758 = v708[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '0')];
  const v759 = v758[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '0')];
  const v760 = stdlib.add(v759, v674);
  const v763 = v758[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '1')];
  const v764 = v758[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '2')];
  const v765 = [v760, v763, v764];
  const v766 = stdlib.Array_set(v708, stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '0'), v765);
  ;
  const v767 = v766[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '1')];
  const v768 = v767[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '0')];
  const v769 = stdlib.add(v768, v676);
  const v772 = v767[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '1')];
  const v773 = v767[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '2')];
  const v774 = [v769, v772, v773];
  const v775 = stdlib.Array_set(v766, stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '1'), v774);
  ;
  const v776 = v775[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '2')];
  const v777 = v776[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '0')];
  const v778 = stdlib.add(v777, v678);
  const v781 = v776[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '1')];
  const v782 = v776[stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '2')];
  const v783 = [v778, v781, v782];
  const v784 = stdlib.Array_set(v775, stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '2'), v783);
  ;
  const v785 = stdlib.addressEq(v668, v737);
  stdlib.assert(v785, {
    at: './index.rsh:51:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Judge'
    });
  const v787 = stdlib.add(v679, v672);
  let v788 = stdlib.checkedBigNumberify('./index.rsh:56:80:decimal', stdlib.UInt_max, '0');
  let v789 = stdlib.checkedBigNumberify('./index.rsh:56:83:decimal', stdlib.UInt_max, '0');
  let v790 = stdlib.checkedBigNumberify('./index.rsh:56:85:decimal', stdlib.UInt_max, '0');
  let v791 = stdlib.checkedBigNumberify('./index.rsh:54:22:decimal', stdlib.UInt_max, '10');
  let v792 = stdlib.checkedBigNumberify('./index.rsh:56:65:decimal', stdlib.UInt_max, '0');
  let v793 = v738;
  let v799 = v784;
  let v800 = stdlib.checkedBigNumberify('./index.rsh:25:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v809 = stdlib.lt(v792, v791);
    
    return v809;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc10],
      timeoutAt: ['time', v787],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc12],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v900], secs: v902, time: v901, didSend: v469, from: v899 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v903 = true;
      await txn4.getOutput('Voters_timeUp', 'v903', ctc11, v903);
      const cv788 = v788;
      const cv789 = v789;
      const cv790 = v790;
      const cv791 = v791;
      const cv792 = v792;
      const cv793 = v901;
      const cv799 = v799;
      const cv800 = v800;
      
      v788 = cv788;
      v789 = cv789;
      v790 = cv790;
      v791 = cv791;
      v792 = cv792;
      v793 = cv793;
      v799 = cv799;
      v800 = cv800;
      
      continue;
      }
    else {
      const {data: [v850], secs: v852, time: v851, didSend: v397, from: v849 } = txn3;
      undefined /* setApiDetails */;
      const v854 = v850[stdlib.checkedBigNumberify('./index.rsh:59:10:spread', stdlib.UInt_max, '0')];
      const v855 = v850[stdlib.checkedBigNumberify('./index.rsh:59:10:spread', stdlib.UInt_max, '1')];
      const v856 = v850[stdlib.checkedBigNumberify('./index.rsh:59:10:spread', stdlib.UInt_max, '2')];
      const v857 = v850[stdlib.checkedBigNumberify('./index.rsh:59:10:spread', stdlib.UInt_max, '3')];
      const v858 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v854), null);
      let v859;
      switch (v858[0]) {
        case 'None': {
          const v860 = v858[1];
          v859 = false;
          
          break;
          }
        case 'Some': {
          const v861 = v858[1];
          v859 = true;
          
          break;
          }
        }
      const v862 = v859 ? false : true;
      stdlib.assert(v862, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:60:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:62:application call to [unknown function] (defined at: ./index.rsh:59:62:function exp)', 'at ./index.rsh:59:62:application call to [unknown function] (defined at: ./index.rsh:59:62:function exp)'],
        msg: 'You have already voted',
        who: 'Judge'
        });
      ;
      let v871;
      switch (v858[0]) {
        case 'None': {
          const v872 = v858[1];
          v871 = false;
          
          break;
          }
        case 'Some': {
          const v873 = v858[1];
          v871 = true;
          
          break;
          }
        }
      const v874 = v871 ? false : true;
      stdlib.assert(v874, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:60:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:62:22:application call to [unknown function] (defined at: ./index.rsh:62:22:function exp)'],
        msg: 'You have already voted',
        who: 'Judge'
        });
      const v880 = true;
      await txn3.getOutput('Voters_voteBeautyQueen', 'v880', ctc11, v880);
      await stdlib.mapSet(map0, v854, null);
      const v891 = stdlib.add(v792, stdlib.checkedBigNumberify('./index.rsh:66:23:decimal', stdlib.UInt_max, '1'));
      const v892 = stdlib.add(v788, v855);
      const v893 = stdlib.add(v789, v856);
      const v894 = stdlib.add(v790, v857);
      const cv788 = v892;
      const cv789 = v893;
      const cv790 = v894;
      const cv791 = v791;
      const cv792 = v891;
      const cv793 = v851;
      const cv799 = v799;
      const cv800 = v800;
      
      v788 = cv788;
      v789 = cv789;
      v790 = cv790;
      v791 = cv791;
      v792 = cv792;
      v793 = cv793;
      v799 = cv799;
      v800 = cv800;
      
      continue;}
    
    }
  const v912 = stdlib.protect(ctc13, await interact.checkVotes(v788, v789, v790), {
    at: './index.rsh:79:84:application',
    fs: ['at ./index.rsh:78:13:application call to [unknown function] (defined at: ./index.rsh:78:17:function exp)'],
    msg: 'checkVotes',
    who: 'Judge'
    });
  const v913 = v912[stdlib.checkedBigNumberify('./index.rsh:79:84:application', stdlib.UInt_max, '0')];
  const v914 = v912[stdlib.checkedBigNumberify('./index.rsh:79:84:application', stdlib.UInt_max, '1')];
  const v915 = v912[stdlib.checkedBigNumberify('./index.rsh:79:84:application', stdlib.UInt_max, '2')];
  const v919 = stdlib.addressEq(v913, v914);
  const v920 = v919 ? false : true;
  stdlib.assert(v920, {
    at: './index.rsh:81:11:application',
    fs: ['at ./index.rsh:78:13:application call to [unknown function] (defined at: ./index.rsh:78:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v921 = stdlib.addressEq(v914, v915);
  const v922 = v921 ? false : true;
  stdlib.assert(v922, {
    at: './index.rsh:82:11:application',
    fs: ['at ./index.rsh:78:13:application call to [unknown function] (defined at: ./index.rsh:78:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v923 = stdlib.addressEq(v913, v915);
  const v924 = v923 ? false : true;
  stdlib.assert(v924, {
    at: './index.rsh:83:11:application',
    fs: ['at ./index.rsh:78:13:application call to [unknown function] (defined at: ./index.rsh:78:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v668, v669, v670, v671, v673, v675, v677, v799, v800, v913, v914, v915],
    evt_cnt: 3,
    funcNum: 3,
    lct: v793,
    onlyIf: true,
    out_tys: [ctc5, ctc5, ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:86:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v926, v927, v928], secs: v930, time: v929, didSend: v503, from: v925 } = txn3;
      
      ;
      const v932 = v799[stdlib.checkedBigNumberify('./index.rsh:90:19:application', stdlib.UInt_max, '0')];
      const v933 = v932[stdlib.checkedBigNumberify('./index.rsh:90:19:application', stdlib.UInt_max, '0')];
      const v939 = stdlib.sub(v933, v933);
      const v942 = v932[stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '1')];
      const v943 = v932[stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '2')];
      const v944 = [v939, v942, v943];
      const v945 = stdlib.Array_set(v799, stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '0'), v944);
      sim_r.txns.push({
        kind: 'from',
        to: v926,
        tok: v673
        });
      const v946 = v945[stdlib.checkedBigNumberify('./index.rsh:91:19:application', stdlib.UInt_max, '1')];
      const v947 = v946[stdlib.checkedBigNumberify('./index.rsh:91:19:application', stdlib.UInt_max, '0')];
      const v953 = stdlib.sub(v947, v947);
      const v956 = v946[stdlib.checkedBigNumberify('./index.rsh:91:49:application', stdlib.UInt_max, '1')];
      const v957 = v946[stdlib.checkedBigNumberify('./index.rsh:91:49:application', stdlib.UInt_max, '2')];
      const v958 = [v953, v956, v957];
      const v959 = stdlib.Array_set(v945, stdlib.checkedBigNumberify('./index.rsh:91:49:application', stdlib.UInt_max, '1'), v958);
      sim_r.txns.push({
        kind: 'from',
        to: v927,
        tok: v675
        });
      const v960 = v959[stdlib.checkedBigNumberify('./index.rsh:92:19:application', stdlib.UInt_max, '2')];
      const v961 = v960[stdlib.checkedBigNumberify('./index.rsh:92:19:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v928,
        tok: v677
        });
      sim_r.txns.push({
        kind: 'from',
        to: v668,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v677
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v675
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v673
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc6, ctc6, ctc6, ctc8, ctc8, ctc8, ctc15, ctc2, ctc5, ctc5, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v926, v927, v928], secs: v930, time: v929, didSend: v503, from: v925 } = txn3;
  ;
  const v931 = stdlib.addressEq(v668, v925);
  stdlib.assert(v931, {
    at: './index.rsh:86:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Judge'
    });
  const v932 = v799[stdlib.checkedBigNumberify('./index.rsh:90:19:application', stdlib.UInt_max, '0')];
  const v933 = v932[stdlib.checkedBigNumberify('./index.rsh:90:19:application', stdlib.UInt_max, '0')];
  const v939 = stdlib.sub(v933, v933);
  const v942 = v932[stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '1')];
  const v943 = v932[stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '2')];
  const v944 = [v939, v942, v943];
  const v945 = stdlib.Array_set(v799, stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '0'), v944);
  ;
  const v946 = v945[stdlib.checkedBigNumberify('./index.rsh:91:19:application', stdlib.UInt_max, '1')];
  const v947 = v946[stdlib.checkedBigNumberify('./index.rsh:91:19:application', stdlib.UInt_max, '0')];
  const v953 = stdlib.sub(v947, v947);
  const v956 = v946[stdlib.checkedBigNumberify('./index.rsh:91:49:application', stdlib.UInt_max, '1')];
  const v957 = v946[stdlib.checkedBigNumberify('./index.rsh:91:49:application', stdlib.UInt_max, '2')];
  const v958 = [v953, v956, v957];
  const v959 = stdlib.Array_set(v945, stdlib.checkedBigNumberify('./index.rsh:91:49:application', stdlib.UInt_max, '1'), v958);
  ;
  const v960 = v959[stdlib.checkedBigNumberify('./index.rsh:92:19:application', stdlib.UInt_max, '2')];
  const v961 = v960[stdlib.checkedBigNumberify('./index.rsh:92:19:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  
  
  };
export async function _Voters_timeUp5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_timeUp5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_timeUp5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '500'));
  const ctc5 = stdlib.T_Struct([['name', ctc3], ['url', ctc4], ['addr', ctc2]]);
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v668, v669, v670, v671, v673, v675, v677, v787, v788, v789, v790, v791, v792, v799, v800] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc5, ctc5, ctc5, ctc6, ctc6, ctc6, ctc7, ctc7, ctc7, ctc7, ctc7, ctc7, ctc10, ctc7]);
  const v898 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:71:9:application',
    fs: ['at ./index.rsh:71:9:application call to [unknown function] (defined at: ./index.rsh:71:9:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Voters_timeUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v668, v669, v670, v671, v673, v675, v677, v787, v788, v789, v790, v791, v792, v799, v800, v898],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v900], secs: v902, time: v901, didSend: v469, from: v899 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voters_timeUp"
        });
      ;
      const v903 = true;
      const v904 = await txn1.getOutput('Voters_timeUp', 'v903', ctc8, v903);
      
      const v1245 = v788;
      const v1246 = v789;
      const v1247 = v790;
      const v1248 = v791;
      const v1249 = v792;
      const v1251 = v799;
      const v1252 = v800;
      const v1253 = stdlib.lt(v792, v791);
      if (v1253) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc5, ctc5, ctc5, ctc6, ctc6, ctc6, ctc7, ctc7, ctc7, ctc7, ctc7, ctc7, ctc10, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v900], secs: v902, time: v901, didSend: v469, from: v899 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v903 = true;
  const v904 = await txn1.getOutput('Voters_timeUp', 'v903', ctc8, v903);
  stdlib.protect(ctc0, await interact.out(v900, v904), {
    at: './index.rsh:71:9:application',
    fs: ['at ./index.rsh:71:9:application call to [unknown function] (defined at: ./index.rsh:71:9:function exp)', 'at ./index.rsh:72:10:application call to "k" (defined at: ./index.rsh:71:9:function exp)', 'at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)'],
    msg: 'out',
    who: 'Voters_timeUp'
    });
  
  const v1245 = v788;
  const v1246 = v789;
  const v1247 = v790;
  const v1248 = v791;
  const v1249 = v792;
  const v1251 = v799;
  const v1252 = v800;
  const v1253 = stdlib.lt(v792, v791);
  if (v1253) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function _Voters_voteBeautyQueen5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_voteBeautyQueen5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_voteBeautyQueen5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '500'));
  const ctc5 = stdlib.T_Struct([['name', ctc3], ['url', ctc4], ['addr', ctc2]]);
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Tuple([ctc2, ctc7, ctc7, ctc7]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v668, v669, v670, v671, v673, v675, v677, v787, v788, v789, v790, v791, v792, v799, v800] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc5, ctc5, ctc5, ctc6, ctc6, ctc6, ctc7, ctc7, ctc7, ctc7, ctc7, ctc7, ctc10, ctc7]);
  const v816 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:59:62:application call to [unknown function] (defined at: ./index.rsh:59:62:function exp)', 'at ./index.rsh:59:62:application call to [unknown function] (defined at: ./index.rsh:59:62:function exp)'],
    msg: 'in',
    who: 'Voters_voteBeautyQueen'
    });
  const v817 = v816[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v825 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v817), null);
  let v826;
  switch (v825[0]) {
    case 'None': {
      const v827 = v825[1];
      v826 = false;
      
      break;
      }
    case 'Some': {
      const v828 = v825[1];
      v826 = true;
      
      break;
      }
    }
  const v829 = v826 ? false : true;
  stdlib.assert(v829, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:62:application call to [unknown function] (defined at: ./index.rsh:59:62:function exp)', 'at ./index.rsh:59:62:application call to [unknown function] (defined at: ./index.rsh:59:62:function exp)'],
    msg: 'You have already voted',
    who: 'Voters_voteBeautyQueen'
    });
  
  let v842;
  switch (v825[0]) {
    case 'None': {
      const v843 = v825[1];
      v842 = false;
      
      break;
      }
    case 'Some': {
      const v844 = v825[1];
      v842 = true;
      
      break;
      }
    }
  const v845 = v842 ? false : true;
  stdlib.assert(v845, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:62:application call to [unknown function] (defined at: ./index.rsh:59:62:function exp)', 'at ./index.rsh:59:62:application call to [unknown function] (defined at: ./index.rsh:59:62:function exp)'],
    msg: 'You have already voted',
    who: 'Voters_voteBeautyQueen'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v668, v669, v670, v671, v673, v675, v677, v787, v788, v789, v790, v791, v792, v799, v800, v816],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:62:dot', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v850], secs: v852, time: v851, didSend: v397, from: v849 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voters_voteBeautyQueen"
        });
      const v854 = v850[stdlib.checkedBigNumberify('./index.rsh:59:10:spread', stdlib.UInt_max, '0')];
      const v855 = v850[stdlib.checkedBigNumberify('./index.rsh:59:10:spread', stdlib.UInt_max, '1')];
      const v856 = v850[stdlib.checkedBigNumberify('./index.rsh:59:10:spread', stdlib.UInt_max, '2')];
      const v857 = v850[stdlib.checkedBigNumberify('./index.rsh:59:10:spread', stdlib.UInt_max, '3')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v854), null);
      ;
      const v880 = true;
      const v881 = await txn1.getOutput('Voters_voteBeautyQueen', 'v880', ctc8, v880);
      
      await stdlib.simMapSet(sim_r, 0, v854, null);
      const v891 = stdlib.add(v792, stdlib.checkedBigNumberify('./index.rsh:66:23:decimal', stdlib.UInt_max, '1'));
      const v892 = stdlib.add(v788, v855);
      const v893 = stdlib.add(v789, v856);
      const v894 = stdlib.add(v790, v857);
      const v1278 = v892;
      const v1279 = v893;
      const v1280 = v894;
      const v1281 = v791;
      const v1282 = v891;
      const v1284 = v799;
      const v1285 = v800;
      const v1286 = stdlib.lt(v891, v791);
      if (v1286) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc5, ctc5, ctc5, ctc6, ctc6, ctc6, ctc7, ctc7, ctc7, ctc7, ctc7, ctc7, ctc10, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v850], secs: v852, time: v851, didSend: v397, from: v849 } = txn1;
  undefined /* setApiDetails */;
  const v854 = v850[stdlib.checkedBigNumberify('./index.rsh:59:10:spread', stdlib.UInt_max, '0')];
  const v855 = v850[stdlib.checkedBigNumberify('./index.rsh:59:10:spread', stdlib.UInt_max, '1')];
  const v856 = v850[stdlib.checkedBigNumberify('./index.rsh:59:10:spread', stdlib.UInt_max, '2')];
  const v857 = v850[stdlib.checkedBigNumberify('./index.rsh:59:10:spread', stdlib.UInt_max, '3')];
  const v858 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v854), null);
  let v859;
  switch (v858[0]) {
    case 'None': {
      const v860 = v858[1];
      v859 = false;
      
      break;
      }
    case 'Some': {
      const v861 = v858[1];
      v859 = true;
      
      break;
      }
    }
  const v862 = v859 ? false : true;
  stdlib.assert(v862, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:62:application call to [unknown function] (defined at: ./index.rsh:59:62:function exp)', 'at ./index.rsh:59:62:application call to [unknown function] (defined at: ./index.rsh:59:62:function exp)'],
    msg: 'You have already voted',
    who: 'Voters_voteBeautyQueen'
    });
  ;
  let v871;
  switch (v858[0]) {
    case 'None': {
      const v872 = v858[1];
      v871 = false;
      
      break;
      }
    case 'Some': {
      const v873 = v858[1];
      v871 = true;
      
      break;
      }
    }
  const v874 = v871 ? false : true;
  stdlib.assert(v874, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:62:22:application call to [unknown function] (defined at: ./index.rsh:62:22:function exp)'],
    msg: 'You have already voted',
    who: 'Voters_voteBeautyQueen'
    });
  const v880 = true;
  const v881 = await txn1.getOutput('Voters_voteBeautyQueen', 'v880', ctc8, v880);
  if (v397) {
    stdlib.protect(ctc0, await interact.out(v850, v881), {
      at: './index.rsh:59:11:application',
      fs: ['at ./index.rsh:59:11:application call to [unknown function] (defined at: ./index.rsh:59:11:function exp)', 'at ./index.rsh:63:10:application call to "k" (defined at: ./index.rsh:62:22:function exp)', 'at ./index.rsh:62:22:application call to [unknown function] (defined at: ./index.rsh:62:22:function exp)'],
      msg: 'out',
      who: 'Voters_voteBeautyQueen'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v854, null);
  const v891 = stdlib.add(v792, stdlib.checkedBigNumberify('./index.rsh:66:23:decimal', stdlib.UInt_max, '1'));
  const v892 = stdlib.add(v788, v855);
  const v893 = stdlib.add(v789, v856);
  const v894 = stdlib.add(v790, v857);
  const v1278 = v892;
  const v1279 = v893;
  const v1280 = v894;
  const v1281 = v791;
  const v1282 = v891;
  const v1284 = v799;
  const v1285 = v800;
  const v1286 = stdlib.lt(v891, v791);
  if (v1286) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function Voters_timeUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_timeUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_timeUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Voters_timeUp5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Voters_voteBeautyQueen(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_voteBeautyQueen expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_voteBeautyQueen expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Voters_voteBeautyQueen5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Voters_timeUp()byte`, `Voters_voteBeautyQueen(address,uint64,uint64,uint64)byte`],
    pure: [`BeautyQueens_first()(byte[100],byte[500],address)`, `BeautyQueens_second()(byte[100],byte[500],address)`, `BeautyQueens_third()(byte[100],byte[500],address)`],
    sigs: [`BeautyQueens_first()(byte[100],byte[500],address)`, `BeautyQueens_second()(byte[100],byte[500],address)`, `BeautyQueens_third()(byte[100],byte[500],address)`, `Voters_timeUp()byte`, `Voters_voteBeautyQueen(address,uint64,uint64,uint64)byte`]
    },
  appApproval: `BiAqAH/4BAEFBAMgkAqYBYgPkA+YDwigDzOgjQaoD7APuA/AD8gP/QL8A/sE+gX5BvgH9wj2CfUK9AvzDPIN8Q6huoOYAo+w2qoJx/es0Q6rzdXgAdAPgxDwDyYSAQABAQECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAAiNQAxGEEMXCcRZEkiWzUBIQ1bNQIxGSUSQQAIMQAoKGZCDCk2GgAXSUEDOSI1BCU1BkkhIwxAAhxJISQMQAH/SSElDEAA/CElEkQ0AUkhBgxAAKFJIQQMQABPIQQSRChkKWRQKmRQK2RQJwRkUCcFZFAnBmRQJwdkUCcIZFAnCWRQJwpkUCcLZFAnDGRQJw1kUCcOZFAnD2RQJxBkUEk1AyEHJFg1B0ILsiEGEkQoZClkUCpkUCtkUCcEZFAnBWRQJwZkUCcHZFAnCGRQJwlkUCcKZFAnC2RQJwxkUCcNZFAnDmRQJw9kUEk1AyEHJFg1B0ILZyUSRChkKWRQKmRQK2RQJwRkUCcFZFAnBmRQJwdkUCcIZFAnCWRQJwpkUCcLZFAnDGRQJw1kUCcOZFAnD2RQJxBkUEk1AyEHJFg1B0ILGSEkEkQ0AUkhBgxAAKFJIQQMQABPIQQSRChkKWRQKmRQK2RQJwRkUCcFZFAnBmRQJwdkUCcIZFAnCWRQJwpkUCcLZFAnDGRQJw1kUCcOZFAnD2RQJxBkUEk1AyEIJFg1B0IKtiEGEkQoZClkUCpkUCtkUCcEZFAnBWRQJwZkUCcHZFAnCGRQJwlkUCcKZFAnC2RQJwxkUCcNZFAnDmRQJw9kUEk1AyEIJFg1B0IKayUSRChkKWRQKmRQK2RQJwRkUCcFZFAnBmRQJwdkUCcIZFAnCWRQJwpkUCcLZFAnDGRQJw1kUCcOZFAnD2RQJxBkUEk1AyEIJFg1B0IKHSEjEkQ2GgE2GgJQNhoDUDYaBFBCAgVJISYMQAAJISYSRCcRQgEmgdKi8dUBEkQ0AUkhBgxAAKFJIQQMQABPIQQSRChkKWRQKmRQK2RQJwRkUCcFZFAnBmRQJwdkUCcIZFAnCWRQJwpkUCcLZFAnDGRQJw1kUCcOZFAnD2RQJxBkUEk1AyEJJFg1B0IJkCEGEkQoZClkUCpkUCtkUCcEZFAnBWRQJwZkUCcHZFAnCGRQJwlkUCcKZFAnC2RQJwxkUCcNZFAnDmRQJw9kUEk1AyEJJFg1B0IJRSUSRChkKWRQKmRQK2RQJwRkUCcFZFAnBmRQJwdkUCcIZFAnCWRQJwpkUCcLZFAnDGRQJw1kUCcOZFAnD2RQJxBkUEk1AyEJJFg1B0II9zYaAhc1BDYaAzYaARdJIQYMQAOJSSEFDEAB/EkhBAxAANIhBBJEIQQ0ARJENARJIhJMNAISEUQoZClkUCpkUCtkUCcEZFAnBWRQJwZkUCcHZFAnCGRQJwlkUCcKZFAnC2RQJwxkUCcNZFAnDmRQJw9kUCcQZFBJNQMhDls1/0k1BTX+gARokmRjNP5QsDIGNP8PRIAJAAAAAAAAA4cBsCk1BzQDVwAgNAMhByRYNAMhCSRYNAMhCCRYNAMhCls0AyELWzQDIQxbNP80AyERWzQDIRJbNAMhE1s0AyEUWzQDIRVbMgY0AyEnIQ9YNAMhKFtCBglIIQQ0ARJENARJIhJMNAISEUQoZClkUCpkUCtkUCcEZFAnBWRQJwZkUCcHZFAnCGRQJwlkUCcKZFAnC2RQJwxkUCcNZFAnDmRQJw9kUCcQZFBJNQMhDls1/0k1BTX+gAR6rDAENP5QsDIGNP8MRDT+VwAgNf00/YgHr0k1/CJVQAAGIjX7QgAGJTX7QgAANPsURDT8IlVAAAYiNfpCAAYlNfpCAAA0+hREgAkAAAAAAAADcAGwKTUHNP0oKWY0A1cAIDQDIQckWDQDIQkkWDQDIQgkWDQDIQpbNAMhC1s0AyEMWzT/NAMhEVs0/iEHWwg0AyESWzT+gShbCDQDIRNbNP6BMFsINAMhFFs0AyEVWyUIMgY0AyEnIQ9YNAMhKFtCBOZIIQY0ARJENARJIhJMNAISEUQoZClkUCpkUCtkUCcEZFAnBWRQJwZkUCcHZFAnCGRQJwlkUCcKZFAnC2RQJwxkUCcNZFAnDmRQJw9kUEk1A0lKSVcAIDX/IQpbNf4hC1s1/SEMWzX8IQ4hD1g1+0k1BUlJVwAgNfpXICA1+VdAIDX4gAQVth/LNPpQNPlQNPhQsDT/MQASRDT7VwARSTX3IltJNfZJCRY091cICFA091cQAVA0+1cRIlA19bEisgE09rISIQWyEDT6shQ0/rIRszT1VxERSTX0Ils187EisgE087ISIQWyEDT5shQ0/bIRs7EisgE09VcAETTzSQkWNPRXCAhQNPRXEAFQUDT1VyIRUFciESJbshIhBbIQNPiyFDT8shGzsSKyATQDgdMPW7IIJbIQNP+yB7OxIrIBIrISIQWyEDIJshUyCrIUNPyyEbOxIrIBIrISIQWyEDIJshUyCrIUNP2yEbOxIrIBIrISIQWyEDIJshUyCrIUNP6yEbNCBRFJJQxAAUIlEkQlNAESRDQESSISTDQCEhFEKGQpZFAqZFArZFAnBGRQJwVkUCcGZFAnB2RQJwhkUCcJZFAnCmRQJwtkUCcMZFAnDWRQJw5kUCcPZFAnEGRQSTUDSUpKSlcAIDX/IQtbNf4hDFs1/SEOWzX8IRFbNfshEls1+iETWzX5IRUhD1g1+IAEmouRdLA0+FcAEUk19yJbNP0IFjT3VwgIUDT3VxABUDT4VxEiUDX2NP00/ogE7DT2VxERNfU09lcAETT1Ils0+wgWNPVXCAhQNPVXEAFQUDT2VyIRUDX0NPs0/IgEvDT0VyIRNfM0+TT6iASuNP8xABJENP80AyEHJFg0AyEJJFg0AyEIJFg0/jT8NPo0AyEUWzQDIQpbCCIiIoEKIjIGNPRXACI08yJbNPkIFjTzVwgIUDTzVxABUFAiQgIYSCEQiAQ/IjQBEkQ0BEkiEkw0AhIRREk1BUlKSkpKIiRYNf8kJFg1/oHwCSRYNf2B6A5bNfyB8A5bNfuB+A5bNfqBgA9bNfkhCls1+CELWzX3IQxbNfaABO7T0bA0/1A0/lA0/VA0/BZQNPsWUDT6FlA0+RZQNPgWUDT3FlA09hZQsIERr0k19UlQNPVQNfQ0+zT5EzT7NPcTEDT5NPcTEEQ09FcAETXzIQ2vNPNXCAhQNPNXEAFQNPRXESJQNfIhEIgDgbEisgEishIhBbIQMgqyFDT7shGzNPJXERE18TTyVwARIQ2vNPFXCAhQNPFXEAFQUDTyVyIRUDXwIRCIA0SxIrIBIrISIQWyEDIKshQ0+bIRszTwVyIRNe808FcAIiENrzTvVwgIUDTvVxABUFA17iEQiAMNsSKyASKyEiEFshAyCrIUNPeyEbMxADT/UDT+UDT9UDT8FlA0+xZQNPoWUDT5FlA0+BZQNPcWUDT2FlAyBhZQNO5QKEsBVwB/ZylLAVd/f2cqSwFX/n9nK0sBIRYjWGcnBEsBIRcjWGcnBUsBIRgjWGcnBksBIRkjWGcnB0sBIRojWGcnCEsBIRsjWGcnCUsBIRwjWGcnCksBIR0jWGcnC0sBIR4jWGcnDEsBIR8jWGcnDUsBISAjWGcnDksBISEjWGcnD0sBISIjWGcnEEsBISmBC1hnSCU1ATIGNQJCAc01/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DT8NPsMQQDVNPA08VA08lA081A09BZQNPUWUDT2FlA09xZQNPgWUDT5FlA0+hZQNPsWUDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/f2cqSwFX/n9nK0sBIRYjWGcnBEsBIRcjWGcnBUsBIRgjWGcnBksBIRkjWGcnB0sBIRojWGcnCEsBIRsjWGcnCUsBIRwjWGcnCksBIR0jWGcnC0sBIR4jWGcnDEsBIR8jWGcnDUsBISAjWGcnDksBISEjWGcnD0sBISIjWGcnEEsBISmBG1hnSCEENQEyBjUCQgDQNPA08VA08lA081A09BZQNPUWUDT2FlA0/lA0/xZQKEsBVwB/ZylLAVd/f2cqSwFX/n9nK0sBIRYjWGcnBEsBIRcjWGcnBUsBIRgjWGcnBksBIRkjWGcnB0sBIRojWGcnCEsBIRsjWGcnCUsBIRwjWGcnCksBIR0jWGcnC0sBIR4jWGcnDEsBIR8jWGcnDUsBISAjWGcnDksBISEjWGcnD0sBISKBalhnSCEGNQEyBjUCQgAcMRkhBBJEsSKyASKyCCWyEDIJsgkyCrIHs0IABTEZIhJEJxE0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSUIMgQSRDEWEkQlQzEZIhJEQv/fIjE0EkSBEjE1EkQiMTYSRCUxNxJEIjUBIjUCQv+tSTEYYUAAA0goiShiiTQASUolCDUAOAcyChJEOBAlEkQ4CBJEiTQASUpJJQg1ADgUMgoSRDgQIQUSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 17,
  stateSize: 2059,
  unsupported: [`Step 0 uses 2592 bytes of logs, but the limit is 1024. Step 0 starts at /app/index.rsh:42:9:dot.`],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "name",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem8",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem9",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem10",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem11",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem12",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem13",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem14",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes20",
                        "name": "elem15",
                        "type": "bytes20"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "url",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  }
                ],
                "internalType": "struct T3",
                "name": "v669",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "name",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem8",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem9",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem10",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem11",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem12",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem13",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem14",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes20",
                        "name": "elem15",
                        "type": "bytes20"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "url",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  }
                ],
                "internalType": "struct T3",
                "name": "v670",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "name",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem8",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem9",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem10",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem11",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem12",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem13",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem14",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes20",
                        "name": "elem15",
                        "type": "bytes20"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "url",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  }
                ],
                "internalType": "struct T3",
                "name": "v671",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v672",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v673",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v674",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v675",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v676",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v677",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v678",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "name",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem8",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem9",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem10",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem11",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem12",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem13",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem14",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes20",
                        "name": "elem15",
                        "type": "bytes20"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "url",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  }
                ],
                "internalType": "struct T3",
                "name": "v669",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "name",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem8",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem9",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem10",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem11",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem12",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem13",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem14",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes20",
                        "name": "elem15",
                        "type": "bytes20"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "url",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  }
                ],
                "internalType": "struct T3",
                "name": "v670",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "name",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem8",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem9",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem10",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem11",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem12",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem13",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem14",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes20",
                        "name": "elem15",
                        "type": "bytes20"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "url",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  }
                ],
                "internalType": "struct T3",
                "name": "v671",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v672",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v673",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v674",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v675",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v676",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v677",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v678",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v926",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v927",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v928",
                "type": "address"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem3",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T18",
                "name": "v850",
                "type": "tuple"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v900",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v880",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v903",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "BeautyQueens_first",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes4",
                "name": "elem3",
                "type": "bytes4"
              }
            ],
            "internalType": "struct T1",
            "name": "name",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem4",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem5",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem6",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem7",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem8",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem9",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem10",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem11",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem12",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem13",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem14",
                "type": "bytes32"
              },
              {
                "internalType": "bytes20",
                "name": "elem15",
                "type": "bytes20"
              }
            ],
            "internalType": "struct T2",
            "name": "url",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "internalType": "struct T3",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "BeautyQueens_second",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes4",
                "name": "elem3",
                "type": "bytes4"
              }
            ],
            "internalType": "struct T1",
            "name": "name",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem4",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem5",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem6",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem7",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem8",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem9",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem10",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem11",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem12",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem13",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem14",
                "type": "bytes32"
              },
              {
                "internalType": "bytes20",
                "name": "elem15",
                "type": "bytes20"
              }
            ],
            "internalType": "struct T2",
            "name": "url",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "internalType": "struct T3",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "BeautyQueens_third",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes4",
                "name": "elem3",
                "type": "bytes4"
              }
            ],
            "internalType": "struct T1",
            "name": "name",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem4",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem5",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem6",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem7",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem8",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem9",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem10",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem11",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem12",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem13",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem14",
                "type": "bytes32"
              },
              {
                "internalType": "bytes20",
                "name": "elem15",
                "type": "bytes20"
              }
            ],
            "internalType": "struct T2",
            "name": "url",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "internalType": "struct T3",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Voters_timeUp",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a3",
        "type": "uint256"
      }
    ],
    "name": "Voters_voteBeautyQueen",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v926",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v927",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v928",
                "type": "address"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem3",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T18",
                "name": "v850",
                "type": "tuple"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v900",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162003e2738038062003e27833981016040819052620000269162000b03565b600080554360035562000038620003eb565b7fe08b18c9dd2b3c374eddd0f1ee995bd26ad8605a6adac1b654bcac3f8825890a33836040516200006b92919062000d20565b60405180910390a18051600090819052815160209081018290528251604090810192909252825181840180519190915283518151830152835190519092019190915282015160c08101516080909101516200015c916001600160a01b039182169116146200010e57826020015161010001516001600160a01b03168360200151608001516001600160a01b0316146200010657600162000111565b600062000111565b60005b6200011e57600062000154565b826020015161010001516001600160a01b0316836020015160c001516001600160a01b0316146200015157600162000154565b60005b600a6200033e565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200019e929062000368565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001e4919060019062000368565b60a0820190815260c08201805160009052815160409081015160209081015183519091015282518101518101518251901515910152905190516200022c919060029062000368565b60e08201526200023f3415600b6200033e565b62000249620004b4565b3381526020808401805151828401528051820151604080850191909152815181015160608086019190915282510151608080860191909152825101516001600160a01b0390811660a0808701919091528351015160c08087019190915283510151811660e0808701919091528351810151610100808801919091528451015190911661012080870191909152925190920151610140850152436101608501819052918501516101808501526001600081905591909155516200030e9183910162000e3e565b604051602081830303815290604052600290805190602001906200033492919062000762565b5050505062000f7f565b81620003645760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b62000372620007f1565b60005b6003811015620003c85784816003811062000394576200039462000de2565b6020020151828260038110620003ae57620003ae62000de2565b602002015280620003bf8162000f18565b91505062000375565b5081818460038110620003df57620003df62000de2565b60200201529392505050565b60408051610160810190915260006101008201818152610120830182905261014083019190915281526020810162000422620007f1565b8152604080516060810182526000808252602082810182905292820152910190815260200162000451620007f1565b8152604080516060810182526000808252602082810182905292820152910190815260200162000480620007f1565b81526040805160608101825260008082526020828101829052928201529101908152602001620004af620007f1565b905290565b604080516101a080820183526000808352835160e080820186526060808301848152608080850186905260a080860187905260c0808701889052928652895161020081018b528781526020818101899052818c018990529481018890529182018790528101869052908101859052918201849052610100820184905261012082018490526101408201849052610160820184905261018082018490529381018390526101c081018390526101e08101839052818401529384015290919082019081526020016200063a6040805160e081019091526000606082018181526080830182905260a0830182905260c083019190915281908152604080516102008101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e08201529101908152600060209091015290565b8152602001620007006040805160e081019091526000606082018181526080830182905260a0830182905260c083019190915281908152604080516102008101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e08201529101908152600060209091015290565b81526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001620004af620007f1565b828054620007709062000f42565b90600052602060002090601f016020900481019282620007945760008555620007df565b82601f10620007af57805160ff1916838001178555620007df565b82800160010185558215620007df579182015b82811115620007df578251825591602001919060010190620007c2565b50620007ed9291506200083e565b5090565b60405180606001604052806003905b62000827604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620008005790505090565b5b80821115620007ed57600081556001016200083f565b60405161020081016001600160401b03811182821017156200088757634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b03811182821017156200088757634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200088757634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200088757634e487b7160e01b600052604160045260246000fd5b60405161014081016001600160401b03811182821017156200088757634e487b7160e01b600052604160045260246000fd5b80516001600160601b0319811681146200096b57600080fd5b919050565b600061020082840312156200098457600080fd5b6200098e62000855565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101608083015181830152506101808083015181830152506101a08083015181830152506101c08083015181830152506101e062000a3e81840162000952565b9082015292915050565b80516001600160a01b03811681146200096b57600080fd5b60008183036102a081121562000a7557600080fd5b62000a7f6200088d565b9150608081121562000a9057600080fd5b5062000a9b620008be565b825181526020830151602082015260408301516040820152606083015163ffffffff60e01b8116811462000ace57600080fd5b6060820152815262000ae4836080840162000970565b602082015262000af8610280830162000a48565b604082015292915050565b60008183036108e081121562000b1857600080fd5b62000b22620008ef565b835181526108c080601f198401121562000b3b57600080fd5b62000b4562000920565b925062000b56866020870162000a60565b835262000b68866102c0870162000a60565b602084015262000b7d86610560870162000a60565b6040840152610800850151606084015262000b9c610820860162000a48565b608084015261084085015160a084015262000bbb610860860162000a48565b60c084015261088085015160e084015262000bda6108a0860162000a48565b6101008401529390930151610120820152602083015250919050565b805180518352602081015160208401526040810151604084015263ffffffff60e01b606082015116606084015250602081015180516080840152602081015160a0840152604081015160c0840152606081015160e08401526080810151610100818186015260a08301519150610120828187015260c08401519250610140838188015260e085015193506101608481890152838601519450610180935084848901528286015194506101a0925084838901528186015194506101c091508482890152808601519450506101e08481890152838601516102008901528286015161022089015281860151610240890152808601519550505050505062000d086102608401826001600160601b0319169052565b50604001516001600160a01b03166102809190910152565b60006109008201905060018060a01b038416825282516020830152602083015162000d5060408401825162000bf6565b602081015162000d656102e085018262000bf6565b50604081015162000d7b61058085018262000bf6565b50606081015161082084015260808101516001600160a01b0390811661084085015260a082015161086085015260c0820151811661088085015260e08201516108a0850152610100820151166108c084015261012001516108e09092019190915292915050565b634e487b7160e01b600052603260045260246000fd5b8060005b600381101562000e3857815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000dfc565b50505050565b81516001600160a01b03168152610a208101602083015162000e64602084018262000bf6565b50604083015162000e7a6102c084018262000bf6565b50606083015162000e9061056084018262000bf6565b50608083015161080083015260a08301516001600160a01b0390811661082084015260c084015161084084015260e08401518116610860840152610100840151610880840152610120840151166108a08301526101408301516108c08301526101608301516108e083015261018083015162000f1161090084018262000df8565b5092915050565b600060001982141562000f3b57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000f5757607f821691505b6020821081141562000f7957634e487b7160e01b600052602260045260246000fd5b50919050565b612e988062000f8f6000396000f3fe6080604052600436106100bd5760003560e01c806364996ccf116100795780639171488f116100565780639171488f146101c5578063ab53f2c6146101d8578063ad9fa3d8146101fb578063d4eee77a1461020e57005b806364996ccf146101865780637d29494a1461019b57806383230757146101b057005b806304c888d1146100c65780631daadd84146100d95780631e93b0f1146101045780631f924f28146101235780632c10a159146101465780633bc5b7bf1461015957005b366100c457005b005b6100c46100d436600461214a565b610216565b3480156100e557600080fd5b506100ee610246565b6040516100fb9190612290565b60405180910390f35b34801561011057600080fd5b506003545b6040519081526020016100fb565b6101366101313660046122b4565b610468565b60405190151581526020016100fb565b6100c4610154366004612301565b6104ce565b34801561016557600080fd5b5061017961017436600461231d565b6104fa565b6040516100fb9190612350565b34801561019257600080fd5b506100ee610511565b3480156101a757600080fd5b506100ee610730565b3480156101bc57600080fd5b50600154610115565b6100c46101d3366004612397565b61094f565b3480156101e457600080fd5b506101ed61097b565b6040516100fb9291906123d5565b6100c4610209366004612301565b610a18565b610136610a44565b604080518082019091526000808252602082015261024261023c36849003840184612547565b82610a7c565b5050565b61024e611c51565b6001600054141561030357600060028054610268906125cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610294906125cf565b80156102e15780601f106102b6576101008083540402835291602001916102e1565b820191906000526020600020905b8154815290600101906020018083116102c457829003601f168201915b50505050508060200190518101906102f9919061282f565b6040015192915050565b600360005414156103ae5760006002805461031d906125cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610349906125cf565b80156103965780601f1061036b57610100808354040283529160200191610396565b820191906000526020600020905b81548152906001019060200180831161037957829003601f168201915b50505050508060200190518101906102f99190612919565b60056000541415610459576000600280546103c8906125cf565b80601f01602080910402602001604051908101604052809291908181526020018280546103f4906125cf565b80156104415780601f1061041657610100808354040283529160200191610441565b820191906000526020600020905b81548152906001019060200180831161042457829003601f168201915b50505050508060200190518101906102f991906129d4565b61046560006008610e7b565b90565b6000610472611d0e565b60208082018051516001600160a01b03891690528051518201879052805151604090810187905290515160600185905280518082019091526000808252918101919091526104c08282610a7c565b602001519695505050505050565b60408051808201909152600080825260208201526102426104f436849003840184612ad7565b82610ea1565b610502611d53565b61050b8261123f565b92915050565b610519611c51565b600160005414156105ce57600060028054610533906125cf565b80601f016020809104026020016040519081016040528092919081815260200182805461055f906125cf565b80156105ac5780601f10610581576101008083540402835291602001916105ac565b820191906000526020600020905b81548152906001019060200180831161058f57829003601f168201915b50505050508060200190518101906105c4919061282f565b6020015192915050565b60036000541415610679576000600280546105e8906125cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610614906125cf565b80156106615780601f1061063657610100808354040283529160200191610661565b820191906000526020600020905b81548152906001019060200180831161064457829003601f168201915b50505050508060200190518101906105c49190612919565b6005600054141561072457600060028054610693906125cf565b80601f01602080910402602001604051908101604052809291908181526020018280546106bf906125cf565b801561070c5780601f106106e15761010080835404028352916020019161070c565b820191906000526020600020905b8154815290600101906020018083116106ef57829003601f168201915b50505050508060200190518101906105c491906129d4565b61046560006007610e7b565b610738611c51565b600160005414156107ed57600060028054610752906125cf565b80601f016020809104026020016040519081016040528092919081815260200182805461077e906125cf565b80156107cb5780601f106107a0576101008083540402835291602001916107cb565b820191906000526020600020905b8154815290600101906020018083116107ae57829003601f168201915b50505050508060200190518101906107e3919061282f565b6060015192915050565b6003600054141561089857600060028054610807906125cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610833906125cf565b80156108805780601f1061085557610100808354040283529160200191610880565b820191906000526020600020905b81548152906001019060200180831161086357829003601f168201915b50505050508060200190518101906107e39190612919565b60056000541415610943576000600280546108b2906125cf565b80601f01602080910402602001604051908101604052809291908181526020018280546108de906125cf565b801561092b5780601f106109005761010080835404028352916020019161092b565b820191906000526020600020905b81548152906001019060200180831161090e57829003601f168201915b50505050508060200190518101906107e391906129d4565b61046560006009610e7b565b604080518082019091526000808252602082015261024261097536849003840184612b0f565b82611303565b600060606000546002808054610990906125cf565b80601f01602080910402602001604051908101604052809291908181526020018280546109bc906125cf565b8015610a095780601f106109de57610100808354040283529160200191610a09565b820191906000526020600020905b8154815290600101906020018083116109ec57829003601f168201915b50505050509050915091509091565b6040805180820190915260008082526020820152610242610a3e36849003840184612b8f565b826115c2565b6000610a4e611d76565b6020808201516000908190526040805180820190915281815291820152610a7582826115c2565b5192915050565b610a8c600560005414601a610e7b565b8151610aa7901580610aa057508251600154145b601b610e7b565b600080805560028054610ab9906125cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610ae5906125cf565b8015610b325780601f10610b0757610100808354040283529160200191610b32565b820191906000526020600020905b815481529060010190602001808311610b1557829003601f168201915b5050505050806020019051810190610b4a91906129d4565b9050610b54611da0565b610b658260e001514310601c610e7b565b604080513381528551602080830191909152808701515180516001600160a01b03168385015290810151606080840191909152818401516080840152015160a082015290517f2c6296f072d8324f766bb50c3dcc6e4f906f10ce4bfaad15982ac3c477f9e00c9181900360c00190a160208401515151610be49061123f565b815260008151516001811115610bfc57610bfc61233a565b1415610c0e5760006020820152610c32565b60018151516001811115610c2457610c2461233a565b1415610c3257600160208201525b610c4f8160200151610c45576001610c48565b60005b6017610e7b565b610c5b34156018610e7b565b60008151516001811115610c7157610c7161233a565b1415610c835760006040820152610ca7565b60018151516001811115610c9957610c9961233a565b1415610ca757600160408201525b610cc48160400151610cba576001610cbd565b60005b6019610e7b565b604051600181527fba7fb89551c11726e215f4167c55483db31eeaaddbaff724b15c59657036eb379060200160405180910390a160016020848101829052858101805151516001600160a01b03908116600090815260049093526040808420805460ff19169095179094559051515116815220805462ff000019169055610d49611db3565b825181516001600160a01b0391821690526020808501518351820152604080860151845190910152606080860151845190910152608080860151845190841691015260a080860151845190841691015260c0808601518451931692019190915260e08085015183519091015285810151510151610100840151610dcc9190612bff565b602080830151919091528501515160400151610120840151610dee9190612bff565b6020808301518101919091528501515160600151610140840151610e129190612bff565b60208201805160400191909152610160840151905160600152610180830151610e3d90600190612bff565b6020820180516080019190915280514360a0909101526101a0840151815160c001526101c0840151905160e00152610e7481611812565b5050505050565b816102425760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610eb16001600054146011610e7b565b8151610ecc901580610ec557508251600154145b6012610e7b565b600080805560028054610ede906125cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0a906125cf565b8015610f575780601f10610f2c57610100808354040283529160200191610f57565b820191906000526020600020905b815481529060010190602001808311610f3a57829003601f168201915b5050505050806020019051810190610f6f919061282f565b9050610f79611dd3565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a1610fcc3415600c610e7b565b60c08201516101808301515151610fe39190612bff565b8151526101808201805151602090810151835190910152805151604090810151835190151591015251815161101b91906000906119cb565b8160200181905250611040611039338460a001518560c00151611a3f565b600d610e7b565b6101008201516020828101510151516110599190612bff565b6040828101805192909252602080840180518201518201518451830152805190910151820151835190151592019190915251905161109a91906001906119cb565b81606001819052506110c06110b9338460e00151856101000151611a3f565b600e610e7b565b610140820151606082015160400151516110da9190612bff565b608082018051919091526060820180516040908101516020908101518451909101529051810151810151915191151591015261012082015161014083015161112f9161112891339190611a3f565b600f610e7b565b8151611147906001600160a01b031633146010610e7b565b61114f611db3565b825181516001600160a01b03918216905260208085015183519091015260408085015183519091015260608085015183519091015260a080850151835190831660809182015260e086015184519084169201919091526101208501518351921660c0909201919091528301516101608401516111cb9190612bff565b815160e0015260208082018051600090819052815190920182905280516040018290528051600a606091820152815160809081019390935290514360a0909101528301519083015161122091906002906119cb565b60208201805160c0019190915251600060e090910152610e7481611812565b611247611d53565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156112765761127661233a565b14156112f3576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156112b7576112b761233a565b60018111156112c8576112c861233a565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b6113136003600054146015610e7b565b815161132e90158061132757508251600154145b6016610e7b565b600080805560028054611340906125cf565b80601f016020809104026020016040519081016040528092919081815260200182805461136c906125cf565b80156113b95780601f1061138e576101008083540402835291602001916113b9565b820191906000526020600020905b81548152906001019060200180831161139c57829003601f168201915b50505050508060200190518101906113d19190612919565b90506113db611e56565b6040805133815285516020808301919091528087015180516001600160a01b0390811684860152918101518216606084015283015116608082015290517f2c8ae96dbe7266c4192ea133144ed0b916d83e0eec97c9d67d927784baa120089181900360a00190a161144e34156013610e7b565b8151611466906001600160a01b031633146014610e7b565b60e082015151516114779080612c2d565b81515260e0820180515160209081015183519091015280515160409081015183519015159101525181516114ae91906000906119cb565b6020808301919091526080830151908501515160e08401516114da92919060005b602002015151611a57565b6020818101510151516114ed9080612c2d565b604082810180519290925260208084018051820151820151845183015280518201518301519351931515939092019290925260a08401518683015190920151905161153b92919060016114cf565b6115678260c001518560200151604001516115608460200151600186604001516119cb565b60026114cf565b81516101008301516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156115a5573d6000803e3d6000fd5b50600080805560018190556115bc90600290611e80565b50505050565b6115d2600560005414601e610e7b565b81516115ed9015806115e657508251600154145b601f610e7b565b6000808055600280546115ff906125cf565b80601f016020809104026020016040519081016040528092919081815260200182805461162b906125cf565b80156116785780601f1061164d57610100808354040283529160200191611678565b820191906000526020600020905b81548152906001019060200180831161165b57829003601f168201915b505050505080602001905181019061169091906129d4565b90506116a48160e001514310156020610e7b565b6040805133815284516020808301919091528501515115158183015290517f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c213659181900360600190a16116f83415601d610e7b565b604051600181527ff76f8296eca8ec2770a356dbe88b7fe987cfa9c7cdcfbc3466b0b8f64e8908ec9060200160405180910390a160018252611738611db3565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855182015260808087015186519086169082015260a08088015187519087169082015260c080890151885197169681019690965260e08089015188518201526101008901518689018051919091526101208a01518151909701969096526101408901518651909501949094526101608801518551909301929092526101808701518451909101528251439101526101a08501518251909301929092526101c08401519051909101526115bc815b60208101516060810151608090910151101561192c57611830611eba565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151818601528551608090810151851681870152865160a090810151861690870152865160c09081015190951685870152865160e09081015181880152848801805151610100890152805186015161012089015280518501516101408901528051909301516101608801528251909101516101808701528151909401516101a086015251909201516101c0840152600560005543600155905161190391839101612c82565b60405160208183030381529060405260029080519060200190611927929190611f6c565b505050565b611934611ff0565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151908501528451608090810151841690850152845160a090810151841690850152845160c0908101519093168385015281850180519093015160e080860191909152925190920151610100840152600360005543600155905161190391839101612d6c565b50565b6119d361204c565b60005b6003811015611a1f578481600381106119f1576119f1612c17565b6020020151828260038110611a0857611a08612c17565b602002015280611a1781612e0e565b9150506119d6565b5081818460038110611a3357611a33612c17565b60200201529392505050565b6000611a4d83853085611a6b565b90505b9392505050565b611a62838383611b45565b61192757600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611ad291612e29565b60006040518083038185875af1925050503d8060008114611b0f576040519150601f19603f3d011682016040523d82523d6000602084013e611b14565b606091505b5091509150611b2582826001611c16565b5080806020019051810190611b3a9190612e45565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611ba491612e29565b60006040518083038185875af1925050503d8060008114611be1576040519150601f19603f3d011682016040523d82523d6000602084013e611be6565b606091505b5091509150611bf782826002611c16565b5080806020019051810190611c0c9190612e45565b9695505050505050565b60608315611c25575081611a50565b825115611c355782518084602001fd5b60405163100960cb60e01b815260048101839052602401610e98565b6040805160e081019091526000606082018181526080830182905260a0830182905260c083019190915281908152604080516102008101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e08201529101908152600060209091015290565b604051806040016040528060008152602001611d4e6040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b905290565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806040016040528060008152602001611d4e60405180602001604052806000151581525090565b6040518060600160405280611d62611d53565b6040518060400160405280611dc6612097565b8152602001611d4e6120f7565b604080516101008101909152600060a0820181815260c0830182905260e0830191909152815260208101611e0561204c565b81526040805160608101825260008082526020828101829052928201529101905b8152602001611e3361204c565b815260408051606081018252600080825260208281018290529282015291015290565b6040805160c081019091526000606082018181526080830182905260a08301919091528190611e26565b508054611e8c906125cf565b6000825580601f10611e9c575050565b601f0160209004906000526020600020908101906119c89190612135565b604051806101e0016040528060006001600160a01b03168152602001611ede611c51565b8152602001611eeb611c51565b8152602001611ef8611c51565b815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611f5f61204c565b8152602001600081525090565b828054611f78906125cf565b90600052602060002090601f016020900481019282611f9a5760008555611fe0565b82601f10611fb357805160ff1916838001178555611fe0565b82800160010185558215611fe0579182015b82811115611fe0578251825591602001919060010190611fc5565b50611fec929150612135565b5090565b60405180610120016040528060006001600160a01b03168152602001612014611c51565b8152602001612021611c51565b815260200161202e611c51565b8152600060208201819052604082018190526060820152608001611f5f5b60405180606001604052806003905b612081604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161205b5790505090565b60405180610100016040528060006001600160a01b031681526020016120bb611c51565b81526020016120c8611c51565b81526020016120d5611c51565b8152600060208201819052604082018190526060820181905260809091015290565b604051806101000160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001611f5f61204c565b5b80821115611fec5760008155600101612136565b600060a0828403121561215c57600080fd5b50919050565b805180518352602081015160208401526040810151604084015263ffffffff60e01b606082015116606084015250602081015180516080840152602081015160a0840152604081015160c0840152606081015160e08401526080810151610100818186015260a08301519150610120828187015260c08401519250610140838188015260e085015193506101608481890152838601519450610180935084848901528286015194506101a0925084838901528186015194506101c091508482890152808601519450506101e0848189015283860151610200890152828601516102208901528186015161024089015280860151955050505050506122786102608401826bffffffffffffffffffffffff19169052565b50604001516001600160a01b03166102809190910152565b6102a0810161050b8284612162565b6001600160a01b03811681146119c857600080fd5b600080600080608085870312156122ca57600080fd5b84356122d58161229f565b966020860135965060408601359560600135945092505050565b60006040828403121561215c57600080fd5b60006040828403121561231357600080fd5b611a5083836122ef565b60006020828403121561232f57600080fd5b8135611a508161229f565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061237557634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60006080828403121561215c57600080fd5b60005b838110156123c45781810151838201526020016123ac565b838111156115bc5750506000910152565b82815260406020820152600082518060408401526123fa8160608501602087016123a9565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156124485761244861240f565b60405290565b6040516020810167ffffffffffffffff811182821017156124485761244861240f565b6040516080810167ffffffffffffffff811182821017156124485761244861240f565b604051610200810167ffffffffffffffff811182821017156124485761244861240f565b6040516060810167ffffffffffffffff811182821017156124485761244861240f565b6040516101a0810167ffffffffffffffff811182821017156124485761244861240f565b604051610120810167ffffffffffffffff811182821017156124485761244861240f565b6040516101e0810167ffffffffffffffff811182821017156124485761244861240f565b600081830360a081121561255a57600080fd5b612562612425565b833581526080601f198301121561257857600080fd5b61258061244e565b915061258a612471565b60208501356125988161229f565b8082525060408501356020820152606085013560408201526080850135606082015280835250816020820152809250505092915050565b600181811c908216806125e357607f821691505b6020821081141561215c57634e487b7160e01b600052602260045260246000fd5b80516112fe8161229f565b80516bffffffffffffffffffffffff19811681146112fe57600080fd5b6000610200828403121561263f57600080fd5b612647612494565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101608083015181830152506101808083015181830152506101a08083015181830152506101c08083015181830152506101e06126f581840161260f565b9082015292915050565b60008183036102a081121561271357600080fd5b61271b6124b8565b9150608081121561272b57600080fd5b50612734612471565b825181526020830151602082015260408301516040820152606083015163ffffffff60e01b8116811461276657600080fd5b6060820152815261277a836080840161262c565b602082015261278c6102808301612604565b604082015292915050565b80151581146119c857600080fd5b600082601f8301126127b657600080fd5b6127be6124b8565b806101208401858111156127d157600080fd5b845b8181101561282457606081880312156127ec5760008081fd5b6127f46124b8565b815181526020808301518183015260408084015161281181612797565b90830152908552909301926060016127d3565b509095945050505050565b6000610a20828403121561284257600080fd5b61284a6124db565b61285383612604565b815261286284602085016126ff565b6020820152612875846102c085016126ff565b60408201526128888461056085016126ff565b606082015261080083015160808201526128a56108208401612604565b60a082015261084083015160c08201526128c26108608401612604565b60e08201526108808301516101008201526128e06108a08401612604565b6101208201526108c08301516101408201526108e083015161016082015261290c8461090085016127a5565b6101808201529392505050565b60006109a0828403121561292c57600080fd5b6129346124ff565b61293d83612604565b815261294c84602085016126ff565b602082015261295f846102c085016126ff565b60408201526129728461056085016126ff565b60608201526129846108008401612604565b60808201526129966108208401612604565b60a08201526129a86108408401612604565b60c08201526129bb8461086085016127a5565b60e0820152610980929092015161010083015250919050565b6000610a6082840312156129e757600080fd5b6129ef612523565b6129f883612604565b8152612a0784602085016126ff565b6020820152612a1a846102c085016126ff565b6040820152612a2d8461056085016126ff565b6060820152612a3f6108008401612604565b6080820152612a516108208401612604565b60a0820152612a636108408401612604565b60c082015261086083015160e08201526108808301516101008201526108a08301516101208201526108c08301516101408201526108e0830151610160820152610900830151610180820152612abd8461092085016127a5565b6101a0820152610a4092909201516101c083015250919050565b600060408284031215612ae957600080fd5b612af1612425565b823581526020830135612b0381612797565b60208201529392505050565b60008183036080811215612b2257600080fd5b612b2a612425565b833581526060601f1983011215612b4057600080fd5b612b486124b8565b91506020840135612b588161229f565b82526040840135612b688161229f565b60208301526060840135612b7b8161229f565b604083015260208101919091529392505050565b60008183036040811215612ba257600080fd5b612baa612425565b833581526020601f1983011215612bc057600080fd5b612bc861244e565b91506020840135612bd881612797565b825260208101919091529392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612c1257612c12612be9565b500190565b634e487b7160e01b600052603260045260246000fd5b600082821015612c3f57612c3f612be9565b500390565b8060005b60038110156115bc578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612c48565b81516001600160a01b03168152610a6081016020830151612ca66020840182612162565b506040830151612cba6102c0840182612162565b506060830151612cce610560840182612162565b5060808301516001600160a01b0390811661080084015260a0840151811661082084015260c08401511661084083015260e08301516108608301526101008301516108808301526101208301516108a08301526101408301516108c08301526101608301516108e08301526101808301516109008301526101a0830151612d59610920840182612c44565b506101c0830151610a4083015292915050565b81516001600160a01b031681526109a081016020830151612d906020840182612162565b506040830151612da46102c0840182612162565b506060830151612db8610560840182612162565b5060808301516001600160a01b0390811661080084015260a0840151811661082084015260c08401511661084083015260e0830151612dfb610860840182612c44565b5061010083015161098083015292915050565b6000600019821415612e2257612e22612be9565b5060010190565b60008251612e3b8184602087016123a9565b9190910192915050565b600060208284031215612e5757600080fd5b8151611a508161279756fea2646970667358221220eaaf86d2ae89b8d39bff281b299ecb8eac681ad944d8379c08de466d06c1482164736f6c634300080c0033`,
  BytecodeLen: 15911,
  Which: `oD`,
  version: 7,
  views: {
    BeautyQueens: {
      first: `BeautyQueens_first`,
      second: `BeautyQueens_second`,
      third: `BeautyQueens_third`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:76:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:97:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:56:62:after expr stmt semicolon',
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
  "Judge": Judge,
  "Voters_timeUp": Voters_timeUp,
  "Voters_voteBeautyQueen": Voters_voteBeautyQueen
  };
export const _APIs = {
  Voters: {
    timeUp: Voters_timeUp,
    voteBeautyQueen: Voters_voteBeautyQueen
    }
  };
