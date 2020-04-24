import { WorkersList } from '../admin/workers/workers-list/workers-list';

export interface MessageList{
    messageID: number;
    worker: WorkersList;
    date: string;
}