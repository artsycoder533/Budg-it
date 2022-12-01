import React from 'react'

type TextInputProps = {
  label: string;
  name: string;
}

const TextInput = ({label, name}: TextInputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="pb-1">{label}:</label>
      <input type="text" name={name} id={name} className="border p-2 text-base"/>
    </div>
  )
}

export default TextInput