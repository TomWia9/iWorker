import { Sector } from '../../shared/sector';
import { User } from '../../shared/user';

export class SectorPlan{
    sector: Sector;
    workers: User[] = [];
}