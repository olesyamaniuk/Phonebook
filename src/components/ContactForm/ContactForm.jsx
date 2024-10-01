import{Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from 'nanoid'

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
    <Formik
     initialValues={{
      name:"",
      number:"",
    }} 
    validationSchema={UserSchema}
    onSubmit={handleSubmit}>
    <Form >
      <div >
        <label htmlFor="nameId" >Name</label>
        <Field  name ="name" id={nameId} />
        <ErrorMessage
            
            name="name"
            component="span"
          />
      </div>

      <div>
        <label htmlFor="numberId" >Number</label>
        <Field  name ="number" id={numberId} />
        <ErrorMessage
            
            name="number"
            component="span"
          />
      </div>
     
      <button >Add Contact</button>
    </Form>

    </Formik>
       
     )
   }
