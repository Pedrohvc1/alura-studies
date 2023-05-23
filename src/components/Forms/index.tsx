import React, { useState } from "react";
import Botao from "../Button";
import style from "./forms.module.scss";
import { ITarefa } from "../../types/tasks";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Forms({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function addTask(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    //para criar ID aleatório, precisa instalar o uuid
    setTarefas((oldTasks) => [
      ...oldTasks,
      { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() },
    ]);
    //resetar o nome e tempo após escolhe-los
    setTarefa("");
    setTempo("00:00");
  }
  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicionar Atividade</label>
        <input
          type="text"
          name="tarefa"
          value={tarefa}
          onChange={(evt) => setTarefa(evt.target.value)}
          id="tarefa"
          placeholder="adicione as atividades aqui"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(evt) => setTempo(evt.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
        <Botao type="submit">Adicionar</Botao>
      </div>
    </form>
  );
}
export default Forms;
