import { AxiosRequestConfig } from 'axios';
import { stringify } from 'querystring';
import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface DataForLogin{
    email:string,
    pass: string,
    remember: boolean
}

interface ResponseForlogin{
    auth: boolean;
    token?: string;
    user?: User | null;
    message?: string;
}

interface User{
    id: number;
    name: string;
    last_name: string;
    email: string;
    avatar: string | null;
    whatsapp: string | null;
    bio: string | null;
}

interface AuthContextData{
    auth: boolean;
    user: User | null;
    loading: boolean;
    // ainda n sei exatamente a tipagem do retorno de signIn
    signIn(dataForLogin: DataForLogin): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);
    const [auth, setAuth] = useState(false);
    // const [loading, setLoading] = useState(true);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
        // async function loadStoragedData() {
            // AsyncStorage.multiGet seria o mais adequado, pois faz uma chamada só...
            // const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            // const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
            
            // await new Promise(resolve => setTimeout(resolve, 2000));

            // if (storagedUser && storagedToken) {
            //     api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
            //     setUser(JSON.parse(storagedUser));
            // }
            // setLoading(false);
        // }

        // loadStoragedData();
    // }, []);

    async function signIn(dataForLogin: DataForLogin) {
        // const response = await auth.signIn();

        // maybe chage this for a post request... and parse a header for authorizate a json content
        console.log(dataForLogin);
        
        const response: ResponseForlogin = await api.post('/authuser', {
                email: dataForLogin.email,
                pass: dataForLogin.pass,
        });
        
        setUser(response.user || null);
        setAuth(response.auth);

        api.defaults.headers.authorization = response.auth ? `${response.token}` : null;

        // await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        // await AsyncStorage.setItem('@RNAuth:token', response.token);
    }
    function signOut() {
        setUser(null);
        setAuth(false);

        api.defaults.headers.authorization = null;

        // AsyncStorage.clear().then(() => {
        //     setUser(null);
        // })
    }

    return(
        <AuthContext.Provider value={{auth, loading, signIn, signOut, user}} >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

