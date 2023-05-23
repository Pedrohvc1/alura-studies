import Botao from "../Button";
import Watch from "./watch";
import style from "./Stopwatch.module.scss";
import { ITarefa } from "../../types/tasks";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export default function Stopwatch({selecionado, finalizarTarefa}: Props) {
  const [tempo, setTempo] = useState<number>()

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  },[selecionado])

  function regressiva(contador: number = 0){
    //setTimeout recebe 2 parametros - 1º condicao, 2º em quantos milisegundos
    setTimeout(() => {
      if (contador > 0){
        setTempo(contador - 1)
        return regressiva(contador - 1)
      }
      finalizarTarefa(); //muda a cor quando acabar o tempo
    }, 1000)
  }

  return (
      <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
          <Watch tempo={tempo}/>
        </div>
        <Botao onClick={() => regressiva(tempo)} type="button">Começar!</Botao>
      </div>
  );
}
