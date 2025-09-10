import { useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"
import { Button } from "./Button"

const Profile = () => {
    const {logout, user} = useAuth()
    const router = useRouter();
  return (
    <section className="pt-[143px]">
        <h1 className="mb-[24px]">Привет, {user}</h1> 
        <div className="flex space-x-[11px] mb-[96px] max-customlg:mb-[66px] max-customsm:mb-[30px]">
        <Button onClick={() => logout()} typeBtn="fillBg">Выйти из аккаунта</Button>
        <Button onClick={() => router.push('/contacts')} typeBtn="emptyBg">Перейти в контакты</Button>
      </div>
    </section>
  )
}

export default Profile