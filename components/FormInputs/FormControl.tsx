import React from 'react'
import PersonalDetailsForm from '../PersonalDetailsForm';

interface FormControlProps {
  index: number
}

function FormControl({index}: FormControlProps) {

  switch (index) {
    case 0:
      return <PersonalDetailsForm/>
    default:
      return null;
  }
}

export default FormControl