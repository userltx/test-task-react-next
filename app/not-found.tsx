'use client'

import { useRouter } from "next/navigation";
import { Button } from "./components/Button";


const Contacts = () => {
    const router = useRouter();
    return (
      <section className="pt-[143px]">
            <h1 className="mb-[24px]">
              Такой страницы не существует
            </h1>
          <Button
            typeBtn="fillBg"
            onClick={() => router.push('/')}
          >
            Вернуться на главную страницу
          </Button>
      </section>
    )
  }
  
  export default Contacts;