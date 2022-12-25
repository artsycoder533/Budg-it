import React from "react";
import IncomeForm from "../Forms/IncomeForm";
import PersonalDetailsForm from "../Forms/PersonalDetailsForm";

interface FormControlProps {
  index: number;
  nextForm: () => void,
  previousForm: () => void,
}

function FormControl(props: FormControlProps) {
  const {index, ...rest} = props
  switch (index) {
    case 0:
      return <PersonalDetailsForm {...props} />;
    case 1: 
      return <IncomeForm {...props} />
    default:
      return null;
  }
}

export default FormControl;
