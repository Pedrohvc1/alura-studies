import style from './watch.module.scss';

interface Props {
  tempo: number | undefined
}
export default function Watch({tempo = 0}: Props) {
  const minutos = Math.floor(tempo/60);
  const segundos = tempo % 60;
  //foi necessário criar no arquivo tsconfig.json - "downlevelIteration": true,
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');//padStart funcao de string permite que tenhamos uma cadeia de caracteres padrao e se n estiver, ele pega os valores e transforma em caracteres padrao.
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

  return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>      
    </>
  );
}
