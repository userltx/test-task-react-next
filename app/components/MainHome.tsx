'use client'

import { useRouter } from "next/navigation";
import { Button } from "../components/Button";
import {useState} from 'react'
import { Cards } from "../components/Cards";
import Modal from "../components/Modal";

export default function MainHome() {
  const [isActive, setIsActive] = useState<boolean>(false)
  const router = useRouter();
  return (
    <div className="font-mont mt-[97px] max-customlg:mt-[67px] max-sm:mt-[57px]">
      <Modal isActive={isActive} setIsActive={(arg: boolean) => setIsActive(arg)}/>
      <h1 
      className=" 
      max-w-[730px]
      mb-[35px]
      max-customsm:mb-[45px]
      "
      >
        Место для получения медицинской помощи
      </h1>
      <div className="flex space-x-[11px] mb-[96px] max-customlg:mb-[66px] max-customsm:mb-[30px]">
        <Button onClick={() => setIsActive(true)} typeBtn="fillBg" >Войти</Button>
        <Button onClick={() => router.push('/contacts')} typeBtn="emptyBg">Контакты</Button>
      </div>
      <Cards />
    </div>
  );
}
 