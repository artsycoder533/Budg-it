import { FormikErrors } from 'formik';
import React from 'react'

type Values = {
  dob: string;
  retirementAge: string;
};

interface ButtonControlProps {
  index: number,
  previousForm: () => void,
  nextForm: () => void,
  status: boolean
}

function ButtonControls({index, previousForm, nextForm, status}: ButtonControlProps) {
  return (
    <div className="flex justify-between mt-6">
      <button
        type="button"
        disabled={index < 1}
        className="rounded-md p-2 bg-blue-700 text-white"
        onClick={previousForm}>
        Previous
      </button>
      <button
        disabled={status}
        type="button"
        className="border-blue-700 rounded-md p-2  bg-blue-700 text-white"
        onClick={() => {
         
        }}>
        Next
      </button>
    </div>
  );
}

export default ButtonControls