import api from '../apiconfig';
import { Auth, User } from './interfaces';
import { AxiosResponse } from 'axios';

export default class AuthService {

    static login (email: string, password: string): Promise<AxiosResponse<Auth>>{
        return api.post<Auth>('/users/login', {
            email_or_document: email, 
            password
        });
    }
    static register () {
        
    }
    
    static forgotPassword(email: string){
        return api.post('recovery-password', {
            email
        });
    }
    
    static recoveryPassword (token: string, password: string){
        return api.post('reset-password', {
            token,
            password
        })
    }
    
    static myProfile () {
        return api.get<User>('/myprofile')
    }

    static getPosts() {
        return api.get('posts/simplified-list')
    }

    static changePassword (oldPassword:string, newPassword:string) {
        return api.post('update_my_profile', {
            password: newPassword,
            old_password: oldPassword
        })
    }
}


