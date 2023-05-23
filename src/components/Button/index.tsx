import React from "react";
import style from "./button.module.scss";

interface BotaoProps {
  children?: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Botao({ onClick, type, children }: BotaoProps) {
  return (
    <button 
        onClick={onClick} 
        type={type} 
        className={style.botao}
    >
        {children}
    </button>
  );
}
export default Botao;
