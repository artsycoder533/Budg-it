import React from "react";
import { Field, ErrorMessage } from 'formik'

type DateInputProps = {
  label: string;
  name: string;
};

const DateInput = ({ label, name }: DateInputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <Field type="date" name={name} id={name} className="border p-2" />
      <ErrorMessage name={name} component="p" className="text-red-500" />
    </div>
  );
};

export default DateInput;
