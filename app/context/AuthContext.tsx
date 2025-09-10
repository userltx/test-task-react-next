"use client";
import { createContext, useState, useContext, useEffect, ReactNode } from "react";

interface AuthContextType {
  user: string | null;
  loginUser: (name: string) => void;
  logout: () => void;
}

interface ContextChildren {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: ContextChildren) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
        setUser(savedUser);
    }
  }, []);

  const loginUser = (name: string) => {
    setUser(name);
    localStorage.setItem("username", name);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth должен использоваться внутри AuthProvider");
  return context;
};
