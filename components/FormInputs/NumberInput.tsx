import React from 'react'
import { Field, ErrorMessage } from 'formik'

interface NumberInputProps {
  label: string;
  name: string;
}

function NumberInput({label, name}: NumberInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="pb-1">
        {label}:
      </label>
      <Field
        type="number"
        name={name}
        id={name}
        className="border p-2 text-base"
      />
      <ErrorMessage name={name} component="p" className="text-red-500" />
    </div>
  );
}

export default NumberInput