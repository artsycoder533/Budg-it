import React from 'react'

const formSteps: string[] = ["Personal Details", "Income", "Debt", "Fixed Expenses", "Variable Expenses", "Emergency Fund", "Goals" ]

const Sidebar = () => {
  return (
    <div className="w-48 border h-96">
      {formSteps.map(el => {
        return <div>{el}</div>
      })}
    </div>
  )
};

export default Sidebar;