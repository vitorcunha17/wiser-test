
const Types = {
    SET_STATE: 'user/SET_STATE',
    LOGIN: 'user/LOGIN',
    FORGET_PASSWORD: 'user/FORGET_PASSWORD',
    RECOVERY_PASSWORD: 'user/RECOVERY_PASSWORD',
    LOAD_CURRENT_ACCOUNT: 'user/LOAD_CURRENT_ACCOUNT',
    LOGOUT: 'user/LOGOUT',
}
  
const Creators = {
    setState(payload: any){
        return {
            type: Types.SET_STATE,
            payload: payload
        }
    },
    login(email: string, password: string){
        return {
            type: Types.LOGIN,
            payload: {
                email, password
            }
        }
    },
    forgotPassword(email: string) {
        return {
            type: Types.FORGET_PASSWORD,
            payload: {
                email
            }
        }
    },
    recoveryPassword(password: string, token: string){
        return {
            type: Types.RECOVERY_PASSWORD,
            payload: {
                password, token
            }
        }
    },  
    logout(){
        return {
            type: Types.LOGOUT
        } 
    }
}

export {
    Types, Creators
}
  
  