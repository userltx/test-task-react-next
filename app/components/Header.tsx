'use client'
import {useState} from 'react'
import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import { useAuth } from '../context/AuthContext';
import Modal from './Modal';


export const Header = () => {
    const {user, logout} = useAuth();
    const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <header className='max-customsm:py-[20px] max-headerlg:px-[20px] max-customsm:px-[10px] w-full pt-[19px] pb-[18px] border-b-[1px] border-[#000000]'>
        <Modal isActive={isActive} setIsActive={(arg: boolean) => setIsActive(arg)}/>
        <div className="max-w-[1300px] my-[0] mx-auto flex justify-between items-center ">
            <Link href="/">
            <Image
                className="ml-[2px] max-customsm:ml-[0px]"
                src="/logo.svg"
                alt="logo"
                width={54}
                height={23}
            />
            </Link>
        <nav className="flex justify-center place-items-center">
            <Link 
                className="text-secondText
                tracking-[0.2px]
                leading-[24px]
                font-semibold 
                text-[15px] 
                mr-[59px]
                font-open_sans 
                max-custommd:mr-[40px]
                max-sm:mr-[10px]
                "
                href="/contacts">
                Контакты
            </Link>
            <Button
                onClick={() => {
                    if(user) {
                        logout()
                    }else {
                        setIsActive(true)
                    }
                }}
                isLongBtn={true}
                typeBtn="emptyBg">
                {user ? 'Выйти' : 'Войти'}
            </Button>
        </nav>
        </div>
    </header>
  )
}
