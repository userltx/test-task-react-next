type ButtonProps = {
    isLongBtn?: boolean;
    typeBtn: 'fillBg' | 'emptyBg';
    className?: string;
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({className, isLongBtn, typeBtn, children, onClick}) => {
  return (
    <button
        onClick={onClick}
        className={`${isLongBtn ? 'tracking-[0] py-[8px]! px-[58px]! rounded-[7px]! text-[20px]! font-medium! leading-[100%]! border-[2px]! max-customsm:py-[6px]! max-customsm:px-[20px]!' : 'px-[40px] text-[14px] font-bold!'}
        ${typeBtn==='fillBg' ? 'bg-mainOrange py-[15px] text-[#ffffff]' : 'font-bold!  border-[1px] py-[14px] border-mainOrange text-mainOrange'}
        rounded-[5px] leading-[22px] tracking-[0.2px] cursor-pointer
        ${className}
        `}
    >{children}
    </button>
  )
}
