import { ENSArgs } from '../index';
export default function ({ contracts, signer }: ENSArgs<'contracts' | 'signer'>, name: string, { newController, newRegistrant, }: {
    newController: string;
    newRegistrant?: string;
}): Promise<import("ethers").PopulatedTransaction>;
