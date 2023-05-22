import React from "react";
import Botao from "../Button";
import style from "./forms.module.scss";
import { ITarefa } from "../../types/tasks";
import { v4 as uuidv4 } from "uuid";

//não aceita states como o function components
class Forms extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  addTask(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    //para criar ID aleatório, precisa instalar o uuid
    this.props.setTarefas((oldTasks) => [
      ...oldTasks,
      { ...this.state, 
        selecionado: false, 
        completado: false, 
        id: uuidv4()
      },
    ]);
    //resetar o nome e tempo após escolhe-los
    this.setState({ tarefa: "", tempo: "00:00" });
  }

  //bind associa a função a outro escopo passando o this como paremetro do bind e tbm dentro da funcao
  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(evt) =>
              this.setState({ ...this.state, tarefa: evt.target.value })
            }
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={(evt) =>
              this.setState({ ...this.state, tempo: evt.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
          <Botao>Adicionar</Botao>
        </div>
      </form>
    );
  }
}

export default Forms;
