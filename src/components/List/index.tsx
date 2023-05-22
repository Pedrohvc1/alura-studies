import Item from "./Item";
import style from "./list.module.scss";
import { ITarefa } from "../../types/tasks";


function List( {tarefas} : {tarefas: ITarefa[]}) { 
return (
    <aside className={style.listaTarefas}>
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
