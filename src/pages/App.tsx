import React, { useState } from 'react';
import Forms from '../components/Forms';
import List from '../components/List';
import style from './App.module.scss';
import Stopwatch from '../components/Stopwatch';
import { ITarefa } from '../types/tasks';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);    
  return (
    <div className={style.AppStyle}>
     <Forms setTarefas={setTarefas}/>
     <List tarefas={tarefas}/>
     <Stopwatch />  
    </div>
  );
}

export default App;
