import { User } from '../user';

export interface Message{
    messageID: number;
    worker: User;
    date: string;
}