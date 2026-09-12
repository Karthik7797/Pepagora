import s from './loading.module.scss';

export default function EditorLoading() {
  return (
    <div className={s.wrapper}>
      <div className={s.canvas} />
      <div className={s.panel} />
    </div>
  );
}
