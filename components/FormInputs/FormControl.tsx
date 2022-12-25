import React from "react";
import IncomeForm from "../Forms/IncomeForm";
import PersonalDetailsForm from "../Forms/PersonalDetailsForm";

interface FormControlProps {
  index: number;
}

function FormControl({ index }: FormControlProps) {
  switch (index) {
    case 0:
      return <PersonalDetailsForm />;
    case 1: 
      return <IncomeForm />
    default:
      return null;
  }
}

export default FormControl;
