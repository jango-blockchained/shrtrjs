// src/contracts/getContractAddress.ts
var addresses = {
  BaseRegistrarImplementation: {
    '1': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '3': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '4': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '5': '0x7bD1d65640e9Ee51b06a8Ee55b2Ea601704F76E5', //
    '420': '0x2516E97a3F4a1c299403A4C9331868055Ece5538', //
  },
  ONSRegistrar: {
    '1': '0x58774Bb8acD458A640aF0B88238369A167546ef2',
    '3': '0xdB328BA5FEcb432AF325Ca59E3778441eF5aa14F',
    '5': '0x07df2c090682fC0B664966C6934363eeAB5bC479', //
    '420': '0x7611c7D043df780d0cCAc727869eadc4faB7e7D9', //
  },
  ETHRegistrarController: {
    '1': '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5',
    '3': '0xa5627AB7Ae47063B533622C34FEBDb52d3281dF8',
    '4': '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5',
    '5': '0xF8A2898061f31Da7110cC8c706530C0fE65598b7', //
    '420': '0x3Cf1C1eF6ea69fF8e55951c03A2161f80447B5E7', //
  },
  Multicall: {
    "1": "",
    "5": "0xcA11bde05977b3631167028862bE2a173976CA11",
    "420": "0x75601B8Cb52a057A033a584749A43b32Dac5629d",
  },
  NameWrapper: {
    '1': '0x0000000000000000000000000000000000000000',
    '3': '0xF82155e2a43Be0871821E9654Fc8Ae894FB8307C',
    '4': '0x0000000000000000000000000000000000000000',
    '5': '0x396bBd3D9Ff5910f1d192b04F79Ae8f4cD593648', //
    '420': '0x9DA571993bFE70e047B4440E529913A6898ED2D7', //
  },
  PublicResolver: {
    '1': '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
    '3': '0x13F0659Ee6bb7484C884FEeFb7F75C93951ef837',
    '5': '0x202f3A567bB1D7c2d08018faA0798615801752c3', //
    '420': '0x061dFb0DB0Ec6dbB10F078C06268cdA430d491F9', //
  },
  ONSRegistryWithFallback: {
    '1': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '3': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '4': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '5': '0x5340A746A6A9990Bc855214c5a90f3a5851B0d7B', //
    '420': '0xe6BA00E7D50ADE491c2E7E56B840d30b446B9260', //
  },
  ONSRegistry: {
    '1': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '3': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '4': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '5': '0x5340A746A6A9990Bc855214c5a90f3a5851B0d7B', //
    '420': '0xe6BA00E7D50ADE491c2E7E56B840d30b446B9260', //
  },
  ReverseRegistrar: {
    '1': '0x084b1c3C81545d370f3634392De611CaaBFf8148',
    '3': '0x806246b52f8cB61655d3038c58D2f63Aa55d4edE',
    '5': '0xeB2c79dCFF3674E35bc45fB4685449D389086291', //
    '420': '0x3CB0d92EB2b5891aC551e938B4e8F74461E3159B', //
  },
  UniversalResolver: {
    '1': '0x580AF46E06DaaD47eb5940526FD64d95b815Cb70',
    '3': '0x74e20bd2a1fe0cdbe45b9a1d89cb7e0a45b36376',
    '4': '0x74e20bd2a1fe0cdbe45b9a1d89cb7e0a45b36376',
    '5': '0x62a87A519dab75e89f0a5c84EA062838aB21015b', //
    '420': '0xc6b59DAC0f2b14AB77dff98F605f86F8b53Ec591', //
  },
  BulkRenewal: {
    '1': '0xfF252725f6122A92551A5FA9a6b6bf10eb0Be035',
    '3': '0x051b02245D826757EfaF5C6209D4D79FB39FBC45',
    '5': '0xB409AE93ebC3936E8770191e3079dB484cA12A4b', //
    '420': '0xD9FC8bD52095352D8C06b6556A23c68793DF19cc', //
  }
};
var getContractAddress = (networkId) => (contractName) => {
  try {
    return typeof addresses[contractName] === "string" ? addresses[contractName] : addresses[contractName][networkId];
  } catch {
    throw new Error(
      `No address for contract ${contractName} on network ${networkId}`
    );
  }
};
export {
  getContractAddress
};
