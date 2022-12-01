import React from "react";

type DateInputProps = {
  label: string;
  name: string;
};

const DateInput = ({ label, name }: DateInputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input type="date" name={name} className="border p-2"/>
    </div>
  );
};

export default DateInput;
