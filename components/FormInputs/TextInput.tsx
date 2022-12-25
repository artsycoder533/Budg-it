import React from 'react'
import { Field, ErrorMessage } from 'formik'

interface TextInputProps {
  label: string;
  name: string;
}

const TextInput = ({label, name}: TextInputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="pb-1">
        {label}:
      </label>
      <Field
        type="text"
        name={name}
        id={name}
        className="border p-2 text-base"
      />
      <ErrorMessage name={name} component="p" className="text-red-500" />
    </div>
  );
}

export default TextInput