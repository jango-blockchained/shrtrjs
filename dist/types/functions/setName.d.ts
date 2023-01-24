import { ENSArgs } from '../index';
export default function ({ contracts, signer }: ENSArgs<'contracts' | 'signer'>, name: string, { address, resolver, }?: {
    address?: string;
    resolver?: string;
}): Promise<import("ethers").PopulatedTransaction>;
