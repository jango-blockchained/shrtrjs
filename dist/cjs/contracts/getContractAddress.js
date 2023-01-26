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
    '1': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '3': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '4': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '5': '0xBA865cD719FC953b755DB9D15387196A69f0C72a', //
    '420': '0x2516E97a3F4a1c299403A4C9331868055Ece5538', //
  },
  DNSRegistrar: {
    '1': '0x58774Bb8acD458A640aF0B88238369A167546ef2',
    '3': '0xdB328BA5FEcb432AF325Ca59E3778441eF5aa14F',
    '5': '0xEFd51Ef79b3347DABa1aC8f9173F50385A6b4766', //
    '420': '0x7611c7D043df780d0cCAc727869eadc4faB7e7D9', //
  },
  ETHRegistrarController: {
    '1': '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5',
    '3': '0xa5627AB7Ae47063B533622C34FEBDb52d3281dF8',
    '4': '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5',
    '5': '0xdD6F05196e72Cd91Eaa8012c470fCffacdC53399', //
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
    '5': '0x8778e9395909Ee044Ef0da1Fe1098e2A482f5FB3', //
    '420': '0x9DA571993bFE70e047B4440E529913A6898ED2D7', //
  },
  PublicResolver: {
    '1': '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
    '3': '0x13F0659Ee6bb7484C884FEeFb7F75C93951ef837',
    '5': '0xb468e63F9Ec5DB4a75eD79C69b3C8c4E01Df82b9', //
    '420': '0x061dFb0DB0Ec6dbB10F078C06268cdA430d491F9', //
  },
  ONSRegistryWithFallback: {
    '1': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '3': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '4': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '5': '0x655dB01C01e015654dC60BC5DbB4e6D2B6a34f58', //
    '420': '0xe6BA00E7D50ADE491c2E7E56B840d30b446B9260', //
  },
  ONSRegistry: {
    '1': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '3': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '4': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '5': '0x655dB01C01e015654dC60BC5DbB4e6D2B6a34f58', //
    '420': '0xe6BA00E7D50ADE491c2E7E56B840d30b446B9260', //
  },
  ReverseRegistrar: {
    '1': '0x084b1c3C81545d370f3634392De611CaaBFf8148',
    '3': '0x806246b52f8cB61655d3038c58D2f63Aa55d4edE',
    '5': '0xD43a92987f87E7BF923033efDC050B5774C03cB9', //
    '420': '0x3CB0d92EB2b5891aC551e938B4e8F74461E3159B', //
  },
  UniversalResolver: {
    '1': '0x580AF46E06DaaD47eb5940526FD64d95b815Cb70',
    '3': '0x74e20bd2a1fe0cdbe45b9a1d89cb7e0a45b36376',
    '4': '0x74e20bd2a1fe0cdbe45b9a1d89cb7e0a45b36376',
    '5': '0x81Ab6833e60eC955480C171703e0726f5F23a1B1', //
    '420': '0xc6b59DAC0f2b14AB77dff98F605f86F8b53Ec591', //
  },
  BulkRenewal: {
    '1': '0xfF252725f6122A92551A5FA9a6b6bf10eb0Be035',
    '3': '0x051b02245D826757EfaF5C6209D4D79FB39FBC45',
    '5': '0xF81B17c8A36c49AA529eb69EF68e20e051416a4d', //
    '420': '0xD9FC8bD52095352D8C06b6556A23c68793DF19cc', //
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
