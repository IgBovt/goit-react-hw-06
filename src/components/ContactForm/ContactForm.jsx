import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IoIosPersonAdd } from 'react-icons/io';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Fill this field'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Формат повинен бути "111-11-11"')
    .required('Fill this field'),
});
const initialValues = { name: '', number: '' };

export default function ContactForm({ onAdd }) {
  const nameID = useId();
  const numberID = useId();

  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div className={css.container}>
            <label className={css.label} htmlFor={nameID}>
              Name:
            </label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameID}
            ></Field>
            <div className={css.error}>
              <ErrorMessage name="name" as="span" />
            </div>
          </div>

          <div className={css.container}>
            <label className={css.label} htmlFor={numberID}>
              Number:
            </label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={numberID}
            ></Field>
            <div className={css.error}>
              <ErrorMessage name="number" as="span" />
            </div>
          </div>
          <button type="submit" className={css.btn}>
            <IoIosPersonAdd className={css.icon} size={20} />
            Add contact
          </button>
        </Form>
      </Formik>
      <hr className={css.line} />
    </>
  );
}
