import React, { useEffect, useState } from "react";
import { auth } from "../utilities/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import Form from "../components/Form";

const Assessment = () => {
  const [user, loading] = useAuthState(auth);
  const [assessmentDone, setAssessmentDone] = useState<boolean>(false)
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, [user]);

  return (
    <div
      className="
    flex w-5/6 mx-auto justify-center gap-8 mt-8">
      {assessmentDone && <Sidebar />}
      <div className="w-96 border flex justify-center">
        {!assessmentDone ? 
          <button
            className="rounded-full bg-blue-700 text-white px-5 py-3 text-lg"
            onClick={() => setAssessmentDone(true)}>
            Start Assessment
          </button> : <Form />
        }
      </div>
    </div>
  );
};

export default Assessment;
