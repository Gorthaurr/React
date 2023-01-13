export interface IUser {
    id: number;
    email: string;
    password: string;
    isActivated: boolean;
    activationLink: string;

}