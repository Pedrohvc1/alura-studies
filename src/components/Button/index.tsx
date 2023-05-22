import React, { ReactNode } from "react";
import style from './button.module.scss'

interface BotaoProps {
    children: ReactNode;
  }
class Botao extends React.Component<BotaoProps, {type?: string}>  {
    render() {            
        return (            
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}
export default Botao;