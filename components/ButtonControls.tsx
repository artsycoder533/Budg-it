import React from 'react'

interface ButtonControlProps {
  index: number,
  previousForm: () => void,
  nextForm: () => void,
}

function ButtonControls({index, previousForm, nextForm}: ButtonControlProps) {
  return (
    <div className="flex justify-between mt-6">
      <button
        type="button"
        disabled={index < 1}
        className="border border-blue-700 rounded-md p-2"
        onClick={previousForm}>
        Previous
      </button>
      <button
        type="button"
        className="border border-blue-700 rounded-md p-2"
        onClick={nextForm}>
        Next
      </button>
    </div>
  );
}

export default ButtonControls