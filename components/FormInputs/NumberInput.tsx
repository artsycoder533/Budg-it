import React from 'react'
import CurrencyInput from 'react-currency-input-field'
import { Field, ErrorMessage } from "formik";

type NumberInputProps = {
  label: string;
  name: string;
}

const NumberInput = ({ label, name }: NumberInputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="pb-1">
        {label}:
      </label>
      <Field as={CurrencyInput} name={name} decimalsLimit={2} prefix="$" className="border p-2 text-base "/>
    </div>
  );
}

export default NumberInput