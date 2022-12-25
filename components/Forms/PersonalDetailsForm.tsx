import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../FormInputs/TextInput";
import DateInput from "../FormInputs/DateInput";
import NumberInput from "../FormInputs/NumberInput";
import ButtonControls from "../ButtonControls";

type Values = {
  dob: string;
  retirementAge: string;
}

interface FormProps {
  nextForm: () => void;
  previousForm: () => void;
  index: number
}

const PersonalDetailsForm = ({index, nextForm, previousForm}: FormProps) => {
  const initialValues = {
    dob: "",
    retirementAge: "",
  };

  const validationSchema = Yup.object({
    dob: Yup.string().required("Required"),
    retirementAge: Yup.number().positive().integer().required('Required'),
  });

  const onSubmit = (values: Values) => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form className="border p-4 flex flex-col gap-4 w-96">
            <h1>Personal Details</h1>
            <DateInput name="dob" label="Date of Birth" />
            <NumberInput
              name="retirementAge"
              label="Expected age at retirement"
            />
            <ButtonControls previousForm={previousForm} nextForm={nextForm} index={index} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default PersonalDetailsForm;
