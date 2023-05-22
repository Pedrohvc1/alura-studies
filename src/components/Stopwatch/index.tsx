import Botao from "../Button";
import Watch from "./watch";
import style from "./Stopwatch.module.scss";

export default function Stopwatch() {
  return (
    <>
      <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
          <Watch />
        </div>
        <Botao>Começar!</Botao>
      </div>
    </>
  );
}
