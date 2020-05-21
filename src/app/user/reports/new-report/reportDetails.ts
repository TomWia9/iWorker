import { Sector } from 'src/app/shared/sector';

export class ReportDetails{
    userID: number;
    name: string;
    surname: string;
    sector: Sector;
    amount: number;
    hours: number;
    date: Date;
}