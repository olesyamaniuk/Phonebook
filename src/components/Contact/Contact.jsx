import phoneIcon from '../../image/phone-old-svgrepo-com.svg';
import phoneBook from '../../image/contact-phonebook-support-svgrepo-com.svg';
import deleteIcon from '../../image/delete-svgrepo-com.svg';
import css from "./Contact.module.css";

export default function Contact({ data, onDelete }) {
    const { id, name, number } = data;
    const handleDelete = () => {
      onDelete(id);
    };
    return (
      <div className={css.wrap}>
        <div className={css.label}>
          <div className={css.info}>
            <div className={css.infoo}>
            <img src={phoneBook} alt="Phone Icon" className={css.icon} />
              <p> Name: {name}</p>
            </div>
            <div className={css.infoo}>
              <img src={phoneIcon} alt="Phone Icon" className={css.icon} />
              <p>Number: {number}</p>
              </div>
          </div>
          <div className={css.button} >
            <img src={deleteIcon} alt="Phone Icon" className={css.btn} />
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
    </div>
    )
  }
