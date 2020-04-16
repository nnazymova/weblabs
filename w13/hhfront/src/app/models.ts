export interface Company {
    id: number;
    name: string;
}

export interface Vacancy {
    id: number;
    name: string;
}

export class LoginResponse {
    token: string;
}