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
  const ctc2 = stdlib.T_Struct([['name', ctc1], ['addr', ctc0]]);
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Data({
    None: ctc8,
    Some: ctc8
    });
  const map0_ctc = ctc9;
  
  
  return {
    infos: {
      BeautyQueens: {
        first: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v659, v660, v661, v662, v663, v664, v665, v666, v667, v668, v669, v670, v699] = svs;
              return (await ((async () => {
                
                
                return v660;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v660, v661, v662, v664, v666, v668, v787, v788] = svs;
              return (await ((async () => {
                
                
                return v660;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v659, v660, v661, v662, v664, v666, v668, v775, v776, v777, v778, v779, v780, v787, v788] = svs;
              return (await ((async () => {
                
                
                return v660;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        second: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v659, v660, v661, v662, v663, v664, v665, v666, v667, v668, v669, v670, v699] = svs;
              return (await ((async () => {
                
                
                return v661;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v660, v661, v662, v664, v666, v668, v787, v788] = svs;
              return (await ((async () => {
                
                
                return v661;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v659, v660, v661, v662, v664, v666, v668, v775, v776, v777, v778, v779, v780, v787, v788] = svs;
              return (await ((async () => {
                
                
                return v661;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        third: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v659, v660, v661, v662, v663, v664, v665, v666, v667, v668, v669, v670, v699] = svs;
              return (await ((async () => {
                
                
                return v662;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v660, v661, v662, v664, v666, v668, v787, v788] = svs;
              return (await ((async () => {
                
                
                return v662;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v659, v660, v661, v662, v664, v666, v668, v775, v776, v777, v778, v779, v780, v787, v788] = svs;
              return (await ((async () => {
                
                
                return v662;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          }
        }
      },
    views: {
      1: [ctc0, ctc2, ctc2, ctc2, ctc3, ctc4, ctc3, ctc4, ctc3, ctc4, ctc3, ctc3, ctc7],
      3: [ctc0, ctc2, ctc2, ctc2, ctc4, ctc4, ctc4, ctc7, ctc3],
      5: [ctc0, ctc2, ctc2, ctc2, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc7, ctc3]
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
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Struct([['name', ctc3], ['addr', ctc4]]);
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc5]);
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc2, ctc7, ctc2, ctc7, ctc2]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc2, ctc2, ctc2]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4, ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc2, ctc2, ctc10]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v610 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v611 = [v610, v610, v610];
  const v615 = stdlib.protect(ctc2, interact.deadline, 'for Judge\'s interact field deadline');
  
  const v618 = stdlib.protect(ctc6, await interact.getFinalists(), {
    at: './index.rsh:35:92:application',
    fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:17:function exp)'],
    msg: 'getFinalists',
    who: 'Judge'
    });
  const v619 = v618[stdlib.checkedBigNumberify('./index.rsh:35:92:application', stdlib.UInt_max, '0')];
  const v620 = v618[stdlib.checkedBigNumberify('./index.rsh:35:92:application', stdlib.UInt_max, '1')];
  const v621 = v618[stdlib.checkedBigNumberify('./index.rsh:35:92:application', stdlib.UInt_max, '2')];
  const v631 = stdlib.protect(ctc8, await interact.prizes(), {
    at: './index.rsh:40:108:application',
    fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:17:function exp)'],
    msg: 'prizes',
    who: 'Judge'
    });
  const v632 = v631[stdlib.checkedBigNumberify('./index.rsh:40:108:application', stdlib.UInt_max, '0')];
  const v633 = v631[stdlib.checkedBigNumberify('./index.rsh:40:108:application', stdlib.UInt_max, '1')];
  const v634 = v631[stdlib.checkedBigNumberify('./index.rsh:40:108:application', stdlib.UInt_max, '2')];
  const v635 = v631[stdlib.checkedBigNumberify('./index.rsh:40:108:application', stdlib.UInt_max, '3')];
  const v636 = v631[stdlib.checkedBigNumberify('./index.rsh:40:108:application', stdlib.UInt_max, '4')];
  const v637 = v631[stdlib.checkedBigNumberify('./index.rsh:40:108:application', stdlib.UInt_max, '5')];
  const v644 = stdlib.tokenEq(v632, v634);
  const v645 = v644 ? false : true;
  stdlib.assert(v645, {
    at: './index.rsh:42:11:application',
    fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v646 = stdlib.tokenEq(v634, v636);
  const v647 = v646 ? false : true;
  stdlib.assert(v647, {
    at: './index.rsh:43:11:application',
    fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v648 = stdlib.tokenEq(v632, v636);
  const v649 = v648 ? false : true;
  stdlib.assert(v649, {
    at: './index.rsh:44:11:application',
    fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v650 = stdlib.eq(v633, stdlib.checkedBigNumberify('./index.rsh:46:23:decimal', stdlib.UInt_max, '0'));
  const v651 = v650 ? false : true;
  stdlib.assert(v651, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:46:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v653 = stdlib.eq(v635, stdlib.checkedBigNumberify('./index.rsh:47:24:decimal', stdlib.UInt_max, '0'));
  const v654 = v653 ? false : true;
  stdlib.assert(v654, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:47:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v656 = stdlib.eq(v637, stdlib.checkedBigNumberify('./index.rsh:48:23:decimal', stdlib.UInt_max, '0'));
  const v657 = v656 ? false : true;
  stdlib.assert(v657, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:48:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v619, v620, v621, v615, v632, v633, v634, v635, v636, v637],
    evt_cnt: 10,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc5, ctc5, ctc2, ctc7, ctc2, ctc7, ctc2, ctc7, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v660, v661, v662, v663, v664, v665, v666, v667, v668, v669], secs: v671, time: v670, didSend: v133, from: v659 } = txn1;
      
      const v680 = v611[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '0')];
      const v682 = v680[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '1')];
      const v683 = v680[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '2')];
      const v684 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v682, v683];
      const v685 = stdlib.Array_set(v611, stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '0'), v684);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v664
        });
      const v687 = v685[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '1')];
      const v689 = v687[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '1')];
      const v690 = v687[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '2')];
      const v691 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v689, v690];
      const v692 = stdlib.Array_set(v685, stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '1'), v691);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v666
        });
      const v694 = v692[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '2')];
      const v696 = v694[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '1')];
      const v697 = v694[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '2')];
      const v698 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v696, v697];
      const v699 = stdlib.Array_set(v692, stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '2'), v698);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v668
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc5, ctc5, ctc2, ctc7, ctc2, ctc7, ctc2, ctc7, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v660, v661, v662, v663, v664, v665, v666, v667, v668, v669], secs: v671, time: v670, didSend: v133, from: v659 } = txn1;
  const v672 = stdlib.tokenEq(v664, v666);
  const v674 = stdlib.tokenEq(v664, v668);
  const v675 = v674 ? false : true;
  const v676 = v672 ? false : v675;
  const v677 = stdlib.tokenEq(v666, v668);
  const v678 = v677 ? false : true;
  const v679 = v676 ? v678 : false;
  stdlib.assert(v679, {
    at: './index.rsh:55:9:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Judge'
    });
  const v680 = v611[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '0')];
  const v682 = v680[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '1')];
  const v683 = v680[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '2')];
  const v684 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v682, v683];
  const v685 = stdlib.Array_set(v611, stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '0'), v684);
  ;
  const v687 = v685[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '1')];
  const v689 = v687[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '1')];
  const v690 = v687[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '2')];
  const v691 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v689, v690];
  const v692 = stdlib.Array_set(v685, stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '1'), v691);
  ;
  const v694 = v692[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '2')];
  const v696 = v694[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '1')];
  const v697 = v694[stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '2')];
  const v698 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v696, v697];
  const v699 = stdlib.Array_set(v692, stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '2'), v698);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v659, v660, v661, v662, v663, v664, v665, v666, v667, v668, v669, v670, v699],
    evt_cnt: 0,
    funcNum: 1,
    lct: v670,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '0'), [[v665, v664], [v667, v666], [v669, v668]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v727, time: v726, didSend: v198, from: v725 } = txn2;
      
      ;
      const v746 = v699[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '0')];
      const v747 = v746[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '0')];
      const v748 = stdlib.add(v747, v665);
      const v751 = v746[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '1')];
      const v752 = v746[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '2')];
      const v753 = [v748, v751, v752];
      const v754 = stdlib.Array_set(v699, stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '0'), v753);
      sim_r.txns.push({
        amt: v665,
        kind: 'to',
        tok: v664
        });
      const v755 = v754[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '1')];
      const v756 = v755[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '0')];
      const v757 = stdlib.add(v756, v667);
      const v760 = v755[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '1')];
      const v761 = v755[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '2')];
      const v762 = [v757, v760, v761];
      const v763 = stdlib.Array_set(v754, stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '1'), v762);
      sim_r.txns.push({
        amt: v667,
        kind: 'to',
        tok: v666
        });
      const v764 = v763[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '2')];
      const v765 = v764[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '0')];
      const v766 = stdlib.add(v765, v669);
      const v769 = v764[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '1')];
      const v770 = v764[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '2')];
      const v771 = [v766, v769, v770];
      const v772 = stdlib.Array_set(v763, stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '2'), v771);
      sim_r.txns.push({
        amt: v669,
        kind: 'to',
        tok: v668
        });
      const v775 = stdlib.add(v670, v663);
      const v776 = stdlib.checkedBigNumberify('./index.rsh:74:80:decimal', stdlib.UInt_max, '0');
      const v777 = stdlib.checkedBigNumberify('./index.rsh:74:83:decimal', stdlib.UInt_max, '0');
      const v778 = stdlib.checkedBigNumberify('./index.rsh:74:85:decimal', stdlib.UInt_max, '0');
      const v779 = stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '5');
      const v780 = stdlib.checkedBigNumberify('./index.rsh:74:65:decimal', stdlib.UInt_max, '0');
      const v781 = v726;
      const v787 = v772;
      const v788 = stdlib.checkedBigNumberify('./index.rsh:30:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v797 = stdlib.lt(v780, v779);
        
        return v797;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc5, ctc2, ctc7, ctc2, ctc7, ctc2, ctc7, ctc2, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v727, time: v726, didSend: v198, from: v725 } = txn2;
  ;
  const v746 = v699[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '0')];
  const v747 = v746[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '0')];
  const v748 = stdlib.add(v747, v665);
  const v751 = v746[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '1')];
  const v752 = v746[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '2')];
  const v753 = [v748, v751, v752];
  const v754 = stdlib.Array_set(v699, stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '0'), v753);
  ;
  const v755 = v754[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '1')];
  const v756 = v755[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '0')];
  const v757 = stdlib.add(v756, v667);
  const v760 = v755[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '1')];
  const v761 = v755[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '2')];
  const v762 = [v757, v760, v761];
  const v763 = stdlib.Array_set(v754, stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '1'), v762);
  ;
  const v764 = v763[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '2')];
  const v765 = v764[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '0')];
  const v766 = stdlib.add(v765, v669);
  const v769 = v764[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '1')];
  const v770 = v764[stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '2')];
  const v771 = [v766, v769, v770];
  const v772 = stdlib.Array_set(v763, stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '2'), v771);
  ;
  const v773 = stdlib.addressEq(v659, v725);
  stdlib.assert(v773, {
    at: './index.rsh:66:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Judge'
    });
  const v775 = stdlib.add(v670, v663);
  let v776 = stdlib.checkedBigNumberify('./index.rsh:74:80:decimal', stdlib.UInt_max, '0');
  let v777 = stdlib.checkedBigNumberify('./index.rsh:74:83:decimal', stdlib.UInt_max, '0');
  let v778 = stdlib.checkedBigNumberify('./index.rsh:74:85:decimal', stdlib.UInt_max, '0');
  let v779 = stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '5');
  let v780 = stdlib.checkedBigNumberify('./index.rsh:74:65:decimal', stdlib.UInt_max, '0');
  let v781 = v726;
  let v787 = v772;
  let v788 = stdlib.checkedBigNumberify('./index.rsh:30:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v797 = stdlib.lt(v780, v779);
    
    return v797;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc9],
      timeoutAt: ['time', v775],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc11],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v888], secs: v890, time: v889, didSend: v463, from: v887 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v891 = true;
      await txn4.getOutput('Voters_timeUp', 'v891', ctc10, v891);
      const cv776 = v776;
      const cv777 = v777;
      const cv778 = v778;
      const cv779 = v779;
      const cv780 = v780;
      const cv781 = v889;
      const cv787 = v787;
      const cv788 = v788;
      
      v776 = cv776;
      v777 = cv777;
      v778 = cv778;
      v779 = cv779;
      v780 = cv780;
      v781 = cv781;
      v787 = cv787;
      v788 = cv788;
      
      continue;
      }
    else {
      const {data: [v838], secs: v840, time: v839, didSend: v391, from: v837 } = txn3;
      undefined /* setApiDetails */;
      const v842 = v838[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '0')];
      const v843 = v838[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '1')];
      const v844 = v838[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '2')];
      const v845 = v838[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '3')];
      const v846 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v842), null);
      let v847;
      switch (v846[0]) {
        case 'None': {
          const v848 = v846[1];
          v847 = false;
          
          break;
          }
        case 'Some': {
          const v849 = v846[1];
          v847 = true;
          
          break;
          }
        }
      const v850 = v847 ? false : true;
      stdlib.assert(v850, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:78:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:77:62:application call to [unknown function] (defined at: ./index.rsh:77:62:function exp)', 'at ./index.rsh:77:62:application call to [unknown function] (defined at: ./index.rsh:77:62:function exp)'],
        msg: 'You have already voted',
        who: 'Judge'
        });
      ;
      let v859;
      switch (v846[0]) {
        case 'None': {
          const v860 = v846[1];
          v859 = false;
          
          break;
          }
        case 'Some': {
          const v861 = v846[1];
          v859 = true;
          
          break;
          }
        }
      const v862 = v859 ? false : true;
      stdlib.assert(v862, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:78:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:22:application call to [unknown function] (defined at: ./index.rsh:80:22:function exp)'],
        msg: 'You have already voted',
        who: 'Judge'
        });
      const v868 = true;
      await txn3.getOutput('Voters_voteBeautyQueen', 'v868', ctc10, v868);
      await stdlib.mapSet(map0, v842, null);
      const v879 = stdlib.add(v780, stdlib.checkedBigNumberify('./index.rsh:84:23:decimal', stdlib.UInt_max, '1'));
      const v880 = stdlib.add(v776, v843);
      const v881 = stdlib.add(v777, v844);
      const v882 = stdlib.add(v778, v845);
      const cv776 = v880;
      const cv777 = v881;
      const cv778 = v882;
      const cv779 = v779;
      const cv780 = v879;
      const cv781 = v839;
      const cv787 = v787;
      const cv788 = v788;
      
      v776 = cv776;
      v777 = cv777;
      v778 = cv778;
      v779 = cv779;
      v780 = cv780;
      v781 = cv781;
      v787 = cv787;
      v788 = cv788;
      
      continue;}
    
    }
  const v900 = stdlib.protect(ctc12, await interact.checkVotes(v776, v777, v778), {
    at: './index.rsh:98:84:application',
    fs: ['at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:17:function exp)'],
    msg: 'checkVotes',
    who: 'Judge'
    });
  const v901 = v900[stdlib.checkedBigNumberify('./index.rsh:98:84:application', stdlib.UInt_max, '0')];
  const v902 = v900[stdlib.checkedBigNumberify('./index.rsh:98:84:application', stdlib.UInt_max, '1')];
  const v903 = v900[stdlib.checkedBigNumberify('./index.rsh:98:84:application', stdlib.UInt_max, '2')];
  const v907 = stdlib.addressEq(v901, v902);
  const v908 = v907 ? false : true;
  stdlib.assert(v908, {
    at: './index.rsh:100:11:application',
    fs: ['at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v909 = stdlib.addressEq(v902, v903);
  const v910 = v909 ? false : true;
  stdlib.assert(v910, {
    at: './index.rsh:101:11:application',
    fs: ['at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v911 = stdlib.addressEq(v901, v903);
  const v912 = v911 ? false : true;
  stdlib.assert(v912, {
    at: './index.rsh:102:11:application',
    fs: ['at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v659, v660, v661, v662, v664, v666, v668, v787, v788, v901, v902, v903],
    evt_cnt: 3,
    funcNum: 3,
    lct: v781,
    onlyIf: true,
    out_tys: [ctc4, ctc4, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:105:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v914, v915, v916], secs: v918, time: v917, didSend: v497, from: v913 } = txn3;
      
      ;
      const v920 = v787[stdlib.checkedBigNumberify('./index.rsh:110:19:application', stdlib.UInt_max, '0')];
      const v921 = v920[stdlib.checkedBigNumberify('./index.rsh:110:19:application', stdlib.UInt_max, '0')];
      const v927 = stdlib.sub(v921, v921);
      const v930 = v920[stdlib.checkedBigNumberify('./index.rsh:110:47:application', stdlib.UInt_max, '1')];
      const v931 = v920[stdlib.checkedBigNumberify('./index.rsh:110:47:application', stdlib.UInt_max, '2')];
      const v932 = [v927, v930, v931];
      const v933 = stdlib.Array_set(v787, stdlib.checkedBigNumberify('./index.rsh:110:47:application', stdlib.UInt_max, '0'), v932);
      sim_r.txns.push({
        kind: 'from',
        to: v914,
        tok: v664
        });
      const v934 = v933[stdlib.checkedBigNumberify('./index.rsh:111:19:application', stdlib.UInt_max, '1')];
      const v935 = v934[stdlib.checkedBigNumberify('./index.rsh:111:19:application', stdlib.UInt_max, '0')];
      const v941 = stdlib.sub(v935, v935);
      const v944 = v934[stdlib.checkedBigNumberify('./index.rsh:111:49:application', stdlib.UInt_max, '1')];
      const v945 = v934[stdlib.checkedBigNumberify('./index.rsh:111:49:application', stdlib.UInt_max, '2')];
      const v946 = [v941, v944, v945];
      const v947 = stdlib.Array_set(v933, stdlib.checkedBigNumberify('./index.rsh:111:49:application', stdlib.UInt_max, '1'), v946);
      sim_r.txns.push({
        kind: 'from',
        to: v915,
        tok: v666
        });
      const v948 = v947[stdlib.checkedBigNumberify('./index.rsh:112:19:application', stdlib.UInt_max, '2')];
      const v949 = v948[stdlib.checkedBigNumberify('./index.rsh:112:19:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v916,
        tok: v668
        });
      sim_r.txns.push({
        kind: 'from',
        to: v659,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v668
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v666
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v664
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
    tys: [ctc4, ctc5, ctc5, ctc5, ctc7, ctc7, ctc7, ctc14, ctc2, ctc4, ctc4, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v914, v915, v916], secs: v918, time: v917, didSend: v497, from: v913 } = txn3;
  ;
  const v919 = stdlib.addressEq(v659, v913);
  stdlib.assert(v919, {
    at: './index.rsh:105:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Judge'
    });
  const v920 = v787[stdlib.checkedBigNumberify('./index.rsh:110:19:application', stdlib.UInt_max, '0')];
  const v921 = v920[stdlib.checkedBigNumberify('./index.rsh:110:19:application', stdlib.UInt_max, '0')];
  const v927 = stdlib.sub(v921, v921);
  const v930 = v920[stdlib.checkedBigNumberify('./index.rsh:110:47:application', stdlib.UInt_max, '1')];
  const v931 = v920[stdlib.checkedBigNumberify('./index.rsh:110:47:application', stdlib.UInt_max, '2')];
  const v932 = [v927, v930, v931];
  const v933 = stdlib.Array_set(v787, stdlib.checkedBigNumberify('./index.rsh:110:47:application', stdlib.UInt_max, '0'), v932);
  ;
  const v934 = v933[stdlib.checkedBigNumberify('./index.rsh:111:19:application', stdlib.UInt_max, '1')];
  const v935 = v934[stdlib.checkedBigNumberify('./index.rsh:111:19:application', stdlib.UInt_max, '0')];
  const v941 = stdlib.sub(v935, v935);
  const v944 = v934[stdlib.checkedBigNumberify('./index.rsh:111:49:application', stdlib.UInt_max, '1')];
  const v945 = v934[stdlib.checkedBigNumberify('./index.rsh:111:49:application', stdlib.UInt_max, '2')];
  const v946 = [v941, v944, v945];
  const v947 = stdlib.Array_set(v933, stdlib.checkedBigNumberify('./index.rsh:111:49:application', stdlib.UInt_max, '1'), v946);
  ;
  const v948 = v947[stdlib.checkedBigNumberify('./index.rsh:112:19:application', stdlib.UInt_max, '2')];
  const v949 = v948[stdlib.checkedBigNumberify('./index.rsh:112:19:application', stdlib.UInt_max, '0')];
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
  const ctc4 = stdlib.T_Struct([['name', ctc3], ['addr', ctc2]]);
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc6, ctc6, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v659, v660, v661, v662, v664, v666, v668, v775, v776, v777, v778, v779, v780, v787, v788] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc4, ctc4, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc6, ctc6, ctc6, ctc6, ctc9, ctc6]);
  const v886 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:89:9:application',
    fs: ['at ./index.rsh:89:9:application call to [unknown function] (defined at: ./index.rsh:89:9:function exp)', 'at ./index.rsh:88:37:application call to [unknown function] (defined at: ./index.rsh:88:37:function exp)'],
    msg: 'in',
    who: 'Voters_timeUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v659, v660, v661, v662, v664, v666, v668, v775, v776, v777, v778, v779, v780, v787, v788, v886],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:89:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v888], secs: v890, time: v889, didSend: v463, from: v887 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voters_timeUp"
        });
      ;
      const v891 = true;
      const v892 = await txn1.getOutput('Voters_timeUp', 'v891', ctc7, v891);
      
      const v1233 = v776;
      const v1234 = v777;
      const v1235 = v778;
      const v1236 = v779;
      const v1237 = v780;
      const v1239 = v787;
      const v1240 = v788;
      const v1241 = stdlib.lt(v780, v779);
      if (v1241) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc4, ctc4, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc6, ctc6, ctc6, ctc6, ctc9, ctc6, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v888], secs: v890, time: v889, didSend: v463, from: v887 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v891 = true;
  const v892 = await txn1.getOutput('Voters_timeUp', 'v891', ctc7, v891);
  stdlib.protect(ctc0, await interact.out(v888, v892), {
    at: './index.rsh:89:9:application',
    fs: ['at ./index.rsh:89:9:application call to [unknown function] (defined at: ./index.rsh:89:9:function exp)', 'at ./index.rsh:90:10:application call to "k" (defined at: ./index.rsh:89:9:function exp)', 'at ./index.rsh:88:37:application call to [unknown function] (defined at: ./index.rsh:88:37:function exp)'],
    msg: 'out',
    who: 'Voters_timeUp'
    });
  
  const v1233 = v776;
  const v1234 = v777;
  const v1235 = v778;
  const v1236 = v779;
  const v1237 = v780;
  const v1239 = v787;
  const v1240 = v788;
  const v1241 = stdlib.lt(v780, v779);
  if (v1241) {
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
  const ctc4 = stdlib.T_Struct([['name', ctc3], ['addr', ctc2]]);
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc6, ctc6, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Tuple([ctc2, ctc6, ctc6, ctc6]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v659, v660, v661, v662, v664, v666, v668, v775, v776, v777, v778, v779, v780, v787, v788] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc4, ctc4, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc6, ctc6, ctc6, ctc6, ctc9, ctc6]);
  const v804 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:77:62:application call to [unknown function] (defined at: ./index.rsh:77:62:function exp)', 'at ./index.rsh:77:62:application call to [unknown function] (defined at: ./index.rsh:77:62:function exp)'],
    msg: 'in',
    who: 'Voters_voteBeautyQueen'
    });
  const v805 = v804[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v813 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v805), null);
  let v814;
  switch (v813[0]) {
    case 'None': {
      const v815 = v813[1];
      v814 = false;
      
      break;
      }
    case 'Some': {
      const v816 = v813[1];
      v814 = true;
      
      break;
      }
    }
  const v817 = v814 ? false : true;
  stdlib.assert(v817, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:77:62:application call to [unknown function] (defined at: ./index.rsh:77:62:function exp)', 'at ./index.rsh:77:62:application call to [unknown function] (defined at: ./index.rsh:77:62:function exp)'],
    msg: 'You have already voted',
    who: 'Voters_voteBeautyQueen'
    });
  
  let v830;
  switch (v813[0]) {
    case 'None': {
      const v831 = v813[1];
      v830 = false;
      
      break;
      }
    case 'Some': {
      const v832 = v813[1];
      v830 = true;
      
      break;
      }
    }
  const v833 = v830 ? false : true;
  stdlib.assert(v833, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:77:62:application call to [unknown function] (defined at: ./index.rsh:77:62:function exp)', 'at ./index.rsh:77:62:application call to [unknown function] (defined at: ./index.rsh:77:62:function exp)'],
    msg: 'You have already voted',
    who: 'Voters_voteBeautyQueen'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v659, v660, v661, v662, v664, v666, v668, v775, v776, v777, v778, v779, v780, v787, v788, v804],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:74:62:dot', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v838], secs: v840, time: v839, didSend: v391, from: v837 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voters_voteBeautyQueen"
        });
      const v842 = v838[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '0')];
      const v843 = v838[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '1')];
      const v844 = v838[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '2')];
      const v845 = v838[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '3')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v842), null);
      ;
      const v868 = true;
      const v869 = await txn1.getOutput('Voters_voteBeautyQueen', 'v868', ctc7, v868);
      
      await stdlib.simMapSet(sim_r, 0, v842, null);
      const v879 = stdlib.add(v780, stdlib.checkedBigNumberify('./index.rsh:84:23:decimal', stdlib.UInt_max, '1'));
      const v880 = stdlib.add(v776, v843);
      const v881 = stdlib.add(v777, v844);
      const v882 = stdlib.add(v778, v845);
      const v1266 = v880;
      const v1267 = v881;
      const v1268 = v882;
      const v1269 = v779;
      const v1270 = v879;
      const v1272 = v787;
      const v1273 = v788;
      const v1274 = stdlib.lt(v879, v779);
      if (v1274) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc4, ctc4, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc6, ctc6, ctc6, ctc6, ctc9, ctc6, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v838], secs: v840, time: v839, didSend: v391, from: v837 } = txn1;
  undefined /* setApiDetails */;
  const v842 = v838[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '0')];
  const v843 = v838[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '1')];
  const v844 = v838[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '2')];
  const v845 = v838[stdlib.checkedBigNumberify('./index.rsh:77:10:spread', stdlib.UInt_max, '3')];
  const v846 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v842), null);
  let v847;
  switch (v846[0]) {
    case 'None': {
      const v848 = v846[1];
      v847 = false;
      
      break;
      }
    case 'Some': {
      const v849 = v846[1];
      v847 = true;
      
      break;
      }
    }
  const v850 = v847 ? false : true;
  stdlib.assert(v850, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:77:62:application call to [unknown function] (defined at: ./index.rsh:77:62:function exp)', 'at ./index.rsh:77:62:application call to [unknown function] (defined at: ./index.rsh:77:62:function exp)'],
    msg: 'You have already voted',
    who: 'Voters_voteBeautyQueen'
    });
  ;
  let v859;
  switch (v846[0]) {
    case 'None': {
      const v860 = v846[1];
      v859 = false;
      
      break;
      }
    case 'Some': {
      const v861 = v846[1];
      v859 = true;
      
      break;
      }
    }
  const v862 = v859 ? false : true;
  stdlib.assert(v862, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:22:application call to [unknown function] (defined at: ./index.rsh:80:22:function exp)'],
    msg: 'You have already voted',
    who: 'Voters_voteBeautyQueen'
    });
  const v868 = true;
  const v869 = await txn1.getOutput('Voters_voteBeautyQueen', 'v868', ctc7, v868);
  if (v391) {
    stdlib.protect(ctc0, await interact.out(v838, v869), {
      at: './index.rsh:77:11:application',
      fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:11:function exp)', 'at ./index.rsh:81:10:application call to "k" (defined at: ./index.rsh:80:22:function exp)', 'at ./index.rsh:80:22:application call to [unknown function] (defined at: ./index.rsh:80:22:function exp)'],
      msg: 'out',
      who: 'Voters_voteBeautyQueen'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v842, null);
  const v879 = stdlib.add(v780, stdlib.checkedBigNumberify('./index.rsh:84:23:decimal', stdlib.UInt_max, '1'));
  const v880 = stdlib.add(v776, v843);
  const v881 = stdlib.add(v777, v844);
  const v882 = stdlib.add(v778, v845);
  const v1266 = v880;
  const v1267 = v881;
  const v1268 = v882;
  const v1269 = v779;
  const v1270 = v879;
  const v1272 = v787;
  const v1273 = v788;
  const v1274 = stdlib.lt(v879, v779);
  if (v1274) {
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
    pure: [`BeautyQueens_first()(byte[100],address)`, `BeautyQueens_second()(byte[100],address)`, `BeautyQueens_third()(byte[100],address)`],
    sigs: [`BeautyQueens_first()(byte[100],address)`, `BeautyQueens_second()(byte[100],address)`, `BeautyQueens_third()(byte[100],address)`, `Voters_timeUp()byte`, `Voters_voteBeautyQueen(address,uint64,uint64,uint64)byte`]
    },
  appApproval: `BiAcAAEFBAOEAagCrAO0A7wDMwjEA6CNBswD1APcA+QD7AP9An/8A+fcs+MG3cOO6gbQ8t60CqG6g5gC9AOnBCYGAQABAQECAQMBBAAiNQAxGEEIqCcFZEkiWzUBIQtbNQIxGSMSQQAIMQAoKGZCCHU2GgAXSUEBjCI1BCM1BkkhFgxAAVVJIRcMQADjSSEYDEAAcSEYEkQ0AUkhBAxAAEVJJAxAAB8kEkQoZClkUCpkUCtkUCcEZFBJNQMhBiEFWDUHQggvIQQSRChkKWRQKmRQK2RQJwRkUEk1AyEGIQVYNQdCCA8jEkQoZClkUCpkUCtkUCcEZFBJNQMhBiEFWDUHQgfwIRcSRDQBSSEEDEAAQUkkDEAAHSQSRChkKWRQKmRQK2RQJwRkUEk1A1ekhDUHQgfAIQQSRChkKWRQKmRQK2RQJwRkUEk1A1ekhDUHQgeiIxJEKGQpZFAqZFArZFAnBGRQSTUDV6SENQdCB4UhFhJENAFJIQQMQABBSSQMQAAdJBJEKGQpZFAqZFArZFAnBGRQSTUDVyCENQdCB1UhBBJEKGQpZFAqZFArZFAnBGRQSTUDVyCENQdCBzcjEkQoZClkUCpkUCtkUCcEZFBJNQNXIIQ1B0IHGkkhGQxAABYhGRJENhoBNhoCUDYaA1A2GgRQQgDNgavN1eABEkQnBUIAIzYaAhc1BDYaAzYaARdJIQQMQALwSSUMQAGWSSQMQACfJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQK2RQJwRkUEk1AyEMWzX/STUFNf6ABGiSZGM0/lCwMgY0/w9EgAkAAAAAAAADewGwKTUHNANXACA0A1cghDQDV6SENAMhBiEFWDQDIQdbNAMhCFs0AyEJWzT/NAMhDls0AyEPWzQDIRBbNAMhEVs0AyESWzIGNAMhGiEKWDQDIRtbQgUGSCQ0ARJENARJIhJMNAISEUQoZClkUCpkUCtkUCcEZFBJNQMhDFs1/0k1BTX+gAR6rDAENP5QsDIGNP8MRDT+VwAgNf00/YgGDkk1/CJVQAAGIjX7QgAGIzX7QgAANPsURDT8IlVAAAYiNfpCAAYjNfpCAAA0+hREgAkAAAAAAAADZAGwKTUHNP0oKWY0A1cAIDQDVyCENANXpIQ0AyEGIQVYNAMhB1s0AyEIWzQDIQlbNP80AyEOWzT+gSBbCDQDIQ9bNP6BKFsINAMhEFs0/oEwWwg0AyERWzQDIRJbIwgyBjQDIRohClg0AyEbW0IEFUghBDQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQK2RQJwRkUEk1A0lKSVcAIDX/IQdbNf4hCFs1/SEJWzX8IQwhClg1+0k1BUlJVwAgNfpXICA1+VdAIDX4gAQVth/LNPpQNPlQNPhQsDT/MQASRDT7VwARSTX3IltJNfZJCRY091cICFA091cQAVA0+1cRIlA19bEisgE09rISJbIQNPqyFDT+shGzNPVXERFJNfQiWzXzsSKyATTzshIlshA0+bIUNP2yEbOxIrIBNPVXABE080kJFjT0VwgIUDT0VxABUFA09VciEVBXIhEiW7ISJbIQNPiyFDT8shGzsSKyATQDgfcDW7III7IQNP+yB7OxIrIBIrISJbIQMgmyFTIKshQ0/LIRs7EisgEishIlshAyCbIVMgqyFDT9shGzsSKyASKyEiWyEDIJshUyCrIUNP6yEbNCA6RJIwxAARAjEkQjNAESRDQESSISTDQCEhFEKGQpZFAqZFArZFAnBGRQSTUDSUpKSlcAIDX/IQhbNf4hCVs1/SEMWzX8IQ5bNfshD1s1+iEQWzX5IRIhClg1+IAEmouRdLA0+FcAEUk19yJbNP0IFjT3VwgIUDT3VxABUDT4VxEiUDX2NP00/ogDrjT2VxERNfU09lcAETT1Ils0+wgWNPVXCAhQNPVXEAFQUDT2VyIRUDX0NPs0/IgDfjT0VyIRNfM0+TT6iANwNP8xABJENP80A1cghDQDV6SENAMhBiEFWDT+NPw0+jQDIRFbNAMhB1sIIiIiJCIyBjT0VwAiNPMiWzT5CBY081cICFA081cQAVBQIkIBq0ghDYgDAyI0ARJENARJIhJMNAISEURJNQVJSkpKSlcAhDX/V4SENf6BiAIhBVg1/YGMA1s1/IGUA1s1+4GcA1s1+oGkA1s1+SEHWzX4IQhbNfchCVs19oAEJTkVUDT/UDT+UDT9UDT8FlA0+xZQNPoWUDT5FlA0+BZQNPcWUDT2FlCwgRGvSTX1SVA09VA19DT7NPkTNPs09xMQNPk09xMQRDT0VwARNfMhC68081cICFA081cQAVA09FcRIlA18iENiAJEsSKyASKyEiWyEDIKshQ0+7IRszTyVxERNfE08lcAESELrzTxVwgIUDTxVxABUFA08lciEVA18CENiAIIsSKyASKyEiWyEDIKshQ0+bIRszTwVyIRNe808FcAIiELrzTvVwgIUDTvVxABUFA17iENiAHSsSKyASKyEiWyEDIKshQ097IRszEANP9QNP5QNP1QNPwWUDT7FlA0+hZQNPkWUDT4FlA09xZQNPYWUDIGFlA07lAoSwFXAH9nKUsBV39/ZypLAVf+f2crSwEhEyEUWGcnBEsBIRWBI1hnSCM1ATIGNQJCAP41/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DT8NPsMQQBpNPA08VA08lA081A09BZQNPUWUDT2FlA09xZQNPgWUDT5FlA0+hZQNPsWUDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/f2cqSwFX/n9nK0sBIRMhFFhnJwRLASEVIQpYZ0gkNQEyBjUCQgBtNPA08VA08lA081A09BZQNPUWUDT2FlA0/lA0/xZQKEsBVwB/ZylLAVd/f2cqSwFX/n9nK0sBIRMhFFhnJwRLASEVIQRYZ0ghBDUBMgY1AkIAGzEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEJwU0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBBjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+tSTEYYUAAA0goiShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 5,
  stateSize: 559,
  unsupported: [],
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
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  }
                ],
                "internalType": "struct T2",
                "name": "v660",
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
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  }
                ],
                "internalType": "struct T2",
                "name": "v661",
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
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  }
                ],
                "internalType": "struct T2",
                "name": "v662",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v663",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v664",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v665",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v666",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v667",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v668",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v669",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  }
                ],
                "internalType": "struct T2",
                "name": "v660",
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
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  }
                ],
                "internalType": "struct T2",
                "name": "v661",
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
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  }
                ],
                "internalType": "struct T2",
                "name": "v662",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v663",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v664",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v665",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v666",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v667",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v668",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v669",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
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
        "internalType": "struct T14",
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
                "name": "v914",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v915",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v916",
                "type": "address"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
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
                "internalType": "struct T17",
                "name": "v838",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
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
                "name": "v888",
                "type": "bool"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
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
    "name": "_reach_oe_v868",
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
    "name": "_reach_oe_v891",
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
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "internalType": "struct T2",
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
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "internalType": "struct T2",
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
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "internalType": "struct T2",
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
        "internalType": "struct T14",
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
                "name": "v914",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v915",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v916",
                "type": "address"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
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
                "internalType": "struct T17",
                "name": "v838",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
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
                "name": "v888",
                "type": "bool"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
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
  Bytecode: `0x6080604052604051620038e6380380620038e6833981016040819052620000269162000815565b600080554360035562000038620003eb565b7f8b9b07786bbe35e6b82d19ed84b6a0d65cf6f45aed4ca431c587e02305a0a9fd33836040516200006b92919062000907565b60405180910390a18051600090819052815160209081018290528251604090810192909252825181840180519190915283518151830152835190519092019190915282015160c08101516080909101516200015c916001600160a01b039182169116146200010e57826020015161010001516001600160a01b03168360200151608001516001600160a01b0316146200010657600162000111565b600062000111565b60005b6200011e57600062000154565b826020015161010001516001600160a01b0316836020015160c001516001600160a01b0316146200015157600162000154565b60005b600a6200033e565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200019e929062000368565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001e4919060019062000368565b60a0820190815260c08201805160009052815160409081015160209081015183519091015282518101518101518251901515910152905190516200022c919060029062000368565b60e08201526200023f3415600b6200033e565b62000249620004b4565b3381526020808401805151828401528051820151604080850191909152815181015160608086019190915282510151608080860191909152825101516001600160a01b0390811660a0808701919091528351015160c08087019190915283510151811660e0808701919091528351810151610100808801919091528451015190911661012080870191909152925190920151610140850152436101608501819052918501516101808501526001600081905591909155516200030e9183910162000ae3565b6040516020818303038152906040526002908051906020019062000334929190620005e4565b5050505062000ce1565b81620003645760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200037262000673565b60005b6003811015620003c85784816003811062000394576200039462000a87565b6020020151828260038110620003ae57620003ae62000a87565b602002015280620003bf8162000c7a565b91505062000375565b5081818460038110620003df57620003df62000a87565b60200201529392505050565b6040805161016081019091526000610100820181815261012083018290526101408301919091528152602081016200042262000673565b815260408051606081018252600080825260208281018290529282015291019081526020016200045162000673565b815260408051606081018252600080825260208281018290529282015291019081526020016200048062000673565b81526040805160608101825260008082526020828101829052928201529101908152602001620004af62000673565b905290565b604051806101a0016040528060006001600160a01b03168152602001620005086040805160c0810182526000918101828152606082018390526080820183905260a082018390528152602081019190915290565b8152602001620005456040805160c0810182526000918101828152606082018390526080820183905260a082018390528152602081019190915290565b8152602001620005826040805160c0810182526000918101828152606082018390526080820183905260a082018390528152602081019190915290565b81526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001620004af62000673565b828054620005f29062000ca4565b90600052602060002090601f01602090048101928262000616576000855562000661565b82601f106200063157805160ff191683800117855562000661565b8280016001018555821562000661579182015b828111156200066157825182559160200191906001019062000644565b506200066f929150620006c0565b5090565b60405180606001604052806003905b620006a9604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620006825790505090565b5b808211156200066f5760008155600101620006c1565b604080519081016001600160401b03811182821017156200070857634e487b7160e01b600052604160045260246000fd5b60405290565b60405161014081016001600160401b03811182821017156200070857634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200075857600080fd5b919050565b600081830360a08112156200077157600080fd5b6200077b620006d7565b915060808112156200078c57600080fd5b50604051608081016001600160401b0381118282101715620007be57634e487b7160e01b600052604160045260246000fd5b60409081528351825260208085015190830152838101519082015260608301516001600160e01b031981168114620007f557600080fd5b606082015281526200080a6080830162000740565b602082015292915050565b60008183036102e08112156200082a57600080fd5b62000834620006d7565b835181526102c080601f19840112156200084d57600080fd5b620008576200070e565b92506200086886602087016200075d565b8352620008798660c087016200075d565b60208401526200088e8661016087016200075d565b60408401526102008501516060840152620008ad610220860162000740565b608084015261024085015160a0840152620008cc610260860162000740565b60c084015261028085015160e0840152620008eb6102a0860162000740565b6101008401529390930151610120820152602083015250919050565b60006103008201905060018060a01b03841682528251602083015260208301516200097560408401825180518051835260208082015181850152604080830151908501526060918201516001600160e01b0319169184019190915201516001600160a01b0316608090910152565b6020818101518051805160e0870152808301516101008701526040810151610120870152606001516001600160e01b031916610140860152908101516001600160a01b031661016085015250604081810151805180516101808701526020808201516101a0880152928101516101c0870152606001516001600160e01b0319166101e0860152908101516001600160a01b031661020085015250606081015161022084015260808101516001600160a01b0381166102408501525060a081015161026084015260c08101516001600160a01b0381166102808501525060e08101516102a08401526101008101516001600160a01b0381166102c0850152506101208101516102e0840152509392505050565b634e487b7160e01b600052603260045260246000fd5b8060005b600381101562000add57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000aa1565b50505050565b81516001600160a01b03168152610420810160208381015180518051858401528083015160408087019190915281015160608087019190915201516001600160e01b0319166080850152908101516001600160a01b031660a0840152506040838101518051805160c086015260208082015160e087015292810151610100860152606001516001600160e01b031916610120850152908101516001600160a01b031661014084015250606083810151805180516101608681019190915260208083015161018088015260408301516101a088015291909301516001600160e01b0319166101c08601528101516001600160a01b03166101e085015290608085015161020085015260a08501516001600160a01b038116610220860152915060c085015161024085015260e08501516001600160a01b03811661026086015291506101008501516102808501526101208501516001600160a01b0381166102a086015291506101408501516102c08501528401516102e08401525061018083015162000c7361030084018262000a9d565b5092915050565b600060001982141562000c9d57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000cb957607f821691505b6020821081141562000cdb57634e487b7160e01b600052602260045260246000fd5b50919050565b612bf58062000cf16000396000f3fe6080604052600436106100bd5760003560e01c806364996ccf116100795780639171488f116100565780639171488f146101c5578063ab53f2c6146101d8578063ad9fa3d8146101fb578063d4eee77a1461020e57005b806364996ccf146101865780637d29494a1461019b57806383230757146101b057005b806304c888d1146100c65780631daadd84146100d95780631e93b0f1146101045780631f924f28146101235780632c10a159146101465780633bc5b7bf1461015957005b366100c457005b005b6100c46100d43660046120c1565b610216565b3480156100e557600080fd5b506100ee610246565b6040516100fb919061211d565b60405180910390f35b34801561011057600080fd5b506003545b6040519081526020016100fb565b610136610131366004612140565b610468565b60405190151581526020016100fb565b6100c461015436600461218d565b6104ce565b34801561016557600080fd5b506101796101743660046121a9565b6104fa565b6040516100fb91906121dc565b34801561019257600080fd5b506100ee610511565b3480156101a757600080fd5b506100ee610730565b3480156101bc57600080fd5b50600154610115565b6100c46101d3366004612223565b61094f565b3480156101e457600080fd5b506101ed61097b565b6040516100fb929190612261565b6100c461020936600461218d565b610a18565b610136610a44565b604080518082019091526000808252602082015261024261023c368490038401846123af565b82610a7c565b5050565b61024e611c51565b600160005414156103035760006002805461026890612437565b80601f016020809104026020016040519081016040528092919081815260200182805461029490612437565b80156102e15780601f106102b6576101008083540402835291602001916102e1565b820191906000526020600020905b8154815290600101906020018083116102c457829003601f168201915b50505050508060200190518101906102f99190612595565b6040015192915050565b600360005414156103ae5760006002805461031d90612437565b80601f016020809104026020016040519081016040528092919081815260200182805461034990612437565b80156103965780601f1061036b57610100808354040283529160200191610396565b820191906000526020600020905b81548152906001019060200180831161037957829003601f168201915b50505050508060200190518101906102f9919061267d565b60056000541415610459576000600280546103c890612437565b80601f01602080910402602001604051908101604052809291908181526020018280546103f490612437565b80156104415780601f1061041657610100808354040283529160200191610441565b820191906000526020600020905b81548152906001019060200180831161042457829003601f168201915b50505050508060200190518101906102f99190612737565b61046560006008610e7b565b90565b6000610472611c85565b60208082018051516001600160a01b03891690528051518201879052805151604090810187905290515160600185905280518082019091526000808252918101919091526104c08282610a7c565b602001519695505050505050565b60408051808201909152600080825260208201526102426104f436849003840184612838565b82610ea1565b610502611cca565b61050b8261123f565b92915050565b610519611c51565b600160005414156105ce5760006002805461053390612437565b80601f016020809104026020016040519081016040528092919081815260200182805461055f90612437565b80156105ac5780601f10610581576101008083540402835291602001916105ac565b820191906000526020600020905b81548152906001019060200180831161058f57829003601f168201915b50505050508060200190518101906105c49190612595565b6020015192915050565b60036000541415610679576000600280546105e890612437565b80601f016020809104026020016040519081016040528092919081815260200182805461061490612437565b80156106615780601f1061063657610100808354040283529160200191610661565b820191906000526020600020905b81548152906001019060200180831161064457829003601f168201915b50505050508060200190518101906105c4919061267d565b600560005414156107245760006002805461069390612437565b80601f01602080910402602001604051908101604052809291908181526020018280546106bf90612437565b801561070c5780601f106106e15761010080835404028352916020019161070c565b820191906000526020600020905b8154815290600101906020018083116106ef57829003601f168201915b50505050508060200190518101906105c49190612737565b61046560006007610e7b565b610738611c51565b600160005414156107ed5760006002805461075290612437565b80601f016020809104026020016040519081016040528092919081815260200182805461077e90612437565b80156107cb5780601f106107a0576101008083540402835291602001916107cb565b820191906000526020600020905b8154815290600101906020018083116107ae57829003601f168201915b50505050508060200190518101906107e39190612595565b6060015192915050565b600360005414156108985760006002805461080790612437565b80601f016020809104026020016040519081016040528092919081815260200182805461083390612437565b80156108805780601f1061085557610100808354040283529160200191610880565b820191906000526020600020905b81548152906001019060200180831161086357829003601f168201915b50505050508060200190518101906107e3919061267d565b60056000541415610943576000600280546108b290612437565b80601f01602080910402602001604051908101604052809291908181526020018280546108de90612437565b801561092b5780601f106109005761010080835404028352916020019161092b565b820191906000526020600020905b81548152906001019060200180831161090e57829003601f168201915b50505050508060200190518101906107e39190612737565b61046560006009610e7b565b604080518082019091526000808252602082015261024261097536849003840184612870565b82611303565b60006060600054600280805461099090612437565b80601f01602080910402602001604051908101604052809291908181526020018280546109bc90612437565b8015610a095780601f106109de57610100808354040283529160200191610a09565b820191906000526020600020905b8154815290600101906020018083116109ec57829003601f168201915b50505050509050915091509091565b6040805180820190915260008082526020820152610242610a3e368490038401846128f0565b826115c2565b6000610a4e611ced565b6020808201516000908190526040805180820190915281815291820152610a7582826115c2565b5192915050565b610a8c600560005414601a610e7b565b8151610aa7901580610aa057508251600154145b601b610e7b565b600080805560028054610ab990612437565b80601f0160208091040260200160405190810160405280929190818152602001828054610ae590612437565b8015610b325780601f10610b0757610100808354040283529160200191610b32565b820191906000526020600020905b815481529060010190602001808311610b1557829003601f168201915b5050505050806020019051810190610b4a9190612737565b9050610b54611d17565b610b658260e001514310601c610e7b565b604080513381528551602080830191909152808701515180516001600160a01b03168385015290810151606080840191909152818401516080840152015160a082015290517f2c6296f072d8324f766bb50c3dcc6e4f906f10ce4bfaad15982ac3c477f9e00c9181900360c00190a160208401515151610be49061123f565b815260008151516001811115610bfc57610bfc6121c6565b1415610c0e5760006020820152610c32565b60018151516001811115610c2457610c246121c6565b1415610c3257600160208201525b610c4f8160200151610c45576001610c48565b60005b6017610e7b565b610c5b34156018610e7b565b60008151516001811115610c7157610c716121c6565b1415610c835760006040820152610ca7565b60018151516001811115610c9957610c996121c6565b1415610ca757600160408201525b610cc48160400151610cba576001610cbd565b60005b6019610e7b565b604051600181527fb958ee1580a2069054c6027ffaad5ec475357fad20b576b9248a44339fffc2169060200160405180910390a160016020848101829052858101805151516001600160a01b03908116600090815260049093526040808420805460ff19169095179094559051515116815220805462ff000019169055610d49611d2a565b825181516001600160a01b0391821690526020808501518351820152604080860151845190910152606080860151845190910152608080860151845190841691015260a080860151845190841691015260c0808601518451931692019190915260e08085015183519091015285810151510151610100840151610dcc9190612960565b602080830151919091528501515160400151610120840151610dee9190612960565b6020808301518101919091528501515160600151610140840151610e129190612960565b60208201805160400191909152610160840151905160600152610180830151610e3d90600190612960565b6020820180516080019190915280514360a0909101526101a0840151815160c001526101c0840151905160e00152610e7481611812565b5050505050565b816102425760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610eb16001600054146011610e7b565b8151610ecc901580610ec557508251600154145b6012610e7b565b600080805560028054610ede90612437565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0a90612437565b8015610f575780601f10610f2c57610100808354040283529160200191610f57565b820191906000526020600020905b815481529060010190602001808311610f3a57829003601f168201915b5050505050806020019051810190610f6f9190612595565b9050610f79611d4a565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a1610fcc3415600c610e7b565b60c08201516101808301515151610fe39190612960565b8151526101808201805151602090810151835190910152805151604090810151835190151591015251815161101b91906000906119cb565b8160200181905250611040611039338460a001518560c00151611a3f565b600d610e7b565b6101008201516020828101510151516110599190612960565b6040828101805192909252602080840180518201518201518451830152805190910151820151835190151592019190915251905161109a91906001906119cb565b81606001819052506110c06110b9338460e00151856101000151611a3f565b600e610e7b565b610140820151606082015160400151516110da9190612960565b608082018051919091526060820180516040908101516020908101518451909101529051810151810151915191151591015261012082015161014083015161112f9161112891339190611a3f565b600f610e7b565b8151611147906001600160a01b031633146010610e7b565b61114f611d2a565b825181516001600160a01b03918216905260208085015183519091015260408085015183519091015260608085015183519091015260a080850151835190831660809182015260e086015184519084169201919091526101208501518351921660c0909201919091528301516101608401516111cb9190612960565b815160e00152602080820180516000908190528151909201829052805160400182905280516005606091820152815160809081019390935290514360a0909101528301519083015161122091906002906119cb565b60208201805160c0019190915251600060e090910152610e7481611812565b611247611cca565b60016001600160a01b03831660009081526004602052604090205460ff166001811115611276576112766121c6565b14156112f3576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156112b7576112b76121c6565b60018111156112c8576112c86121c6565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b6113136003600054146015610e7b565b815161132e90158061132757508251600154145b6016610e7b565b60008080556002805461134090612437565b80601f016020809104026020016040519081016040528092919081815260200182805461136c90612437565b80156113b95780601f1061138e576101008083540402835291602001916113b9565b820191906000526020600020905b81548152906001019060200180831161139c57829003601f168201915b50505050508060200190518101906113d1919061267d565b90506113db611dcd565b6040805133815285516020808301919091528087015180516001600160a01b0390811684860152918101518216606084015283015116608082015290517f2c8ae96dbe7266c4192ea133144ed0b916d83e0eec97c9d67d927784baa120089181900360a00190a161144e34156013610e7b565b8151611466906001600160a01b031633146014610e7b565b60e08201515151611477908061298e565b81515260e0820180515160209081015183519091015280515160409081015183519015159101525181516114ae91906000906119cb565b6020808301919091526080830151908501515160e08401516114da92919060005b602002015151611a57565b6020818101510151516114ed908061298e565b604082810180519290925260208084018051820151820151845183015280518201518301519351931515939092019290925260a08401518683015190920151905161153b92919060016114cf565b6115678260c001518560200151604001516115608460200151600186604001516119cb565b60026114cf565b81516101008301516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156115a5573d6000803e3d6000fd5b50600080805560018190556115bc90600290611df7565b50505050565b6115d2600560005414601e610e7b565b81516115ed9015806115e657508251600154145b601f610e7b565b6000808055600280546115ff90612437565b80601f016020809104026020016040519081016040528092919081815260200182805461162b90612437565b80156116785780601f1061164d57610100808354040283529160200191611678565b820191906000526020600020905b81548152906001019060200180831161165b57829003601f168201915b50505050508060200190518101906116909190612737565b90506116a48160e001514310156020610e7b565b6040805133815284516020808301919091528501515115158183015290517f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c213659181900360600190a16116f83415601d610e7b565b604051600181527f7e2a311a441f7229078d840da112f46fbf989e5b4982e1fa137a5369972a83019060200160405180910390a160018252611738611d2a565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855182015260808087015186519086169082015260a08088015187519087169082015260c080890151885197169681019690965260e08089015188518201526101008901518689018051919091526101208a01518151909701969096526101408901518651909501949094526101608801518551909301929092526101808701518451909101528251439101526101a08501518251909301929092526101c08401519051909101526115bc815b60208101516060810151608090910151101561192c57611830611e31565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151818601528551608090810151851681870152865160a090810151861690870152865160c09081015190951685870152865160e09081015181880152848801805151610100890152805186015161012089015280518501516101408901528051909301516101608801528251909101516101808701528151909401516101a086015251909201516101c08401526005600055436001559051611903918391016129e3565b60405160208183030381529060405260029080519060200190611927929190611ee3565b505050565b611934611f67565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151908501528451608090810151841690850152845160a090810151841690850152845160c0908101519093168385015281850180519093015160e080860191909152925190920151610100840152600360005543600155905161190391839101612aca565b50565b6119d3611fc3565b60005b6003811015611a1f578481600381106119f1576119f1612978565b6020020151828260038110611a0857611a08612978565b602002015280611a1781612b6b565b9150506119d6565b5081818460038110611a3357611a33612978565b60200201529392505050565b6000611a4d83853085611a6b565b90505b9392505050565b611a62838383611b45565b61192757600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611ad291612b86565b60006040518083038185875af1925050503d8060008114611b0f576040519150601f19603f3d011682016040523d82523d6000602084013e611b14565b606091505b5091509150611b2582826001611c16565b5080806020019051810190611b3a9190612ba2565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611ba491612b86565b60006040518083038185875af1925050503d8060008114611be1576040519150601f19603f3d011682016040523d82523d6000602084013e611be6565b606091505b5091509150611bf782826002611c16565b5080806020019051810190611c0c9190612ba2565b9695505050505050565b60608315611c25575081611a50565b825115611c355782518084602001fd5b60405163100960cb60e01b815260048101839052602401610e98565b6040805160c0810182526000918101828152606082018390526080820183905260a082018390528152602081019190915290565b604051806040016040528060008152602001611cc56040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b905290565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806040016040528060008152602001611cc560405180602001604052806000151581525090565b6040518060600160405280611cd9611cca565b6040518060400160405280611d3d61200e565b8152602001611cc561206e565b604080516101008101909152600060a0820181815260c0830182905260e0830191909152815260208101611d7c611fc3565b81526040805160608101825260008082526020828101829052928201529101905b8152602001611daa611fc3565b815260408051606081018252600080825260208281018290529282015291015290565b6040805160c081019091526000606082018181526080830182905260a08301919091528190611d9d565b508054611e0390612437565b6000825580601f10611e13575050565b601f0160209004906000526020600020908101906119c891906120ac565b604051806101e0016040528060006001600160a01b03168152602001611e55611c51565b8152602001611e62611c51565b8152602001611e6f611c51565b815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611ed6611fc3565b8152602001600081525090565b828054611eef90612437565b90600052602060002090601f016020900481019282611f115760008555611f57565b82601f10611f2a57805160ff1916838001178555611f57565b82800160010185558215611f57579182015b82811115611f57578251825591602001919060010190611f3c565b50611f639291506120ac565b5090565b60405180610120016040528060006001600160a01b03168152602001611f8b611c51565b8152602001611f98611c51565b8152602001611fa5611c51565b8152600060208201819052604082018190526060820152608001611ed65b60405180606001604052806003905b611ff8604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611fd25790505090565b60405180610100016040528060006001600160a01b03168152602001612032611c51565b815260200161203f611c51565b815260200161204c611c51565b8152600060208201819052604082018190526060820181905260809091015290565b604051806101000160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001611ed6611fc3565b5b80821115611f6357600081556001016120ad565b600060a082840312156120d357600080fd5b50919050565b80518051835260208082015181850152604080830151908501526060918201516001600160e01b0319169184019190915201516001600160a01b0316608090910152565b60a0810161050b82846120d9565b6001600160a01b03811681146119c857600080fd5b6000806000806080858703121561215657600080fd5b84356121618161212b565b966020860135965060408601359560600135945092505050565b6000604082840312156120d357600080fd5b60006040828403121561219f57600080fd5b611a50838361217b565b6000602082840312156121bb57600080fd5b8135611a508161212b565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061220157634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b6000608082840312156120d357600080fd5b60005b83811015612250578181015183820152602001612238565b838111156115bc5750506000910152565b8281526040602082015260008251806040840152612286816060850160208701612235565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156122d4576122d461229b565b60405290565b6040516020810167ffffffffffffffff811182821017156122d4576122d461229b565b6040516080810167ffffffffffffffff811182821017156122d4576122d461229b565b6040516060810167ffffffffffffffff811182821017156122d4576122d461229b565b6040516101a0810167ffffffffffffffff811182821017156122d4576122d461229b565b604051610120810167ffffffffffffffff811182821017156122d4576122d461229b565b6040516101e0810167ffffffffffffffff811182821017156122d4576122d461229b565b600081830360a08112156123c257600080fd5b6123ca6122b1565b833581526080601f19830112156123e057600080fd5b6123e86122da565b91506123f26122fd565b60208501356124008161212b565b8082525060408501356020820152606085013560408201526080850135606082015280835250816020820152809250505092915050565b600181811c9082168061244b57607f821691505b602082108114156120d357634e487b7160e01b600052602260045260246000fd5b80516112fe8161212b565b600081830360a081121561248a57600080fd5b6124926122b1565b915060808112156124a257600080fd5b506124ab6122fd565b825181526020830151602082015260408301516040820152606083015163ffffffff60e01b811681146124dd57600080fd5b6060820152815260808201516124f28161212b565b602082015292915050565b80151581146119c857600080fd5b600082601f83011261251c57600080fd5b612524612320565b8061012084018581111561253757600080fd5b845b8181101561258a57606081880312156125525760008081fd5b61255a612320565b8151815260208083015181830152604080840151612577816124fd565b9083015290855290930192606001612539565b509095945050505050565b600061042082840312156125a857600080fd5b6125b0612343565b6125b98361246c565b81526125c88460208501612477565b60208201526125da8460c08501612477565b60408201526101606125ee85828601612477565b6060830152610200840151608083015261260b610220850161246c565b60a083015261024084015160c0830152612628610260850161246c565b60e08301526102808401516101008301526126466102a0850161246c565b6101208301526102c08401516101408301526102e08401519082015261267084610300850161250b565b6101808201529392505050565b60006103a0828403121561269057600080fd5b612698612367565b6126a18361246c565b81526126b08460208501612477565b60208201526126c28460c08501612477565b60408201526126d5846101608501612477565b60608201526126e7610200840161246c565b60808201526126f9610220840161246c565b60a082015261270b610240840161246c565b60c082015261271e84610260850161250b565b60e0820152610380929092015161010083015250919050565b6000610460828403121561274a57600080fd5b61275261238b565b61275b8361246c565b815261276a8460208501612477565b602082015261277c8460c08501612477565b604082015261016061279085828601612477565b60608301526127a2610200850161246c565b60808301526127b4610220850161246c565b60a08301526127c6610240850161246c565b60c083015261026084015160e08301526102808401516101008301526102a08401516101208301526102c08401516101408301526102e08401519082015261030083015161018082015261281e84610320850161250b565b6101a082015261044092909201516101c083015250919050565b60006040828403121561284a57600080fd5b6128526122b1565b823581526020830135612864816124fd565b60208201529392505050565b6000818303608081121561288357600080fd5b61288b6122b1565b833581526060601f19830112156128a157600080fd5b6128a9612320565b915060208401356128b98161212b565b825260408401356128c98161212b565b602083015260608401356128dc8161212b565b604083015260208101919091529392505050565b6000818303604081121561290357600080fd5b61290b6122b1565b833581526020601f198301121561292157600080fd5b6129296122da565b91506020840135612939816124fd565b825260208101919091529392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156129735761297361294a565b500190565b634e487b7160e01b600052603260045260246000fd5b6000828210156129a0576129a061294a565b500390565b8060005b60038110156115bc5781518051855260208082015181870152604091820151151591860191909152606090940193909101906001016129a9565b81516001600160a01b0316815261046081016020830151612a0760208401826120d9565b506040830151612a1a60c08401826120d9565b506060830151610160612a2f818501836120d9565b60808501516001600160a01b0390811661020086015260a0860151811661022086015260c08601511661024085015260e08501516102608501526101008501516102808501526101208501516102a08501526101408501516102c08501528401516102e0840152506101808301516103008301526101a0830151612ab76103208401826129a5565b506101c083015161044083015292915050565b81516001600160a01b031681526103a081016020830151612aee60208401826120d9565b506040830151612b0160c08401826120d9565b506060830151612b156101608401826120d9565b5060808301516001600160a01b0390811661020084015260a0840151811661022084015260c08401511661024083015260e0830151612b586102608401826129a5565b5061010083015161038083015292915050565b6000600019821415612b7f57612b7f61294a565b5060010190565b60008251612b98818460208701612235565b9190910192915050565b600060208284031215612bb457600080fd5b8151611a50816124fd56fea26469706673582212204132b3ba1e4a871fe9cb8d4665ce15bff5fbe235b7a3ea3f92c90c54ec79c5ae64736f6c634300080c0033`,
  BytecodeLen: 14566,
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
    at: './index.rsh:63:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:94:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:120:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:74:62:after expr stmt semicolon',
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
