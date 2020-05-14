import { Sector } from '../sectors/sector';
import { WorkersList } from '../workers/workers-list/workers-list';

export class SectorPlan{
    sector: Sector;
    workers: WorkersList[] = [];
}