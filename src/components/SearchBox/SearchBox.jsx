import css from "./SearchBox.module.css"

export default function SerchBox({ value, onFilter }) {
    return (
        <div className={css.wrap}>
            <p className={css.label}>Find contacts by name</p>
            <input className={css.input} type="text" value={value} onChange={e=>onFilter(e.target.value) }/>
        </div>    
     )
}