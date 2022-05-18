// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

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
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Data({
    None: ctc8,
    Some: ctc2
    });
  const ctc10 = stdlib.T_Data({
    None: ctc8,
    Some: ctc3
    });
  const ctc11 = stdlib.T_Data({
    None: ctc8,
    Some: ctc8
    });
  const map0_ctc = ctc9;
  
  const map1_ctc = ctc9;
  
  const map2_ctc = ctc9;
  
  const map3_ctc = ctc9;
  
  const map4_ctc = ctc10;
  
  const map5_ctc = ctc9;
  
  const map6_ctc = ctc9;
  
  const map7_ctc = ctc11;
  
  const map8_ctc = ctc11;
  
  
  return {
    infos: {
      View: {
        claimers: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v807, v809, v810, v811, v819] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913] = svs;
              return (await ((async () => {
                
                
                return v857;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc6
          },
        claimersCount: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v807, v809, v810, v811, v819] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913] = svs;
              return (await ((async () => {
                
                
                return v858;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        correspondingPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v807, v809, v810, v811, v819] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913] = svs;
              return (await ((async () => {
                
                
                return v860;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc7
          },
        durations: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v807, v809, v810, v811, v819] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913] = svs;
              return (await ((async () => {
                
                
                return v861;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc7
          },
        lastClaimResult: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v807, v809, v810, v811, v819] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913] = svs;
              return (await ((async (_v849 ) => {
                  const v849 = stdlib.protect(ctc0, _v849, null);
                
                const v850 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v849), null);
                const v851 = stdlib.fromSome(v850, false);
                
                return v851;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          },
        userCost: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v807, v809, v810, v811, v819] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913] = svs;
              return (await ((async (_v834 ) => {
                  const v834 = stdlib.protect(ctc0, _v834, null);
                
                const v835 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v834), null);
                const v836 = stdlib.fromSome(v835, stdlib.checkedBigNumberify('./index.rsh:63:61:decimal', stdlib.UInt_max, '0'));
                
                return v836;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        userCurrCost: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v807, v809, v810, v811, v819] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913] = svs;
              return (await ((async (_v837 ) => {
                  const v837 = stdlib.protect(ctc0, _v837, null);
                
                const v838 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v837), null);
                const v839 = stdlib.fromSome(v838, stdlib.checkedBigNumberify('./index.rsh:64:69:decimal', stdlib.UInt_max, '0'));
                
                return v839;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        userCurrPeriod: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v807, v809, v810, v811, v819] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913] = svs;
              return (await ((async (_v843 ) => {
                  const v843 = stdlib.protect(ctc0, _v843, null);
                
                const v844 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v843), null);
                const v845 = stdlib.fromSome(v844, stdlib.checkedBigNumberify('./index.rsh:66:73:decimal', stdlib.UInt_max, '0'));
                
                return v845;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        userCurrRequestedProceed: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v807, v809, v810, v811, v819] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913] = svs;
              return (await ((async (_v846 ) => {
                  const v846 = stdlib.protect(ctc0, _v846, null);
                
                const v847 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v846), null);
                const v848 = stdlib.fromSome(v847, stdlib.checkedBigNumberify('./index.rsh:68:46:decimal', stdlib.UInt_max, '0'));
                
                return v848;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        userCurrStart: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v807, v809, v810, v811, v819] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913] = svs;
              return (await ((async (_v840 ) => {
                  const v840 = stdlib.protect(ctc0, _v840, null);
                
                const v841 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v840), null);
                const v842 = stdlib.fromSome(v841, stdlib.checkedBigNumberify('./index.rsh:65:71:decimal', stdlib.UInt_max, '0'));
                
                return v842;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc5],
      4: [ctc0, ctc1, ctc3, ctc6, ctc2, ctc7, ctc7, ctc2, ctc2, ctc5, ctc2, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc2, ctc4, ctc2, ctc2, ctc5, ctc5]);
  return {
    mapDataTy: ctc6
    };
  };
export async function _Customer_claim4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Customer_claim4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Customer_claim4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc15 = stdlib.T_Data({
    Customer_claim0_153: ctc12,
    Customer_pay0_153: ctc13,
    InsureCompany_approveRequest0_153: ctc14,
    InsureCompany_declineRequest0_153: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc2;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc5;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc7, ctc3, ctc8, ctc1, ctc9, ctc9, ctc1, ctc1, ctc11, ctc1, ctc1, ctc1]);
  const v952 = ctc.selfAddress();
  const v954 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:155:11:application call to [unknown function] (defined at: ./index.rsh:155:11:function exp)', 'at ./index.rsh:86:21:application call to "runCustomer_claim0_153" (defined at: ./index.rsh:153:9:function exp)', 'at ./index.rsh:86:21:application call to [unknown function] (defined at: ./index.rsh:86:21:function exp)'],
    msg: 'in',
    who: 'Customer_claim'
    });
  const v958 = stdlib.lt(v858, stdlib.checkedBigNumberify('./index.rsh:157:36:dot', stdlib.UInt_max, '3'));
  stdlib.assert(v958, {
    at: './index.rsh:156:15:application',
    fs: ['at ./index.rsh:155:11:application call to [unknown function] (defined at: ./index.rsh:155:11:function exp)', 'at ./index.rsh:155:11:application call to [unknown function] (defined at: ./index.rsh:155:11:function exp)', 'at ./index.rsh:86:21:application call to "runCustomer_claim0_153" (defined at: ./index.rsh:153:9:function exp)', 'at ./index.rsh:86:21:application call to [unknown function] (defined at: ./index.rsh:86:21:function exp)'],
    msg: 'Wait for the admin to process other cliams',
    who: 'Customer_claim'
    });
  const v960 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v952), null);
  const v961 = stdlib.fromSome(v960, stdlib.checkedBigNumberify('./index.rsh:162:44:decimal', stdlib.UInt_max, '0'));
  const v962 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v952), null);
  const v963 = stdlib.fromSome(v962, stdlib.checkedBigNumberify('./index.rsh:163:45:decimal', stdlib.UInt_max, '0'));
  const v964 = stdlib.add(v961, v963);
  const v965 = stdlib.le(v867, v964);
  stdlib.assert(v965, {
    at: './index.rsh:160:15:application',
    fs: ['at ./index.rsh:155:11:application call to [unknown function] (defined at: ./index.rsh:155:11:function exp)', 'at ./index.rsh:155:11:application call to [unknown function] (defined at: ./index.rsh:155:11:function exp)', 'at ./index.rsh:86:21:application call to "runCustomer_claim0_153" (defined at: ./index.rsh:153:9:function exp)', 'at ./index.rsh:86:21:application call to [unknown function] (defined at: ./index.rsh:86:21:function exp)'],
    msg: 'Your insure period has passed',
    who: 'Customer_claim'
    });
  const v969 = ['Customer_claim0_153', v954];
  
  const txn1 = await (ctc.sendrecv({
    args: [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913, v969],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:167:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:167:19:decimal', stdlib.UInt_max, '0'), v809]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v1049], secs: v1051, time: v1050, didSend: v451, from: v1048 } = txn1;
      
      switch (v1049[0]) {
        case 'Customer_claim0_153': {
          const v1052 = v1049[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Customer_claim"
            });
          ;
          const v1100 = v870[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
          const v1101 = v1100[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
          const v1105 = v1100[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '1')];
          const v1106 = v1100[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '2')];
          const v1107 = [v1101, v1105, v1106];
          const v1108 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0'), v1107);
          ;
          const v1110 = v1052[stdlib.checkedBigNumberify('./index.rsh:153:9:spread', stdlib.UInt_max, '0')];
          const v1113 = stdlib.protect(map8_ctc, await stdlib.simMapRef(sim_r, 8, v1048), null);
          let v1114;
          switch (v1113[0]) {
            case 'None': {
              const v1115 = v1113[1];
              v1114 = false;
              
              break;
              }
            case 'Some': {
              const v1116 = v1113[1];
              v1114 = true;
              
              break;
              }
            }
          if (v1114) {
            const v1156 = stdlib.lt(v858, stdlib.checkedBigNumberify('./index.rsh:173:38:dot', stdlib.UInt_max, '3'));
            if (v1156) {
              await stdlib.simMapSet(sim_r, 3, v1048, v1110);
              const v1158 = stdlib.Array_set(v857, v858, v1048);
              const v1159 = await txn1.getOutput('Customer_claim', 'v1110', ctc1, v1110);
              
              const v1166 = stdlib.add(v858, stdlib.checkedBigNumberify('./index.rsh:183:29:decimal', stdlib.UInt_max, '1'));
              const v6081 = v1158;
              const v6082 = v1166;
              const v6083 = v860;
              const v6084 = v861;
              const v6085 = v862;
              const v6087 = v1051;
              const v6088 = v1108;
              const v6089 = v871;
              if (v811) {
                const v6090 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
                const v6091 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
                sim_r.isHalt = false;
                }
              else {
                const v6092 = v1108[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
                const v6093 = v6092[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  amt: v6093,
                  kind: 'from',
                  to: v807,
                  tok: v809
                  });
                sim_r.txns.push({
                  amt: v871,
                  kind: 'from',
                  to: v807,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v809
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v1176 = stdlib.checkedBigNumberify('./index.rsh:187:13:decimal', stdlib.UInt_max, '0');
              const v1177 = await txn1.getOutput('Customer_claim', 'v1176', ctc1, v1176);
              
              const v6094 = v857;
              const v6095 = v858;
              const v6096 = v860;
              const v6097 = v861;
              const v6098 = v862;
              const v6100 = v1051;
              const v6101 = v1108;
              const v6102 = v871;
              if (v811) {
                const v6103 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
                const v6104 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
                sim_r.isHalt = false;
                }
              else {
                const v6105 = v1108[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
                const v6106 = v6105[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  amt: v6106,
                  kind: 'from',
                  to: v807,
                  tok: v809
                  });
                sim_r.txns.push({
                  amt: v871,
                  kind: 'from',
                  to: v807,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v809
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            await stdlib.simMapSet(sim_r, 8, v1048, null);
            const v1119 = stdlib.lt(v858, stdlib.checkedBigNumberify('./index.rsh:173:38:dot', stdlib.UInt_max, '3'));
            if (v1119) {
              await stdlib.simMapSet(sim_r, 3, v1048, v1110);
              const v1121 = stdlib.Array_set(v857, v858, v1048);
              const v1122 = await txn1.getOutput('Customer_claim', 'v1110', ctc1, v1110);
              
              const v1129 = stdlib.add(v858, stdlib.checkedBigNumberify('./index.rsh:183:29:decimal', stdlib.UInt_max, '1'));
              const v6107 = v1121;
              const v6108 = v1129;
              const v6109 = v860;
              const v6110 = v861;
              const v6111 = v862;
              const v6113 = v1051;
              const v6114 = v1108;
              const v6115 = v871;
              if (v811) {
                const v6116 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
                const v6117 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
                sim_r.isHalt = false;
                }
              else {
                const v6118 = v1108[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
                const v6119 = v6118[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  amt: v6119,
                  kind: 'from',
                  to: v807,
                  tok: v809
                  });
                sim_r.txns.push({
                  amt: v871,
                  kind: 'from',
                  to: v807,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v809
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v1139 = stdlib.checkedBigNumberify('./index.rsh:187:13:decimal', stdlib.UInt_max, '0');
              const v1140 = await txn1.getOutput('Customer_claim', 'v1139', ctc1, v1139);
              
              const v6120 = v857;
              const v6121 = v858;
              const v6122 = v860;
              const v6123 = v861;
              const v6124 = v862;
              const v6126 = v1051;
              const v6127 = v1108;
              const v6128 = v871;
              if (v811) {
                const v6129 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
                const v6130 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
                sim_r.isHalt = false;
                }
              else {
                const v6131 = v1108[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
                const v6132 = v6131[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  amt: v6132,
                  kind: 'from',
                  to: v807,
                  tok: v809
                  });
                sim_r.txns.push({
                  amt: v871,
                  kind: 'from',
                  to: v807,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v809
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        case 'Customer_pay0_153': {
          const v1392 = v1049[1];
          
          break;
          }
        case 'InsureCompany_approveRequest0_153': {
          const v1732 = v1049[1];
          
          break;
          }
        case 'InsureCompany_declineRequest0_153': {
          const v2072 = v1049[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc3, ctc8, ctc1, ctc9, ctc9, ctc1, ctc1, ctc11, ctc1, ctc1, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1049], secs: v1051, time: v1050, didSend: v451, from: v1048 } = txn1;
  switch (v1049[0]) {
    case 'Customer_claim0_153': {
      const v1052 = v1049[1];
      undefined /* setApiDetails */;
      ;
      const v1100 = v870[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
      const v1101 = v1100[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
      const v1105 = v1100[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '1')];
      const v1106 = v1100[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '2')];
      const v1107 = [v1101, v1105, v1106];
      const v1108 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0'), v1107);
      ;
      const v1110 = v1052[stdlib.checkedBigNumberify('./index.rsh:153:9:spread', stdlib.UInt_max, '0')];
      const v1113 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v1048), null);
      let v1114;
      switch (v1113[0]) {
        case 'None': {
          const v1115 = v1113[1];
          v1114 = false;
          
          break;
          }
        case 'Some': {
          const v1116 = v1113[1];
          v1114 = true;
          
          break;
          }
        }
      if (v1114) {
        const v1156 = stdlib.lt(v858, stdlib.checkedBigNumberify('./index.rsh:173:38:dot', stdlib.UInt_max, '3'));
        if (v1156) {
          await stdlib.mapSet(map3, v1048, v1110);
          const v1158 = stdlib.Array_set(v857, v858, v1048);
          const v1159 = await txn1.getOutput('Customer_claim', 'v1110', ctc1, v1110);
          if (v451) {
            stdlib.protect(ctc0, await interact.out(v1052, v1159), {
              at: './index.rsh:154:7:application',
              fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)', 'at ./index.rsh:176:12:application call to "k" (defined at: ./index.rsh:168:16:function exp)', 'at ./index.rsh:168:16:application call to [unknown function] (defined at: ./index.rsh:168:16:function exp)'],
              msg: 'out',
              who: 'Customer_claim'
              });
            }
          else {
            }
          
          const v1166 = stdlib.add(v858, stdlib.checkedBigNumberify('./index.rsh:183:29:decimal', stdlib.UInt_max, '1'));
          const v6081 = v1158;
          const v6082 = v1166;
          const v6083 = v860;
          const v6084 = v861;
          const v6085 = v862;
          const v6087 = v1051;
          const v6088 = v1108;
          const v6089 = v871;
          if (v811) {
            const v6090 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
            const v6091 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
            return;
            }
          else {
            const v6092 = v1108[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
            const v6093 = v6092[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}
        else {
          const v1176 = stdlib.checkedBigNumberify('./index.rsh:187:13:decimal', stdlib.UInt_max, '0');
          const v1177 = await txn1.getOutput('Customer_claim', 'v1176', ctc1, v1176);
          if (v451) {
            stdlib.protect(ctc0, await interact.out(v1052, v1177), {
              at: './index.rsh:154:7:application',
              fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)', 'at ./index.rsh:187:12:application call to "k" (defined at: ./index.rsh:168:16:function exp)', 'at ./index.rsh:168:16:application call to [unknown function] (defined at: ./index.rsh:168:16:function exp)'],
              msg: 'out',
              who: 'Customer_claim'
              });
            }
          else {
            }
          
          const v6094 = v857;
          const v6095 = v858;
          const v6096 = v860;
          const v6097 = v861;
          const v6098 = v862;
          const v6100 = v1051;
          const v6101 = v1108;
          const v6102 = v871;
          if (v811) {
            const v6103 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
            const v6104 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
            return;
            }
          else {
            const v6105 = v1108[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
            const v6106 = v6105[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      else {
        await stdlib.mapSet(map8, v1048, null);
        const v1119 = stdlib.lt(v858, stdlib.checkedBigNumberify('./index.rsh:173:38:dot', stdlib.UInt_max, '3'));
        if (v1119) {
          await stdlib.mapSet(map3, v1048, v1110);
          const v1121 = stdlib.Array_set(v857, v858, v1048);
          const v1122 = await txn1.getOutput('Customer_claim', 'v1110', ctc1, v1110);
          if (v451) {
            stdlib.protect(ctc0, await interact.out(v1052, v1122), {
              at: './index.rsh:154:7:application',
              fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)', 'at ./index.rsh:176:12:application call to "k" (defined at: ./index.rsh:168:16:function exp)', 'at ./index.rsh:168:16:application call to [unknown function] (defined at: ./index.rsh:168:16:function exp)'],
              msg: 'out',
              who: 'Customer_claim'
              });
            }
          else {
            }
          
          const v1129 = stdlib.add(v858, stdlib.checkedBigNumberify('./index.rsh:183:29:decimal', stdlib.UInt_max, '1'));
          const v6107 = v1121;
          const v6108 = v1129;
          const v6109 = v860;
          const v6110 = v861;
          const v6111 = v862;
          const v6113 = v1051;
          const v6114 = v1108;
          const v6115 = v871;
          if (v811) {
            const v6116 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
            const v6117 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
            return;
            }
          else {
            const v6118 = v1108[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
            const v6119 = v6118[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}
        else {
          const v1139 = stdlib.checkedBigNumberify('./index.rsh:187:13:decimal', stdlib.UInt_max, '0');
          const v1140 = await txn1.getOutput('Customer_claim', 'v1139', ctc1, v1139);
          if (v451) {
            stdlib.protect(ctc0, await interact.out(v1052, v1140), {
              at: './index.rsh:154:7:application',
              fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)', 'at ./index.rsh:187:12:application call to "k" (defined at: ./index.rsh:168:16:function exp)', 'at ./index.rsh:168:16:application call to [unknown function] (defined at: ./index.rsh:168:16:function exp)'],
              msg: 'out',
              who: 'Customer_claim'
              });
            }
          else {
            }
          
          const v6120 = v857;
          const v6121 = v858;
          const v6122 = v860;
          const v6123 = v861;
          const v6124 = v862;
          const v6126 = v1051;
          const v6127 = v1108;
          const v6128 = v871;
          if (v811) {
            const v6129 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
            const v6130 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
            return;
            }
          else {
            const v6131 = v1108[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
            const v6132 = v6131[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      break;
      }
    case 'Customer_pay0_153': {
      const v1392 = v1049[1];
      return;
      break;
      }
    case 'InsureCompany_approveRequest0_153': {
      const v1732 = v1049[1];
      return;
      break;
      }
    case 'InsureCompany_declineRequest0_153': {
      const v2072 = v1049[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Customer_pay4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Customer_pay4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Customer_pay4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc15 = stdlib.T_Data({
    Customer_claim0_153: ctc13,
    Customer_pay0_153: ctc12,
    InsureCompany_approveRequest0_153: ctc14,
    InsureCompany_declineRequest0_153: ctc13
    });
  const ctc16 = stdlib.T_Struct([['cost', ctc1], ['insurPeriod', ctc1], ['start', ctc1]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc2;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc5;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc7, ctc3, ctc8, ctc1, ctc9, ctc9, ctc1, ctc1, ctc11, ctc1, ctc1, ctc1]);
  const v920 = ctc.selfAddress();
  const v922 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:113:36:application call to [unknown function] (defined at: ./index.rsh:113:36:function exp)', 'at ./index.rsh:86:21:application call to "runCustomer_pay0_153" (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:86:21:application call to [unknown function] (defined at: ./index.rsh:86:21:function exp)'],
    msg: 'in',
    who: 'Customer_pay'
    });
  const v923 = v922[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v924 = v922[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v925 = v922[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v930 = stdlib.lt(v923, stdlib.checkedBigNumberify('./index.rsh:115:37:dot', stdlib.UInt_max, '3'));
  let v931;
  if (v930) {
    const v933 = v860[v923];
    const v934 = stdlib.ge(v924, v933);
    v931 = v934;
    }
  else {
    v931 = false;
    }
  let v935;
  if (v931) {
    const v937 = v861[v923];
    const v938 = stdlib.ge(v925, v937);
    v935 = v938;
    }
  else {
    v935 = false;
    }
  stdlib.assert(v935, {
    at: './index.rsh:114:15:application',
    fs: ['at ./index.rsh:113:36:application call to [unknown function] (defined at: ./index.rsh:113:36:function exp)', 'at ./index.rsh:113:36:application call to [unknown function] (defined at: ./index.rsh:113:36:function exp)', 'at ./index.rsh:86:21:application call to "runCustomer_pay0_153" (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:86:21:application call to [unknown function] (defined at: ./index.rsh:86:21:function exp)'],
    msg: 'Check doesn\'t pass',
    who: 'Customer_pay'
    });
  const v939 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v920), null);
  const v940 = stdlib.fromSome(v939, stdlib.checkedBigNumberify('./index.rsh:65:71:decimal', stdlib.UInt_max, '0'));
  const v941 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v920), null);
  const v942 = stdlib.fromSome(v941, stdlib.checkedBigNumberify('./index.rsh:66:73:decimal', stdlib.UInt_max, '0'));
  const v943 = stdlib.add(v940, v942);
  const v944 = stdlib.lt(v943, v867);
  stdlib.assert(v944, {
    at: './index.rsh:120:15:application',
    fs: ['at ./index.rsh:113:36:application call to [unknown function] (defined at: ./index.rsh:113:36:function exp)', 'at ./index.rsh:113:36:application call to [unknown function] (defined at: ./index.rsh:113:36:function exp)', 'at ./index.rsh:86:21:application call to "runCustomer_pay0_153" (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:86:21:application call to [unknown function] (defined at: ./index.rsh:86:21:function exp)'],
    msg: 'You have subsribed one of the products',
    who: 'Customer_pay'
    });
  const v950 = ['Customer_pay0_153', v922];
  
  const txn1 = await (ctc.sendrecv({
    args: [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913, v950],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', stdlib.UInt_max, '0'), [[v924, v809]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v1049], secs: v1051, time: v1050, didSend: v451, from: v1048 } = txn1;
      
      switch (v1049[0]) {
        case 'Customer_claim0_153': {
          const v1052 = v1049[1];
          
          break;
          }
        case 'Customer_pay0_153': {
          const v1392 = v1049[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Customer_pay"
            });
          const v1406 = v1392[stdlib.checkedBigNumberify('./index.rsh:111:9:spread', stdlib.UInt_max, '1')];
          ;
          const v1440 = v870[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
          const v1441 = v1440[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
          const v1442 = stdlib.add(v1441, v1406);
          const v1445 = v1440[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '1')];
          const v1446 = v1440[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '2')];
          const v1447 = [v1442, v1445, v1446];
          const v1448 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0'), v1447);
          sim_r.txns.push({
            amt: v1406,
            kind: 'to',
            tok: v809
            });
          const v1536 = v1392[stdlib.checkedBigNumberify('./index.rsh:111:9:spread', stdlib.UInt_max, '2')];
          const v1539 = stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v1048), null);
          let v1540;
          switch (v1539[0]) {
            case 'None': {
              const v1541 = v1539[1];
              v1540 = false;
              
              break;
              }
            case 'Some': {
              const v1542 = v1539[1];
              v1540 = true;
              
              break;
              }
            }
          if (v1540) {
            await stdlib.simMapSet(sim_r, 0, v1048, v867);
            await stdlib.simMapSet(sim_r, 1, v1048, v1536);
            await stdlib.simMapSet(sim_r, 2, v1048, v1406);
            const v1562 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v1048), null);
            const v1563 = stdlib.fromSome(v1562, stdlib.checkedBigNumberify('./index.rsh:140:51:decimal', stdlib.UInt_max, '0'));
            const v1564 = stdlib.add(v1563, v1406);
            await stdlib.simMapSet(sim_r, 5, v1048, v1564);
            const v1565 = {
              cost: v1406,
              insurPeriod: v1536,
              start: v867
              };
            const v1566 = await txn1.getOutput('Customer_pay', 'v1565', ctc16, v1565);
            
            const v6276 = v857;
            const v6277 = v858;
            const v6278 = v860;
            const v6279 = v861;
            const v6280 = v862;
            const v6282 = v1051;
            const v6283 = v1448;
            const v6284 = v871;
            if (v811) {
              const v6285 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
              const v6286 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
              sim_r.isHalt = false;
              }
            else {
              const v6287 = v1448[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
              const v6288 = v6287[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                amt: v6288,
                kind: 'from',
                to: v807,
                tok: v809
                });
              sim_r.txns.push({
                amt: v871,
                kind: 'from',
                to: v807,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v809
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            await stdlib.simMapSet(sim_r, 7, v1048, null);
            await stdlib.simMapSet(sim_r, 0, v1048, v867);
            await stdlib.simMapSet(sim_r, 1, v1048, v1536);
            await stdlib.simMapSet(sim_r, 2, v1048, v1406);
            const v1545 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v1048), null);
            const v1546 = stdlib.fromSome(v1545, stdlib.checkedBigNumberify('./index.rsh:140:51:decimal', stdlib.UInt_max, '0'));
            const v1547 = stdlib.add(v1546, v1406);
            await stdlib.simMapSet(sim_r, 5, v1048, v1547);
            const v1548 = {
              cost: v1406,
              insurPeriod: v1536,
              start: v867
              };
            const v1549 = await txn1.getOutput('Customer_pay', 'v1548', ctc16, v1548);
            
            const v6289 = v857;
            const v6290 = v858;
            const v6291 = v860;
            const v6292 = v861;
            const v6293 = v862;
            const v6295 = v1051;
            const v6296 = v1448;
            const v6297 = v871;
            if (v811) {
              const v6298 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
              const v6299 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
              sim_r.isHalt = false;
              }
            else {
              const v6300 = v1448[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
              const v6301 = v6300[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                amt: v6301,
                kind: 'from',
                to: v807,
                tok: v809
                });
              sim_r.txns.push({
                amt: v871,
                kind: 'from',
                to: v807,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v809
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'InsureCompany_approveRequest0_153': {
          const v1732 = v1049[1];
          
          break;
          }
        case 'InsureCompany_declineRequest0_153': {
          const v2072 = v1049[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc3, ctc8, ctc1, ctc9, ctc9, ctc1, ctc1, ctc11, ctc1, ctc1, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1049], secs: v1051, time: v1050, didSend: v451, from: v1048 } = txn1;
  switch (v1049[0]) {
    case 'Customer_claim0_153': {
      const v1052 = v1049[1];
      return;
      break;
      }
    case 'Customer_pay0_153': {
      const v1392 = v1049[1];
      undefined /* setApiDetails */;
      const v1406 = v1392[stdlib.checkedBigNumberify('./index.rsh:111:9:spread', stdlib.UInt_max, '1')];
      ;
      const v1440 = v870[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
      const v1441 = v1440[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
      const v1442 = stdlib.add(v1441, v1406);
      const v1445 = v1440[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '1')];
      const v1446 = v1440[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '2')];
      const v1447 = [v1442, v1445, v1446];
      const v1448 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0'), v1447);
      ;
      const v1536 = v1392[stdlib.checkedBigNumberify('./index.rsh:111:9:spread', stdlib.UInt_max, '2')];
      const v1539 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v1048), null);
      let v1540;
      switch (v1539[0]) {
        case 'None': {
          const v1541 = v1539[1];
          v1540 = false;
          
          break;
          }
        case 'Some': {
          const v1542 = v1539[1];
          v1540 = true;
          
          break;
          }
        }
      if (v1540) {
        await stdlib.mapSet(map0, v1048, v867);
        await stdlib.mapSet(map1, v1048, v1536);
        await stdlib.mapSet(map2, v1048, v1406);
        const v1562 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1048), null);
        const v1563 = stdlib.fromSome(v1562, stdlib.checkedBigNumberify('./index.rsh:140:51:decimal', stdlib.UInt_max, '0'));
        const v1564 = stdlib.add(v1563, v1406);
        await stdlib.mapSet(map5, v1048, v1564);
        const v1565 = {
          cost: v1406,
          insurPeriod: v1536,
          start: v867
          };
        const v1566 = await txn1.getOutput('Customer_pay', 'v1565', ctc16, v1565);
        if (v451) {
          stdlib.protect(ctc0, await interact.out(v1392, v1566), {
            at: './index.rsh:112:7:application',
            fs: ['at ./index.rsh:112:7:application call to [unknown function] (defined at: ./index.rsh:112:7:function exp)', 'at ./index.rsh:141:10:application call to "k" (defined at: ./index.rsh:126:39:function exp)', 'at ./index.rsh:126:39:application call to [unknown function] (defined at: ./index.rsh:126:39:function exp)'],
            msg: 'out',
            who: 'Customer_pay'
            });
          }
        else {
          }
        
        const v6276 = v857;
        const v6277 = v858;
        const v6278 = v860;
        const v6279 = v861;
        const v6280 = v862;
        const v6282 = v1051;
        const v6283 = v1448;
        const v6284 = v871;
        if (v811) {
          const v6285 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
          const v6286 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
          return;
          }
        else {
          const v6287 = v1448[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
          const v6288 = v6287[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      else {
        await stdlib.mapSet(map7, v1048, null);
        await stdlib.mapSet(map0, v1048, v867);
        await stdlib.mapSet(map1, v1048, v1536);
        await stdlib.mapSet(map2, v1048, v1406);
        const v1545 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1048), null);
        const v1546 = stdlib.fromSome(v1545, stdlib.checkedBigNumberify('./index.rsh:140:51:decimal', stdlib.UInt_max, '0'));
        const v1547 = stdlib.add(v1546, v1406);
        await stdlib.mapSet(map5, v1048, v1547);
        const v1548 = {
          cost: v1406,
          insurPeriod: v1536,
          start: v867
          };
        const v1549 = await txn1.getOutput('Customer_pay', 'v1548', ctc16, v1548);
        if (v451) {
          stdlib.protect(ctc0, await interact.out(v1392, v1549), {
            at: './index.rsh:112:7:application',
            fs: ['at ./index.rsh:112:7:application call to [unknown function] (defined at: ./index.rsh:112:7:function exp)', 'at ./index.rsh:141:10:application call to "k" (defined at: ./index.rsh:126:39:function exp)', 'at ./index.rsh:126:39:application call to [unknown function] (defined at: ./index.rsh:126:39:function exp)'],
            msg: 'out',
            who: 'Customer_pay'
            });
          }
        else {
          }
        
        const v6289 = v857;
        const v6290 = v858;
        const v6291 = v860;
        const v6292 = v861;
        const v6293 = v862;
        const v6295 = v1051;
        const v6296 = v1448;
        const v6297 = v871;
        if (v811) {
          const v6298 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
          const v6299 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
          return;
          }
        else {
          const v6300 = v1448[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
          const v6301 = v6300[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'InsureCompany_approveRequest0_153': {
      const v1732 = v1049[1];
      return;
      break;
      }
    case 'InsureCompany_declineRequest0_153': {
      const v2072 = v1049[1];
      return;
      break;
      }
    }
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['claimsBalance', ctc1], ['acceptedToken', ctc6], ['contractIsRunning', ctc3]]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc11 = stdlib.T_Data({
    Customer_claim0_153: ctc8,
    Customer_pay0_153: ctc9,
    InsureCompany_approveRequest0_153: ctc10,
    InsureCompany_declineRequest0_153: ctc8
    });
  const ctc12 = stdlib.T_Struct([['cost', ctc1], ['insurPeriod', ctc1], ['start', ctc1]]);
  const ctc13 = stdlib.T_Address;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: false,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc2;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: false,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: false,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc5;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: false,
    ty: map8_ctc
    });
  
  
  const v793 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v794 = [v793];
  const v798 = stdlib.protect(ctc7, interact.opts, 'for Deployer\'s interact field opts');
  const v799 = v798.claimsBalance;
  const v800 = v798.acceptedToken;
  const v801 = v798.contractIsRunning;
  
  const txn1 = await (ctc.sendrecv({
    args: [v798, v800, v799, v801],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7, ctc6, ctc1, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v808, v809, v810, v811], secs: v813, time: v812, didSend: v36, from: v807 } = txn1;
      
      const v814 = v794[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0')];
      const v816 = v814[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '1')];
      const v817 = v814[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '2')];
      const v818 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v816, v817];
      const v819 = stdlib.Array_set(v794, stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0'), v818);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v809
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc6, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v808, v809, v810, v811], secs: v813, time: v812, didSend: v36, from: v807 } = txn1;
  const v814 = v794[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0')];
  const v816 = v814[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '1')];
  const v817 = v814[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '2')];
  const v818 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v816, v817];
  const v819 = stdlib.Array_set(v794, stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0'), v818);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v807, v809, v810, v811, v819],
    evt_cnt: 0,
    funcNum: 1,
    lct: v812,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:50:17:decimal', stdlib.UInt_max, '0'), [[v810, v809]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [], secs: v823, time: v822, didSend: v43, from: v821 } = txn2;
      
      ;
      const v824 = v819[stdlib.checkedBigNumberify('./index.rsh:50:12:dot', stdlib.UInt_max, '0')];
      const v825 = v824[stdlib.checkedBigNumberify('./index.rsh:50:12:dot', stdlib.UInt_max, '0')];
      const v826 = stdlib.add(v825, v810);
      const v829 = v824[stdlib.checkedBigNumberify('./index.rsh:50:12:dot', stdlib.UInt_max, '1')];
      const v830 = v824[stdlib.checkedBigNumberify('./index.rsh:50:12:dot', stdlib.UInt_max, '2')];
      const v831 = [v826, v829, v830];
      const v832 = stdlib.Array_set(v819, stdlib.checkedBigNumberify('./index.rsh:50:12:dot', stdlib.UInt_max, '0'), v831);
      sim_r.txns.push({
        amt: v810,
        kind: 'to',
        tok: v809
        });
      const v853 = [v807, v807, v807];
      const v855 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20')];
      const v856 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '360'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '720')];
      const v857 = v853;
      const v858 = stdlib.checkedBigNumberify('./index.rsh:93:5:decimal', stdlib.UInt_max, '0');
      const v860 = v855;
      const v861 = v856;
      const v862 = v810;
      const v864 = v822;
      const v867 = v823;
      const v870 = v832;
      const v871 = stdlib.checkedBigNumberify('./index.rsh:41:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v811;})()) {
        const v912 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
        const v913 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
        sim_r.isHalt = false;
        }
      else {
        const v2422 = v870[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
        const v2423 = v2422[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          amt: v2423,
          kind: 'from',
          to: v807,
          tok: v809
          });
        sim_r.txns.push({
          amt: v871,
          kind: 'from',
          to: v807,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v809
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc6, ctc1, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v823, time: v822, didSend: v43, from: v821 } = txn2;
  ;
  const v824 = v819[stdlib.checkedBigNumberify('./index.rsh:50:12:dot', stdlib.UInt_max, '0')];
  const v825 = v824[stdlib.checkedBigNumberify('./index.rsh:50:12:dot', stdlib.UInt_max, '0')];
  const v826 = stdlib.add(v825, v810);
  const v829 = v824[stdlib.checkedBigNumberify('./index.rsh:50:12:dot', stdlib.UInt_max, '1')];
  const v830 = v824[stdlib.checkedBigNumberify('./index.rsh:50:12:dot', stdlib.UInt_max, '2')];
  const v831 = [v826, v829, v830];
  const v832 = stdlib.Array_set(v819, stdlib.checkedBigNumberify('./index.rsh:50:12:dot', stdlib.UInt_max, '0'), v831);
  ;
  const v833 = stdlib.addressEq(v807, v821);
  stdlib.assert(v833, {
    at: './index.rsh:50:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v853 = [v807, v807, v807];
  const v855 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20')];
  const v856 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '360'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '720')];
  let v857 = v853;
  let v858 = stdlib.checkedBigNumberify('./index.rsh:93:5:decimal', stdlib.UInt_max, '0');
  let v860 = v855;
  let v861 = v856;
  let v862 = v810;
  let v864 = v822;
  let v867 = v823;
  let v870 = v832;
  let v871 = stdlib.checkedBigNumberify('./index.rsh:41:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v811;})()) {
    const v912 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
    const v913 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1049], secs: v1051, time: v1050, didSend: v451, from: v1048 } = txn3;
    switch (v1049[0]) {
      case 'Customer_claim0_153': {
        const v1052 = v1049[1];
        undefined /* setApiDetails */;
        ;
        const v1100 = v870[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
        const v1101 = v1100[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
        const v1105 = v1100[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '1')];
        const v1106 = v1100[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '2')];
        const v1107 = [v1101, v1105, v1106];
        const v1108 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0'), v1107);
        ;
        const v1110 = v1052[stdlib.checkedBigNumberify('./index.rsh:153:9:spread', stdlib.UInt_max, '0')];
        const v1112 = 'Backend: start claiming';
        stdlib.protect(ctc0, await interact.log(v1112), {
          at: './index.rsh:169:30:application',
          fs: ['at ./index.rsh:169:30:application call to [unknown function] (defined at: ./index.rsh:169:30:function exp)', 'at ./index.rsh:169:30:application call to "liftedInteract" (defined at: ./index.rsh:169:30:application)', 'at ./index.rsh:168:16:application call to [unknown function] (defined at: ./index.rsh:168:16:function exp)'],
          msg: 'log',
          who: 'Deployer'
          });
        
        const v1113 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v1048), null);
        let v1114;
        switch (v1113[0]) {
          case 'None': {
            const v1115 = v1113[1];
            v1114 = false;
            
            break;
            }
          case 'Some': {
            const v1116 = v1113[1];
            v1114 = true;
            
            break;
            }
          }
        if (v1114) {
          const v1156 = stdlib.lt(v858, stdlib.checkedBigNumberify('./index.rsh:173:38:dot', stdlib.UInt_max, '3'));
          if (v1156) {
            await stdlib.mapSet(map3, v1048, v1110);
            const v1158 = stdlib.Array_set(v857, v858, v1048);
            await txn3.getOutput('Customer_claim', 'v1110', ctc1, v1110);
            const v1166 = stdlib.add(v858, stdlib.checkedBigNumberify('./index.rsh:183:29:decimal', stdlib.UInt_max, '1'));
            const cv857 = v1158;
            const cv858 = v1166;
            const cv860 = v860;
            const cv861 = v861;
            const cv862 = v862;
            const cv864 = v1050;
            const cv867 = v1051;
            const cv870 = v1108;
            const cv871 = v871;
            
            v857 = cv857;
            v858 = cv858;
            v860 = cv860;
            v861 = cv861;
            v862 = cv862;
            v864 = cv864;
            v867 = cv867;
            v870 = cv870;
            v871 = cv871;
            
            continue;}
          else {
            const v1176 = stdlib.checkedBigNumberify('./index.rsh:187:13:decimal', stdlib.UInt_max, '0');
            await txn3.getOutput('Customer_claim', 'v1176', ctc1, v1176);
            const cv857 = v857;
            const cv858 = v858;
            const cv860 = v860;
            const cv861 = v861;
            const cv862 = v862;
            const cv864 = v1050;
            const cv867 = v1051;
            const cv870 = v1108;
            const cv871 = v871;
            
            v857 = cv857;
            v858 = cv858;
            v860 = cv860;
            v861 = cv861;
            v862 = cv862;
            v864 = cv864;
            v867 = cv867;
            v870 = cv870;
            v871 = cv871;
            
            continue;}}
        else {
          await stdlib.mapSet(map8, v1048, null);
          const v1119 = stdlib.lt(v858, stdlib.checkedBigNumberify('./index.rsh:173:38:dot', stdlib.UInt_max, '3'));
          if (v1119) {
            await stdlib.mapSet(map3, v1048, v1110);
            const v1121 = stdlib.Array_set(v857, v858, v1048);
            await txn3.getOutput('Customer_claim', 'v1110', ctc1, v1110);
            const v1129 = stdlib.add(v858, stdlib.checkedBigNumberify('./index.rsh:183:29:decimal', stdlib.UInt_max, '1'));
            const cv857 = v1121;
            const cv858 = v1129;
            const cv860 = v860;
            const cv861 = v861;
            const cv862 = v862;
            const cv864 = v1050;
            const cv867 = v1051;
            const cv870 = v1108;
            const cv871 = v871;
            
            v857 = cv857;
            v858 = cv858;
            v860 = cv860;
            v861 = cv861;
            v862 = cv862;
            v864 = cv864;
            v867 = cv867;
            v870 = cv870;
            v871 = cv871;
            
            continue;}
          else {
            const v1139 = stdlib.checkedBigNumberify('./index.rsh:187:13:decimal', stdlib.UInt_max, '0');
            await txn3.getOutput('Customer_claim', 'v1139', ctc1, v1139);
            const cv857 = v857;
            const cv858 = v858;
            const cv860 = v860;
            const cv861 = v861;
            const cv862 = v862;
            const cv864 = v1050;
            const cv867 = v1051;
            const cv870 = v1108;
            const cv871 = v871;
            
            v857 = cv857;
            v858 = cv858;
            v860 = cv860;
            v861 = cv861;
            v862 = cv862;
            v864 = cv864;
            v867 = cv867;
            v870 = cv870;
            v871 = cv871;
            
            continue;}}
        break;
        }
      case 'Customer_pay0_153': {
        const v1392 = v1049[1];
        undefined /* setApiDetails */;
        const v1406 = v1392[stdlib.checkedBigNumberify('./index.rsh:111:9:spread', stdlib.UInt_max, '1')];
        ;
        const v1440 = v870[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
        const v1441 = v1440[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
        const v1442 = stdlib.add(v1441, v1406);
        const v1445 = v1440[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '1')];
        const v1446 = v1440[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '2')];
        const v1447 = [v1442, v1445, v1446];
        const v1448 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0'), v1447);
        ;
        const v1536 = v1392[stdlib.checkedBigNumberify('./index.rsh:111:9:spread', stdlib.UInt_max, '2')];
        const v1538 = 'Backend: start subscrbing a contract';
        stdlib.protect(ctc0, await interact.log(v1538), {
          at: './index.rsh:127:30:application',
          fs: ['at ./index.rsh:127:30:application call to [unknown function] (defined at: ./index.rsh:127:30:function exp)', 'at ./index.rsh:127:30:application call to "liftedInteract" (defined at: ./index.rsh:127:30:application)', 'at ./index.rsh:126:39:application call to [unknown function] (defined at: ./index.rsh:126:39:function exp)'],
          msg: 'log',
          who: 'Deployer'
          });
        
        const v1539 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v1048), null);
        let v1540;
        switch (v1539[0]) {
          case 'None': {
            const v1541 = v1539[1];
            v1540 = false;
            
            break;
            }
          case 'Some': {
            const v1542 = v1539[1];
            v1540 = true;
            
            break;
            }
          }
        if (v1540) {
          await stdlib.mapSet(map0, v1048, v867);
          await stdlib.mapSet(map1, v1048, v1536);
          await stdlib.mapSet(map2, v1048, v1406);
          const v1562 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1048), null);
          const v1563 = stdlib.fromSome(v1562, stdlib.checkedBigNumberify('./index.rsh:140:51:decimal', stdlib.UInt_max, '0'));
          const v1564 = stdlib.add(v1563, v1406);
          await stdlib.mapSet(map5, v1048, v1564);
          const v1565 = {
            cost: v1406,
            insurPeriod: v1536,
            start: v867
            };
          await txn3.getOutput('Customer_pay', 'v1565', ctc12, v1565);
          const cv857 = v857;
          const cv858 = v858;
          const cv860 = v860;
          const cv861 = v861;
          const cv862 = v862;
          const cv864 = v1050;
          const cv867 = v1051;
          const cv870 = v1448;
          const cv871 = v871;
          
          v857 = cv857;
          v858 = cv858;
          v860 = cv860;
          v861 = cv861;
          v862 = cv862;
          v864 = cv864;
          v867 = cv867;
          v870 = cv870;
          v871 = cv871;
          
          continue;}
        else {
          await stdlib.mapSet(map7, v1048, null);
          await stdlib.mapSet(map0, v1048, v867);
          await stdlib.mapSet(map1, v1048, v1536);
          await stdlib.mapSet(map2, v1048, v1406);
          const v1545 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1048), null);
          const v1546 = stdlib.fromSome(v1545, stdlib.checkedBigNumberify('./index.rsh:140:51:decimal', stdlib.UInt_max, '0'));
          const v1547 = stdlib.add(v1546, v1406);
          await stdlib.mapSet(map5, v1048, v1547);
          const v1548 = {
            cost: v1406,
            insurPeriod: v1536,
            start: v867
            };
          await txn3.getOutput('Customer_pay', 'v1548', ctc12, v1548);
          const cv857 = v857;
          const cv858 = v858;
          const cv860 = v860;
          const cv861 = v861;
          const cv862 = v862;
          const cv864 = v1050;
          const cv867 = v1051;
          const cv870 = v1448;
          const cv871 = v871;
          
          v857 = cv857;
          v858 = cv858;
          v860 = cv860;
          v861 = cv861;
          v862 = cv862;
          v864 = cv864;
          v867 = cv867;
          v870 = cv870;
          v871 = cv871;
          
          continue;}
        break;
        }
      case 'InsureCompany_approveRequest0_153': {
        const v1732 = v1049[1];
        undefined /* setApiDetails */;
        ;
        const v1780 = v870[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
        const v1781 = v1780[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
        const v1785 = v1780[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '1')];
        const v1786 = v1780[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '2')];
        const v1787 = [v1781, v1785, v1786];
        const v1788 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0'), v1787);
        ;
        const v1920 = v1732[stdlib.checkedBigNumberify('./index.rsh:200:9:spread', stdlib.UInt_max, '0')];
        const v1921 = v1732[stdlib.checkedBigNumberify('./index.rsh:200:9:spread', stdlib.UInt_max, '1')];
        const v1923 = 'Backend: start arpproving';
        stdlib.protect(ctc0, await interact.log(v1923), {
          at: './index.rsh:215:30:application',
          fs: ['at ./index.rsh:215:30:application call to [unknown function] (defined at: ./index.rsh:215:30:function exp)', 'at ./index.rsh:215:30:application call to "liftedInteract" (defined at: ./index.rsh:215:30:application)', 'at ./index.rsh:214:23:application call to [unknown function] (defined at: ./index.rsh:214:23:function exp)'],
          msg: 'log',
          who: 'Deployer'
          });
        
        const v1924 = stdlib.lt(v1920, stdlib.checkedBigNumberify('./index.rsh:216:30:dot', stdlib.UInt_max, '3'));
        if (v1924) {
          const v1926 = v857[v1920];
          const v1927 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1926), null);
          const v1928 = stdlib.fromSome(v1927, stdlib.checkedBigNumberify('./index.rsh:68:46:decimal', stdlib.UInt_max, '0'));
          const v1930 = stdlib.lt(v1928, v912);
          const v1931 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1926), null);
          const v1932 = stdlib.fromSome(v1931, stdlib.checkedBigNumberify('./index.rsh:221:58:decimal', stdlib.UInt_max, '1'));
          const v1933 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:221:22:decimal', stdlib.UInt_max, '2'), v1932);
          const v1934 = stdlib.le(v1921, v1933);
          const v1935 = v1930 ? v1934 : false;
          const v1939 = stdlib.gt(v1928, v912);
          const v1940 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1926), null);
          const v1941 = stdlib.fromSome(v1940, stdlib.checkedBigNumberify('./index.rsh:223:49:decimal', stdlib.UInt_max, '0'));
          const v1943 = stdlib.lt(v1941, v913);
          const v1944 = v1939 ? v1943 : false;
          const v1947 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:224:22:decimal', stdlib.UInt_max, '3'), v1932);
          const v1948 = stdlib.le(v1921, v1947);
          const v1949 = v1944 ? v1948 : false;
          const v1950 = v1935 ? true : v1949;
          const v1954 = stdlib.ge(v1928, v913);
          const v1957 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:226:22:decimal', stdlib.UInt_max, '4'), v1932);
          const v1958 = stdlib.le(v1921, v1957);
          const v1959 = v1954 ? v1958 : false;
          const v1960 = v1950 ? true : v1959;
          if (v1960) {
            await stdlib.mapSet(map2, v1926, stdlib.checkedBigNumberify('./index.rsh:228:37:decimal', stdlib.UInt_max, '0'));
            await stdlib.mapSet(map0, v1926, stdlib.checkedBigNumberify('./index.rsh:229:38:decimal', stdlib.UInt_max, '0'));
            await stdlib.mapSet(map1, v1926, stdlib.checkedBigNumberify('./index.rsh:230:39:decimal', stdlib.UInt_max, '0'));
            await stdlib.mapSet(map3, v1926, stdlib.checkedBigNumberify('./index.rsh:231:49:decimal', stdlib.UInt_max, '0'));
            await stdlib.mapSet(map4, v1926, true);
            const v1961 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1926), null);
            const v1962 = stdlib.fromSome(v1961, stdlib.checkedBigNumberify('./index.rsh:234:52:decimal', stdlib.UInt_max, '0'));
            const v1963 = stdlib.add(v1962, v1921);
            await stdlib.mapSet(map6, v1926, v1963);
            const v1965 = stdlib.Array_set(v857, v1920, v807);
            await stdlib.mapSet(map8, v1926, undefined /* Nothing */);
            const v1967 = stdlib.sub(v862, v1921);
            const v1968 = v1788[stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '0')];
            const v1969 = v1968[stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '0')];
            const v1973 = stdlib.sub(v1969, v1921);
            const v1976 = v1968[stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '1')];
            const v1977 = v1968[stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '2')];
            const v1978 = [v1973, v1976, v1977];
            const v1979 = stdlib.Array_set(v1788, stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '0'), v1978);
            ;
            const v1980 = true;
            await txn3.getOutput('InsureCompany_approveRequest', 'v1980', ctc3, v1980);
            const v1988 = stdlib.sub(v858, stdlib.checkedBigNumberify('./index.rsh:246:31:decimal', stdlib.UInt_max, '1'));
            const cv857 = v1965;
            const cv858 = v1988;
            const cv860 = v860;
            const cv861 = v861;
            const cv862 = v1967;
            const cv864 = v1050;
            const cv867 = v1051;
            const cv870 = v1979;
            const cv871 = v871;
            
            v857 = cv857;
            v858 = cv858;
            v860 = cv860;
            v861 = cv861;
            v862 = cv862;
            v864 = cv864;
            v867 = cv867;
            v870 = cv870;
            v871 = cv871;
            
            continue;}
          else {
            const v1998 = false;
            await txn3.getOutput('InsureCompany_approveRequest', 'v1998', ctc3, v1998);
            const cv857 = v857;
            const cv858 = v858;
            const cv860 = v860;
            const cv861 = v861;
            const cv862 = v862;
            const cv864 = v1050;
            const cv867 = v1051;
            const cv870 = v1788;
            const cv871 = v871;
            
            v857 = cv857;
            v858 = cv858;
            v860 = cv860;
            v861 = cv861;
            v862 = cv862;
            v864 = cv864;
            v867 = cv867;
            v870 = cv870;
            v871 = cv871;
            
            continue;}}
        else {
          const v2015 = false;
          await txn3.getOutput('InsureCompany_approveRequest', 'v2015', ctc3, v2015);
          const cv857 = v857;
          const cv858 = v858;
          const cv860 = v860;
          const cv861 = v861;
          const cv862 = v862;
          const cv864 = v1050;
          const cv867 = v1051;
          const cv870 = v1788;
          const cv871 = v871;
          
          v857 = cv857;
          v858 = cv858;
          v860 = cv860;
          v861 = cv861;
          v862 = cv862;
          v864 = cv864;
          v867 = cv867;
          v870 = cv870;
          v871 = cv871;
          
          continue;}
        break;
        }
      case 'InsureCompany_declineRequest0_153': {
        const v2072 = v1049[1];
        undefined /* setApiDetails */;
        ;
        const v2120 = v870[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
        const v2121 = v2120[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
        const v2125 = v2120[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '1')];
        const v2126 = v2120[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '2')];
        const v2127 = [v2121, v2125, v2126];
        const v2128 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0'), v2127);
        ;
        const v2373 = v2072[stdlib.checkedBigNumberify('./index.rsh:275:9:spread', stdlib.UInt_max, '0')];
        const v2374 = stdlib.lt(v2373, stdlib.checkedBigNumberify('./index.rsh:286:30:dot', stdlib.UInt_max, '3'));
        if (v2374) {
          const v2376 = v857[v2373];
          await stdlib.mapSet(map2, v2376, stdlib.checkedBigNumberify('./index.rsh:288:35:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map0, v2376, stdlib.checkedBigNumberify('./index.rsh:289:36:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map1, v2376, stdlib.checkedBigNumberify('./index.rsh:290:37:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map3, v2376, stdlib.checkedBigNumberify('./index.rsh:291:47:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map4, v2376, false);
          const v2378 = stdlib.Array_set(v857, v2373, v807);
          const v2379 = true;
          await txn3.getOutput('InsureCompany_declineRequest', 'v2379', ctc3, v2379);
          const v2386 = stdlib.sub(v858, stdlib.checkedBigNumberify('./index.rsh:301:29:decimal', stdlib.UInt_max, '1'));
          const cv857 = v2378;
          const cv858 = v2386;
          const cv860 = v860;
          const cv861 = v861;
          const cv862 = v862;
          const cv864 = v1050;
          const cv867 = v1051;
          const cv870 = v2128;
          const cv871 = v871;
          
          v857 = cv857;
          v858 = cv858;
          v860 = cv860;
          v861 = cv861;
          v862 = cv862;
          v864 = cv864;
          v867 = cv867;
          v870 = cv870;
          v871 = cv871;
          
          continue;}
        else {
          const v2396 = false;
          await txn3.getOutput('InsureCompany_declineRequest', 'v2396', ctc3, v2396);
          const cv857 = v857;
          const cv858 = v858;
          const cv860 = v860;
          const cv861 = v861;
          const cv862 = v862;
          const cv864 = v1050;
          const cv867 = v1051;
          const cv870 = v2128;
          const cv871 = v871;
          
          v857 = cv857;
          v858 = cv858;
          v860 = cv860;
          v861 = cv861;
          v862 = cv862;
          v864 = cv864;
          v867 = cv867;
          v870 = cv870;
          v871 = cv871;
          
          continue;}
        break;
        }
      }
    
    }
  const v2422 = v870[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
  const v2423 = v2422[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function _InsureCompany_approveRequest4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _InsureCompany_approveRequest4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _InsureCompany_approveRequest4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Data({
    Customer_claim0_153: ctc13,
    Customer_pay0_153: ctc14,
    InsureCompany_approveRequest0_153: ctc12,
    InsureCompany_declineRequest0_153: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc2;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc5;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc7, ctc3, ctc8, ctc1, ctc9, ctc9, ctc1, ctc1, ctc11, ctc1, ctc1, ctc1]);
  const v971 = ctc.selfAddress();
  const v973 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:202:20:application call to [unknown function] (defined at: ./index.rsh:202:20:function exp)', 'at ./index.rsh:86:21:application call to "runInsureCompany_approveRequest0_153" (defined at: ./index.rsh:200:9:function exp)', 'at ./index.rsh:86:21:application call to [unknown function] (defined at: ./index.rsh:86:21:function exp)'],
    msg: 'in',
    who: 'InsureCompany_approveRequest'
    });
  const v974 = v973[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v975 = v973[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v979 = stdlib.lt(v974, v858);
  stdlib.assert(v979, {
    at: './index.rsh:203:15:application',
    fs: ['at ./index.rsh:202:20:application call to [unknown function] (defined at: ./index.rsh:202:20:function exp)', 'at ./index.rsh:202:20:application call to [unknown function] (defined at: ./index.rsh:202:20:function exp)', 'at ./index.rsh:86:21:application call to "runInsureCompany_approveRequest0_153" (defined at: ./index.rsh:200:9:function exp)', 'at ./index.rsh:86:21:application call to [unknown function] (defined at: ./index.rsh:86:21:function exp)'],
    msg: 'Index should not be greated than the number of claimers',
    who: 'InsureCompany_approveRequest'
    });
  const v980 = stdlib.addressEq(v807, v971);
  stdlib.assert(v980, {
    at: './index.rsh:207:15:application',
    fs: ['at ./index.rsh:202:20:application call to [unknown function] (defined at: ./index.rsh:202:20:function exp)', 'at ./index.rsh:202:20:application call to [unknown function] (defined at: ./index.rsh:202:20:function exp)', 'at ./index.rsh:86:21:application call to "runInsureCompany_approveRequest0_153" (defined at: ./index.rsh:200:9:function exp)', 'at ./index.rsh:86:21:application call to [unknown function] (defined at: ./index.rsh:86:21:function exp)'],
    msg: 'Only admin is allowed to approve',
    who: 'InsureCompany_approveRequest'
    });
  const v981 = stdlib.le(v975, v862);
  stdlib.assert(v981, {
    at: './index.rsh:208:15:application',
    fs: ['at ./index.rsh:202:20:application call to [unknown function] (defined at: ./index.rsh:202:20:function exp)', 'at ./index.rsh:202:20:application call to [unknown function] (defined at: ./index.rsh:202:20:function exp)', 'at ./index.rsh:86:21:application call to "runInsureCompany_approveRequest0_153" (defined at: ./index.rsh:200:9:function exp)', 'at ./index.rsh:86:21:application call to [unknown function] (defined at: ./index.rsh:86:21:function exp)'],
    msg: 'Amount cannot exceed the remainning balance',
    who: 'InsureCompany_approveRequest'
    });
  const v986 = ['InsureCompany_approveRequest0_153', v973];
  
  const txn1 = await (ctc.sendrecv({
    args: [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913, v986],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:213:24:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:213:28:decimal', stdlib.UInt_max, '0'), v809]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v1049], secs: v1051, time: v1050, didSend: v451, from: v1048 } = txn1;
      
      switch (v1049[0]) {
        case 'Customer_claim0_153': {
          const v1052 = v1049[1];
          
          break;
          }
        case 'Customer_pay0_153': {
          const v1392 = v1049[1];
          
          break;
          }
        case 'InsureCompany_approveRequest0_153': {
          const v1732 = v1049[1];
          sim_r.txns.push({
            kind: 'api',
            who: "InsureCompany_approveRequest"
            });
          ;
          const v1780 = v870[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
          const v1781 = v1780[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
          const v1785 = v1780[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '1')];
          const v1786 = v1780[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '2')];
          const v1787 = [v1781, v1785, v1786];
          const v1788 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0'), v1787);
          ;
          const v1920 = v1732[stdlib.checkedBigNumberify('./index.rsh:200:9:spread', stdlib.UInt_max, '0')];
          const v1921 = v1732[stdlib.checkedBigNumberify('./index.rsh:200:9:spread', stdlib.UInt_max, '1')];
          const v1924 = stdlib.lt(v1920, stdlib.checkedBigNumberify('./index.rsh:216:30:dot', stdlib.UInt_max, '3'));
          if (v1924) {
            const v1926 = v857[v1920];
            const v1927 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1926), null);
            const v1928 = stdlib.fromSome(v1927, stdlib.checkedBigNumberify('./index.rsh:68:46:decimal', stdlib.UInt_max, '0'));
            const v1930 = stdlib.lt(v1928, v912);
            const v1931 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1926), null);
            const v1932 = stdlib.fromSome(v1931, stdlib.checkedBigNumberify('./index.rsh:221:58:decimal', stdlib.UInt_max, '1'));
            const v1933 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:221:22:decimal', stdlib.UInt_max, '2'), v1932);
            const v1934 = stdlib.le(v1921, v1933);
            const v1935 = v1930 ? v1934 : false;
            const v1939 = stdlib.gt(v1928, v912);
            const v1940 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1926), null);
            const v1941 = stdlib.fromSome(v1940, stdlib.checkedBigNumberify('./index.rsh:223:49:decimal', stdlib.UInt_max, '0'));
            const v1943 = stdlib.lt(v1941, v913);
            const v1944 = v1939 ? v1943 : false;
            const v1947 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:224:22:decimal', stdlib.UInt_max, '3'), v1932);
            const v1948 = stdlib.le(v1921, v1947);
            const v1949 = v1944 ? v1948 : false;
            const v1950 = v1935 ? true : v1949;
            const v1954 = stdlib.ge(v1928, v913);
            const v1957 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:226:22:decimal', stdlib.UInt_max, '4'), v1932);
            const v1958 = stdlib.le(v1921, v1957);
            const v1959 = v1954 ? v1958 : false;
            const v1960 = v1950 ? true : v1959;
            if (v1960) {
              await stdlib.simMapSet(sim_r, 2, v1926, stdlib.checkedBigNumberify('./index.rsh:228:37:decimal', stdlib.UInt_max, '0'));
              await stdlib.simMapSet(sim_r, 0, v1926, stdlib.checkedBigNumberify('./index.rsh:229:38:decimal', stdlib.UInt_max, '0'));
              await stdlib.simMapSet(sim_r, 1, v1926, stdlib.checkedBigNumberify('./index.rsh:230:39:decimal', stdlib.UInt_max, '0'));
              await stdlib.simMapSet(sim_r, 3, v1926, stdlib.checkedBigNumberify('./index.rsh:231:49:decimal', stdlib.UInt_max, '0'));
              await stdlib.simMapSet(sim_r, 4, v1926, true);
              const v1961 = stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1926), null);
              const v1962 = stdlib.fromSome(v1961, stdlib.checkedBigNumberify('./index.rsh:234:52:decimal', stdlib.UInt_max, '0'));
              const v1963 = stdlib.add(v1962, v1921);
              await stdlib.simMapSet(sim_r, 6, v1926, v1963);
              const v1965 = stdlib.Array_set(v857, v1920, v807);
              await stdlib.simMapSet(sim_r, 8, v1926, undefined /* Nothing */);
              const v1967 = stdlib.sub(v862, v1921);
              const v1968 = v1788[stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '0')];
              const v1969 = v1968[stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '0')];
              const v1973 = stdlib.sub(v1969, v1921);
              const v1976 = v1968[stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '1')];
              const v1977 = v1968[stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '2')];
              const v1978 = [v1973, v1976, v1977];
              const v1979 = stdlib.Array_set(v1788, stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '0'), v1978);
              sim_r.txns.push({
                amt: v1921,
                kind: 'from',
                to: v1926,
                tok: v809
                });
              const v1980 = true;
              const v1981 = await txn1.getOutput('InsureCompany_approveRequest', 'v1980', ctc3, v1980);
              
              const v1988 = stdlib.sub(v858, stdlib.checkedBigNumberify('./index.rsh:246:31:decimal', stdlib.UInt_max, '1'));
              const v6445 = v1965;
              const v6446 = v1988;
              const v6447 = v860;
              const v6448 = v861;
              const v6449 = v1967;
              const v6451 = v1051;
              const v6452 = v1979;
              const v6453 = v871;
              if (v811) {
                const v6454 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
                const v6455 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
                sim_r.isHalt = false;
                }
              else {
                const v6456 = v1979[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
                const v6457 = v6456[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  amt: v6457,
                  kind: 'from',
                  to: v807,
                  tok: v809
                  });
                sim_r.txns.push({
                  amt: v871,
                  kind: 'from',
                  to: v807,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v809
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v1998 = false;
              const v1999 = await txn1.getOutput('InsureCompany_approveRequest', 'v1998', ctc3, v1998);
              
              const v6458 = v857;
              const v6459 = v858;
              const v6460 = v860;
              const v6461 = v861;
              const v6462 = v862;
              const v6464 = v1051;
              const v6465 = v1788;
              const v6466 = v871;
              if (v811) {
                const v6467 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
                const v6468 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
                sim_r.isHalt = false;
                }
              else {
                const v6469 = v1788[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
                const v6470 = v6469[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  amt: v6470,
                  kind: 'from',
                  to: v807,
                  tok: v809
                  });
                sim_r.txns.push({
                  amt: v871,
                  kind: 'from',
                  to: v807,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v809
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v2015 = false;
            const v2016 = await txn1.getOutput('InsureCompany_approveRequest', 'v2015', ctc3, v2015);
            
            const v6471 = v857;
            const v6472 = v858;
            const v6473 = v860;
            const v6474 = v861;
            const v6475 = v862;
            const v6477 = v1051;
            const v6478 = v1788;
            const v6479 = v871;
            if (v811) {
              const v6480 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
              const v6481 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
              sim_r.isHalt = false;
              }
            else {
              const v6482 = v1788[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
              const v6483 = v6482[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                amt: v6483,
                kind: 'from',
                to: v807,
                tok: v809
                });
              sim_r.txns.push({
                amt: v871,
                kind: 'from',
                to: v807,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v809
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'InsureCompany_declineRequest0_153': {
          const v2072 = v1049[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc3, ctc8, ctc1, ctc9, ctc9, ctc1, ctc1, ctc11, ctc1, ctc1, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1049], secs: v1051, time: v1050, didSend: v451, from: v1048 } = txn1;
  switch (v1049[0]) {
    case 'Customer_claim0_153': {
      const v1052 = v1049[1];
      return;
      break;
      }
    case 'Customer_pay0_153': {
      const v1392 = v1049[1];
      return;
      break;
      }
    case 'InsureCompany_approveRequest0_153': {
      const v1732 = v1049[1];
      undefined /* setApiDetails */;
      ;
      const v1780 = v870[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
      const v1781 = v1780[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
      const v1785 = v1780[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '1')];
      const v1786 = v1780[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '2')];
      const v1787 = [v1781, v1785, v1786];
      const v1788 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0'), v1787);
      ;
      const v1920 = v1732[stdlib.checkedBigNumberify('./index.rsh:200:9:spread', stdlib.UInt_max, '0')];
      const v1921 = v1732[stdlib.checkedBigNumberify('./index.rsh:200:9:spread', stdlib.UInt_max, '1')];
      const v1924 = stdlib.lt(v1920, stdlib.checkedBigNumberify('./index.rsh:216:30:dot', stdlib.UInt_max, '3'));
      if (v1924) {
        const v1926 = v857[v1920];
        const v1927 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1926), null);
        const v1928 = stdlib.fromSome(v1927, stdlib.checkedBigNumberify('./index.rsh:68:46:decimal', stdlib.UInt_max, '0'));
        const v1930 = stdlib.lt(v1928, v912);
        const v1931 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1926), null);
        const v1932 = stdlib.fromSome(v1931, stdlib.checkedBigNumberify('./index.rsh:221:58:decimal', stdlib.UInt_max, '1'));
        const v1933 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:221:22:decimal', stdlib.UInt_max, '2'), v1932);
        const v1934 = stdlib.le(v1921, v1933);
        const v1935 = v1930 ? v1934 : false;
        const v1939 = stdlib.gt(v1928, v912);
        const v1940 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1926), null);
        const v1941 = stdlib.fromSome(v1940, stdlib.checkedBigNumberify('./index.rsh:223:49:decimal', stdlib.UInt_max, '0'));
        const v1943 = stdlib.lt(v1941, v913);
        const v1944 = v1939 ? v1943 : false;
        const v1947 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:224:22:decimal', stdlib.UInt_max, '3'), v1932);
        const v1948 = stdlib.le(v1921, v1947);
        const v1949 = v1944 ? v1948 : false;
        const v1950 = v1935 ? true : v1949;
        const v1954 = stdlib.ge(v1928, v913);
        const v1957 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:226:22:decimal', stdlib.UInt_max, '4'), v1932);
        const v1958 = stdlib.le(v1921, v1957);
        const v1959 = v1954 ? v1958 : false;
        const v1960 = v1950 ? true : v1959;
        if (v1960) {
          await stdlib.mapSet(map2, v1926, stdlib.checkedBigNumberify('./index.rsh:228:37:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map0, v1926, stdlib.checkedBigNumberify('./index.rsh:229:38:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map1, v1926, stdlib.checkedBigNumberify('./index.rsh:230:39:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map3, v1926, stdlib.checkedBigNumberify('./index.rsh:231:49:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map4, v1926, true);
          const v1961 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1926), null);
          const v1962 = stdlib.fromSome(v1961, stdlib.checkedBigNumberify('./index.rsh:234:52:decimal', stdlib.UInt_max, '0'));
          const v1963 = stdlib.add(v1962, v1921);
          await stdlib.mapSet(map6, v1926, v1963);
          const v1965 = stdlib.Array_set(v857, v1920, v807);
          await stdlib.mapSet(map8, v1926, undefined /* Nothing */);
          const v1967 = stdlib.sub(v862, v1921);
          const v1968 = v1788[stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '0')];
          const v1969 = v1968[stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '0')];
          const v1973 = stdlib.sub(v1969, v1921);
          const v1976 = v1968[stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '1')];
          const v1977 = v1968[stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '2')];
          const v1978 = [v1973, v1976, v1977];
          const v1979 = stdlib.Array_set(v1788, stdlib.checkedBigNumberify('./index.rsh:238:51:application', stdlib.UInt_max, '0'), v1978);
          ;
          const v1980 = true;
          const v1981 = await txn1.getOutput('InsureCompany_approveRequest', 'v1980', ctc3, v1980);
          if (v451) {
            stdlib.protect(ctc0, await interact.out(v1732, v1981), {
              at: './index.rsh:201:7:application',
              fs: ['at ./index.rsh:201:7:application call to [unknown function] (defined at: ./index.rsh:201:7:function exp)', 'at ./index.rsh:239:14:application call to "k" (defined at: ./index.rsh:214:23:function exp)', 'at ./index.rsh:214:23:application call to [unknown function] (defined at: ./index.rsh:214:23:function exp)'],
              msg: 'out',
              who: 'InsureCompany_approveRequest'
              });
            }
          else {
            }
          
          const v1988 = stdlib.sub(v858, stdlib.checkedBigNumberify('./index.rsh:246:31:decimal', stdlib.UInt_max, '1'));
          const v6445 = v1965;
          const v6446 = v1988;
          const v6447 = v860;
          const v6448 = v861;
          const v6449 = v1967;
          const v6451 = v1051;
          const v6452 = v1979;
          const v6453 = v871;
          if (v811) {
            const v6454 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
            const v6455 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
            return;
            }
          else {
            const v6456 = v1979[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
            const v6457 = v6456[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}
        else {
          const v1998 = false;
          const v1999 = await txn1.getOutput('InsureCompany_approveRequest', 'v1998', ctc3, v1998);
          if (v451) {
            stdlib.protect(ctc0, await interact.out(v1732, v1999), {
              at: './index.rsh:201:7:application',
              fs: ['at ./index.rsh:201:7:application call to [unknown function] (defined at: ./index.rsh:201:7:function exp)', 'at ./index.rsh:250:14:application call to "k" (defined at: ./index.rsh:214:23:function exp)', 'at ./index.rsh:214:23:application call to [unknown function] (defined at: ./index.rsh:214:23:function exp)'],
              msg: 'out',
              who: 'InsureCompany_approveRequest'
              });
            }
          else {
            }
          
          const v6458 = v857;
          const v6459 = v858;
          const v6460 = v860;
          const v6461 = v861;
          const v6462 = v862;
          const v6464 = v1051;
          const v6465 = v1788;
          const v6466 = v871;
          if (v811) {
            const v6467 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
            const v6468 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
            return;
            }
          else {
            const v6469 = v1788[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
            const v6470 = v6469[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      else {
        const v2015 = false;
        const v2016 = await txn1.getOutput('InsureCompany_approveRequest', 'v2015', ctc3, v2015);
        if (v451) {
          stdlib.protect(ctc0, await interact.out(v1732, v2016), {
            at: './index.rsh:201:7:application',
            fs: ['at ./index.rsh:201:7:application call to [unknown function] (defined at: ./index.rsh:201:7:function exp)', 'at ./index.rsh:262:12:application call to "k" (defined at: ./index.rsh:214:23:function exp)', 'at ./index.rsh:214:23:application call to [unknown function] (defined at: ./index.rsh:214:23:function exp)'],
            msg: 'out',
            who: 'InsureCompany_approveRequest'
            });
          }
        else {
          }
        
        const v6471 = v857;
        const v6472 = v858;
        const v6473 = v860;
        const v6474 = v861;
        const v6475 = v862;
        const v6477 = v1051;
        const v6478 = v1788;
        const v6479 = v871;
        if (v811) {
          const v6480 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
          const v6481 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
          return;
          }
        else {
          const v6482 = v1788[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
          const v6483 = v6482[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'InsureCompany_declineRequest0_153': {
      const v2072 = v1049[1];
      return;
      break;
      }
    }
  
  
  };
export async function _InsureCompany_declineRequest4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _InsureCompany_declineRequest4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _InsureCompany_declineRequest4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc15 = stdlib.T_Data({
    Customer_claim0_153: ctc12,
    Customer_pay0_153: ctc13,
    InsureCompany_approveRequest0_153: ctc14,
    InsureCompany_declineRequest0_153: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc2;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc5;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc7, ctc3, ctc8, ctc1, ctc9, ctc9, ctc1, ctc1, ctc11, ctc1, ctc1, ctc1]);
  const v988 = ctc.selfAddress();
  const v990 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:277:15:application call to [unknown function] (defined at: ./index.rsh:277:15:function exp)', 'at ./index.rsh:86:21:application call to "runInsureCompany_declineRequest0_153" (defined at: ./index.rsh:275:9:function exp)', 'at ./index.rsh:86:21:application call to [unknown function] (defined at: ./index.rsh:86:21:function exp)'],
    msg: 'in',
    who: 'InsureCompany_declineRequest'
    });
  const v991 = v990[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v994 = stdlib.lt(v991, v858);
  stdlib.assert(v994, {
    at: './index.rsh:278:15:application',
    fs: ['at ./index.rsh:277:15:application call to [unknown function] (defined at: ./index.rsh:277:15:function exp)', 'at ./index.rsh:277:15:application call to [unknown function] (defined at: ./index.rsh:277:15:function exp)', 'at ./index.rsh:86:21:application call to "runInsureCompany_declineRequest0_153" (defined at: ./index.rsh:275:9:function exp)', 'at ./index.rsh:86:21:application call to [unknown function] (defined at: ./index.rsh:86:21:function exp)'],
    msg: 'Index should not be greated than the number of claimers',
    who: 'InsureCompany_declineRequest'
    });
  const v995 = stdlib.addressEq(v807, v988);
  stdlib.assert(v995, {
    at: './index.rsh:282:15:application',
    fs: ['at ./index.rsh:277:15:application call to [unknown function] (defined at: ./index.rsh:277:15:function exp)', 'at ./index.rsh:277:15:application call to [unknown function] (defined at: ./index.rsh:277:15:function exp)', 'at ./index.rsh:86:21:application call to "runInsureCompany_declineRequest0_153" (defined at: ./index.rsh:275:9:function exp)', 'at ./index.rsh:86:21:application call to [unknown function] (defined at: ./index.rsh:86:21:function exp)'],
    msg: 'Only admin is allowed to approve',
    who: 'InsureCompany_declineRequest'
    });
  const v999 = ['InsureCompany_declineRequest0_153', v990];
  
  const txn1 = await (ctc.sendrecv({
    args: [v807, v809, v811, v857, v858, v860, v861, v862, v867, v870, v871, v912, v913, v999],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:284:23:decimal', stdlib.UInt_max, '0'), v809]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v1049], secs: v1051, time: v1050, didSend: v451, from: v1048 } = txn1;
      
      switch (v1049[0]) {
        case 'Customer_claim0_153': {
          const v1052 = v1049[1];
          
          break;
          }
        case 'Customer_pay0_153': {
          const v1392 = v1049[1];
          
          break;
          }
        case 'InsureCompany_approveRequest0_153': {
          const v1732 = v1049[1];
          
          break;
          }
        case 'InsureCompany_declineRequest0_153': {
          const v2072 = v1049[1];
          sim_r.txns.push({
            kind: 'api',
            who: "InsureCompany_declineRequest"
            });
          ;
          const v2120 = v870[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
          const v2121 = v2120[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
          const v2125 = v2120[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '1')];
          const v2126 = v2120[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '2')];
          const v2127 = [v2121, v2125, v2126];
          const v2128 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0'), v2127);
          ;
          const v2373 = v2072[stdlib.checkedBigNumberify('./index.rsh:275:9:spread', stdlib.UInt_max, '0')];
          const v2374 = stdlib.lt(v2373, stdlib.checkedBigNumberify('./index.rsh:286:30:dot', stdlib.UInt_max, '3'));
          if (v2374) {
            const v2376 = v857[v2373];
            await stdlib.simMapSet(sim_r, 2, v2376, stdlib.checkedBigNumberify('./index.rsh:288:35:decimal', stdlib.UInt_max, '0'));
            await stdlib.simMapSet(sim_r, 0, v2376, stdlib.checkedBigNumberify('./index.rsh:289:36:decimal', stdlib.UInt_max, '0'));
            await stdlib.simMapSet(sim_r, 1, v2376, stdlib.checkedBigNumberify('./index.rsh:290:37:decimal', stdlib.UInt_max, '0'));
            await stdlib.simMapSet(sim_r, 3, v2376, stdlib.checkedBigNumberify('./index.rsh:291:47:decimal', stdlib.UInt_max, '0'));
            await stdlib.simMapSet(sim_r, 4, v2376, false);
            const v2378 = stdlib.Array_set(v857, v2373, v807);
            const v2379 = true;
            const v2380 = await txn1.getOutput('InsureCompany_declineRequest', 'v2379', ctc3, v2379);
            
            const v2386 = stdlib.sub(v858, stdlib.checkedBigNumberify('./index.rsh:301:29:decimal', stdlib.UInt_max, '1'));
            const v6627 = v2378;
            const v6628 = v2386;
            const v6629 = v860;
            const v6630 = v861;
            const v6631 = v862;
            const v6633 = v1051;
            const v6634 = v2128;
            const v6635 = v871;
            if (v811) {
              const v6636 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
              const v6637 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
              sim_r.isHalt = false;
              }
            else {
              const v6638 = v2128[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
              const v6639 = v6638[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                amt: v6639,
                kind: 'from',
                to: v807,
                tok: v809
                });
              sim_r.txns.push({
                amt: v871,
                kind: 'from',
                to: v807,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v809
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v2396 = false;
            const v2397 = await txn1.getOutput('InsureCompany_declineRequest', 'v2396', ctc3, v2396);
            
            const v6640 = v857;
            const v6641 = v858;
            const v6642 = v860;
            const v6643 = v861;
            const v6644 = v862;
            const v6646 = v1051;
            const v6647 = v2128;
            const v6648 = v871;
            if (v811) {
              const v6649 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
              const v6650 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
              sim_r.isHalt = false;
              }
            else {
              const v6651 = v2128[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
              const v6652 = v6651[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                amt: v6652,
                kind: 'from',
                to: v807,
                tok: v809
                });
              sim_r.txns.push({
                amt: v871,
                kind: 'from',
                to: v807,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v809
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc3, ctc8, ctc1, ctc9, ctc9, ctc1, ctc1, ctc11, ctc1, ctc1, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1049], secs: v1051, time: v1050, didSend: v451, from: v1048 } = txn1;
  switch (v1049[0]) {
    case 'Customer_claim0_153': {
      const v1052 = v1049[1];
      return;
      break;
      }
    case 'Customer_pay0_153': {
      const v1392 = v1049[1];
      return;
      break;
      }
    case 'InsureCompany_approveRequest0_153': {
      const v1732 = v1049[1];
      return;
      break;
      }
    case 'InsureCompany_declineRequest0_153': {
      const v2072 = v1049[1];
      undefined /* setApiDetails */;
      ;
      const v2120 = v870[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
      const v2121 = v2120[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0')];
      const v2125 = v2120[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '1')];
      const v2126 = v2120[stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '2')];
      const v2127 = [v2121, v2125, v2126];
      const v2128 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:86:21:dot', stdlib.UInt_max, '0'), v2127);
      ;
      const v2373 = v2072[stdlib.checkedBigNumberify('./index.rsh:275:9:spread', stdlib.UInt_max, '0')];
      const v2374 = stdlib.lt(v2373, stdlib.checkedBigNumberify('./index.rsh:286:30:dot', stdlib.UInt_max, '3'));
      if (v2374) {
        const v2376 = v857[v2373];
        await stdlib.mapSet(map2, v2376, stdlib.checkedBigNumberify('./index.rsh:288:35:decimal', stdlib.UInt_max, '0'));
        await stdlib.mapSet(map0, v2376, stdlib.checkedBigNumberify('./index.rsh:289:36:decimal', stdlib.UInt_max, '0'));
        await stdlib.mapSet(map1, v2376, stdlib.checkedBigNumberify('./index.rsh:290:37:decimal', stdlib.UInt_max, '0'));
        await stdlib.mapSet(map3, v2376, stdlib.checkedBigNumberify('./index.rsh:291:47:decimal', stdlib.UInt_max, '0'));
        await stdlib.mapSet(map4, v2376, false);
        const v2378 = stdlib.Array_set(v857, v2373, v807);
        const v2379 = true;
        const v2380 = await txn1.getOutput('InsureCompany_declineRequest', 'v2379', ctc3, v2379);
        if (v451) {
          stdlib.protect(ctc0, await interact.out(v2072, v2380), {
            at: './index.rsh:276:7:application',
            fs: ['at ./index.rsh:276:7:application call to [unknown function] (defined at: ./index.rsh:276:7:function exp)', 'at ./index.rsh:294:12:application call to "k" (defined at: ./index.rsh:285:18:function exp)', 'at ./index.rsh:285:18:application call to [unknown function] (defined at: ./index.rsh:285:18:function exp)'],
            msg: 'out',
            who: 'InsureCompany_declineRequest'
            });
          }
        else {
          }
        
        const v2386 = stdlib.sub(v858, stdlib.checkedBigNumberify('./index.rsh:301:29:decimal', stdlib.UInt_max, '1'));
        const v6627 = v2378;
        const v6628 = v2386;
        const v6629 = v860;
        const v6630 = v861;
        const v6631 = v862;
        const v6633 = v1051;
        const v6634 = v2128;
        const v6635 = v871;
        if (v811) {
          const v6636 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
          const v6637 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
          return;
          }
        else {
          const v6638 = v2128[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
          const v6639 = v6638[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      else {
        const v2396 = false;
        const v2397 = await txn1.getOutput('InsureCompany_declineRequest', 'v2396', ctc3, v2396);
        if (v451) {
          stdlib.protect(ctc0, await interact.out(v2072, v2397), {
            at: './index.rsh:276:7:application',
            fs: ['at ./index.rsh:276:7:application call to [unknown function] (defined at: ./index.rsh:276:7:function exp)', 'at ./index.rsh:305:12:application call to "k" (defined at: ./index.rsh:285:18:function exp)', 'at ./index.rsh:285:18:application call to [unknown function] (defined at: ./index.rsh:285:18:function exp)'],
            msg: 'out',
            who: 'InsureCompany_declineRequest'
            });
          }
        else {
          }
        
        const v6640 = v857;
        const v6641 = v858;
        const v6642 = v860;
        const v6643 = v861;
        const v6644 = v862;
        const v6646 = v1051;
        const v6647 = v2128;
        const v6648 = v871;
        if (v811) {
          const v6649 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '1')];
          const v6650 = v861[stdlib.checkedBigNumberify('./index.rsh:98:22:application', stdlib.UInt_max, '2')];
          return;
          }
        else {
          const v6651 = v2128[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
          const v6652 = v6651[stdlib.checkedBigNumberify('./index.rsh:319:21:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    }
  
  
  };
export async function Customer_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Customer_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Customer_claim4(ctcTop, interact);}
  };
export async function Customer_pay(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Customer_pay expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer_pay expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Customer_pay4(ctcTop, interact);}
  };
export async function InsureCompany_approveRequest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for InsureCompany_approveRequest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for InsureCompany_approveRequest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _InsureCompany_approveRequest4(ctcTop, interact);}
  };
export async function InsureCompany_declineRequest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for InsureCompany_declineRequest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for InsureCompany_declineRequest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _InsureCompany_declineRequest4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Customer_claim(uint64)uint64`, `Customer_pay(uint64,uint64,uint64)(uint64,uint64,uint64)`, `InsureCompany_approveRequest(uint64,uint64)byte`, `InsureCompany_declineRequest(uint64)byte`],
    pure: [`View_claimers()address[3]`, `View_claimersCount()uint64`, `View_correspondingPrice()uint64[3]`, `View_durations()uint64[3]`, `View_lastClaimResult(address)byte`, `View_userCost(address)uint64`, `View_userCurrCost(address)uint64`, `View_userCurrPeriod(address)uint64`, `View_userCurrRequestedProceed(address)uint64`, `View_userCurrStart(address)uint64`],
    sigs: [`Customer_claim(uint64)uint64`, `Customer_pay(uint64,uint64,uint64)(uint64,uint64,uint64)`, `InsureCompany_approveRequest(uint64,uint64)byte`, `InsureCompany_declineRequest(uint64)byte`, `View_claimers()address[3]`, `View_claimersCount()uint64`, `View_correspondingPrice()uint64[3]`, `View_durations()uint64[3]`, `View_lastClaimResult(address)byte`, `View_userCost(address)uint64`, `View_userCurrCost(address)uint64`, `View_userCurrPeriod(address)uint64`, `View_userCurrRequestedProceed(address)uint64`, `View_userCurrStart(address)uint64`]
    },
  appApproval: `BiAaAAEEIAMIEGA6p+GZnAm8le73C8STjvEOmoX78Q7lpLjFDND399EKsuvqyguXvu6QA6DjsLEIsaWGggm4ke63BdfGuqcBrICK/wICORGgjQYmBQEAAQEJAQAAAAAAAAAAAAgAAAAAAAAEViI1ADEYQQvDK2RJIls1ASEFWzUCMRkjEkEACjEAKCEIr2ZCC482GgAXSUEB+yI1BCM1BkkhCQxAAPFJIQoMQACMSSELDEAAQkkhDAxAABghDBJENhoBNhoCUDYaA1A1/yk0/1BCAd8hCxJENAEkEkQiNhoBiAtdVyYJSTX/I1s0/yJVTRY1B0ILOUkhDQxAACMhDRJENAEkEkQiNhoBiAszVwkJSTX/I1s0/yJVTRY1B0ILDyEKEkQ0ASQSRChkKWRQSTUDV5EYNQdCCvZJIQ4MQAA+SSEPDEAAFCEPEkQ2GgE1/yg0/1AhBq9QQgFXIQ4SRDQBJBJEIjYaAYgK1VcACUk1/yNbNP8iVU0WNQdCCrEhCRJENAEkEkQoZClkUEk1A1eJCDUHQgqYSSEQDEAAkEkhEQxAAEBJIRIMQAAjIRISRDQBJBJEIjYaAYgKhFcbCUk1/yNbNP8iVU0WNQdCCmAhERJENhoBNf+AAQM0/1AhBq9QQgDNSSETDEAAGiETEkQ2GgE2GgJQNf+AAQI0/1AhBa9QQgCsIRASRDQBJBJEIjYaAYgKKlckAkk1/1cBARc0/yJVTRZRBwg1B0IKAUkhFAxAADlJIRUMQAAZIRUSRDQBJBJEKGQpZFBJNQNXqRg1B0IJ2iEUEkQ0ASQSRChkKWRQSTUDVylgNQdCCcGBzeindBJENAEkEkQiNhoBiAm/VxIJSTX/I1s0/yJVTRY1B0IJmzYaAhc1BDYaAzYaARdJIwxAB+pJIQQMQAc3IQQSRCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKSklXACA1/yVbNf5XKAEXNf1XKWA1/IGJAVs1+1eRGDX6V6kYNfmBwQFbNfiByQFbNfdX0RE19oHiAVs19YHqAVs19IHyAVs180k1BTXygASdPEWjNPJQsDTyIlVJIRYMQANKSSEEDEABGyEEEkQ08lcBCDXxNPZXABFJNfBXAAg08FcICFA08FcQAVA17zTxF0k17iEEDEEAwTT8JTTuCyVYNe007Sg07YgIxSo17ElXABI07FBMVxsfUGY07Sg07YgIrSo17FcJMTTsTFBmNO0oNO2ICJoqNexJVwAJNOxQTFcSKFBmNO0oNO2ICIIqNexJVwAbNOxQTFckFlBmNO0oNO2ICGqAAgEANexJVwAkNOxQTFcmFFBmgAkAAAAAAAAJSwGwKTUHNP80/jT9NPwiJTTuC1I0/1A0/CVJNO4LCCEHUlA0+yMJNPo0+TT4MgYyBzTvNPVCBwqACQAAAAAAAAlcALAoNQc0/zT+NP00/DT7NPo0+TT4MgYyBzTvNPVCBuBINPJXARA18TT2VwARSTXwVwAINPBXCAhQNPBXEAFQNe808SJbNe408SEFWzXtNO4hBAxBAcg0/CU07gslWDXsIjTsiAemVxsJSTXqI1s06iJVTTXrIzTsiAeRVxIJSTXpI1s06SJVTTXqNOs09Aw07SEWNOoLDhA06zT0DSI07IgHaVcJCUk16SNbNOkiVU008wwQNO0hBDTqCw4QETTrNPMPNO0kNOoLDhARQQElNOwoNOyIBzUqNelJVwASNOlQTFcbH1BmNOwoNOyIBx0qNelXCTE06UxQZjTsKDTsiAcKKjXpSVcACTTpUExXEihQZjTsKDTsiAbyKjXpSVcAGzTpUExXJBZQZjTsKDTsiAbagAIBATXpSVcAJDTpUExXJhRQZjTsKDTsiAa/KSI07IgGuFcvCUk16SNbNOkiVU007QgWUDXpSVcALzTpUExXOAJQZjTsKDTsiAaPIiEXTFZmNO9XABE16bEisgE07bISJLIQNOyyFDT+shGzgAkAAAAAAAAHvAGwKTUHNP80/jT9NPwiJTTuC1I0/1A0/CVJNO4LCCEHUlA0+yMJNPo0+TT4NO0JMgYyBzTpIls07QkWNOlXCAhQNOlXEAFQNPVCBQyACQAAAAAAAAfOALAoNQc0/zT+NP00/DT7NPo0+TT4MgYyBzTvNPVCBOKACQAAAAAAAAffALAoNQc0/zT+NP00/DT7NPo0+TT4MgYyBzTvNPVCBLhJIwxAAeRINPJXARg18TTxIQVbNfA09lcAEUk17yJbNPAIFjTvVwgIUDTvVxABUDXuNPA0/ogFszTxIQZbNe0xAIgFgFc4AUk16yJVQAAGIjXsQgAGIzXsQgAANOxBAL4xACgxAIgFXCk09xZQNetXCTE060xQZjEAKDEAiAVFKTTtFlA160lXAAk061BMVxIoUGYxACgxAIgFKSk08BZQNetJVwASNOtQTFcbH1BmMQAoMQCIBQ0pIjEAiAUGVyYJSTXrI1s06yJVTTTwCBZQNetJVwAmNOtQTFcvC1BmgAgAAAAAAAAGHTTwFjTtFlA09xZQULA08BY07RZQNPcWUDUHNP80/jT9NPw0+zT6NPk0+DIGMgc07jT1QgOaMQAoMQCIBJ4jgThMVmYxACgxAIgEkCk09xZQNetXCTE060xQZjEAKDEAiAR5KTTtFlA160lXAAk061BMVxIoUGYxACgxAIgEXSk08BZQNetJVwASNOtQTFcbH1BmMQAoMQCIBEEpIjEAiAQ6VyYJSTXrI1s06yJVTTTwCBZQNetJVwAmNOtQTFcvC1BmgAgAAAAAAAAGDDTwFjTtFlA09xZQULA08BY07RZQNPcWUDUHNP80/jT9NPw0+zT6NPk0+DIGMgc07jT1QgLOSDTyVwEINfE09lcAEUk18FcACDTwVwgIUDTwVxABUDXvNPEXNe4xAIgDr1c5AUk17CJVQAAGIjXtQgAGIzXtQgAANO1BAJU0+yEEDEEAWjEAKDEAiAODKTTuFlA17ElXABs07FBMVyQWUGYnBDTuFlCwNO4WNQc0/zT+NP00/CIlNPsLUjEAUDT8JUk0+wsIIQdSUDT7Iwg0+jT5NPgyBjIHNO809UICJYAQAAAAAAAABJgAAAAAAAAAALAhBa81BzT/NP40/TT8NPs0+jT5NPgyBjIHNO809UIB8jEAKDEAiAL2IyEXTFZmNPshBAxBAFoxACgxAIgC4Ck07hZQNexJVwAbNOxQTFckFlBmJwQ07hZQsDTuFjUHNP80/jT9NPwiJTT7C1IxAFA0/CVJNPsLCCEHUlA0+yMINPo0+TT4MgYyBzTvNPVCAYKAEAAAAAAAAARzAAAAAAAAAACwIQWvNQc0/zT+NP00/DT7NPo0+TT4MgYyBzTvNPVCAU8jEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JVs1/oEoWzX9VzERNfyABJqLkXSwNPxXABE1+zT9NP6IAkA0/zEAEkQ0/zT+NANXMAEXNP9JUDT/UCKAGAAAAAAAAAAFAAAAAAAAAA8AAAAAAAAAFIAYAAAAAAAAALQAAAAAAAABaAAAAAAAAALQNP0yBjIHNPsiWzT9CBY0+1cICFA0+1cQAVAiQgCjSCI0ARJENARJIhJMNAISEURJNQVJSlcAETX/IRhbNf6BGVs1/VchARc1/IAEKZ/cyjT/UDT+FlA0/RZQNPwWUQcIULAhGYgBdSEYr0k1+1cAETX6IQWvNPpXCAhQNPpXEAFQNfkhGYgBVLEisgEishIkshAyCrIUNP6yEbMxADT+FlA0/RZQNPwWUQcIUDT5UChLAVcAQmdIIzUBMgY1AkIAzzX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DT2QQBTNPohBVs18zT6IQZbNfI09DT1FlApUDT3UDT4FlA0+VA0+lA0+xZQNP0WUDT+UDT/FlA08xZQNPIWUChLAVcAf2cpSwFXf3tnSCQ1ATIGNQJCAF+xIrIBNP5XABEiW7ISJLIQNPSyFDT1shGzsSKyATT/sggjshA09LIHs7EisgEishIkshAyCbIVMgqyFDT1shGzQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKzQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8NJMRhhQAAFSCEIr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 58,
  stateKeys: 2,
  stateSize: 250,
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
                    "internalType": "uint256",
                    "name": "claimsBalance",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "acceptedToken",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "contractIsRunning",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T9",
                "name": "v808",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v809",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v810",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v811",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
                    "internalType": "uint256",
                    "name": "claimsBalance",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "acceptedToken",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "contractIsRunning",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T9",
                "name": "v808",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v809",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v810",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v811",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
        "internalType": "struct T16",
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
                "components": [
                  {
                    "internalType": "enum _enum_T20",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_Customer_claim0_153",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
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
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Customer_pay0_153",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T19",
                    "name": "_InsureCompany_approveRequest0_153",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_InsureCompany_declineRequest0_153",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T20",
                "name": "v1049",
                "type": "tuple"
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
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v1110",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v1139",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v1176",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "cost",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "insurPeriod",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "start",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1548",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "cost",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "insurPeriod",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "start",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1565",
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
    "name": "_reach_oe_v1980",
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
    "name": "_reach_oe_v1998",
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
    "name": "_reach_oe_v2015",
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
    "name": "_reach_oe_v2379",
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
    "name": "_reach_oe_v2396",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Customer_claim",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
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
      }
    ],
    "name": "Customer_pay",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "cost",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "insurPeriod",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "start",
            "type": "uint256"
          }
        ],
        "internalType": "struct T21",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "InsureCompany_approveRequest",
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
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "InsureCompany_declineRequest",
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
    "name": "View_claimers",
    "outputs": [
      {
        "internalType": "address payable[3]",
        "name": "",
        "type": "address[3]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "View_claimersCount",
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
    "name": "View_correspondingPrice",
    "outputs": [
      {
        "internalType": "uint256[3]",
        "name": "",
        "type": "uint256[3]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "View_durations",
    "outputs": [
      {
        "internalType": "uint256[3]",
        "name": "",
        "type": "uint256[3]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v6657",
        "type": "address"
      }
    ],
    "name": "View_lastClaimResult",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v6659",
        "type": "address"
      }
    ],
    "name": "View_userCost",
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
        "internalType": "address payable",
        "name": "v6661",
        "type": "address"
      }
    ],
    "name": "View_userCurrCost",
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
        "internalType": "address payable",
        "name": "v6663",
        "type": "address"
      }
    ],
    "name": "View_userCurrPeriod",
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
        "internalType": "address payable",
        "name": "v6665",
        "type": "address"
      }
    ],
    "name": "View_userCurrRequestedProceed",
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
        "internalType": "address payable",
        "name": "v6667",
        "type": "address"
      }
    ],
    "name": "View_userCurrStart",
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap3Ref",
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap4Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
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
        "internalType": "struct T1",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap5Ref",
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap6Ref",
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap7Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
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
        "internalType": "struct T2",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap8Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
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
        "internalType": "struct T2",
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
        "internalType": "struct T16",
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
                "components": [
                  {
                    "internalType": "enum _enum_T20",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_Customer_claim0_153",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
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
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Customer_pay0_153",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T19",
                    "name": "_InsureCompany_approveRequest0_153",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_InsureCompany_declineRequest0_153",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T20",
                "name": "v1049",
                "type": "tuple"
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
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162005559380380620055598339810160408190526200002691620004d7565b60008055436003556200003862000271565b604080513381528351602080830191909152808501518051805184860152808301516001600160a01b0390811660608087019190915291860151151560808601529282015190921660a08401528084015160c08401520151151560e082015290517f9b80e76c65bd117123fdd30bed68ca144af6decd2896136072da236fce6e3373918190036101000190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001229290620001c4565b6060820152620001353415601162000247565b6200013f620002d8565b338152602080840180518201516001600160a01b0316828401528051604090810151818501529051606090810151151581850152840151608084015260016000819055439055516200019491839101620005b7565b60405160208183030381529060405260029080519060200190620001ba9291906200031d565b50505050620006a0565b620001ce620003ac565b60005b60018110156200022457848160018110620001f057620001f0620005a1565b60200201518282600181106200020a576200020a620005a1565b6020020152806200021b8162000639565b915050620001d1565b50818184600181106200023b576200023b620005a1565b60200201529392505050565b816200026d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c0830191909152815260208101620002a4620003ac565b81526040805160608101825260008082526020828101829052928201529101908152602001620002d3620003ac565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600015158152602001620002d3620003ac565b8280546200032b9062000663565b90600052602060002090601f0160209004810192826200034f57600085556200039a565b82601f106200036a57805160ff19168380011785556200039a565b828001600101855582156200039a579182015b828111156200039a5782518255916020019190600101906200037d565b50620003a8929150620003f9565b5090565b60405180602001604052806001905b620003e2604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003bb5790505090565b5b80821115620003a85760008155600101620003fa565b604080519081016001600160401b03811182821017156200044157634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200044157634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b03811182821017156200044157634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620004c157600080fd5b919050565b80518015158114620004c157600080fd5b600081830360e0811215620004eb57600080fd5b620004f562000410565b83518152601f198201915060c08212156200050f57600080fd5b6200051962000447565b60608312156200052857600080fd5b6200053262000478565b9250602085015183526200054960408601620004a9565b60208401526200055c60608601620004c6565b60408401528281526200057260808601620004a9565b602082015260a085015160408201526200058f60c08601620004c6565b60608201526020820152949350505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b039081168252602080840151909116818301526040808401518184015260608085015115158185015260808086015160e08601949291860160005b60018110156200062d5782518051835285810151868401528601511515868301529184019190830190600101620005fb565b50505050505092915050565b60006000198214156200065c57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200067857607f821691505b602082108114156200069a57634e487b7160e01b600052602260045260246000fd5b50919050565b614ea980620006b06000396000f3fe6080604052600436106101a35760003560e01c806381b4c7cd116100e0578063cadc2e7a11610084578063d9dcd84d11610061578063d9dcd84d1461049b578063dc01fb9d146104bb578063e36675b6146104db578063f2be7695146104ee57005b8063cadc2e7a1461043b578063d0238e4f1461045b578063d84b12781461047b57005b8063a4263391116100bd578063a4263391146103d0578063a5312ad6146103e3578063ab53f2c6146103f8578063acf0cc221461041b57005b806381b4c7cd1461038857806383230757146103a85780639cc11ca4146103bd57005b80634d3bd68a116101475780636480a19d116101245780636480a19d146103065780636e0304b4146103265780636ea8636114610346578063817d57f31461036857005b80634d3bd68a146102a3578063576f95eb146102c357806358ecf9aa146102e357005b80632080ea1c116101805780632080ea1c146102235780632c10a159146102435780633bc5b7bf146102565780633c9febe81461027657005b806306dc92ff146101ac57806307933051146101e25780631e93b0f11461020457005b366101aa57005b005b3480156101b857600080fd5b506101cc6101c736600461446e565b610503565b6040516101d991906144b1565b60405180910390f35b3480156101ee57600080fd5b506101f761051a565b6040516101d991906144e1565b34801561021057600080fd5b506003545b6040519081526020016101d9565b34801561022f57600080fd5b506101cc61023e36600461446e565b6106a1565b6101aa610251366004614512565b6106b2565b34801561026257600080fd5b506101cc61027136600461446e565b6106d6565b34801561028257600080fd5b5061029661029136600461446e565b6106e7565b6040516101d9919061452a565b3480156102af57600080fd5b506102156102be36600461446e565b6106f8565b3480156102cf57600080fd5b506102156102de36600461446e565b6108b1565b6102f66102f136600461455c565b610a59565b60405190151581526020016101d9565b34801561031257600080fd5b5061021561032136600461446e565b610ab8565b34801561033257600080fd5b5061021561034136600461446e565b610c60565b34801561035257600080fd5b5061035b610e08565b6040516101d991906145aa565b34801561037457600080fd5b506101cc61038336600461446e565b610f8c565b61039b6103963660046145b8565b610f9d565b6040516101d991906145e4565b3480156103b457600080fd5b50600154610215565b6102156103cb366004614605565b611025565b6101aa6103de36600461461e565b611079565b3480156103ef57600080fd5b50610215611099565b34801561040457600080fd5b5061040d611217565b6040516101d992919061465d565b34801561042757600080fd5b5061029661043636600461446e565b6112b4565b34801561044757600080fd5b506101cc61045636600461446e565b6112c5565b34801561046757600080fd5b506102f661047636600461446e565b6112d6565b34801561048757600080fd5b5061021561049636600461446e565b61147e565b3480156104a757600080fd5b506102966104b636600461446e565b611626565b3480156104c757600080fd5b506101cc6104d636600461446e565b611637565b6102f66104e9366004614605565b611648565b3480156104fa57600080fd5b506101f76116a0565b61050b613eca565b61051482611824565b92915050565b610522613eed565b600160005414156105dd5760006002805461053c90614697565b80601f016020809104026020016040519081016040528092919081815260200182805461056890614697565b80156105b55780601f1061058a576101008083540402835291602001916105b5565b820191906000526020600020905b81548152906001019060200180831161059857829003601f168201915b50505050508060200190518101906105cd9190614845565b90506105db600060096118e1565b505b60046000541415610692576000600280546105f790614697565b80601f016020809104026020016040519081016040528092919081815260200182805461062390614697565b80156106705780601f1061064557610100808354040283529160200191610670565b820191906000526020600020905b81548152906001019060200180831161065357829003601f168201915b50505050508060200190518101906106889190614953565b60a0015192915050565b61069e600060096118e1565b90565b6106a9613eca565b61051482611907565b6106ba613f0b565b6106d26106cc36849003840184614a31565b8261197f565b5050565b6106de613eca565b61051482611c3c565b6106ef613f41565b61051482611cb4565b6000600160005414156107b55760006002805461071490614697565b80601f016020809104026020016040519081016040528092919081815260200182805461074090614697565b801561078d5780601f106107625761010080835404028352916020019161078d565b820191906000526020600020905b81548152906001019060200180831161077057829003601f168201915b50505050508060200190518101906107a59190614845565b90506107b3600060106118e1565b505b600460005414156108a0576000600280546107cf90614697565b80601f01602080910402602001604051908101604052809291908181526020018280546107fb90614697565b80156108485780601f1061081d57610100808354040283529160200191610848565b820191906000526020600020905b81548152906001019060200180831161082b57829003601f168201915b50505050508060200190518101906108609190614953565b9050600161086d84611c3c565b51600181111561087f5761087f61448b565b1461088b576000610899565b61089483611c3c565b604001515b9392505050565b6108ac600060106118e1565b919050565b60006001600054141561096e576000600280546108cd90614697565b80601f01602080910402602001604051908101604052809291908181526020018280546108f990614697565b80156109465780601f1061091b57610100808354040283529160200191610946565b820191906000526020600020905b81548152906001019060200180831161092957829003601f168201915b505050505080602001905181019061095e9190614845565b905061096c6000600e6118e1565b505b60046000541415610a4d5760006002805461098890614697565b80601f01602080910402602001604051908101604052809291908181526020018280546109b490614697565b8015610a015780601f106109d657610100808354040283529160200191610a01565b820191906000526020600020905b8154815290600101906020018083116109e457829003601f168201915b5050505050806020019051810190610a199190614953565b90506001610a2684611d68565b516001811115610a3857610a3861448b565b14610a44576000610899565b61089483611d68565b6108ac6000600e6118e1565b6000610a63613f0b565b610a6b613f54565b610a73613f73565b60408051808201825287815260208082018890526060840191909152600283528151808201909252828252830152610aab8284611de0565b5050604001519392505050565b600060016000541415610b7557600060028054610ad490614697565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0090614697565b8015610b4d5780601f10610b2257610100808354040283529160200191610b4d565b820191906000526020600020905b815481529060010190602001808311610b3057829003601f168201915b5050505050806020019051810190610b659190614845565b9050610b736000600c6118e1565b505b60046000541415610c5457600060028054610b8f90614697565b80601f0160208091040260200160405190810160405280929190818152602001828054610bbb90614697565b8015610c085780601f10610bdd57610100808354040283529160200191610c08565b820191906000526020600020905b815481529060010190602001808311610beb57829003601f168201915b5050505050806020019051810190610c209190614953565b90506001610c2d8461385a565b516001811115610c3f57610c3f61448b565b14610c4b576000610899565b6108948361385a565b6108ac6000600c6118e1565b600060016000541415610d1d57600060028054610c7c90614697565b80601f0160208091040260200160405190810160405280929190818152602001828054610ca890614697565b8015610cf55780601f10610cca57610100808354040283529160200191610cf5565b820191906000526020600020905b815481529060010190602001808311610cd857829003601f168201915b5050505050806020019051810190610d0d9190614845565b9050610d1b6000600d6118e1565b505b60046000541415610dfc57600060028054610d3790614697565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6390614697565b8015610db05780601f10610d8557610100808354040283529160200191610db0565b820191906000526020600020905b815481529060010190602001808311610d9357829003601f168201915b5050505050806020019051810190610dc89190614953565b90506001610dd5846138d2565b516001811115610de757610de761448b565b14610df3576000610899565b610894836138d2565b6108ac6000600d6118e1565b610e10613eed565b60016000541415610ecb57600060028054610e2a90614697565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5690614697565b8015610ea35780601f10610e7857610100808354040283529160200191610ea3565b820191906000526020600020905b815481529060010190602001808311610e8657829003601f168201915b5050505050806020019051810190610ebb9190614845565b9050610ec9600060076118e1565b505b60046000541415610f8057600060028054610ee590614697565b80601f0160208091040260200160405190810160405280929190818152602001828054610f1190614697565b8015610f5e5780601f10610f3357610100808354040283529160200191610f5e565b820191906000526020600020905b815481529060010190602001808311610f4157829003601f168201915b5050505050806020019051810190610f769190614953565b6060015192915050565b61069e600060076118e1565b610f94613eca565b610514826138d2565b610fc160405180606001604052806000815260200160008152602001600081525090565b610fc9613f0b565b610fd1613f54565b610fd9613f73565b604080516060810182528881526020808201899052818301889052838301919091526001835281518082019092528282528301526110178284611de0565b505060200151949350505050565b600061102f613f0b565b611037613f54565b61103f613f73565b6040805160208082018352878252838101919091526000835281518082019092528282528301526110708284611de0565b50505192915050565b611081613f0b565b6106d261109336849003840184614af9565b82611de0565b600060016000541415611156576000600280546110b590614697565b80601f01602080910402602001604051908101604052809291908181526020018280546110e190614697565b801561112e5780601f106111035761010080835404028352916020019161112e565b820191906000526020600020905b81548152906001019060200180831161111157829003601f168201915b50505050508060200190518101906111469190614845565b9050611154600060086118e1565b505b6004600054141561120b5760006002805461117090614697565b80601f016020809104026020016040519081016040528092919081815260200182805461119c90614697565b80156111e95780601f106111be576101008083540402835291602001916111e9565b820191906000526020600020905b8154815290600101906020018083116111cc57829003601f168201915b50505050508060200190518101906112019190614953565b6080015192915050565b61069e600060086118e1565b60006060600054600280805461122c90614697565b80601f016020809104026020016040519081016040528092919081815260200182805461125890614697565b80156112a55780601f1061127a576101008083540402835291602001916112a5565b820191906000526020600020905b81548152906001019060200180831161128857829003601f168201915b50505050509050915091509091565b6112bc613f41565b6105148261394a565b6112cd613eca565b61051482611d68565b600060016000541415611393576000600280546112f290614697565b80601f016020809104026020016040519081016040528092919081815260200182805461131e90614697565b801561136b5780601f106113405761010080835404028352916020019161136b565b820191906000526020600020905b81548152906001019060200180831161134e57829003601f168201915b50505050508060200190518101906113839190614845565b90506113916000600b6118e1565b505b60046000541415611472576000600280546113ad90614697565b80601f01602080910402602001604051908101604052809291908181526020018280546113d990614697565b80156114265780601f106113fb57610100808354040283529160200191611426565b820191906000526020600020905b81548152906001019060200180831161140957829003601f168201915b505050505080602001905181019061143e9190614953565b9050600161144b8461394a565b51600181111561145d5761145d61448b565b14611469576000610899565b6108948361394a565b6108ac6000600b6118e1565b60006001600054141561153b5760006002805461149a90614697565b80601f01602080910402602001604051908101604052809291908181526020018280546114c690614697565b80156115135780601f106114e857610100808354040283529160200191611513565b820191906000526020600020905b8154815290600101906020018083116114f657829003601f168201915b505050505080602001905181019061152b9190614845565b90506115396000600f6118e1565b505b6004600054141561161a5760006002805461155590614697565b80601f016020809104026020016040519081016040528092919081815260200182805461158190614697565b80156115ce5780601f106115a3576101008083540402835291602001916115ce565b820191906000526020600020905b8154815290600101906020018083116115b157829003601f168201915b50505050508060200190518101906115e69190614953565b905060016115f384611824565b5160018111156116055761160561448b565b14611611576000610899565b61089483611824565b6108ac6000600f6118e1565b61162e613f41565b610514826139c2565b61163f613eca565b6105148261385a565b6000611652613f0b565b61165a613f54565b611662613f73565b604080516020808201835287825260808401919091526003835281518082019092528282528301526116948284611de0565b50506060015192915050565b6116a8613eed565b60016000541415611763576000600280546116c290614697565b80601f01602080910402602001604051908101604052809291908181526020018280546116ee90614697565b801561173b5780601f106117105761010080835404028352916020019161173b565b820191906000526020600020905b81548152906001019060200180831161171e57829003601f168201915b50505050508060200190518101906117539190614845565b90506117616000600a6118e1565b505b600460005414156118185760006002805461177d90614697565b80601f01602080910402602001604051908101604052809291908181526020018280546117a990614697565b80156117f65780601f106117cb576101008083540402835291602001916117f6565b820191906000526020600020905b8154815290600101906020018083116117d957829003601f168201915b505050505080602001905181019061180e9190614953565b60c0015192915050565b61069e6000600a6118e1565b61182c613eca565b60016001600160a01b03831660009081526007602052604090205460ff16600181111561185b5761185b61448b565b14156118d2576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff16600181111561189c5761189c61448b565b60018111156118ad576118ad61448b565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b816106d25760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b61190f613eca565b60016001600160a01b0383166000908152600a602052604090205460ff16600181111561193e5761193e61448b565b14156118d2576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff16600181111561189c5761189c61448b565b61198f60016000541460156118e1565b81516119aa9015806119a357508251600154145b60166118e1565b6000808055600280546119bc90614697565b80601f01602080910402602001604051908101604052809291908181526020018280546119e890614697565b8015611a355780601f10611a0a57610100808354040283529160200191611a35565b820191906000526020600020905b815481529060010190602001808311611a1857829003601f168201915b5050505050806020019051810190611a4d9190614845565b9050611a57614002565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a1611aaa341560126118e1565b604082015160808301515151611ac09190614bff565b8151526080820180515160209081015183518201529051516040908101518351901515908201529083015190830151611b0691611aff91339190613a3a565b60136118e1565b8151611b1e906001600160a01b0316331460146118e1565b8151602082810180516001600160a01b03938416905284518151908416908301528451905192166040928301528183018051600590528051600f908301525160149083015260608301805160b490528051610168920191909152516102d0910152611b8761404d565b825181516001600160a01b039182169052602080850151835192169181019190915260608085015183519015156040918201528483015183850180519190915280516000940184905285820151815183015285830151815190930192909252850151815160809081019190915281514360a09091015290514260c0909101528401518351611c159290613a50565b60208201805160e0019190915251600061010090910152611c3581613ac4565b5050505050565b611c44613eca565b60016001600160a01b03831660009081526004602052604090205460ff166001811115611c7357611c7361448b565b14156118d2576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561189c5761189c61448b565b611cbc613f41565b60016001600160a01b0383166000908152600c602052604090205460ff166001811115611ceb57611ceb61448b565b14156118d2576001600160a01b0382166000908152600c6020526040908190208151606081019092528054829060ff166001811115611d2c57611d2c61448b565b6001811115611d3d57611d3d61448b565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b611d70613eca565b60016001600160a01b03831660009081526005602052604090205460ff166001811115611d9f57611d9f61448b565b14156118d2576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561189c5761189c61448b565b611df0600460005414601f6118e1565b8151611e0b901580611e0457508251600154145b60206118e1565b600080805560028054611e1d90614697565b80601f0160208091040260200160405190810160405280929190818152602001828054611e4990614697565b8015611e965780601f10611e6b57610100808354040283529160200191611e96565b820191906000526020600020905b815481529060010190602001808311611e7957829003601f168201915b5050505050806020019051810190611eae9190614953565b9050611eb861407d565b7fdce6ecfe35de4f65cf1abd25226fbb98f67d30d93d0b2f37fbd0e309079bf1813385604051611ee9929190614c17565b60405180910390a16000602085015151516003811115611f0b57611f0b61448b565b14156122a3576020808501515101518152611f28341560176118e1565b6101208201805151516020838101805192909252825151810151825190910152815151604090810151825190151591015290519051611f6a9190600090613a50565b8160400181905250611f8c611f853384602001516000613a3a565b60186118e1565b6000611f9733611cb4565b516001811115611fa957611fa961448b565b1415611fbb5760006060820152611fe6565b6001611fc633611cb4565b516001811115611fd857611fd861448b565b1415611fe657600160608201525b8060600151156122295760038260800151101561213e5733600090815260076020526040902080546001919060ff191682805b0217905550805151336000908152600760209081526040918290206001019290925582515190519081527f5c5f09a22bf33be6045cc4ba48e387d8cf7b451bae6c80ca22c01619ea937cac910160405180910390a1805151835261207b61404d565b825181516001600160a01b039182169052602080850151835192169101526040808401518251901515910152606083015160808401516120bc919033613c40565b60208201515260808301516120d390600190614bff565b602080830180519091019190915260a080850151825160409081019190915260c08087015184516060015260e0808801518551608001528451439401939093528351429101528401518251909101526101408401519051610100015261213881613ac4565b50613854565b604051600081527f84df382283d569f1db64aba53d4e2604c835c7aa0da6f28ea90fe6cc64ee92a9906020015b60405180910390a16000835261217f61404d565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519015159082015260608086015183850180519190915260808088015182519095019490945260a080880151825185015260c08089015183519094019390935260e080890151835190960195909552815143910152805142920191909152908401518151909201919091526101408401519051610100015261213881613ac4565b336000908152600c60205260409020805462ff00ff191660011790556080820151600311156122725733600090815260076020526040902080546001919060ff19168280612019565b604051600081527fea09cc838d8530a9ed4008ba54385c9a8b3c64ba50dd9e6b023e5b0c716c34fd9060200161216b565b60016020850151515160038111156122bd576122bd61448b565b141561271a576020840151516040015160808201526122de341560196118e1565b60808101516020015161012083015151516122f99190614bff565b60a08201805191909152610120830180515160209081015183519091015280515160409081015183519015159101525190516123389190600090613a50565b8160c0018190525061236161235a338460200151846080015160200151613a3a565b601a6118e1565b600061236c336139c2565b51600181111561237e5761237e61448b565b141561239057600060e08201526123bb565b600161239b336139c2565b5160018111156123ad576123ad61448b565b14156123bb57600160e08201525b8060e00151156125bd573360008181526004602090815260408083208054600160ff19918216811783556101008901519281019290925560058452828520805482168317815560808801805185015191840191909155600685528386208054831684178155815186015190840155600985529290942080549094168117909355510151916124489061385a565b51600181111561245a5761245a61448b565b14612466576000612474565b61246f3361385a565b604001515b61247e9190614bff565b3360009081526009602090815260409182902060010192909255608083018051830151610120850180519190915290518201518151909301929092526101008401518251820152905190517f7244edf4cbf7aa5b65eb2e40b53a47d696d98acfd46afb66c18425f37df34849916124f4916145e4565b60405180910390a1610120810151602084015261250f61404d565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519015159082015260608086015183850180519190915260808088015182519095019490945260a08088015182519094019390935260c08088015182519093019290925260e080880151825190950194909452805143930192909252815142908201528401518151909201919091526101408401519051610100015261213881613ac4565b336000818152600b60209081526040808320805462ff00ff1916600190811790915560048352818420805460ff19908116831782556101008901519183019190915560058452828520805482168317815560808801805185015191840191909155600685528386208054831684178155815186015190840155600985529290942080549094168117909355510151916126559061385a565b5160018111156126675761266761448b565b14612673576000612681565b61267c3361385a565b604001515b61268b9190614bff565b336000908152600960209081526040918290206001019290925560808301805183015161010080860180519290925291518301518151909401939093528401518251820152905190517f8e2b521836f6d8ffe4373cb924d58241a080058d620287420066067bebf29f26916126ff916145e4565b60405180910390a1610100810151602084015261250f61404d565b60026020850151515160038111156127345761273461448b565b141561320857602084015151606001516101408201526127563415601b6118e1565b610120820180515151610160830180519190915281515160209081015182519091015281515160409081015182519015159101529051905161279b9190600090613a50565b8161018001819052506127be6127b73384602001516000613a3a565b601c6118e1565b61014081015151600311156131d75760016127fb836060015183610140015160000151600381106127f1576127f1614bd3565b6020020151611824565b51600181111561280d5761280d61448b565b14612819576000612840565b61283b826060015182610140015160000151600381106127f1576127f1614bd3565b604001515b6101a082015260016128748360600151836101400151600001516003811061286a5761286a614bd3565b60200201516138d2565b5160018111156128865761288661448b565b146128925760016128b9565b6128b48260600151826101400151600001516003811061286a5761286a614bd3565b604001515b6101c08201526101608201516101a0820151106128d75760006128f5565b6101c08101516128e8906002614caf565b8161014001516020015111155b6129b957816101600151816101a001511161291157600061298c565b61018082015160016129458460600151846101400151600001516003811061293b5761293b614bd3565b6020020151611d68565b5160018111156129575761295761448b565b1461296357600061298a565b6129858360600151836101400151600001516003811061293b5761293b614bd3565b604001515b105b6129975760006129bc565b6101c08101516129a8906003614caf565b8161014001516020015111156129bc565b60015b6129fb57816101800151816101a0015110156129d95760006129fe565b6101c08101516129ea906004614caf565b8161014001516020015111156129fe565b60015b156130e35760016006600084606001518461014001516000015160038110612a2857612a28614bd3565b602090810291909101516001600160a01b03168252810191909152604001600020805460ff191660018381811115612a6257612a6261448b565b021790555060006006600084606001518461014001516000015160038110612a8c57612a8c614bd3565b60200201516001600160a01b03166001600160a01b031681526020019081526020016000206001018190555060016004600084606001518461014001516000015160038110612add57612add614bd3565b602090810291909101516001600160a01b03168252810191909152604001600020805460ff191660018381811115612b1757612b1761448b565b021790555060006004600084606001518461014001516000015160038110612b4157612b41614bd3565b60200201516001600160a01b03166001600160a01b031681526020019081526020016000206001018190555060016005600084606001518461014001516000015160038110612b9257612b92614bd3565b602090810291909101516001600160a01b03168252810191909152604001600020805460ff191660018381811115612bcc57612bcc61448b565b021790555060006005600084606001518461014001516000015160038110612bf657612bf6614bd3565b60200201516001600160a01b03166001600160a01b031681526020019081526020016000206001018190555060016007600084606001518461014001516000015160038110612c4757612c47614bd3565b602090810291909101516001600160a01b03168252810191909152604001600020805460ff191660018381811115612c8157612c8161448b565b021790555060006007600084606001518461014001516000015160038110612cab57612cab614bd3565b60200201516001600160a01b03166001600160a01b031681526020019081526020016000206001018190555060016008600084606001518461014001516000015160038110612cfc57612cfc614bd3565b602090810291909101516001600160a01b03168252810191909152604001600020805460ff191660018381811115612d3657612d3661448b565b021790555060016008600084606001518461014001516000015160038110612d6057612d60614bd3565b60200201516001600160a01b03166001600160a01b0316815260200190815260200160002060000160026101000a81548160ff0219169083151502179055506001600a600084606001518461014001516000015160038110612dc457612dc4614bd3565b602090810291909101516001600160a01b03168252810191909152604001600020805460ff191660018381811115612dfe57612dfe61448b565b0217905550610140810151602001516001612e3b84606001518461014001516000015160038110612e3157612e31614bd3565b6020020151611907565b516001811115612e4d57612e4d61448b565b14612e59576000612e80565b612e7b83606001518361014001516000015160038110612e3157612e31614bd3565b604001515b612e8a9190614bff565b600a600084606001518461014001516000015160038110612ead57612ead614bd3565b60200201516001600160a01b03166001600160a01b0316815260200190815260200160002060010181905550600c600083606001518361014001516000015160038110612efc57612efc614bd3565b602090810291909101516001600160a01b0316825281810192909252604001600020805462ffffff1916905561014082015101516101808201515151612f429190614cce565b6101e08201805191909152610180820180515160209081015183518201529051516040908101519251921515920191909152820151606083015161014083015151612fad92919060038110612f9957612f99614bd3565b602002015183610140015160200151613cd0565b604051600181527f583316db35bdde8000259b0b8565c3ea708c072ab7688032e09e9d43b47fb29b9060200160405180910390a160016040840152612ff061404d565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519015159101526060830151610140830151518451613035929190613c40565b602082015152608083015161304c90600190614cce565b6020808301805182019290925260a085015182516040015260c0850151915160600191909152610140830151015160e08401516130899190614cce565b6020820180516080019190915280514360a090910152514260c0909101526101808201516101e08301516130c09190600090613a50565b60208201805160e001919091526101408401519051610100015261213881613ac4565b604051600081527f20ec102b7c418d0408a13249762106274d3cc69cb7a2bd43853dc702d973886d906020015b60405180910390a16000604084015261312761404d565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519015159082015260608086015183850180519190915260808088015182519095019490945260a08088015182519094019390935260c08088015182519093019290925260e0808801518251909501949094528051439301929092528151429101526101808401518151909201919091526101408401519051610100015261213881613ac4565b604051600081527f752976cdf00cf7b106e1febff0f608b9eed5a208cbd6097619e601fb515e401790602001613110565b60036020850151515160038111156132225761322261448b565b141561385457602084015151608001516102008201526132443415601d6118e1565b61012082018051515161022083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516132899190600090613a50565b8161024001819052506132ac6132a53384602001516000613a3a565b601e6118e1565b610200810151516003111561376157600160066000846060015184610200015160000151600381106132e0576132e0614bd3565b602090810291909101516001600160a01b03168252810191909152604001600020805460ff19166001838181111561331a5761331a61448b565b02179055506000600660008460600151846102000151600001516003811061334457613344614bd3565b60200201516001600160a01b03166001600160a01b03168152602001908152602001600020600101819055506001600460008460600151846102000151600001516003811061339557613395614bd3565b602090810291909101516001600160a01b03168252810191909152604001600020805460ff1916600183818111156133cf576133cf61448b565b0217905550600060046000846060015184610200015160000151600381106133f9576133f9614bd3565b60200201516001600160a01b03166001600160a01b03168152602001908152602001600020600101819055506001600560008460600151846102000151600001516003811061344a5761344a614bd3565b602090810291909101516001600160a01b03168252810191909152604001600020805460ff1916600183818111156134845761348461448b565b0217905550600060056000846060015184610200015160000151600381106134ae576134ae614bd3565b60200201516001600160a01b03166001600160a01b0316815260200190815260200160002060010181905550600160076000846060015184610200015160000151600381106134ff576134ff614bd3565b602090810291909101516001600160a01b03168252810191909152604001600020805460ff1916600183818111156135395761353961448b565b02179055506000600760008460600151846102000151600001516003811061356357613563614bd3565b60200201516001600160a01b03166001600160a01b0316815260200190815260200160002060010181905550600160086000846060015184610200015160000151600381106135b4576135b4614bd3565b602090810291909101516001600160a01b03168252810191909152604001600020805460ff1916600183818111156135ee576135ee61448b565b02179055506000600860008460600151846102000151600001516003811061361857613618614bd3565b60200201516001600160a01b03166001600160a01b0316815260200190815260200160002060000160026101000a81548160ff0219169083151502179055507f221da7b5e23fac4e4800c33436f51739d49e638329f67a57d9fccb64496101b8600160405161368b911515815260200190565b60405180910390a1600160608401526136a261404d565b825181516001600160a01b03918216905260208085015183519216910152604080840151825190151591015260608301516102008301515184516136e7929190613c40565b60208201515260808301516136fe90600190614cce565b602080830180519091019190915260a08085015182516040015260c08086015183516060015260e0808701518451608001528351439301929092528251429101526102408401518251909101526101408401519051610100015261213881613ac4565b604051600081527fd0b81b5716420174715b5e27dc6e7eb0364675c989ac8e4e56d34f2c8973b1c49060200160405180910390a1600060608401526137a461404d565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519015159082015260608086015183850180519190915260808088015182519095019490945260a08088015182519094019390935260c08088015182519093019290925260e0808801518251909501949094528051439301929092528151429101526102408401518151909201919091526101408401519051610100015261213881613ac4565b50505050565b613862613eca565b60016001600160a01b03831660009081526009602052604090205460ff1660018111156138915761389161448b565b14156118d2576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff16600181111561189c5761189c61448b565b6138da613eca565b60016001600160a01b03831660009081526006602052604090205460ff1660018111156139095761390961448b565b14156118d2576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561189c5761189c61448b565b613952613f41565b60016001600160a01b03831660009081526008602052604090205460ff1660018111156139815761398161448b565b14156118d2576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff166001811115611d2c57611d2c61448b565b6139ca613f41565b60016001600160a01b0383166000908152600b602052604090205460ff1660018111156139f9576139f961448b565b14156118d2576001600160a01b0382166000908152600b6020526040908190208151606081019092528054829060ff166001811115611d2c57611d2c61448b565b6000613a4883853085613ce4565b949350505050565b613a58614243565b60005b6001811015613aa457848160018110613a7657613a76614bd3565b6020020151828260018110613a8d57613a8d614bd3565b602002015280613a9c81614ce5565b915050613a5b565b5081818460018110613ab857613ab8614bd3565b60200201529392505050565b80516040015115613bc457613ad761428e565b8151516001600160a01b039081168252825160209081015190911681830152600160408084018290528285018051516060808701919091528151850151608080880191909152825184015160a0880152825182015160c08089019190915283519091015160e080890191909152835190910151610100808901919091528351909101516101208801528251015161014087015281518101518501516101608701529051015181015161018085015260046000554390915551613b9b91839101614d61565b60405160208183030381529060405260029080519060200190613bbf92919061430f565b505050565b805160208082015191519083015160e001515151613be3929190613cd0565b805151602082015161010001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613c26573d6000803e3d6000fd5b5060008080556001819055613c3d90600290614393565b50565b613c48613eed565b60005b6003811015613ca257848160038110613c6657613c66614bd3565b6020020151828260038110613c7d57613c7d614bd3565b6001600160a01b03909216602092909202015280613c9a81614ce5565b915050613c4b565b5081818460038110613cb657613cb6614bd3565b6001600160a01b0390921660209290920201529392505050565b613cdb838383613dbe565b613bbf57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391613d4b91614e3a565b60006040518083038185875af1925050503d8060008114613d88576040519150601f19603f3d011682016040523d82523d6000602084013e613d8d565b606091505b5091509150613d9e82826001613e8f565b5080806020019051810190613db39190614e56565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391613e1d91614e3a565b60006040518083038185875af1925050503d8060008114613e5a576040519150601f19603f3d011682016040523d82523d6000602084013e613e5f565b606091505b5091509150613e7082826002613e8f565b5080806020019051810190613e859190614e56565b9695505050505050565b60608315613e9e575081610899565b825115613eae5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016118fe565b60408051606081019091528060005b815260006020820181905260409091015290565b60405180606001604052806003906020820280368337509192915050565b604051806080016040528060008152602001613ed960405180606001604052806000815260200160008152602001600081525090565b6040805160608101909152806000613ed9565b604051806040016040528060008152602001613f6e6143cd565b905290565b6040805160a081019091528060008152602001613f9c6040518060200160405280600081525090565b8152602001613fc560405180606001604052806000815260200160008152602001600081525090565b8152602001613fe7604051806040016040528060008152602001600081525090565b8152602001613f6e6040518060200160405280600081525090565b6040805160e0810190915260006080820181815260a0830182905260c0830191909152815260208101614033613eed565b8152602001614040613eed565b8152602001613f6e613eed565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101613f6e6143e0565b60408051610280810182526000610260820181815282528251606081018452818152602080820183905281850192909252908201529081016140bd614243565b81526020016000151581526020016140ef60405180606001604052806000815260200160008152602001600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200161411c614243565b815260200160001515815260200161414e60405180606001604052806000815260200160008152602001600081525090565b815260200161417760405180606001604052806000815260200160008152602001600081525090565b8152602001614199604051806040016040528060008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016141c6614243565b815260200160008152602001600081526020016141ff604051806060016040528060008152602001600081526020016000151581525090565b815260200161421a6040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613f6e5b60405180602001604052806001905b614278604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816142525790505090565b604080516101a08101825260008082526020820181905291810191909152606081016142b8613eed565b8152602001600081526020016142cc613eed565b81526020016142d9613eed565b815260200160008152602001600081526020016142f4614243565b81526020016000815260200160008152602001600081525090565b82805461431b90614697565b90600052602060002090601f01602090048101928261433d5760008555614383565b82601f1061435657805160ff1916838001178555614383565b82800160010185558215614383579182015b82811115614383578251825591602001919060010190614368565b5061438f929150614444565b5090565b50805461439f90614697565b6000825580601f106143af575050565b601f016020900490600052602060002090810190613c3d9190614444565b6040518060200160405280613f6e613f73565b6040518061012001604052806143f4613eed565b815260200160008152602001614408613eed565b8152602001614415613eed565b8152602001600081526020016000815260200160008152602001614437614243565b8152602001600081525090565b5b8082111561438f5760008155600101614445565b6001600160a01b0381168114613c3d57600080fd5b60006020828403121561448057600080fd5b813561089981614459565b634e487b7160e01b600052602160045260246000fd5b60028110613c3d57613c3d61448b565b815160608201906144c1816144a1565b808352506020830151151560208301526040830151604083015292915050565b60608101818360005b60038110156145095781518352602092830192909101906001016144ea565b50505092915050565b60006040828403121561452457600080fd5b50919050565b8151606082019061453a816144a1565b8083525060208301511515602083015260408301511515604083015292915050565b6000806040838503121561456f57600080fd5b50508035926020909101359150565b8060005b60038110156138545781516001600160a01b0316845260209384019390910190600101614582565b60608101610514828461457e565b6000806000606084860312156145cd57600080fd5b505081359360208301359350604090920135919050565b81518152602080830151908201526040808301519082015260608101610514565b60006020828403121561461757600080fd5b5035919050565b6000610120828403121561452457600080fd5b60005b8381101561464c578181015183820152602001614634565b838111156138545750506000910152565b8281526040602082015260008251806040840152614682816060850160208701614631565b601f01601f1916919091016060019392505050565b600181811c908216806146ab57607f821691505b6020821081141561452457634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715614705576147056146cc565b60405290565b60405160a0810167ffffffffffffffff81118282101715614705576147056146cc565b6040516101a0810167ffffffffffffffff81118282101715614705576147056146cc565b6040805190810167ffffffffffffffff81118282101715614705576147056146cc565b6040516020810167ffffffffffffffff81118282101715614705576147056146cc565b80516108ac81614459565b8015158114613c3d57600080fd5b80516108ac816147a3565b600082601f8301126147cd57600080fd5b6147d5614775565b806060808501868111156147e857600080fd5b855b81811015614839578281890312156148025760008081fd5b61480a6146e2565b8151815260208083015181830152604080840151614827816147a3565b908301529086529094019382016147ea565b50919695505050505050565b600060e0828403121561485757600080fd5b61485f61470b565b825161486a81614459565b8152602083015161487a81614459565b6020820152604083810151908201526060830151614897816147a3565b60608201526148a984608085016147bc565b60808201529392505050565b600082601f8301126148c657600080fd5b6148ce6146e2565b8060608401858111156148e057600080fd5b845b818110156149035780516148f581614459565b8452602093840193016148e2565b509095945050505050565b600082601f83011261491f57600080fd5b6149276146e2565b80606084018581111561493957600080fd5b845b8181101561490357805184526020938401930161493b565b60006102a0828403121561496657600080fd5b61496e61472e565b61497783614798565b815261498560208401614798565b6020820152614996604084016147b1565b60408201526149a884606085016148b5565b606082015260c083015160808201526149c48460e0850161490e565b60a08201526101406149d88582860161490e565b60c08301526101a084015160e08301526101c0840151610100830152614a02856101e086016147bc565b610120830152610240840151908201526102608301516101608201526102809092015161018083015250919050565b600060408284031215614a4357600080fd5b6040516040810181811067ffffffffffffffff82111715614a6657614a666146cc565b604052823581526020830135614a7b816147a3565b60208201529392505050565b600060208284031215614a9957600080fd5b6040516020810181811067ffffffffffffffff82111715614abc57614abc6146cc565b6040529135825250919050565b600060408284031215614adb57600080fd5b614ae3614752565b9050813581526020820135602082015292915050565b6000818303610120811215614b0d57600080fd5b614b15614752565b8335815261010080601f1984011215614b2d57600080fd5b614b35614775565b614b3d61470b565b602087013560048110614b4f57600080fd5b8152614b5e8860408901614a87565b60208201526060605f1986011215614b7557600080fd5b614b7d6146e2565b9450606087013585526080870135602086015260a08701356040860152846040820152614bad8860c08901614ac9565b6060820152614bbe88848901614a87565b60808201528152602083015250949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115614c1257614c12614be9565b500190565b6001600160a01b038316815281516020808301919091528201515180516101408301919060048110614c4b57614c4b61448b565b8060408501525060208101515160608401526040810151614c8360808501828051825260208082015190830152604090810151910152565b506060810151805160e08501526020015161010084015260800151516101209092019190915292915050565b6000816000190483118215151615614cc957614cc9614be9565b500290565b600082821015614ce057614ce0614be9565b500390565b6000600019821415614cf957614cf9614be9565b5060010190565b8060005b6003811015613854578151845260209384019390910190600101614d04565b8060005b6001811015613854578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101614d27565b81516001600160a01b031681526102a081016020830151614d8d60208401826001600160a01b03169052565b506040830151614da1604084018215159052565b506060830151614db4606084018261457e565b50608083015160c083015260a0830151614dd160e0840182614d00565b5060c0830151610140614de681850183614d00565b60e08501516101a08501526101008501516101c08501526101208501519150614e136101e0850183614d23565b84015161024084015250610160830151610260830152610180909201516102809091015290565b60008251614e4c818460208701614631565b9190910192915050565b600060208284031215614e6857600080fd5b8151610899816147a356fea26469706673582212201be74c88505a50f71f37e19eb48a26003dd3ff4ae53f200d3165ad1dfd72bec264736f6c634300080c0033`,
  BytecodeLen: 21849,
  Which: `oD`,
  version: 7,
  views: {
    View: {
      claimers: `View_claimers`,
      claimersCount: `View_claimersCount`,
      correspondingPrice: `View_correspondingPrice`,
      durations: `View_durations`,
      lastClaimResult: `View_lastClaimResult`,
      userCost: `View_userCost`,
      userCurrCost: `View_userCurrCost`,
      userCurrPeriod: `View_userCurrPeriod`,
      userCurrRequestedProceed: `View_userCurrRequestedProceed`,
      userCurrStart: `View_userCurrStart`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:48:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:321:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:86:21:after expr stmt semicolon',
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
  "Customer_claim": Customer_claim,
  "Customer_pay": Customer_pay,
  "Deployer": Deployer,
  "InsureCompany_approveRequest": InsureCompany_approveRequest,
  "InsureCompany_declineRequest": InsureCompany_declineRequest
  };
export const _APIs = {
  Customer: {
    claim: Customer_claim,
    pay: Customer_pay
    },
  InsureCompany: {
    approveRequest: InsureCompany_approveRequest,
    declineRequest: InsureCompany_declineRequest
    }
  };
