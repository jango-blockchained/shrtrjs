import { ethers } from 'ethers';
import { ENSArgs } from '../index';
export default function ({ contracts, signer }: ENSArgs<'contracts' | 'signer'>, name: string, { newOwner, contract, reclaim, }: {
    newOwner: string;
    contract: 'registry' | 'nameWrapper' | 'baseRegistrar';
    reclaim?: boolean;
}): Promise<ethers.PopulatedTransaction>;
