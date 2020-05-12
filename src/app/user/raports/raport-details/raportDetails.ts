import { Sector } from 'src/app/admin/sectors/sector';

export class RaportDetails{
    userID: number;
    name: string;
    surname: string;
    sector: Sector;
    amount: number;
    hours: number;
    date: Date;
}