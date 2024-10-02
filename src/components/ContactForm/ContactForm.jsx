import{Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from 'nanoid'
import phoneIcon from '../../image/phone-old-svgrepo-com.svg';
import phoneBook from '../../image/contact-phonebook-support-svgrepo-com.svg';
import addIcon from '../../image/add-svgrepo-com.svg';
import css from "./ContactForm.module.css"

const UserSchema = Yup.object().shape({
  name:Yup.string()
  .min(3,"Min 3 characters!!!")
  .max(50,"Max 50 characters!!!")
  .required("Is required!!!"),
  number:Yup.string()
  .min(3,"Min 3 characters!!!")
  .max(50,"Max 50 characters!!!")
  .required("Is required!!!"),
})

export default function ContactForm({onAdd}) {
  const nameId = nanoid();
  const numberId= nanoid();

  const handleSubmit = (values, actions) => {
    const newContId = {...values, id: nanoid()};
    onAdd(newContId);
    actions.resetForm();
  };
  return (
      <div>
     
      <h1 className={css.text}>Phonebook</h1>
       <div className={css.wrap}>
    <Formik
     initialValues={{
      name:"",
      number:"",
    }} 
    validationSchema={UserSchema}
    onSubmit={handleSubmit}>
      <Form >
       <div>  
          <div className={css.infoo}>
            <img src={phoneBook} alt="Phone Icon" className={css.icon} />
            <label className={css.label} htmlFor="nameId" >Name</label>
          </div>
          <Field className={css.field} name ="name" id={nameId} />
          <ErrorMessage
              name="name"
              component="span"
            />
          </div>
          <div>
            <div className={css.infoo}>
              <img src={phoneIcon} alt="Phone Icon" className={css.icon} />
              <label className={css.label} htmlFor="numberId" >Number</label>
            </div>
          <Field className={css.field} name ="number" id={numberId} />
          <ErrorMessage
              name="number"
              component="span"
            />
          </div>
          <div className={css.button}>
              <img src={addIcon} alt="Phone Icon" className={css.addIcon} />
              <button>Add Contact</button>
          </div>
         </Form>
        </Formik>
      </div>
   </div>
  )
}
