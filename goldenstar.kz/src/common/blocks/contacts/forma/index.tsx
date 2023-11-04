import React, { useState } from 'react';
import { Formik } from 'formik';
import { Modal } from 'common/components/modal';

interface FormContactProps {
  data: {
    title: string;
    description: string;
    fields: [
      {
        title: string;
        errors: string[];
      },
    ];
    submitButton: string;
    modal: {
      title: string;
      description: string;
      closeButton: string;
    };
  };
}

export function FormContact(props: FormContactProps) {
  const { title, description, fields, submitButton, modal } = props.data;
  const [nameField, phoneField, emailField, messageField] = fields;
  const initialValues = { email: '', name: '', phone: '', message: '' };
  const [isShownModal, setIsShownModal] = useState(false);

  const labelClass = 'flex flex-col font-bold text-xl gap-2 iMac:text-4xl';
  const inputClass =
    'p-2 font-normal border-2 iMac:mt-2 iMac:text-2xl text-base border-gray-200 rounded-lg ';
  const tipClass = 'font-normal text-red-400 text-sm iMac:text-lg';

  return (
    <div className="flex flex-col items-center gap-20 bg-[#f8f8f8] py-16">
      <h2 className="text-gold iMac:text-6xl text-4xl font-bold">{title}</h2>
      <p className="iMac:text-2xl -mt-16 text-xl text-gray-500">
        {description}
      </p>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = emailField.errors[0];
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = emailField.errors[1];
          }

          if (!values.phone) {
            errors.phone = phoneField.errors[0];
          } else if (
            !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(
              values.phone
            )
          ) {
            errors.phone = phoneField.errors[1];
          }

          if (!values.message) {
            errors.message = messageField.errors[0];
          }

          if (!values.name) {
            errors.name = nameField.errors[0];
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            const data = {
              name: values.name,
              email: values.email,
              message: values.message,
              phone: values.phone,
            };
            handleSubmit(data);
            setSubmitting(false);
            resetForm();
            setIsShownModal(true);
          }, 400);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <>
            {isShownModal && (
              <Modal data={modal} onClick={() => setIsShownModal(false)} />
            )}
            <form
              onSubmit={handleSubmit}
              className="iMac:w-[50rem] mx-auto flex w-[35rem] flex-col gap-10">
              <label className={labelClass}>
                {nameField.title}
                <input
                  className={inputClass}
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <div className={tipClass}>
                  {errors.name && touched.name && errors.name}
                </div>
              </label>
              <label className={labelClass}>
                {phoneField.title}
                <input
                  className={inputClass}
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                <div className={tipClass}>
                  {errors.phone && touched.phone && errors.phone}
                </div>
              </label>
              <label className={labelClass}>
                {emailField.title}
                <input
                  className={inputClass}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <div className={tipClass}>
                  {errors.email && touched.email && errors.email}
                </div>
              </label>
              <label className={labelClass}>
                {messageField.title}
                <textarea
                  className={`${inputClass} min-h-[10rem] w-full`}
                  name="message"
                  id=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}></textarea>
                <div className={tipClass}>
                  {errors.message && touched.message && errors.message}
                </div>
              </label>
              <button
                className="bg-gold iMac:text-2xl mx-auto cursor-pointer rounded-lg px-20 py-3 text-white "
                type="submit"
                disabled={isSubmitting}>
                {submitButton}
              </button>
            </form>
          </>
        )}
      </Formik>
    </div>
  );
}

function handleSubmit(data: {
  name: string;
  email: string;
  message: string;
  phone: string;
}) {
  const { name, email, message, phone } = data;
  // form.classList.add('sending');
  if (email && name) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('phone', phone);

    fetch('https://test.goldenstar.kz/contacts.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        // form.reset();
        // form.classList.remove('sending');
      })
      .catch((error) => {
        // form.classList.remove('sending');
        // form.reset();
      });
  }
}
