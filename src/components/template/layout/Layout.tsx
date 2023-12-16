import React, {  useEffect, useState } from 'react';
import * as Styled from "./layout.styled";
import { useRouter } from "@/hooks/useRouter";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "@/database";
import Loader from "@/components/atom/loader/Loader";

interface GeneralLayoutProps {
  children: React.ReactNode;
  isUser?: boolean;
}

const Layout: React.FC<GeneralLayoutProps> = ({ children, isUser }) => {
  const auth = getAuth(app);
  const [init, setInit] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { routeTo } = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setIsAuthenticated(!!user);
      setInit(true);
    });
    return () => unsubscribe();
  }, [auth]);

  if (!init) return <Loader />;

  if (isUser && !isAuthenticated) {
    routeTo('/login');
    return null;
  }


  return <Styled.SLayout>{children}</Styled.SLayout>;
}
export default Layout