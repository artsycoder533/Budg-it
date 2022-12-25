import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { number } from "yup/lib/locale";
import DollarInput from "../FormInputs/DollarInput";
import ButtonControls from "../ButtonControls";

type Values = {
  paycheck1: number;
  paycheck2?: number;
};

interface FormProps {
  nextForm: () => void;
  previousForm: () => void;
  index: number;
}

function IncomeForm({ index, nextForm, previousForm }: FormProps) {
  const initialValues = {
    paycheck1: 0,
    paycheck2: 0,
  };

  const validationSchema = Yup.object({
    paycheck1: Yup.number().positive().required("Required"),
    paycheck2: Yup.number().positive().required("Required"),
  });

  const onSubmit = (values: Values) => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {(formik) => {
        // figure out how to manually validate when pressing next button!
        return (
          <Form>
            <DollarInput name="paycheck1" label="Paycheck 1" />
            <DollarInput name="paycheck2" label="Paycheck 2" />
            <ButtonControls
              previousForm={previousForm}
              nextForm={nextForm}
              index={index}
              status={!formik.isValid}
            />
          </Form>
        );
      }}
    </Formik>
  );
}

export default IncomeForm;
