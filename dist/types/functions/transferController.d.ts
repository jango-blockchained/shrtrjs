import { ethers } from 'ethers';
import { ENSArgs } from '../index';
export default function ({ contracts, signer }: ENSArgs<'contracts' | 'signer'>, name: string, { newOwner, isOwner, }: {
    newOwner: string;
    isOwner: boolean;
}): Promise<ethers.PopulatedTransaction>;
