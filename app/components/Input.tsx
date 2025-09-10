interface InputProps {
    type: string;
    placeholder: string;
    className?: string;
    title?: string;
    value?: string;
    onChange: (value: string) => void
}

const Input: React.FC<InputProps> = ({type, onChange, value, placeholder, className, title}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
    return (
    <div className="w-full">
        {title && <p className="mb-[5px] text-[14px] font-medium">
            Пароль
        </p>}
    <input onChange={handleChange} value={value} className={`${className} border-[1px] mb-[15px] border-mainOrange pl-[20px] py-[10px] rounded-[5px]`} placeholder={placeholder} type={type} required/>
    </div>
   
  )
}

export default Input