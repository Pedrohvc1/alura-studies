import Item from "./Item";
import style from "./list.module.scss";
import { ITarefa } from "../../types/tasks";

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void; 
}

function List( { tarefas, selecionaTarefa } : Props) { 
return (
    <aside className={style.listaTarefas}>
      <h2>
        Lista de Atividades
      </h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
