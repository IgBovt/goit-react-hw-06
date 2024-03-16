import css from './SearchBox.module.css';
export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.container}>
      <p className={css.text}>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
