import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { number } from "yup/lib/locale";

const formSteps: string[] = [
  "Personal Details",
  "Income",
  "Debt",
  "Fixed Expenses",
  "Variable Expenses",
  "Emergency Fund",
  "Goals",
];

type SidebarProps = {
  selectedIndex: number,
}

const Sidebar = ({selectedIndex}: SidebarProps) => {
  //keep track of steps to know which form to show and which link should be highlighted
  return (
    <div className="w-56 border h-96">
      {formSteps.map((el, index) => (
        <button key={index}
          className="border p-3 pointer flex items-center gap-2 w-full" >
          {selectedIndex === index && <SlArrowRight className="text-blue-700" />}
          {el}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
