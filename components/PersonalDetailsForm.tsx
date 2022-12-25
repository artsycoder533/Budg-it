import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "./FormInputs/TextInput";
import DateInput from "./FormInputs/DateInput";

interface Values {
  dob: string;
  retirementAge: string;
  paycheck1: string;
  paycheck2: string;
}

const PersonalDetailsForm = () => {
  const initialValues = {
    dob: "",
    retirementAge: "",
    paycheck1: "",
    paycheck2: "",
  };

  const validationSchema = Yup.object({});

  const onSubmit = (values: Values) => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {
        formik => {
          return (
            <Form className="border p-4 flex flex-col gap-4 w-96">
              <h1>Personal Details</h1>
              <DateInput name="dob" label="Date of Birth" />
            </Form>
          );
        }
      }
      
    </Formik>
  );
};

export default PersonalDetailsForm;
