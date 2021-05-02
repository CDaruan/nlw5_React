import { createContext, ReactNode, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';
const SECRET = 'craudinho';

type AuthContextData = {
    token: string;
    auth: (login: string, password: string) => void;
}

export const AuthContext = createContext({} as AuthContextData);

type AuthContextProviderProps = {
    children: ReactNode;
}
const users = [{ id: 1, name: "Clauio", password: "123" }, { id: 2, name: "Daruan", password: "321" },]

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [token, setToken] = useState('');

    function auth(login: string, password: string) {
        const user = users.find(u => u.name === login && u.password === password);
        if (user) {
            const token = jwt.sign({ id: user.id }, SECRET);
            setToken(token);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                auth
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)

}