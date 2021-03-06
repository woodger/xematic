export declare type IGroup = 'admin' | 'author' | 'guest';
export interface IUser {
    id?: number;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    passwd: string;
    groups: IGroup[];
    orders?: number[];
    createdAt?: Date;
    modifiedAt?: Date;
}
