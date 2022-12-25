import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { number } from 'yup/lib/locale';
import DollarInput from '../FormInputs/DollarInput';

interface Values {
  paycheck1: number;
  paycheck2?: number;
}

function IncomeForm() {
  const initialValues = {
    paycheck1: 0,
    paycheck2: 0,
  };

  const validationSchema = Yup.object({
    paycheck1: Yup.number().positive().required('Required'),
    paycheck2: Yup.number().positive().required('Required'),
  });

  const onSubmit = (values: Values) => { };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        formik => {
          return (
            <Form>
              <DollarInput name="paycheck1" label="Paycheck 1"/>
              <DollarInput name="paycheck2" label="Paycheck 2"/>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default IncomeForm