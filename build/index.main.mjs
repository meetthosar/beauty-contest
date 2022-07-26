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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc2, ctc1, ctc2, ctc1, ctc1, ctc5],
      3: [ctc0, ctc2, ctc2, ctc2, ctc5, ctc1],
      5: [ctc0, ctc2, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc5 = stdlib.T_Object({
    addr: ctc3,
    name: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc5]);
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc2, ctc7, ctc2, ctc7, ctc2]);
  const ctc9 = stdlib.T_Tuple([ctc3, ctc2, ctc2, ctc2]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc2, ctc2, ctc10]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v650 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v651 = [v650, v650, v650];
  const v655 = stdlib.protect(ctc2, interact.deadline, 'for Judge\'s interact field deadline');
  
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:31:23:application',
    fs: ['at ./index.rsh:31:23:application call to [unknown function] (defined at: ./index.rsh:31:23:function exp)', 'at ./index.rsh:31:23:application call to "liftedInteract" (defined at: ./index.rsh:31:23:application)'],
    msg: 'ready',
    who: 'Judge'
    });
  
  const v659 = stdlib.protect(ctc6, await interact.getFinalists(), {
    at: './index.rsh:36:92:application',
    fs: ['at ./index.rsh:34:13:application call to [unknown function] (defined at: ./index.rsh:34:17:function exp)'],
    msg: 'getFinalists',
    who: 'Judge'
    });
  const v660 = v659[stdlib.checkedBigNumberify('./index.rsh:36:92:application', stdlib.UInt_max, '0')];
  const v661 = v659[stdlib.checkedBigNumberify('./index.rsh:36:92:application', stdlib.UInt_max, '1')];
  const v662 = v659[stdlib.checkedBigNumberify('./index.rsh:36:92:application', stdlib.UInt_max, '2')];
  const v672 = stdlib.protect(ctc8, await interact.prizes(), {
    at: './index.rsh:41:108:application',
    fs: ['at ./index.rsh:34:13:application call to [unknown function] (defined at: ./index.rsh:34:17:function exp)'],
    msg: 'prizes',
    who: 'Judge'
    });
  const v673 = v672[stdlib.checkedBigNumberify('./index.rsh:41:108:application', stdlib.UInt_max, '0')];
  const v674 = v672[stdlib.checkedBigNumberify('./index.rsh:41:108:application', stdlib.UInt_max, '1')];
  const v675 = v672[stdlib.checkedBigNumberify('./index.rsh:41:108:application', stdlib.UInt_max, '2')];
  const v676 = v672[stdlib.checkedBigNumberify('./index.rsh:41:108:application', stdlib.UInt_max, '3')];
  const v677 = v672[stdlib.checkedBigNumberify('./index.rsh:41:108:application', stdlib.UInt_max, '4')];
  const v678 = v672[stdlib.checkedBigNumberify('./index.rsh:41:108:application', stdlib.UInt_max, '5')];
  const v685 = stdlib.tokenEq(v673, v675);
  const v686 = v685 ? false : true;
  stdlib.assert(v686, {
    at: './index.rsh:43:11:application',
    fs: ['at ./index.rsh:34:13:application call to [unknown function] (defined at: ./index.rsh:34:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v687 = stdlib.tokenEq(v675, v677);
  const v688 = v687 ? false : true;
  stdlib.assert(v688, {
    at: './index.rsh:44:11:application',
    fs: ['at ./index.rsh:34:13:application call to [unknown function] (defined at: ./index.rsh:34:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v689 = stdlib.tokenEq(v673, v677);
  const v690 = v689 ? false : true;
  stdlib.assert(v690, {
    at: './index.rsh:45:11:application',
    fs: ['at ./index.rsh:34:13:application call to [unknown function] (defined at: ./index.rsh:34:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v691 = stdlib.eq(v674, stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'));
  const v692 = v691 ? false : true;
  stdlib.assert(v692, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:47:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:34:13:application call to [unknown function] (defined at: ./index.rsh:34:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v694 = stdlib.eq(v676, stdlib.checkedBigNumberify('./index.rsh:48:24:decimal', stdlib.UInt_max, '0'));
  const v695 = v694 ? false : true;
  stdlib.assert(v695, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:48:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:34:13:application call to [unknown function] (defined at: ./index.rsh:34:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v697 = stdlib.eq(v678, stdlib.checkedBigNumberify('./index.rsh:49:23:decimal', stdlib.UInt_max, '0'));
  const v698 = v697 ? false : true;
  stdlib.assert(v698, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:49:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:34:13:application call to [unknown function] (defined at: ./index.rsh:34:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v660, v661, v662, v655, v673, v674, v675, v676, v677, v678],
    evt_cnt: 10,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc5, ctc5, ctc2, ctc7, ctc2, ctc7, ctc2, ctc7, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v701, v702, v703, v704, v705, v706, v707, v708, v709, v710], secs: v712, time: v711, didSend: v137, from: v700 } = txn1;
      
      const v721 = v651[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '0')];
      const v723 = v721[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '1')];
      const v724 = v721[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '2')];
      const v725 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v723, v724];
      const v726 = stdlib.Array_set(v651, stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '0'), v725);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v705
        });
      const v728 = v726[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '1')];
      const v730 = v728[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '1')];
      const v731 = v728[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '2')];
      const v732 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v730, v731];
      const v733 = stdlib.Array_set(v726, stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '1'), v732);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v707
        });
      const v735 = v733[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '2')];
      const v737 = v735[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '1')];
      const v738 = v735[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '2')];
      const v739 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v737, v738];
      const v740 = stdlib.Array_set(v733, stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '2'), v739);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v709
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
  const {data: [v701, v702, v703, v704, v705, v706, v707, v708, v709, v710], secs: v712, time: v711, didSend: v137, from: v700 } = txn1;
  const v713 = stdlib.tokenEq(v705, v707);
  const v715 = stdlib.tokenEq(v705, v709);
  const v716 = v715 ? false : true;
  const v717 = v713 ? false : v716;
  const v718 = stdlib.tokenEq(v707, v709);
  const v719 = v718 ? false : true;
  const v720 = v717 ? v719 : false;
  stdlib.assert(v720, {
    at: './index.rsh:56:9:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Judge'
    });
  const v721 = v651[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '0')];
  const v723 = v721[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '1')];
  const v724 = v721[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '2')];
  const v725 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v723, v724];
  const v726 = stdlib.Array_set(v651, stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '0'), v725);
  ;
  const v728 = v726[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '1')];
  const v730 = v728[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '1')];
  const v731 = v728[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '2')];
  const v732 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v730, v731];
  const v733 = stdlib.Array_set(v726, stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '1'), v732);
  ;
  const v735 = v733[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '2')];
  const v737 = v735[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '1')];
  const v738 = v735[stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '2')];
  const v739 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v737, v738];
  const v740 = stdlib.Array_set(v733, stdlib.checkedBigNumberify('./index.rsh:56:9:dot', stdlib.UInt_max, '2'), v739);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v700, v704, v705, v706, v707, v708, v709, v710, v711, v740],
    evt_cnt: 0,
    funcNum: 1,
    lct: v711,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '0'), [[v706, v705], [v708, v707], [v710, v709]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v762, time: v761, didSend: v196, from: v760 } = txn2;
      
      ;
      const v781 = v740[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '0')];
      const v782 = v781[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '0')];
      const v783 = stdlib.add(v782, v706);
      const v786 = v781[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '1')];
      const v787 = v781[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '2')];
      const v788 = [v783, v786, v787];
      const v789 = stdlib.Array_set(v740, stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '0'), v788);
      sim_r.txns.push({
        amt: v706,
        kind: 'to',
        tok: v705
        });
      const v790 = v789[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '1')];
      const v791 = v790[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '0')];
      const v792 = stdlib.add(v791, v708);
      const v795 = v790[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '1')];
      const v796 = v790[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '2')];
      const v797 = [v792, v795, v796];
      const v798 = stdlib.Array_set(v789, stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '1'), v797);
      sim_r.txns.push({
        amt: v708,
        kind: 'to',
        tok: v707
        });
      const v799 = v798[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '2')];
      const v800 = v799[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '0')];
      const v801 = stdlib.add(v800, v710);
      const v804 = v799[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '1')];
      const v805 = v799[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '2')];
      const v806 = [v801, v804, v805];
      const v807 = stdlib.Array_set(v798, stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '2'), v806);
      sim_r.txns.push({
        amt: v710,
        kind: 'to',
        tok: v709
        });
      const v810 = stdlib.add(v711, v704);
      const v811 = stdlib.checkedBigNumberify('./index.rsh:76:80:decimal', stdlib.UInt_max, '0');
      const v812 = stdlib.checkedBigNumberify('./index.rsh:76:83:decimal', stdlib.UInt_max, '0');
      const v813 = stdlib.checkedBigNumberify('./index.rsh:76:85:decimal', stdlib.UInt_max, '0');
      const v814 = stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '5');
      const v815 = stdlib.checkedBigNumberify('./index.rsh:76:65:decimal', stdlib.UInt_max, '0');
      const v816 = v761;
      const v822 = v807;
      const v823 = stdlib.checkedBigNumberify('./index.rsh:30:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v832 = stdlib.lt(v815, v814);
        
        return v832;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2, ctc7, ctc2, ctc7, ctc2, ctc7, ctc2, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v762, time: v761, didSend: v196, from: v760 } = txn2;
  ;
  const v781 = v740[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '0')];
  const v782 = v781[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '0')];
  const v783 = stdlib.add(v782, v706);
  const v786 = v781[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '1')];
  const v787 = v781[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '2')];
  const v788 = [v783, v786, v787];
  const v789 = stdlib.Array_set(v740, stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '0'), v788);
  ;
  const v790 = v789[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '1')];
  const v791 = v790[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '0')];
  const v792 = stdlib.add(v791, v708);
  const v795 = v790[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '1')];
  const v796 = v790[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '2')];
  const v797 = [v792, v795, v796];
  const v798 = stdlib.Array_set(v789, stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '1'), v797);
  ;
  const v799 = v798[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '2')];
  const v800 = v799[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '0')];
  const v801 = stdlib.add(v800, v710);
  const v804 = v799[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '1')];
  const v805 = v799[stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '2')];
  const v806 = [v801, v804, v805];
  const v807 = stdlib.Array_set(v798, stdlib.checkedBigNumberify('./index.rsh:67:9:dot', stdlib.UInt_max, '2'), v806);
  ;
  const v808 = stdlib.addressEq(v700, v760);
  stdlib.assert(v808, {
    at: './index.rsh:67:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Judge'
    });
  const v810 = stdlib.add(v711, v704);
  let v811 = stdlib.checkedBigNumberify('./index.rsh:76:80:decimal', stdlib.UInt_max, '0');
  let v812 = stdlib.checkedBigNumberify('./index.rsh:76:83:decimal', stdlib.UInt_max, '0');
  let v813 = stdlib.checkedBigNumberify('./index.rsh:76:85:decimal', stdlib.UInt_max, '0');
  let v814 = stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '5');
  let v815 = stdlib.checkedBigNumberify('./index.rsh:76:65:decimal', stdlib.UInt_max, '0');
  let v816 = v761;
  let v822 = v807;
  let v823 = stdlib.checkedBigNumberify('./index.rsh:30:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v832 = stdlib.lt(v815, v814);
    
    return v832;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc9],
      timeoutAt: ['time', v810],
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
      const {data: [v923], secs: v925, time: v924, didSend: v461, from: v922 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v926 = true;
      await txn4.getOutput('Voters_timeUp', 'v926', ctc10, v926);
      const cv811 = v811;
      const cv812 = v812;
      const cv813 = v813;
      const cv814 = v814;
      const cv815 = v815;
      const cv816 = v924;
      const cv822 = v822;
      const cv823 = v823;
      
      v811 = cv811;
      v812 = cv812;
      v813 = cv813;
      v814 = cv814;
      v815 = cv815;
      v816 = cv816;
      v822 = cv822;
      v823 = cv823;
      
      continue;
      }
    else {
      const {data: [v873], secs: v875, time: v874, didSend: v389, from: v872 } = txn3;
      undefined /* setApiDetails */;
      const v877 = v873[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '0')];
      const v878 = v873[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '1')];
      const v879 = v873[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '2')];
      const v880 = v873[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '3')];
      const v881 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v877), null);
      let v882;
      switch (v881[0]) {
        case 'None': {
          const v883 = v881[1];
          v882 = false;
          
          break;
          }
        case 'Some': {
          const v884 = v881[1];
          v882 = true;
          
          break;
          }
        }
      const v885 = v882 ? false : true;
      stdlib.assert(v885, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:79:62:application call to [unknown function] (defined at: ./index.rsh:79:62:function exp)', 'at ./index.rsh:79:62:application call to [unknown function] (defined at: ./index.rsh:79:62:function exp)'],
        msg: 'You have already voted',
        who: 'Judge'
        });
      ;
      let v894;
      switch (v881[0]) {
        case 'None': {
          const v895 = v881[1];
          v894 = false;
          
          break;
          }
        case 'Some': {
          const v896 = v881[1];
          v894 = true;
          
          break;
          }
        }
      const v897 = v894 ? false : true;
      stdlib.assert(v897, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:82:22:application call to [unknown function] (defined at: ./index.rsh:82:22:function exp)'],
        msg: 'You have already voted',
        who: 'Judge'
        });
      const v903 = true;
      await txn3.getOutput('Voters_voteBeautyQueen', 'v903', ctc10, v903);
      await stdlib.mapSet(map0, v877, null);
      const v914 = stdlib.add(v815, stdlib.checkedBigNumberify('./index.rsh:86:23:decimal', stdlib.UInt_max, '1'));
      const v915 = stdlib.add(v811, v878);
      const v916 = stdlib.add(v812, v879);
      const v917 = stdlib.add(v813, v880);
      const cv811 = v915;
      const cv812 = v916;
      const cv813 = v917;
      const cv814 = v814;
      const cv815 = v914;
      const cv816 = v874;
      const cv822 = v822;
      const cv823 = v823;
      
      v811 = cv811;
      v812 = cv812;
      v813 = cv813;
      v814 = cv814;
      v815 = cv815;
      v816 = cv816;
      v822 = cv822;
      v823 = cv823;
      
      continue;}
    
    }
  const v935 = stdlib.protect(ctc12, await interact.checkVotes(v811, v812, v813), {
    at: './index.rsh:100:84:application',
    fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)'],
    msg: 'checkVotes',
    who: 'Judge'
    });
  const v936 = v935[stdlib.checkedBigNumberify('./index.rsh:100:84:application', stdlib.UInt_max, '0')];
  const v937 = v935[stdlib.checkedBigNumberify('./index.rsh:100:84:application', stdlib.UInt_max, '1')];
  const v938 = v935[stdlib.checkedBigNumberify('./index.rsh:100:84:application', stdlib.UInt_max, '2')];
  const v942 = stdlib.addressEq(v936, v937);
  const v943 = v942 ? false : true;
  stdlib.assert(v943, {
    at: './index.rsh:102:11:application',
    fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v944 = stdlib.addressEq(v937, v938);
  const v945 = v944 ? false : true;
  stdlib.assert(v945, {
    at: './index.rsh:103:11:application',
    fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  const v946 = stdlib.addressEq(v936, v938);
  const v947 = v946 ? false : true;
  stdlib.assert(v947, {
    at: './index.rsh:104:11:application',
    fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)'],
    msg: null,
    who: 'Judge'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v700, v705, v707, v709, v822, v823, v936, v937, v938],
    evt_cnt: 3,
    funcNum: 3,
    lct: v816,
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:107:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v949, v950, v951], secs: v953, time: v952, didSend: v495, from: v948 } = txn3;
      
      ;
      const v955 = v822[stdlib.checkedBigNumberify('./index.rsh:112:19:application', stdlib.UInt_max, '0')];
      const v956 = v955[stdlib.checkedBigNumberify('./index.rsh:112:19:application', stdlib.UInt_max, '0')];
      const v962 = stdlib.sub(v956, v956);
      const v965 = v955[stdlib.checkedBigNumberify('./index.rsh:112:47:application', stdlib.UInt_max, '1')];
      const v966 = v955[stdlib.checkedBigNumberify('./index.rsh:112:47:application', stdlib.UInt_max, '2')];
      const v967 = [v962, v965, v966];
      const v968 = stdlib.Array_set(v822, stdlib.checkedBigNumberify('./index.rsh:112:47:application', stdlib.UInt_max, '0'), v967);
      sim_r.txns.push({
        kind: 'from',
        to: v949,
        tok: v705
        });
      const v969 = v968[stdlib.checkedBigNumberify('./index.rsh:113:19:application', stdlib.UInt_max, '1')];
      const v970 = v969[stdlib.checkedBigNumberify('./index.rsh:113:19:application', stdlib.UInt_max, '0')];
      const v976 = stdlib.sub(v970, v970);
      const v979 = v969[stdlib.checkedBigNumberify('./index.rsh:113:49:application', stdlib.UInt_max, '1')];
      const v980 = v969[stdlib.checkedBigNumberify('./index.rsh:113:49:application', stdlib.UInt_max, '2')];
      const v981 = [v976, v979, v980];
      const v982 = stdlib.Array_set(v968, stdlib.checkedBigNumberify('./index.rsh:113:49:application', stdlib.UInt_max, '1'), v981);
      sim_r.txns.push({
        kind: 'from',
        to: v950,
        tok: v707
        });
      const v983 = v982[stdlib.checkedBigNumberify('./index.rsh:114:19:application', stdlib.UInt_max, '2')];
      const v984 = v983[stdlib.checkedBigNumberify('./index.rsh:114:19:application', stdlib.UInt_max, '0')];
      const v990 = stdlib.sub(v984, v984);
      const v993 = v983[stdlib.checkedBigNumberify('./index.rsh:114:47:application', stdlib.UInt_max, '1')];
      const v994 = v983[stdlib.checkedBigNumberify('./index.rsh:114:47:application', stdlib.UInt_max, '2')];
      const v995 = [v990, v993, v994];
      const v996 = stdlib.Array_set(v982, stdlib.checkedBigNumberify('./index.rsh:114:47:application', stdlib.UInt_max, '2'), v995);
      sim_r.txns.push({
        kind: 'from',
        to: v951,
        tok: v709
        });
      const v997 = v996[stdlib.checkedBigNumberify('./index.rsh:116:19:application', stdlib.UInt_max, '0')];
      const v998 = v997[stdlib.checkedBigNumberify('./index.rsh:116:19:application', stdlib.UInt_max, '0')];
      const v1004 = stdlib.sub(v998, v998);
      const v1007 = v997[stdlib.checkedBigNumberify('./index.rsh:116:47:application', stdlib.UInt_max, '1')];
      const v1008 = v997[stdlib.checkedBigNumberify('./index.rsh:116:47:application', stdlib.UInt_max, '2')];
      const v1009 = [v1004, v1007, v1008];
      const v1010 = stdlib.Array_set(v996, stdlib.checkedBigNumberify('./index.rsh:116:47:application', stdlib.UInt_max, '0'), v1009);
      sim_r.txns.push({
        kind: 'from',
        to: v700,
        tok: v705
        });
      const v1011 = v1010[stdlib.checkedBigNumberify('./index.rsh:117:19:application', stdlib.UInt_max, '1')];
      const v1012 = v1011[stdlib.checkedBigNumberify('./index.rsh:117:19:application', stdlib.UInt_max, '0')];
      const v1018 = stdlib.sub(v1012, v1012);
      const v1021 = v1011[stdlib.checkedBigNumberify('./index.rsh:117:49:application', stdlib.UInt_max, '1')];
      const v1022 = v1011[stdlib.checkedBigNumberify('./index.rsh:117:49:application', stdlib.UInt_max, '2')];
      const v1023 = [v1018, v1021, v1022];
      const v1024 = stdlib.Array_set(v1010, stdlib.checkedBigNumberify('./index.rsh:117:49:application', stdlib.UInt_max, '1'), v1023);
      sim_r.txns.push({
        kind: 'from',
        to: v700,
        tok: v707
        });
      const v1025 = v1024[stdlib.checkedBigNumberify('./index.rsh:118:19:application', stdlib.UInt_max, '2')];
      const v1026 = v1025[stdlib.checkedBigNumberify('./index.rsh:118:19:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v700,
        tok: v709
        });
      sim_r.txns.push({
        kind: 'from',
        to: v700,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v709
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v707
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v705
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
    tys: [ctc3, ctc7, ctc7, ctc7, ctc14, ctc2, ctc3, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v949, v950, v951], secs: v953, time: v952, didSend: v495, from: v948 } = txn3;
  ;
  const v954 = stdlib.addressEq(v700, v948);
  stdlib.assert(v954, {
    at: './index.rsh:107:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Judge'
    });
  const v955 = v822[stdlib.checkedBigNumberify('./index.rsh:112:19:application', stdlib.UInt_max, '0')];
  const v956 = v955[stdlib.checkedBigNumberify('./index.rsh:112:19:application', stdlib.UInt_max, '0')];
  const v962 = stdlib.sub(v956, v956);
  const v965 = v955[stdlib.checkedBigNumberify('./index.rsh:112:47:application', stdlib.UInt_max, '1')];
  const v966 = v955[stdlib.checkedBigNumberify('./index.rsh:112:47:application', stdlib.UInt_max, '2')];
  const v967 = [v962, v965, v966];
  const v968 = stdlib.Array_set(v822, stdlib.checkedBigNumberify('./index.rsh:112:47:application', stdlib.UInt_max, '0'), v967);
  ;
  const v969 = v968[stdlib.checkedBigNumberify('./index.rsh:113:19:application', stdlib.UInt_max, '1')];
  const v970 = v969[stdlib.checkedBigNumberify('./index.rsh:113:19:application', stdlib.UInt_max, '0')];
  const v976 = stdlib.sub(v970, v970);
  const v979 = v969[stdlib.checkedBigNumberify('./index.rsh:113:49:application', stdlib.UInt_max, '1')];
  const v980 = v969[stdlib.checkedBigNumberify('./index.rsh:113:49:application', stdlib.UInt_max, '2')];
  const v981 = [v976, v979, v980];
  const v982 = stdlib.Array_set(v968, stdlib.checkedBigNumberify('./index.rsh:113:49:application', stdlib.UInt_max, '1'), v981);
  ;
  const v983 = v982[stdlib.checkedBigNumberify('./index.rsh:114:19:application', stdlib.UInt_max, '2')];
  const v984 = v983[stdlib.checkedBigNumberify('./index.rsh:114:19:application', stdlib.UInt_max, '0')];
  const v990 = stdlib.sub(v984, v984);
  const v993 = v983[stdlib.checkedBigNumberify('./index.rsh:114:47:application', stdlib.UInt_max, '1')];
  const v994 = v983[stdlib.checkedBigNumberify('./index.rsh:114:47:application', stdlib.UInt_max, '2')];
  const v995 = [v990, v993, v994];
  const v996 = stdlib.Array_set(v982, stdlib.checkedBigNumberify('./index.rsh:114:47:application', stdlib.UInt_max, '2'), v995);
  ;
  const v997 = v996[stdlib.checkedBigNumberify('./index.rsh:116:19:application', stdlib.UInt_max, '0')];
  const v998 = v997[stdlib.checkedBigNumberify('./index.rsh:116:19:application', stdlib.UInt_max, '0')];
  const v1004 = stdlib.sub(v998, v998);
  const v1007 = v997[stdlib.checkedBigNumberify('./index.rsh:116:47:application', stdlib.UInt_max, '1')];
  const v1008 = v997[stdlib.checkedBigNumberify('./index.rsh:116:47:application', stdlib.UInt_max, '2')];
  const v1009 = [v1004, v1007, v1008];
  const v1010 = stdlib.Array_set(v996, stdlib.checkedBigNumberify('./index.rsh:116:47:application', stdlib.UInt_max, '0'), v1009);
  ;
  const v1011 = v1010[stdlib.checkedBigNumberify('./index.rsh:117:19:application', stdlib.UInt_max, '1')];
  const v1012 = v1011[stdlib.checkedBigNumberify('./index.rsh:117:19:application', stdlib.UInt_max, '0')];
  const v1018 = stdlib.sub(v1012, v1012);
  const v1021 = v1011[stdlib.checkedBigNumberify('./index.rsh:117:49:application', stdlib.UInt_max, '1')];
  const v1022 = v1011[stdlib.checkedBigNumberify('./index.rsh:117:49:application', stdlib.UInt_max, '2')];
  const v1023 = [v1018, v1021, v1022];
  const v1024 = stdlib.Array_set(v1010, stdlib.checkedBigNumberify('./index.rsh:117:49:application', stdlib.UInt_max, '1'), v1023);
  ;
  const v1025 = v1024[stdlib.checkedBigNumberify('./index.rsh:118:19:application', stdlib.UInt_max, '2')];
  const v1026 = v1025[stdlib.checkedBigNumberify('./index.rsh:118:19:application', stdlib.UInt_max, '0')];
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v700, v705, v707, v709, v810, v811, v812, v813, v814, v815, v822, v823] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc3, ctc3, ctc3, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc7, ctc4]);
  const v921 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:91:9:application',
    fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:9:function exp)', 'at ./index.rsh:90:37:application call to [unknown function] (defined at: ./index.rsh:90:37:function exp)'],
    msg: 'in',
    who: 'Voters_timeUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v700, v705, v707, v709, v810, v811, v812, v813, v814, v815, v822, v823, v921],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:91:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v923], secs: v925, time: v924, didSend: v461, from: v922 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voters_timeUp"
        });
      ;
      const v926 = true;
      const v927 = await txn1.getOutput('Voters_timeUp', 'v926', ctc5, v926);
      
      const v1292 = v811;
      const v1293 = v812;
      const v1294 = v813;
      const v1295 = v814;
      const v1296 = v815;
      const v1298 = v822;
      const v1299 = v823;
      const v1300 = stdlib.lt(v815, v814);
      if (v1300) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc7, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v923], secs: v925, time: v924, didSend: v461, from: v922 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v926 = true;
  const v927 = await txn1.getOutput('Voters_timeUp', 'v926', ctc5, v926);
  stdlib.protect(ctc0, await interact.out(v923, v927), {
    at: './index.rsh:91:9:application',
    fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:9:function exp)', 'at ./index.rsh:92:10:application call to "k" (defined at: ./index.rsh:91:9:function exp)', 'at ./index.rsh:90:37:application call to [unknown function] (defined at: ./index.rsh:90:37:function exp)'],
    msg: 'out',
    who: 'Voters_timeUp'
    });
  
  const v1292 = v811;
  const v1293 = v812;
  const v1294 = v813;
  const v1295 = v814;
  const v1296 = v815;
  const v1298 = v822;
  const v1299 = v823;
  const v1300 = stdlib.lt(v815, v814);
  if (v1300) {
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc8 = stdlib.T_Tuple([ctc2, ctc4, ctc4, ctc4]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v700, v705, v707, v709, v810, v811, v812, v813, v814, v815, v822, v823] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc3, ctc3, ctc3, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc7, ctc4]);
  const v839 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:79:62:application call to [unknown function] (defined at: ./index.rsh:79:62:function exp)', 'at ./index.rsh:79:62:application call to [unknown function] (defined at: ./index.rsh:79:62:function exp)'],
    msg: 'in',
    who: 'Voters_voteBeautyQueen'
    });
  const v840 = v839[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v848 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v840), null);
  let v849;
  switch (v848[0]) {
    case 'None': {
      const v850 = v848[1];
      v849 = false;
      
      break;
      }
    case 'Some': {
      const v851 = v848[1];
      v849 = true;
      
      break;
      }
    }
  const v852 = v849 ? false : true;
  stdlib.assert(v852, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:79:62:application call to [unknown function] (defined at: ./index.rsh:79:62:function exp)', 'at ./index.rsh:79:62:application call to [unknown function] (defined at: ./index.rsh:79:62:function exp)'],
    msg: 'You have already voted',
    who: 'Voters_voteBeautyQueen'
    });
  
  let v865;
  switch (v848[0]) {
    case 'None': {
      const v866 = v848[1];
      v865 = false;
      
      break;
      }
    case 'Some': {
      const v867 = v848[1];
      v865 = true;
      
      break;
      }
    }
  const v868 = v865 ? false : true;
  stdlib.assert(v868, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:79:62:application call to [unknown function] (defined at: ./index.rsh:79:62:function exp)', 'at ./index.rsh:79:62:application call to [unknown function] (defined at: ./index.rsh:79:62:function exp)'],
    msg: 'You have already voted',
    who: 'Voters_voteBeautyQueen'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v700, v705, v707, v709, v810, v811, v812, v813, v814, v815, v822, v823, v839],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:62:dot', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v873], secs: v875, time: v874, didSend: v389, from: v872 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voters_voteBeautyQueen"
        });
      const v877 = v873[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '0')];
      const v878 = v873[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '1')];
      const v879 = v873[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '2')];
      const v880 = v873[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '3')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v877), null);
      ;
      const v903 = true;
      const v904 = await txn1.getOutput('Voters_voteBeautyQueen', 'v903', ctc5, v903);
      
      await stdlib.simMapSet(sim_r, 0, v877, null);
      const v914 = stdlib.add(v815, stdlib.checkedBigNumberify('./index.rsh:86:23:decimal', stdlib.UInt_max, '1'));
      const v915 = stdlib.add(v811, v878);
      const v916 = stdlib.add(v812, v879);
      const v917 = stdlib.add(v813, v880);
      const v1346 = v915;
      const v1347 = v916;
      const v1348 = v917;
      const v1349 = v814;
      const v1350 = v914;
      const v1352 = v822;
      const v1353 = v823;
      const v1354 = stdlib.lt(v914, v814);
      if (v1354) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc7, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v873], secs: v875, time: v874, didSend: v389, from: v872 } = txn1;
  undefined /* setApiDetails */;
  const v877 = v873[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '0')];
  const v878 = v873[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '1')];
  const v879 = v873[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '2')];
  const v880 = v873[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '3')];
  const v881 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v877), null);
  let v882;
  switch (v881[0]) {
    case 'None': {
      const v883 = v881[1];
      v882 = false;
      
      break;
      }
    case 'Some': {
      const v884 = v881[1];
      v882 = true;
      
      break;
      }
    }
  const v885 = v882 ? false : true;
  stdlib.assert(v885, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:79:62:application call to [unknown function] (defined at: ./index.rsh:79:62:function exp)', 'at ./index.rsh:79:62:application call to [unknown function] (defined at: ./index.rsh:79:62:function exp)'],
    msg: 'You have already voted',
    who: 'Voters_voteBeautyQueen'
    });
  ;
  let v894;
  switch (v881[0]) {
    case 'None': {
      const v895 = v881[1];
      v894 = false;
      
      break;
      }
    case 'Some': {
      const v896 = v881[1];
      v894 = true;
      
      break;
      }
    }
  const v897 = v894 ? false : true;
  stdlib.assert(v897, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:82:22:application call to [unknown function] (defined at: ./index.rsh:82:22:function exp)'],
    msg: 'You have already voted',
    who: 'Voters_voteBeautyQueen'
    });
  const v903 = true;
  const v904 = await txn1.getOutput('Voters_voteBeautyQueen', 'v903', ctc5, v903);
  if (v389) {
    stdlib.protect(ctc0, await interact.out(v873, v904), {
      at: './index.rsh:79:11:application',
      fs: ['at ./index.rsh:79:11:application call to [unknown function] (defined at: ./index.rsh:79:11:function exp)', 'at ./index.rsh:83:10:application call to "k" (defined at: ./index.rsh:82:22:function exp)', 'at ./index.rsh:82:22:application call to [unknown function] (defined at: ./index.rsh:82:22:function exp)'],
      msg: 'out',
      who: 'Voters_voteBeautyQueen'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v877, null);
  const v914 = stdlib.add(v815, stdlib.checkedBigNumberify('./index.rsh:86:23:decimal', stdlib.UInt_max, '1'));
  const v915 = stdlib.add(v811, v878);
  const v916 = stdlib.add(v812, v879);
  const v917 = stdlib.add(v813, v880);
  const v1346 = v915;
  const v1347 = v916;
  const v1348 = v917;
  const v1349 = v814;
  const v1350 = v914;
  const v1352 = v822;
  const v1353 = v823;
  const v1354 = stdlib.lt(v914, v814);
  if (v1354) {
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
    pure: [],
    sigs: [`Voters_timeUp()byte`, `Voters_voteBeautyQueen(address,uint64,uint64,uint64)byte`]
    },
  appApproval: `BiASAAEEBSAoMAgDoI0GOEBIUFihuoOYAmCbASYDAQABAQAiNQAxGEEHICpkSSJbNQEhB1s1AjEZIxJBAAgxACgoZkIG7jYaABdJQQAvIjUEIzUGSSEPDEAAFiEPEkQ2GgE2GgJQNhoDUDYaBFBCAK+Bq83V4AESRCpCACM2GgIXNQQ2GgM2GgEXSSEIDEADVkkkDEABXEklDEAAgiUSRCU0ARJENARJIhJMNAISEUQoZClkUEk1AyEKWzX/STUFNf6ABGiSZGM0/lCwMgY0/w9EgAkAAAAAAAADngGwKTUHNANXACA0AyEEWzQDIQVbNAMhBls0/zQDIQtbNAMhDFs0AyENWzQDIQ5bNAMhEFsyBjQDV2gzNAMhEVtCBU1IJTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDIQpbNf9JNQU1/oAEeqwwBDT+ULAyBjT/DEQ0/lcAIDX9NP2IBgtJNfwiVUAABiI1+0IABiM1+0IAADT7FEQ0/CJVQAAGIjX6QgAGIzX6QgAANPoURIAJAAAAAAAAA4cBsCk1BzT9KClmNANXACA0AyEEWzQDIQVbNAMhBls0/zQDIQtbNP4hBFsINAMhDFs0/iEFWwg0AyENWzT+IQZbCDQDIQ5bNAMhEFsjCDIGNANXaDM0AyERW0IEeUghCDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/iEFWzX9IQZbNfxXODM1+0k1BUlJVwAgNfpXICA1+VdAIDX4gAQVth/LNPpQNPlQNPhQsDT/MQASRDT7VwARSTX3IltJNfZJCRY091cICFA091cQAVA0+1cRIlA19bEisgE09rISJLIQNPqyFDT+shGzNPVXERFJNfQiWzXzNPVXABE080kJFjT0VwgIUDT0VxABUFA09VciEVA18rEisgE087ISJLIQNPmyFDT9shGzNPJXIhFJNfEiWzXwNPJXACI08EkJFjTxVwgIUDTxVxABUFA177EisgE08LISJLIQNPiyFDT8shGzNO9XABFJNe4iW0k17UkJFjTuVwgIUDTuVxABUDTvVxEiUDXssSKyATTtshIkshA0/7IUNP6yEbM07FcREUk16yJbNeqxIrIBNOqyEiSyEDT/shQ0/bIRs7EisgE07FcAETTqSQkWNOtXCAhQNOtXEAFQUDTsVyIRUFciESJbshIkshA0/7IUNPyyEbOxIrIBNAOBa1uyCCOyEDT/sgezsSKyASKyEiSyEDIJshUyCrIUNPyyEbOxIrIBIrISJLIQMgmyFTIKshQ0/bIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgMVSSMMQADzIxJEIzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSlcAIDX/IQVbNf4hBls1/SEKWzX8IQtbNfshDFs1+iENWzX5V2AzNfiABJqLkXSwNPhXABFJNfciWzT9CBY091cICFA091cQAVA0+FcRIlA19jT9NP6IAyo09lcRETX1NPZXABE09SJbNPsIFjT1VwgIUDT1VxABUFA09lciEVA19DT7NPyIAvo09FciETXzNPk0+ogC7DT/MQASRDT/NP40/DT6NAMhDls0AyEEWwgiIiIlIjIGNPRXACI08yJbNPkIFjTzVwgIUDTzVxABUFAiQgGMSCEJiAKQIjQBEkQ0BEkiEkw0AhIRREk1BUlKSkpKVwCENf9XhIQ1/oGIAoGEAVg1/YGMA1s1/IGUA1s1+4GcA1s1+oGkA1s1+YGsA1s1+IG0A1s194G8A1s19oAEnKHzODT/UDT+UDT9UDT8FlA0+xZQNPoWUDT5FlA0+BZQNPcWUDT2FlCwgRGvSTX1SVA09VA19DT7NPkTNPs09xMQNPk09xMQRDT0VwARNfMhB68081cICFA081cQAVA09FcRIlA18iEJiAHNsSKyASKyEiSyEDIKshQ0+7IRszTyVxERNfE08lcAESEHrzTxVwgIUDTxVxABUFA08lciEVA18CEJiAGRsSKyASKyEiSyEDIKshQ0+bIRszTwVyIRNe808FcAIiEHrzTvVwgIUDTvVxABUFA17iEJiAFbsSKyASKyEiSyEDIKshQ097IRszEANPwWUDT7FlA0+hZQNPkWUDT4FlA09xZQNPYWUDIGFlA07lAoSwFXAH9nKUsBV38UZ0gjNQEyBjUCQgCrNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM0/DT7DEEARjTzNPQWUDT1FlA09hZQNPcWUDT4FlA0+RZQNPoWUDT7FlA0/BZQNP5QNP8WUChLAVcAf2cpSwFXfyRnSCU1ATIGNQJCAEM08zT0FlA09RZQNPYWUDT+UDT/FlAoSwFXAHNnSCEINQEyBjUCQgAbMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQgxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAANIKIkoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 2,
  stateSize: 163,
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
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
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
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_name",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T5",
                "name": "v701",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
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
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_name",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T5",
                "name": "v702",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
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
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_name",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T5",
                "name": "v703",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v704",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v705",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v706",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v707",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v708",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v709",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v710",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
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
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_name",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T5",
                "name": "v701",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
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
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_name",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T5",
                "name": "v702",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
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
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_name",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T5",
                "name": "v703",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v704",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v705",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v706",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v707",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v708",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v709",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v710",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
        "internalType": "struct T12",
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
                "name": "v949",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v950",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v951",
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
                "name": "v873",
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
                "name": "v923",
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
    "name": "_reach_oe_v903",
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
    "name": "_reach_oe_v926",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
        "internalType": "struct T12",
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
                "name": "v949",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v950",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v951",
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
                "name": "v873",
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
                "name": "v923",
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
  Bytecode: `0x608060405260405162002e3c38038062002e3c83398101604081905262000026916200086b565b600080554360035562000038620004f4565b60408051338152835160208083019190915280850151805180516001600160a01b0390811685870152908301518051606080870191909152818501516080808801919091528288015160a080890191909152928201516001600160e01b031990811660c0808a0191909152868801518051871660e0808c0191909152908901518051610100808d0191909152818b0151610120808e0191909152828e01516101408e01529187015185166101608d0152898d015180518a166101808e01528b015180516101a08e01529a8b01516101c08d01528a8d01516101e08d0152998601519093166102008b0152938701516102208a01529186015185166102408901529285015161026088015284015183166102808701528301516102a086015292820151166102c084015201516102e082015290517fdbbf6a723015ab267dc1b540bc1612ac735797328f0fb6ca95214e57b3ff276d918190036103000190a18051600090819052815160209081018290528251604090810192909252825181840180519190915283518151830152835190519092019190915282015160c08101516080909101516200027f916001600160a01b039182169116146200023157826020015161010001516001600160a01b03168360200151608001516001600160a01b0316146200022957600162000234565b600062000234565b60005b6200024157600062000277565b826020015161010001516001600160a01b0316836020015160c001516001600160a01b0316146200027457600162000277565b60005b600762000447565b604081810180516000908190526020808501805151820151845190920191909152805151840151835190151594019390935291519051620002c1929062000471565b6060820190815260808201805160009052815160209081015181015182518201528251015160409081015182519015159101529051905162000307919060019062000471565b60a0820190815260c08201805160009052815160409081015160209081015183519091015282518101518101518251901515910152905190516200034f919060029062000471565b60e0820152620003623415600862000447565b6200036c620005bd565b338152602080840180516060908101518385015281516080908101516001600160a01b03908116604080880191909152845160a09081015194880194909452845160c090810151831693880193909352845160e0908101519488019490945284516101009081015190921692870192909252925161012090810151838701524393860184905291860151918501919091526001600081905591909155516200041791839101620009b9565b604051602081830303815290604052600290805190602001906200043d92919062000636565b5050505062000ad7565b816200046d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200047b620006c5565b60005b6003811015620004d1578481600381106200049d576200049d6200095d565b6020020151828260038110620004b757620004b76200095d565b602002015280620004c88162000a70565b9150506200047e565b5081818460038110620004e857620004e86200095d565b60200201529392505050565b6040805161016081019091526000610100820181815261012083018290526101408301919091528152602081016200052b620006c5565b815260408051606081018252600080825260208281018290529282015291019081526020016200055a620006c5565b8152604080516060810182526000808252602082810182905292820152910190815260200162000589620006c5565b81526040805160608101825260008082526020828101829052928201529101908152602001620005b8620006c5565b905290565b60405180610140016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001620005b8620006c5565b828054620006449062000a9a565b90600052602060002090601f016020900481019282620006685760008555620006b3565b82601f106200068357805160ff1916838001178555620006b3565b82800160010185558215620006b3579182015b82811115620006b357825182559160200191906001019062000696565b50620006c192915062000712565b5090565b60405180606001604052806003905b620006fb604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620006d45790505090565b5b80821115620006c1576000815560010162000713565b604080519081016001600160401b03811182821017156200075a57634e487b7160e01b600052604160045260246000fd5b60405290565b60405161014081016001600160401b03811182821017156200075a57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620007aa57600080fd5b919050565b600081830360a0811215620007c357600080fd5b620007cd62000729565b9150620007da8362000792565b82526080601f1982011215620007ef57600080fd5b50604051608081016001600160401b03811182821017156200082157634e487b7160e01b600052604160045260246000fd5b60409081526020848101518352848201519083015260608401519082015260808301516001600160e01b0319811681146200085b57600080fd5b6060820152602082015292915050565b60008183036102e08112156200088057600080fd5b6200088a62000729565b835181526102c080601f1984011215620008a357600080fd5b620008ad62000760565b9250620008be8660208701620007af565b8352620008cf8660c08701620007af565b6020840152620008e4866101608701620007af565b6040840152610200850151606084015262000903610220860162000792565b608084015261024085015160a084015262000922610260860162000792565b60c084015261028085015160e0840152620009416102a0860162000792565b6101008401529390930151610120820152602083015250919050565b634e487b7160e01b600052603260045260246000fd5b8060005b6003811015620009b357815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000977565b50505050565b81516001600160a01b031681526102408101602083015160208301526040830151620009f060408401826001600160a01b03169052565b5060608301516060830152608083015162000a1660808401826001600160a01b03169052565b5060a083015160a083015260c083015162000a3c60c08401826001600160a01b03169052565b5060e083015160e08301526101008084015181840152506101208084015162000a688285018262000973565b505092915050565b600060001982141562000a9357634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000aaf57607f821691505b6020821081141562000ad157634e487b7160e01b600052602260045260246000fd5b50919050565b6123558062000ae76000396000f3fe60806040526004361061008f5760003560e01c8063832307571161005657806383230757146101325780639171488f14610147578063ab53f2c61461015a578063ad9fa3d81461017d578063d4eee77a1461019057005b806304c888d1146100985780631e93b0f1146100ab5780631f924f28146100cf5780632c10a159146100f25780633bc5b7bf1461010557005b3661009657005b005b6100966100a6366004611a1a565b610198565b3480156100b757600080fd5b506003545b6040519081526020015b60405180910390f35b6100e26100dd366004611a47565b6101c8565b60405190151581526020016100c6565b610096610100366004611a94565b61022e565b34801561011157600080fd5b50610125610120366004611ab0565b61025a565b6040516100c69190611ae3565b34801561013e57600080fd5b506001546100bc565b610096610155366004611b2a565b610271565b34801561016657600080fd5b5061016f61029d565b6040516100c6929190611b68565b61009661018b366004611a94565b61033a565b6100e2610366565b60408051808201909152600080825260208201526101c46101be36849003840184611c6f565b8261039e565b5050565b60006101d2611619565b60208082018051516001600160a01b0389169052805151820187905280515160409081018790529051516060018590528051808201909152600080825291810191909152610220828261039e565b602001519695505050505050565b60408051808201909152600080825260208201526101c461025436849003840184611d23565b82610778565b61026261165e565b61026b82610aed565b92915050565b60408051808201909152600080825260208201526101c461029736849003840184611d5b565b82610bb1565b6000606060005460028080546102b290611ddb565b80601f01602080910402602001604051908101604052809291908181526020018280546102de90611ddb565b801561032b5780601f106103005761010080835404028352916020019161032b565b820191906000526020600020905b81548152906001019060200180831161030e57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526101c461036036849003840184611e10565b82610fc6565b6000610370611681565b60208082015160009081905260408051808201909152818152918201526103978282610fc6565b5192915050565b6103ae60056000541460176111fa565b81516103c99015806103c257508251600154145b60186111fa565b6000808055600280546103db90611ddb565b80601f016020809104026020016040519081016040528092919081815260200182805461040790611ddb565b80156104545780601f1061042957610100808354040283529160200191610454565b820191906000526020600020905b81548152906001019060200180831161043757829003601f168201915b505050505080602001905181019061046c9190611eff565b90506104766116ab565b6104878260800151431060196111fa565b604080513381528551602080830191909152808701515180516001600160a01b03168385015290810151606080840191909152818401516080840152015160a082015290517f2c6296f072d8324f766bb50c3dcc6e4f906f10ce4bfaad15982ac3c477f9e00c9181900360c00190a16020840151515161050690610aed565b81526000815151600181111561051e5761051e611acd565b14156105305760006020820152610554565b6001815151600181111561054657610546611acd565b141561055457600160208201525b610571816020015161056757600161056a565b60005b60146111fa565b61057d341560156111fa565b6000815151600181111561059357610593611acd565b14156105a557600060408201526105c9565b600181515160018111156105bb576105bb611acd565b14156105c957600160408201525b6105e681604001516105dc5760016105df565b60005b60166111fa565b604051600181527ff76f8296eca8ec2770a356dbe88b7fe987cfa9c7cdcfbc3466b0b8f64e8908ec9060200160405180910390a160016020848101829052858101805151516001600160a01b03908116600090815260049093526040808420805460ff19169095179094559051515116815220805462ff00001916905561066b6116be565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416910152606080860151845193169201919091526080808501518351909101528581015151015160a08401516106cb9190611fd5565b60208083015191909152850151516040015160c08401516106ec9190611fd5565b602080830151810191909152850151516060015160e084015161070f9190611fd5565b6020820180516040019190915261010084015190516060015261012083015161073a90600190611fd5565b6020820180516080019190915280514360a090910152610140840151815160c00152610160840151905160e0015261077181611220565b5050505050565b610788600160005414600e6111fa565b81516107a390158061079c57508251600154145b600f6111fa565b6000808055600280546107b590611ddb565b80601f01602080910402602001604051908101604052809291908181526020018280546107e190611ddb565b801561082e5780601f106108035761010080835404028352916020019161082e565b820191906000526020600020905b81548152906001019060200180831161081157829003601f168201915b50505050508060200190518101906108469190611fed565b90506108506116fc565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16108a3341560096111fa565b606082015161012083015151516108ba9190611fd5565b815152610120820180515160209081015183519091015280515160409081015183519015159101525181516108f29190600090611393565b81602001819052506109176109103384604001518560600151611407565b600a6111fa565b60a082015160208281015101515161092f9190611fd5565b604082810180519290925260208084018051820151820151845183015280519091015182015183519015159201919091525190516109709190600190611393565b816060018190525061099561098e3384608001518560a00151611407565b600b6111fa565b60e0820151606082015160400151516109ae9190611fd5565b608082018051919091526060820180516040908101516020908101518451909101529051810151810151915191151591015260c082015160e0830151610a01916109fa91339190611407565b600c6111fa565b8151610a19906001600160a01b03163314600d6111fa565b610a216116be565b825181516001600160a01b03918216905260408085015183519083166020918201526080860151845190841692019190915260c085015183519216606090920191909152830151610100840151610a789190611fd5565b81516080908101919091526020808301805160009081905281519092018290528051604001829052805160056060918201528151840192909252514360a09091015283015190830151610ace9190600290611393565b60208201805160c0019190915251600060e09091015261077181611220565b610af561165e565b60016001600160a01b03831660009081526004602052604090205460ff166001811115610b2457610b24611acd565b1415610ba1576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610b6557610b65611acd565b6001811115610b7657610b76611acd565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610bc160036000541460126111fa565b8151610bdc901580610bd557508251600154145b60136111fa565b600080805560028054610bee90611ddb565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1a90611ddb565b8015610c675780601f10610c3c57610100808354040283529160200191610c67565b820191906000526020600020905b815481529060010190602001808311610c4a57829003601f168201915b5050505050806020019051810190610c7f91906120aa565b9050610c89611780565b6040805133815285516020808301919091528087015180516001600160a01b0390811684860152918101518216606084015283015116608082015290517f2c8ae96dbe7266c4192ea133144ed0b916d83e0eec97c9d67d927784baa120089181900360a00190a1610cfc341560106111fa565b8151610d14906001600160a01b0316331460116111fa565b60808201515151610d25908061214e565b815152608082018051516020908101518351909101528051516040908101518351901515910152518151610d5c9190600090611393565b6020808301919091528281015190850151516080840151610d8792919060005b60200201515161141f565b602081810151015151610d9a908061214e565b60408281018051929092526020808401805182015182015184518301528051909101518201518351901515920191909152519051610ddb9190600190611393565b6060820152604082015160208086015181015190830151610dff9291906001610d7c565b60608101516040015151610e13908061214e565b6080820180519190915260608201805160409081015160209081015184519091015281518101518101518351901515910152519051610e559190600290611393565b60a082015260608083015160208601516040015191830151610e7992906002610d7c565b60a08101515151610e8a908061214e565b60c0820180519190915260a082018051516020908101518351909101528051516040908101518351901515910152519051610ec89190600090611393565b60e08201526020820151825160a0830151610ee69291906000610d7c565b60e08101516020015151610efa908061214e565b610100820180519190915260e0820180516020908101518101518351820152815101516040908101519251921515928101929092529083015183519151610f4392906001610d7c565b610f6c82606001518360000151610f658460e001516001866101000151611393565b6002610d7c565b815160a08301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610fa9573d6000803e3d6000fd5b5060008080556001819055610fc090600290611807565b50505050565b610fd6600560005414601b6111fa565b8151610ff1901580610fea57508251600154145b601c6111fa565b60008080556002805461100390611ddb565b80601f016020809104026020016040519081016040528092919081815260200182805461102f90611ddb565b801561107c5780601f106110515761010080835404028352916020019161107c565b820191906000526020600020905b81548152906001019060200180831161105f57829003601f168201915b50505050508060200190518101906110949190611eff565b90506110a88160800151431015601d6111fa565b6040805133815284516020808301919091528501515115158183015290517f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c213659181900360600190a16110fc3415601a6111fa565b604051600181527f84e6928c1b85f406ebbc34af16c07ff5fc1a0f1734c925a5ff690d4aa7b91abf9060200160405180910390a16001825261113c6116be565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518551941693810193909352608080860151855182015260a08087015184870180519190915260c08089015182519096019590955260e08089015182519095019490945261010088015181519096019590955261012087015185519092019190915283514391015261014085015183519092019190915261016084015191510152610fc081611220565b816101c45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60208101516060810151608090910151101561131b5761123e611841565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015284516060908101519093168385015284516080908101518186015282860180515160a0870152805184015160c080880191909152815184015160e080890191909152825190960151610100880152815190920151610120870152805190910151610140860152519092015161016084015260056000554360015590516112f2918391016121a3565b604051602081830303815290604052600290805190602001906113169291906118cc565b505050565b611323611950565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151831681850152845160609081015190931692840192909252808401805160c0015160808501525160e0015160a084015260036000554360015590516112f29183910161226d565b50565b61139b61197c565b60005b60038110156113e7578481600381106113b9576113b9612094565b60200201518282600381106113d0576113d0612094565b6020020152806113df816122cb565b91505061139e565b50818184600381106113fb576113fb612094565b60200201529392505050565b600061141583853085611433565b90505b9392505050565b61142a83838361150d565b61131657600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161149a916122e6565b60006040518083038185875af1925050503d80600081146114d7576040519150601f19603f3d011682016040523d82523d6000602084013e6114dc565b606091505b50915091506114ed828260016115de565b50808060200190518101906115029190612302565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161156c916122e6565b60006040518083038185875af1925050503d80600081146115a9576040519150601f19603f3d011682016040523d82523d6000602084013e6115ae565b606091505b50915091506115bf828260026115de565b50808060200190518101906115d49190612302565b9695505050505050565b606083156115ed575081611418565b8251156115fd5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611217565b6040518060400160405280600081526020016116596040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b905290565b60408051606081019091528060005b815260006020820181905260409091015290565b60405180604001604052806000815260200161165960405180602001604052806000151581525090565b604051806060016040528061166d61165e565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908152602081016116596119c7565b604080516101008101909152600060a0820181815260c0830182905260e083019190915281905b815260200161173061197c565b8152604080516060810182526000808252602082810182905292820152910190815260200161175d61197c565b815260408051606081018252600080825260208281018290529282015291015290565b6040805161018081019091526000610120820181815261014083018290526101608301919091528152602081016117b561197c565b815260408051606081018252600080825260208281018290529282015291019081526020016117e261197c565b8152604080516060810182526000808252602082810182905292820152910190611723565b50805461181390611ddb565b6000825580601f10611823575050565b601f0160209004906000526020600020908101906113909190611a05565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016118bf61197c565b8152602001600081525090565b8280546118d890611ddb565b90600052602060002090601f0160209004810192826118fa5760008555611940565b82601f1061191357805160ff1916838001178555611940565b82800160010185558215611940579182015b82811115611940578251825591602001919060010190611925565b5061194c929150611a05565b5090565b6040805160c0810182526000808252602082018190529181018290526060810191909152608081016118bf5b60405180606001604052806003905b6119b1604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161198b5790505090565b6040518061010001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016118bf61197c565b5b8082111561194c5760008155600101611a06565b600060a08284031215611a2c57600080fd5b50919050565b6001600160a01b038116811461139057600080fd5b60008060008060808587031215611a5d57600080fd5b8435611a6881611a32565b966020860135965060408601359560600135945092505050565b600060408284031215611a2c57600080fd5b600060408284031215611aa657600080fd5b6114188383611a82565b600060208284031215611ac257600080fd5b813561141881611a32565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611b0857634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b600060808284031215611a2c57600080fd5b60005b83811015611b57578181015183820152602001611b3f565b83811115610fc05750506000910152565b8281526040602082015260008251806040840152611b8d816060850160208701611b3c565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611bdb57611bdb611ba2565b60405290565b6040516020810167ffffffffffffffff81118282101715611bdb57611bdb611ba2565b6040516060810167ffffffffffffffff81118282101715611bdb57611bdb611ba2565b604051610180810167ffffffffffffffff81118282101715611bdb57611bdb611ba2565b604051610140810167ffffffffffffffff81118282101715611bdb57611bdb611ba2565b600081830360a0811215611c8257600080fd5b611c8a611bb8565b833581526080601f1983011215611ca057600080fd5b611ca8611be1565b91506040516080810181811067ffffffffffffffff82111715611ccd57611ccd611ba2565b6040526020850135611cde81611a32565b8082525060408501356020820152606085013560408201526080850135606082015280835250816020820152809250505092915050565b801515811461139057600080fd5b600060408284031215611d3557600080fd5b611d3d611bb8565b823581526020830135611d4f81611d15565b60208201529392505050565b60008183036080811215611d6e57600080fd5b611d76611bb8565b833581526060601f1983011215611d8c57600080fd5b611d94611c04565b91506020840135611da481611a32565b82526040840135611db481611a32565b60208301526060840135611dc781611a32565b604083015260208101919091529392505050565b600181811c90821680611def57607f821691505b60208210811415611a2c57634e487b7160e01b600052602260045260246000fd5b60008183036040811215611e2357600080fd5b611e2b611bb8565b833581526020601f1983011215611e4157600080fd5b611e49611be1565b91506020840135611e5981611d15565b825260208101919091529392505050565b8051610bac81611a32565b600082601f830112611e8657600080fd5b611e8e611c04565b80610120840185811115611ea157600080fd5b845b81811015611ef45760608188031215611ebc5760008081fd5b611ec4611c04565b8151815260208083015181830152604080840151611ee181611d15565b9083015290855290930192606001611ea3565b509095945050505050565b60006102808284031215611f1257600080fd5b611f1a611c27565b611f2383611e6a565b8152611f3160208401611e6a565b6020820152611f4260408401611e6a565b6040820152611f5360608401611e6a565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140611fa785828601611e75565b90820152610260929092015161016083015250919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611fe857611fe8611fbf565b500190565b6000610240828403121561200057600080fd5b612008611c4b565b61201183611e6a565b81526020830151602082015261202960408401611e6a565b60408201526060830151606082015261204460808401611e6a565b608082015260a083015160a082015261205f60c08401611e6a565b60c082015260e083015160e082015261010080840151818301525061012061208985828601611e75565b908201529392505050565b634e487b7160e01b600052603260045260246000fd5b60006101c082840312156120bd57600080fd5b60405160c0810181811067ffffffffffffffff821117156120e0576120e0611ba2565b60405282516120ee81611a32565b815260208301516120fe81611a32565b6020820152604083015161211181611a32565b6040820152606083015161212481611a32565b60608201526121368460808501611e75565b60808201526101a0929092015160a083015250919050565b60008282101561216057612160611fbf565b500390565b8060005b6003811015610fc0578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612169565b81516001600160a01b03168152610280810160208301516121cf60208401826001600160a01b03169052565b5060408301516121ea60408401826001600160a01b03169052565b50606083015161220560608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015161225982850182612165565b505061016083015161026083015292915050565b81516001600160a01b039081168252602080840151821690830152604080840151821690830152606080840151909116908201526080808301516101c08301916122b990840182612165565b5060a08301516101a083015292915050565b60006000198214156122df576122df611fbf565b5060010190565b600082516122f8818460208701611b3c565b9190910192915050565b60006020828403121561231457600080fd5b815161141881611d1556fea26469706673582212207fbd1c8a7428e10d926b0711c2df2a9fdbc4949c5d64d26565e1f10ef2452cfb64736f6c634300080c0033`,
  BytecodeLen: 11836,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:96:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:122:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:76:62:after expr stmt semicolon',
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
