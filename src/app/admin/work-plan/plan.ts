import { WorkersList } from '../workers/workers-list/workers-list';

export class Plan{
    date: Date;
    hours: string;
    A1: WorkersList[] = [];
    B12: WorkersList[] = [];;
    EZ: WorkersList[] = [];;
    ES: WorkersList[] = [];;
    C3: WorkersList[] = [];;
    H12: WorkersList[] = [];;
}