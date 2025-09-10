'use client'

import MainHome from "./components/MainHome";
import Profile from "./components/Profile";
import { useAuth } from "./context/AuthContext";


export default function Home() {
  const {user} = useAuth()
  return (
    <section>
      {!user && <MainHome/>}
      {user && <Profile />}
    </section>
  );
}
 