import { ENSArgs } from '../index';
import { RecordInput } from '../utils/recordHelpers';
type BaseInput = {
    resolverAddress?: string;
};
type ContentHashInput = {
    record: RecordInput<'contentHash'>;
    type: 'contentHash';
};
type AddrOrTextInput = {
    record: RecordInput<'addr' | 'text'>;
    type: 'addr' | 'text';
};
export default function ({ contracts, provider, getResolver, signer, }: ENSArgs<'contracts' | 'provider' | 'getResolver' | 'signer'>, name: string, { record, type, resolverAddress, }: BaseInput & (ContentHashInput | AddrOrTextInput)): Promise<{
    to: string;
    data: string;
}>;
export {};
