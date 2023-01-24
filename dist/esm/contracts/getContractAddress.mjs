// src/contracts/getContractAddress.ts
var addresses = {
  BaseRegistrarImplementation: {
    '10': '',
    '420': '0xF91e659d6BCF37EE577c37369BfeBa8674228191', //
  },
  DNSRegistrar: {
    '10': '',
    '420': '0x5025CF8DEA84030527931AC6B7da34d9780F4E20', //
  },
  ETHRegistrarController: {
    '10': '',
    '420': '0xec5a8F176cef56AE32eaCB6d0466b70F362EaDEE', //
  },
  Multicall: {
    '10': '',
    "420": "0x75601B8Cb52a057A033a584749A43b32Dac5629d",
  },
  NameWrapper: {
    '10': '',
    '420': '0xd13e72EbEafCbc40a070CCE7353FaC8b695C5832', //
  },
  PublicResolver: {
    '10': '',
    '420': '0x15FD7C87fedf2A1A33F971c61c611ED67638177B', //
  },
  ENSRegistryWithFallback: {
    '10': '',
    '420': '0x59081872bf84C08F385A418d09609e2F1161A84C', //
  },
  ENSRegistry: {
    '10': '',
    "420": "0x59081872bf84C08F385A418d09609e2F1161A84C"
  },
  ReverseRegistrar: {
    '10': '',
    '420': '0xbA0Bc5619dDE2B458ea14D68ca243E77a94F8Fb9', //
  },
  UniversalResolver: {
    '10': '',
    '420': '0x45E9e12a03e59A5C34Aac342E2B7e4FE49b753eB', //
  },
  BulkRenewal: {
    '10': '',
    '420': '0xAe38075D87Fd7223ED3440eF6B430939D9C392Fa', //
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
