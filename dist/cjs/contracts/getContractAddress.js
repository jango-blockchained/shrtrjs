"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getContractAddress_exports = {};
__export(getContractAddress_exports, {
  getContractAddress: () => getContractAddress
});
module.exports = __toCommonJS(getContractAddress_exports);
const addresses = {
  BaseRegistrarImplementation: {
    '10': '',
    '420': '0xBA865cD719FC953b755DB9D15387196A69f0C72a', //
  },
  DNSRegistrar: {
    '10': '',
    '420': '0x86276b3FF59C0fA97b2ED137a899F31F635B7210', //
  },
  ETHRegistrarController: {
    '10': '',
    '420': '0xdD6F05196e72Cd91Eaa8012c470fCffacdC53399', //
  },
  Multicall: {
    '10': '',
    "420": "0x75601B8Cb52a057A033a584749A43b32Dac5629d",
  },
  NameWrapper: {
    '10': '',
    '420': '0x8778e9395909Ee044Ef0da1Fe1098e2A482f5FB3', //
  },
  PublicResolver: {
    '10': '',
    '420': '0xb468e63F9Ec5DB4a75eD79C69b3C8c4E01Df82b9', //
  },
  ENSRegistryWithFallback: {
    '10': '',
    '420': '0x3Ce1Afc95a0926062408f45498634019d41a0bAd', //
  },
  ENSRegistry: {
    '10': '',
    "420": "0x3Ce1Afc95a0926062408f45498634019d41a0bAd"
  },
  ReverseRegistrar: {
    '10': '',
    '420': '0xD43a92987f87E7BF923033efDC050B5774C03cB9', //
  },
  UniversalResolver: {
    '10': '',
    '420': '0xfE6FcBf4E1f75a136B3dd60CbAE72D2B468F1b81', //
  },
  BulkRenewal: {
    '10': '',
    '420': '0xF81B17c8A36c49AA529eb69EF68e20e051416a4d', //
  }
};
const getContractAddress = (networkId) => (contractName) => {
  try {
    return typeof addresses[contractName] === "string" ? addresses[contractName] : addresses[contractName][networkId];
  } catch {
    throw new Error(
      `No address for contract ${contractName} on network ${networkId}`
    );
  }
};
