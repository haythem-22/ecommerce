import React, { createContext, useContext, useState, useEffect, Children} from "react";

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    
    if (!context) {
        throw new Error('useAuth outside AuthProvider')
    }

    return context
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState(null)

    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        const storedUser = localStorage.getItem('user')

    if (storedToken && storedUser) {
        setToken(storedToken)
        setUser(JSON.parse(storedUser))
    }
    setLoading(false)
    }, [])

    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Login failed')
            }

            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify({email: data.email, userId: data.userId}))

            setToken(data.token)
            setUser({email: data.email, userId: data.userId})

            return { success: true }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }

    const signup = async (email, password) => {

        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Signup failed')
            }

            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify({ email: data.email, userId: data.userId}))

            setToken(data.token)
            setUser({ email: data.email, userId: data.userId })

            return { success: true }
        } catch (error) {
            return { success: false, error: error.message }
        }

    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        setToken(null)
        setUser(null)
    }

    const value = {
        user,
        token,
        loading,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
    };

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}