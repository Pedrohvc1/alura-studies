import { ITarefa } from '../../../types/tasks';
import style from '../list.module.scss';


export default function item({tarefa, tempo, selecionado, completado, id}: ITarefa) {
  console.log('itens', {tarefa, tempo, selecionado, completado, id})
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
