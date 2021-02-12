export interface Auth {
    code: string;
    message: string;
    data: {
        type: 'bearer';
        token: string;
        refreshToken: string;
        user: User;
    };
}
export interface User{
    id: number;
    secure_id: string;
    email: string;
    alternative_email: string;
    remember_token: string;
    person_type: string | null,
    status: 'active' | string,
    created_at: Date,
    updated_at: Date,
    individualPerson?: {
        id: number;
        secure_id: string;
        full_name: string;
        phone: string | null;
        cpf: string | null,
        rg: string | null,
        alternative_phone: string | null,
        nationality: string | null,
        birthday: string | null
    }
    legalPerson?: any;
    user_type: string[]
}