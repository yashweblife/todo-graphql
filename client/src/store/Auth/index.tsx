import { createContext, ReactNode } from "react";

const AuthContext = createContext<any>(null);
export default function AuthProvider({children}:{children:ReactNode}) {
    const output = {}
    return (
        <AuthContext.Provider value={output}>
            {children}
        </AuthContext.Provider>
    )

}