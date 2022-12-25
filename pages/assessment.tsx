import React, { useEffect, useState } from "react";
import { auth } from "../utilities/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import PersonalDetailsForm from "../components/Forms/PersonalDetailsForm";
import FormControl from "../components/FormInputs/FormControl";
PersonalDetailsForm;

const Assessment = () => {
  const [user, loading] = useAuthState(auth);
  const [assessmentDone, setAssessmentDone] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  // control which form is displayed
  const nextForm = () => {
    setIndex(index + 1);
  };

  const previousForm = () => {
    setIndex(index - 1);
  };

  return (
    <div
      className="
    flex w-5/6 mx-auto justify-center gap-8 mt-8">
      {assessmentDone && <Sidebar />}
      <div className=" flex justify-center flex-col p-8 border-red-600">
        {!assessmentDone ? (
          <button
            className="rounded-full bg-blue-700 text-white px-5 py-3 text-lg"
            onClick={() => setAssessmentDone(true)}>
            Start Assessment
          </button>
        ) : (
          <div>
              <FormControl index={index} nextForm={nextForm} previousForm={previousForm} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessment;
