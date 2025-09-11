import { useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"
import { Button } from "./Button"
import Input from "./Input"
import {useState, useEffect} from 'react'

type ModalProps = {
  isActive: boolean;
  setIsActive: (arg: boolean) => void
}

type UserType = {
  id: number;
  login: string;
  password: string;
  name: string;
}

const Modal: React.FC<ModalProps> = ({isActive, setIsActive}) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [users, setUsers] = useState<UserType[]>([])
  const [error, setError] = useState<string>("")
  const router = useRouter();
  const {loginUser} = useAuth()

  useEffect(() => {
    fetch("/users.json")
      .then(res => res.json())
      .then((data: UserType[]) => setUsers(data))
      .catch(err => console.error("Ошибка загрузки пользователей:", err));
  }, []);


  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const regex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])[\S]+$/;
    if (!regex.test(password)) {
      setError("Пароль должен содержать минимум одну заглавную букву, одну строчную букву, одну цифру и только латиницу.")
      return;
    }
    if (password.length <= 8 || password.length >= 18) {
      setError("Пароль должен содержать от 8 до 18 символов.")
      return;
    }
    setError("")
    const user = users.find(u => {
      return u.login === login && u.password === password 
    })
    if (user) {
      loginUser(user.name)
      router.push('/profile')
      setIsActive(false)
    }
    else {
      setError("Введены неверные данные")
    }
  };

  return (
    <div 
    onClick={() => setIsActive(false) }
    className={`
    ${isActive ? 'block' : 'hidden'}
    max-customsm:pl-[10px] 
    max-customsm:pr-[25px] 
    bg-black/40 
    justify-center 
    flex 
    items-center 
    top-0 
    left-0 
    fixed 
    w-[100vw] 
    h-[100vh]
    `}>
        <form onClick={e => e.stopPropagation()} className="bg-white py-[30px] px-[40px] rounded-[10px] flex flex-wrap justify-start max-w-[450px]">
            <Input onChange={setLogin} value={login} className="w-full" title="Логин" placeholder="Введите логин" type="text"/>
            <Input onChange={setPassword} value={password} className="w-full mb-[30px]" title="Пароль" placeholder="Пароль" type="password"/> 
            {error && <p className='text-danger mb-[30px]'>Ошибка: {error}</p>}
            <Button onClick={(e) => handleSubmit(e)} className="w-full" typeBtn="fillBg">Вход</Button>
        </form>
    </div>
    
  )
}

export default Modal