import React from "react";
import Botao from "../Button";
import style from "./forms.module.scss";

//não aceita states como o function components
class Forms extends React.Component {
  state = {
    tarefa: '',
    tempo: '',
  }
  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={evt => this.setState({...this.state, tarefa: evt.target.value})}
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
            onChange={evt => this.setState({...this.state, tempo: evt.target.value})}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
          <Botao>
            Adicionar
          </Botao>
        </div>
      </form>
    );
  }
}

export default Forms;
