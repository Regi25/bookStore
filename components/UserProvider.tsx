"use client"

import React, { createContext, useState } from "react";

interface User {
  id: number;
  name: string;
  role: string;
}

export interface UserContextType {
  user: User | null;
  isAdmin?: boolean | null;
}

export const UserContext = createContext<UserContextType>({ user: null, isAdmin: false });

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    id: 1,
    name: "John Doe",
    role: "admin",
  });

  return (
    <UserContext.Provider value={{ user, isAdmin: user && user.role === "admin" }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;